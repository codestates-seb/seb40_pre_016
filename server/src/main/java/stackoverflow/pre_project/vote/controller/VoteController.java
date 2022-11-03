package stackoverflow.pre_project.vote.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import stackoverflow.pre_project.config.auth.CustomUserDetails;
import stackoverflow.pre_project.vote.service.VoteService;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api")
@Validated
public class VoteController {

    private final VoteService voteService;

    @PostMapping("/questions/{question-id}/vote/{flag}")
    public int postQuestionVote(@PathVariable("question-id") Long questionId,
                                @Min(1) @Max(3) @PathVariable("flag") int flag,
                                @AuthenticationPrincipal CustomUserDetails customUserDetails) {
        return voteService.questionVote(questionId, flag, customUserDetails.getUser());
    }

    @PostMapping("/answers/{answer-id}/vote/{flag}")
    public int postAnswerVote(@PathVariable("answer-id") Long answerId,
                              @Min(1) @Max(3) @PathVariable("flag") int flag,
                              @AuthenticationPrincipal CustomUserDetails customUserDetails) {
        return voteService.answerVote(answerId, flag, customUserDetails.getUser());
    }

}
