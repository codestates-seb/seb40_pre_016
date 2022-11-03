package stackoverflow.pre_project.question.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import stackoverflow.pre_project.config.auth.CustomUserDetails;
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
                             @AuthenticationPrincipal CustomUserDetails customUserDetails,
                             HttpServletResponse response) throws IOException {
        request.setUser(customUserDetails.getUser());
        Question question = mapper.questionRequestToQuestion(request);
        Question createdQuestion = questionService.createQuestion(question);

        Long questionId = createdQuestion.getId();
        response.sendRedirect("/api/questions/" + questionId);
    }

    @PatchMapping("/{question-id}")
    public void patchQuestion(@PathVariable("question-id") Long questionId,
                              @AuthenticationPrincipal CustomUserDetails customUserDetails,
                              @RequestBody QuestionDto.Request request,
                              HttpServletResponse response) throws IOException {
        request.setUser(customUserDetails.getUser());

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
    public ResponseEntity getQuestions(@PageableDefault(size = 30, sort = "createdAt", direction = Sort.Direction.DESC) Pageable pageable) {

        Page<Question> pageQuestions = questionService.findQuestions(pageable);
        List<Question> questions = pageQuestions.getContent();
        List<QuestionDto.Response> responses = mapper.questionsToQuestionResponseDtos(questions);

        return new ResponseEntity(MultiResponseDto.of(responses, pageQuestions), HttpStatus.OK);
    }

    @GetMapping("/users/{user_id}")
    public ResponseEntity getQuestionsByUser(@PageableDefault(size = 30, sort = "createdAt", direction = Sort.Direction.DESC) Pageable pageable,
                                             @PathVariable("user_id") Long userId) {

        Page<Question> pageQuestions = questionService.findQuestionsByUser(userId, pageable);
        List<Question> questions = pageQuestions.getContent();
        List<QuestionDto.Response> responses = mapper.questionsToQuestionResponseDtos(questions);

        return new ResponseEntity(MultiResponseDto.of(responses, pageQuestions), HttpStatus.OK);
    }

    @GetMapping("/tags/{tagName}")
    public ResponseEntity getQuestionsByTag(@PageableDefault(size = 30, sort = "createdAt", direction = Sort.Direction.DESC) Pageable pageable,
                                            @PathVariable String tagName) {

        Page<Question> pageQuestions = questionService.findQuestionsByTag(tagName, pageable);
        List<Question> questions = pageQuestions.getContent();
        List<QuestionDto.Response> responses = mapper.questionsToQuestionResponseDtos(questions);

        return new ResponseEntity(MultiResponseDto.of(responses, pageQuestions), HttpStatus.OK);
    }

    @DeleteMapping("/{question-id}")
    public void deleteQuestion(@PathVariable("question-id") Long questionId,
                               @AuthenticationPrincipal CustomUserDetails customUserDetails,
                               HttpServletResponse response) throws IOException {

        questionService.deleteQuestion(questionId, customUserDetails.getUser());

        response.sendRedirect("/api/questions");
    }
}
