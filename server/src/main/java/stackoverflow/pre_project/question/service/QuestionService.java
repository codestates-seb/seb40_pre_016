package stackoverflow.pre_project.question.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import stackoverflow.pre_project.exception.BusinessLogicException;
import stackoverflow.pre_project.exception.ExceptionCode;
import stackoverflow.pre_project.question.entity.Question;
import stackoverflow.pre_project.question.repository.QuestionRepository;

import java.util.Optional;

@Service
@Slf4j
@Transactional
@RequiredArgsConstructor
public class QuestionService {

    private final QuestionRepository questionRepository;

    public Question createQuestion(Question question) {
        Question savedQuestion = questionRepository.save(question);
        System.out.println(savedQuestion.getModifiedAt());

        return savedQuestion;
    }

    public Question updateQuestion(Long questionId, Question question) {
        Question findQuestion = findVerifiedQuestion(questionId);

        findQuestion.setTitle(question.getTitle());
        findQuestion.setContent(question.getContent());

        System.out.println(findQuestion.getModifiedAt());

        return findQuestion;
    }

    public void deleteQuestion(Long questionId) {
        Question question = findVerifiedQuestion(questionId);

        if (question.getAnswers().size() > 0) {
            throw new RuntimeException();
        }

        questionRepository.delete(question);
    }
    public Question findQuestion(Long questionId) {
        return findVerifiedQuestion(questionId);
    }

    public Question findVerifiedQuestion(Long questionId) {
        Optional<Question> question = questionRepository.findById(questionId);
        Question findQuestion = question.orElseThrow(() -> new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));

        return findQuestion;
    }
}
