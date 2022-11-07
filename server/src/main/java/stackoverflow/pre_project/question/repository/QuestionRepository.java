package stackoverflow.pre_project.question.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import stackoverflow.pre_project.question.entity.Question;

public interface QuestionRepository extends JpaRepository<Question, Long> {

    Page<Question> findAllByUser_Id(Long userId, Pageable pageable);
}
