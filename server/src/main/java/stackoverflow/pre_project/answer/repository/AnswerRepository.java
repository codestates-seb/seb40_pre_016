package stackoverflow.pre_project.answer.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import stackoverflow.pre_project.answer.Answer;

public interface AnswerRepository extends JpaRepository<Answer, Long> {
}
