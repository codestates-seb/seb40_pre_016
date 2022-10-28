package stackoverflow.pre_project.question.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import stackoverflow.pre_project.question.entity.Question;

public interface QuestionRepository extends JpaRepository<Question, Long> {

    @Modifying
    @Query(value = "delete from question_tag where question_tag_id =:id", nativeQuery = true)
    void deleteQuestionTag(@Param("id") Long id);
}
