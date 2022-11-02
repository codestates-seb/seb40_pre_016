package stackoverflow.pre_project.answer.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;
import stackoverflow.pre_project.answer.dto.AnswerDto;
import stackoverflow.pre_project.answer.entity.Answer;
import stackoverflow.pre_project.answer.mapper.AnswerMapper;
import stackoverflow.pre_project.answer.service.AnswerService;
import stackoverflow.pre_project.config.auth.CustomUserDetails;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
public class AnswerController {

    private final AnswerService answerService;
    private final AnswerMapper mapper;

    @PostMapping("/questions/{question-id}/answers")
    public ResponseEntity postAnswer(@PathVariable("question-id") Long questionId,
                                     @RequestBody AnswerDto.Request request,
                                     @AuthenticationPrincipal CustomUserDetails customUserDetails) {
        request.setUser(customUserDetails.getUser());
        Answer answer = mapper.answerRequestToAnswer(request);

        Answer createdAnswer = answerService.createAnswer(questionId, answer);
        AnswerDto.Response response = mapper.answerToAnswerResponse(createdAnswer);

        return new ResponseEntity(response, HttpStatus.CREATED);
    }

    @PatchMapping("answers/{answer-id}")
    public ResponseEntity patchAnswer(@PathVariable("answer-id") Long answerId,
                                      @RequestBody AnswerDto.Request request) {
        Answer answer = mapper.answerRequestToAnswer(request);

        Answer updateAnswer = answerService.updateAnswer(answerId, answer);
        AnswerDto.Response response = mapper.answerToAnswerResponse(updateAnswer);

        return new ResponseEntity(response, HttpStatus.OK);
    }

    @DeleteMapping("answers/{answer-id}")
    public ResponseEntity deleteAnswer(@PathVariable("answer-id") Long answerId) {
        answerService.delete(answerId);

        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}
