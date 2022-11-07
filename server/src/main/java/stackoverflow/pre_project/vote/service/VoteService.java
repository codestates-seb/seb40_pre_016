package stackoverflow.pre_project.vote.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import stackoverflow.pre_project.answer.entity.Answer;
import stackoverflow.pre_project.answer.repository.AnswerRepository;
import stackoverflow.pre_project.exception.BusinessLogicException;
import stackoverflow.pre_project.exception.ExceptionCode;
import stackoverflow.pre_project.question.entity.Question;
import stackoverflow.pre_project.question.repository.QuestionRepository;
import stackoverflow.pre_project.user.entity.User;
import stackoverflow.pre_project.user.repository.UserRepository;
import stackoverflow.pre_project.vote.entity.Vote;
import stackoverflow.pre_project.vote.repository.VoteRepository;

import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class VoteService {

    private final VoteRepository voteRepository;
    private final QuestionRepository questionRepository;
    private final AnswerRepository answerRepository;
    private final UserRepository userRepository;

    // 1-추천 / 2-비추천 / 3-취소
    public int questionVote(Long questionId, int flag, User user) {
        Question question = questionRepository.findById(questionId)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));

        Optional<Vote> optionalVote = voteRepository.findByUserAndQuestion(user, question);

        switch (flag) {
            case 1:
                if (optionalVote.isPresent()) {
                    Vote vote = optionalVote.get();
                    if (!vote.isUp()) {
                        vote.setUp(true);
                    }
                } else {
                    voteRepository.save(
                            Vote.builder().user(user).question(question).isUp(true).build());
                }
                break;
            case 2:
                if (optionalVote.isPresent()) {
                    Vote vote = optionalVote.get();
                    if (vote.isUp()) {
                        vote.setUp(false);
                    }
                } else {
                    voteRepository.save(
                            Vote.builder().user(user).question(question).isUp(false).build());
                }
                break;
            case 3:
                optionalVote.ifPresent(voteRepository::delete);
                break;
            default:
                break;
        }

        int up = voteRepository.countByQuestionAndIsUp(question, true);
        int down = voteRepository.countByQuestionAndIsUp(question, false);
        question.setVoteCount(up - down);
        return question.getVoteCount();
    }

    public int answerVote(Long answerId, int flag, User user) {
        Answer answer = answerRepository.findById(answerId)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND));

        Optional<Vote> optionalVote = voteRepository.findByUserAndAnswer(user, answer);

        switch (flag) {
            case 1:
                if (optionalVote.isPresent()) {
                    Vote vote = optionalVote.get();
                    if (!vote.isUp()) {
                        vote.setUp(true);
                    }
                } else {
                    voteRepository.save(
                            Vote.builder().user(user).answer(answer).isUp(true).build());
                }
                break;
            case 2:
                if (optionalVote.isPresent()) {
                    Vote vote = optionalVote.get();
                    if (vote.isUp()) {
                        vote.setUp(false);
                    }
                } else {
                    voteRepository.save(
                            Vote.builder().user(user).answer(answer).isUp(false).build());
                }
                break;
            case 3:
                optionalVote.ifPresent(voteRepository::delete);
                break;
            default:
                break;
        }

        int up = voteRepository.countByAnswerAndIsUp(answer, true);
        int down = voteRepository.countByAnswerAndIsUp(answer, false);
        answer.setVoteCount(up - down);
        return answer.getVoteCount();
    }

}
