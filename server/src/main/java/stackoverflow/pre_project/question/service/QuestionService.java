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
import java.util.List;
import java.util.Optional;

@Service
@Slf4j
@Transactional
@RequiredArgsConstructor
public class QuestionService {

    private final QuestionRepository questionRepository;
    private final TagService tagService;
    private final EntityManager em;

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
//
//        findQuestion.getQuestionTags().stream()
//                .forEach(questionTag -> {
//                    Tag tag = questionTag.getTag();
//                    tag.setQuestionCount(tag.getQuestionCount() - 1);
//                    questionRepository.deleteQuestionTag(questionTag.getId());
//                });
//
//        findQuestion.getQuestionTags().clear();
//
//        question.getQuestionTags().stream()
//                .forEach(questionTag -> {
//                    Tag tag = tagService.findTag(questionTag.getTag().getName());
//                    tag.setQuestionCount(tag.getQuestionCount() + 1);
//                    questionTag.setTag(tag);
//                    findQuestion.getQuestionTags().add(questionTag);
//                });
//
//        findQuestion.setTitle(question.getTitle());
//        findQuestion.setContent(question.getContent());

        return findQuestion;
    }

    public Question findQuestion(Long questionId) {
        return findVerifiedQuestion(questionId);
    }

    public Page<Question> findQuestions(int page, String sortBy) {
        return questionRepository.findAll(PageRequest.of(page, 10, Sort.by(sortBy)));
    }

    public void deleteQuestion(Long questionId) {
        Question question = findVerifiedQuestion(questionId);

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
