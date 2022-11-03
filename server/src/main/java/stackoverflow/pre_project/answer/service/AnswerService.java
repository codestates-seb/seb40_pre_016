package stackoverflow.pre_project.answer.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import stackoverflow.pre_project.answer.entity.Answer;
import stackoverflow.pre_project.answer.repository.AnswerRepository;
import stackoverflow.pre_project.exception.BusinessLogicException;
import stackoverflow.pre_project.exception.ExceptionCode;
import stackoverflow.pre_project.question.entity.Question;
import stackoverflow.pre_project.question.service.QuestionService;
import stackoverflow.pre_project.user.entity.User;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
@Slf4j
@Transactional
@RequiredArgsConstructor
public class AnswerService {

    private final AnswerRepository answerRepository;
    private final QuestionService questionService;

    public Answer createAnswer(Long questionId, Answer answer) {
        answer.setCreatedAt(LocalDateTime.now());
        answer.setModifiedAt(answer.getCreatedAt());

        Question question = questionService.findVerifiedQuestion(questionId);

        answer.addQuestion(question);
        Answer savedAnswer = answerRepository.save(answer);

        return savedAnswer;
    }

    public Answer updateAnswer(Long answerId, Answer answer) {
        Answer findAnswer = findVerifiedAnswer(answerId);

        if (findAnswer.getUser().getId() != answer.getUser().getId()) {
            throw new RuntimeException();
        }

        findAnswer.setContent(answer.getContent());
        findAnswer.setModifiedAt(LocalDateTime.now());

        return findAnswer;
    }

    public void delete(Long answerId, User user) {
        Answer answer = findVerifiedAnswer(answerId);

        if (answer.getUser().getId() != user.getId()) {
            throw new RuntimeException();
        }

        answerRepository.delete(answer);
    }

    @Transactional(readOnly = true)
    private Answer findVerifiedAnswer(Long answerId) {
        Optional<Answer> answer = answerRepository.findById(answerId);
        Answer findAnswer = answer.orElseThrow(() -> new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND));

        return findAnswer;
    }
}
