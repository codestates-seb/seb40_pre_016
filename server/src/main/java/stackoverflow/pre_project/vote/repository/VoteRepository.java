package stackoverflow.pre_project.vote.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import stackoverflow.pre_project.answer.entity.Answer;
import stackoverflow.pre_project.question.entity.Question;
import stackoverflow.pre_project.user.entity.User;
import stackoverflow.pre_project.vote.entity.Vote;

import java.util.Optional;

public interface VoteRepository extends JpaRepository<Vote, Long> {
    int countByQuestionAndIsUp(Question question, boolean isUp);
    int countByAnswerAndIsUp(Answer answer, boolean isUp);
    Optional<Vote> findByUserAndQuestion(User user, Question question);
    Optional<Vote> findByUserAndAnswer(User user, Answer answer);
}
