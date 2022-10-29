package stackoverflow.pre_project.question.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import stackoverflow.pre_project.exception.BusinessLogicException;
import stackoverflow.pre_project.exception.ExceptionCode;
import stackoverflow.pre_project.question.entity.Question;
import stackoverflow.pre_project.question.repository.QuestionRepository;
import stackoverflow.pre_project.tag.entity.QuestionTag;
import stackoverflow.pre_project.tag.entity.Tag;
import stackoverflow.pre_project.tag.service.TagService;

import javax.persistence.EntityManager;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Slf4j
@Transactional
@RequiredArgsConstructor
public class QuestionService {

    private final QuestionRepository questionRepository;
    private final TagService tagService;

    public Question createQuestion(Question question) {

        question.getQuestionTags().stream()
                .forEach(questionTag -> {
                    Tag tag = tagService.findTag(questionTag.getTag().getName());
                    tag.setQuestionCount(tag.getQuestionCount() + 1);
                    questionTag.setTag(tag);
                });

        Question savedQuestion = questionRepository.save(question);

        return savedQuestion;
    }

    public Question updateQuestion(Long questionId, Question question) {
        Question findQuestion = findVerifiedQuestion(questionId);
        List<QuestionTag> questionTags = findQuestion.getQuestionTags();
        List<Tag> tags = questionTags.stream().map(questionTag -> questionTag.getTag()).collect(Collectors.toList());

        questionTags.stream().filter(questionTag -> !question.getQuestionTags().contains(questionTag))
                .forEach(questionTag -> {
                    Tag tag = tagService.findTag(questionTag.getTag().getName());
                    tag.setQuestionCount(tag.getQuestionCount() - 1);
                });

        questionTags.removeIf(questionTag -> !question.getQuestionTags().contains(questionTag));

        tags.stream()
                .filter(tag -> tag.getQuestionCount()==0)
                .forEach(tag -> tagService.deleteTag(tag.getId()));

        question.getQuestionTags().stream()
                .filter(questionTag -> !questionTags.contains(questionTag))
                .forEach(questionTag -> {
                    Tag tag = tagService.findTag(questionTag.getTag().getName());
                    tag.setQuestionCount(tag.getQuestionCount() + 1);
                    questionTag.setTag(tag);
                    findQuestion.addQuestionTag(questionTag);
                });

        findQuestion.setTitle(question.getTitle());
        findQuestion.setContent(question.getContent());

        questionRepository.save(findQuestion);

        return findQuestion;
    }

    public Question findQuestion(Long questionId) {
        Question findQuestion = findVerifiedQuestion(questionId);
        findQuestion.setViewCount(findQuestion.getViewCount() + 1);
        return findQuestion;
    }

    public Page<Question> findQuestions(int page, String sortBy, boolean desc) {
        if (desc) return questionRepository.findAll(PageRequest.of(page, 10, Sort.by(sortBy).descending()));
        return questionRepository.findAll(PageRequest.of(page, 10, Sort.by(sortBy)));
    }

    public void deleteQuestion(Long questionId) {
        Question question = findVerifiedQuestion(questionId);
        List<QuestionTag> questionTags = question.getQuestionTags();
        List<Tag> tags = questionTags.stream().map(questionTag -> questionTag.getTag()).collect(Collectors.toList());

        questionTags.stream()
                .forEach(questionTag -> {
                    Tag tag = tagService.findTag(questionTag.getTag().getName());
                    tag.setQuestionCount(tag.getQuestionCount() - 1);
                });

        tags.stream()
                .filter(tag -> tag.getQuestionCount()==0)
                .forEach(tag -> tagService.deleteTag(tag.getId()));

        if (question.getAnswers().size() > 0) {
            throw new RuntimeException();
        }

        questionRepository.delete(question);
    }

    public Question findVerifiedQuestion(Long questionId) {
        Optional<Question> question = questionRepository.findById(questionId);
        Question findQuestion = question.orElseThrow(() -> new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));

        return findQuestion;
    }
}
