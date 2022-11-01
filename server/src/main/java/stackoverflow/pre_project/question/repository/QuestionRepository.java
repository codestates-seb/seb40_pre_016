package stackoverflow.pre_project.question.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import stackoverflow.pre_project.question.entity.Question;

public interface QuestionRepository extends JpaRepository<Question, Long> {
}
