package stackoverflow.pre_project.answer.service;

import org.springframework.stereotype.Service;
import stackoverflow.pre_project.answer.entity.Answer;
import stackoverflow.pre_project.answer.repository.AnswerRepository;
import stackoverflow.pre_project.question.entity.Question;
import stackoverflow.pre_project.question.service.QuestionService;

@Service
public class AnswerService {

    private final AnswerRepository answerRepository;
    private final QuestionService questionService;

    public AnswerService(AnswerRepository answerRepository, QuestionService questionService) {
        this.answerRepository = answerRepository;
        this.questionService = questionService;
    }

    public Answer createAnswer(Long questionId, Answer answer) {
        Question question = questionService.findVerifiedQuestion(questionId);

        answer.addQuestion(question);
        Answer savedAnswer = answerRepository.save(answer);

        return savedAnswer;
    }
}
