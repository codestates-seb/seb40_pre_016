package stackoverflow.pre_project.answer.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import stackoverflow.pre_project.answer.entity.Answer;

public interface AnswerRepository extends JpaRepository<Answer, Long> {
}
