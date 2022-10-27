package stackoverflow.pre_project.question.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import stackoverflow.pre_project.question.dto.QuestionDto;
import stackoverflow.pre_project.question.entity.Question;
import stackoverflow.pre_project.question.mapper.QuestionMapper;
import stackoverflow.pre_project.question.service.QuestionService;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@RestController
@RequestMapping("/questions")
@Slf4j
@RequiredArgsConstructor
public class QuestionController {

    private final QuestionService questionService;
    private final QuestionMapper mapper;

    @PostMapping
    public void postQuestion(@RequestBody QuestionDto.Post post,
                             HttpServletResponse response) throws IOException {
        Question question = mapper.questionPostToQuestion(post);
        Question createdQuestion = questionService.createQuestion(question);

        Long questionId = createdQuestion.getId();
        response.sendRedirect("/questions/" + questionId);
    }

    @PatchMapping("/{question-id}")
    public void patchQuestion(@PathVariable("question-id") Long questionId,
                              @RequestBody QuestionDto.Patch patch,
                              HttpServletResponse response) throws IOException {
        Question question = mapper.questionPatchToQuestion(patch);
        Question updateQuestion = questionService.updateQuestion(questionId, question);

        response.sendRedirect("/questions/" + questionId);
    }

    @GetMapping("/{question-id}")
    public ResponseEntity getQuestion(@PathVariable("question-id") Long questionId) {
        Question question = questionService.findVerifiedQuestion(questionId);
        QuestionDto.Response response = mapper.questionToQuestionResponse(question);

        return new ResponseEntity(response, HttpStatus.OK);
    }

    @DeleteMapping("/{question-id}")
    public ResponseEntity deleteQuestion(@PathVariable("question-id") Long questionId) {
        questionService.deleteQuestion(questionId);

        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}
