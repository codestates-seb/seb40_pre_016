package stackoverflow.pre_project.comment.repository;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.dao.EmptyResultDataAccessException;
import stackoverflow.pre_project.comment.entity.Comment;

import static org.junit.jupiter.api.Assertions.assertThrows;

@DataJpaTest
public class CommentRepositoryTest {
    
    @Autowired
    private CommentRepository commentRepository;
    
    @Test
    public void deleteComment() throws Exception {
        // given
        Comment comment = Comment.builder().content("댓글입니다.").build();
        commentRepository.save(comment);
        commentRepository.deleteById(comment.getId());
        
        // when / then
        assertThrows(EmptyResultDataAccessException.class,
                () -> commentRepository.deleteById(comment.getId()));
    }
    
}
