package stackoverflow.pre_project.question.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import stackoverflow.pre_project.dto.MultiResponseDto;
import stackoverflow.pre_project.question.dto.QuestionDto;
import stackoverflow.pre_project.question.entity.Question;
import stackoverflow.pre_project.question.mapper.QuestionMapper;
import stackoverflow.pre_project.question.service.QuestionService;

import javax.servlet.http.HttpServletResponse;
import javax.validation.constraints.Positive;
import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/questions")
@Slf4j
@RequiredArgsConstructor
public class QuestionController {

    private final QuestionService questionService;
    private final QuestionMapper mapper;

    @PostMapping
    public void postQuestion(@RequestBody QuestionDto.Request request,
                             HttpServletResponse response) throws IOException {
        Question question = mapper.questionRequestToQuestion(request);
        Question createdQuestion = questionService.createQuestion(question);

        Long questionId = createdQuestion.getId();
        response.sendRedirect("/api/questions/" + questionId);
    }

    @PatchMapping("/{question-id}")
    public void patchQuestion(@PathVariable("question-id") Long questionId,
                              @RequestBody QuestionDto.Request request,
                              HttpServletResponse response) throws IOException {
        Question question = mapper.questionRequestToQuestion(request);
        Question updateQuestion = questionService.updateQuestion(questionId, question);

        response.sendRedirect("/api/questions/" + questionId);
    }

    @GetMapping("/{question-id}")
    public ResponseEntity getQuestion(@PathVariable("question-id") Long questionId) {
        Question question = questionService.findQuestion(questionId);
        QuestionDto.Response response = mapper.questionToQuestionResponse(question);

        return new ResponseEntity(response, HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getQuestions(@RequestParam @Positive int page,
                                       @RequestParam String sortBy,
                                       @RequestParam(required = false, defaultValue = "false") boolean desc) {

        Page<Question> pageQuestions = questionService.findQuestions(--page, sortBy, desc);
        List<Question> questions = pageQuestions.getContent();
        List<QuestionDto.Response> responses = mapper.questionsToQuestionResponseDtos(questions);
        System.out.println(responses.size());

        return new ResponseEntity(MultiResponseDto.of(responses, pageQuestions), HttpStatus.OK);
    }

    @DeleteMapping("/{question-id}")
    public void deleteQuestion(@PathVariable("question-id") Long questionId,
                               HttpServletResponse response) throws IOException {
        questionService.deleteQuestion(questionId);

        response.sendRedirect("/api/questions?page=1&sortBy=createdAt&desc=true");
    }
}
