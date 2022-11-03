package stackoverflow.pre_project.question.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import stackoverflow.pre_project.answer.repository.AnswerRepository;
import stackoverflow.pre_project.exception.BusinessLogicException;
import stackoverflow.pre_project.exception.ExceptionCode;
import stackoverflow.pre_project.question.entity.Question;
import stackoverflow.pre_project.question.repository.QuestionRepository;
import stackoverflow.pre_project.tag.entity.QuestionTag;
import stackoverflow.pre_project.tag.entity.Tag;
import stackoverflow.pre_project.tag.service.TagService;
import stackoverflow.pre_project.user.entity.User;

import java.time.LocalDateTime;
import java.util.LinkedList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Slf4j
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class QuestionService {

    private final QuestionRepository questionRepository;
    private final AnswerRepository answerRepository;
    private final TagService tagService;

    @Transactional
    public Question createQuestion(Question question) {

        question.setCreatedAt(LocalDateTime.now());
        question.setModifiedAt(question.getCreatedAt());

        setTags(question);

        Question savedQuestion = questionRepository.save(question);

        return savedQuestion;
    }

    @Transactional
    public Question updateQuestion(Long questionId, Question question) {

        Question findQuestion = findVerifiedQuestion(questionId);

        if (findQuestion.getUser().getId().equals(question.getUser().getId())) {
            throw new RuntimeException();
        }

        List<QuestionTag> questionTags = findQuestion.getQuestionTags();
        List<String> oldTagNames = getTagNames(questionTags);
        List<String> newTagNames = getTagNames(question.getQuestionTags());

        deleteOldTags(questionTags, newTagNames);
        addNewTags(question, findQuestion, oldTagNames);

        findQuestion.setTitle(question.getTitle());
        findQuestion.setContent(question.getContent());
        findQuestion.setModifiedAt(LocalDateTime.now());

        return findQuestion;
    }

    public Question findQuestion(Long questionId) {
        Question findQuestion = findVerifiedQuestion(questionId);
        findQuestion.setViewCount(findQuestion.getViewCount() + 1);
        return findQuestion;
    }

    public Page<Question> findQuestions(Pageable pageable) {
        return questionRepository.findAll(pageable);
    }

    public Page<Question> findQuestionsByUser(Long userId, Pageable pageable) {
        return questionRepository.findAllByUser_Id(userId, pageable);
    }

    public Page<Question> findQuestionsByTag(String tagName, Pageable pageable) {
        Tag tag = tagService.findVerifiedTag(tagName);

        if (tag == null) {
            return new PageImpl<>(new LinkedList<>(), pageable, 0);
        }

        return new PageImpl<>(tag.getQuestionTags().stream()
                .map(questionTag -> questionTag.getQuestion())
                .collect(Collectors.toList()), pageable, tag.getQuestionCount());
    }

    @Transactional
    public void deleteQuestion(Long questionId, User user) {
        Question question = findVerifiedQuestion(questionId);

        if (question.getUser().getId().equals(user.getId())) {
            throw new RuntimeException();
        }

        if (question.getAnswers().size() > 0) {
            throw new RuntimeException();
        }

        List<QuestionTag> questionTags = question.getQuestionTags();
        questionTags.stream()
                .forEach(questionTag -> {
                    Tag tag = questionTag.getTag();
                    tag.deleteQuestionTag(questionTag);
                    if (tag.getQuestionCount() == 0) tagService.deleteTag(tag.getId());
                });

        questionRepository.delete(question);
    }

    public Question findVerifiedQuestion(Long questionId) {
        Optional<Question> question = questionRepository.findById(questionId);
        Question findQuestion = question.orElseThrow(() -> new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));

        return findQuestion;
    }

    private void setTags(Question question) {
        question.getQuestionTags().stream()
                .forEach(questionTag -> {
                    Tag tag = tagService.findTag(questionTag.getTag().getName());
                    tag.addQuestionTag(questionTag);
                });
    }

    private List<String> getTagNames(List<QuestionTag> questionTags) {
        List<String> oldTagNames = questionTags.stream()
                .map(questionTag -> questionTag.getTag().getName())
                .collect(Collectors.toList());
        return oldTagNames;
    }

    private void addNewTags(Question question, Question findQuestion, List<String> oldTagNames) {
        question.getQuestionTags().stream()
                .filter(questionTag -> !oldTagNames.contains(questionTag.getTag().getName()))
                .forEach(questionTag -> {
                    Tag tag = tagService.findTag(questionTag.getTag().getName());
                    questionTag.addTag(tag);
                    questionTag.addQuestion(findQuestion);
                });
    }

    private void deleteOldTags(List<QuestionTag> questionTags, List<String> newTagNames) {
        questionTags.stream()
                .filter(questionTag -> !newTagNames.contains(questionTag.getTag().getName()))
                .forEach(questionTag -> {
                    Tag tag = questionTag.getTag();
                    tag.deleteQuestionTag(questionTag);
                    if (tag.getQuestionCount() == 0) tagService.deleteTag(tag.getId());
                });
        questionTags.removeIf(questionTag -> !newTagNames.contains(questionTag.getTag().getName()));
    }
}
