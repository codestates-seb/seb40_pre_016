package stackoverflow.pre_project.comment.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import stackoverflow.pre_project.comment.entity.Comment;

public interface CommentRepository extends JpaRepository<Comment, Long> {
}
