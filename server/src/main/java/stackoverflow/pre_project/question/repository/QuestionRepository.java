package stackoverflow.pre_project.question.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import stackoverflow.pre_project.question.entity.Question;

@Repository
public interface QuestionRepository extends JpaRepository<Question, Long> {
}
