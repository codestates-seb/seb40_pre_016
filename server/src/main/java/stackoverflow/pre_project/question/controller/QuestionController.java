package stackoverflow.pre_project.question.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import stackoverflow.pre_project.question.dto.QuestionDto;
import stackoverflow.pre_project.question.entity.Question;
import stackoverflow.pre_project.question.mapper.QuestionMapper;
import stackoverflow.pre_project.question.service.QuestionService;

@RestController
@RequestMapping("/questions")
@Slf4j
public class QuestionController {

    private final QuestionService questionService;
    private final QuestionMapper mapper;

    public QuestionController(QuestionService questionService, QuestionMapper mapper) {
        this.questionService = questionService;
        this.mapper = mapper;
    }

    @PostMapping
    public ResponseEntity postQuestion(@RequestBody QuestionDto.Post post) {
        Question question = mapper.questionPostToQuestion(post);

        Question createdQuestion = questionService.createQuestion(question);
        QuestionDto.Response response = mapper.questionToQuestionResponse(createdQuestion);

        return new ResponseEntity(response, HttpStatus.CREATED);
    }
}
