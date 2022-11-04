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

import java.util.List;

@RestController
@RequestMapping("/api/questions")
@Slf4j
@RequiredArgsConstructor
public class QuestionController {

    private final QuestionService questionService;
    private final QuestionMapper mapper;

    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
    public String postQuestion(@RequestBody QuestionDto.Request request,
                               @AuthenticationPrincipal CustomUserDetails customUserDetails) {
        request.setUser(customUserDetails.getUser());
        Question question = mapper.questionRequestToQuestion(request);
        Question createdQuestion = questionService.createQuestion(question);

        return String.valueOf(createdQuestion.getId());
    }

    @PatchMapping("/{question-id}")
    public String patchQuestion(@PathVariable("question-id") Long questionId,
                                @AuthenticationPrincipal CustomUserDetails customUserDetails,
                                @RequestBody QuestionDto.Request request) {
        request.setUser(customUserDetails.getUser());

        Question question = mapper.questionRequestToQuestion(request);
        Question updateQuestion = questionService.updateQuestion(questionId, question);

        return String.valueOf(questionId);
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
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteQuestion(@PathVariable("question-id") Long questionId,
                               @AuthenticationPrincipal CustomUserDetails customUserDetails) {

        questionService.deleteQuestion(questionId, customUserDetails.getUser());
    }
}
