package stackoverflow.pre_project.answer.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import stackoverflow.pre_project.answer.dto.AnswerDto;
import stackoverflow.pre_project.answer.entity.Answer;
import stackoverflow.pre_project.answer.mapper.AnswerMapper;
import stackoverflow.pre_project.answer.service.AnswerService;

@RestController
@RequiredArgsConstructor
public class AnswerController {

    private final AnswerService answerService;
    private final AnswerMapper mapper;

    @PostMapping("/questions/{question-id}/answers")
    public ResponseEntity postAnswer(@PathVariable("question-id") Long questionId,
                                     @RequestBody AnswerDto.Post post) {

        Answer answer = mapper.answerPostToAnswer(post);

        Answer createdAnswer = answerService.createAnswer(questionId, answer);
        AnswerDto.Response response = mapper.answerToAnswerResponse(createdAnswer);

        return new ResponseEntity(response, HttpStatus.CREATED);
    }

    @PatchMapping("answers/{answer-id}")
    public ResponseEntity patchAnswer(@PathVariable("answer-id") Long answerId,
                                      @RequestBody AnswerDto.Patch patch) {
        Answer answer = mapper.answerPatchToAnswer(patch);

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
