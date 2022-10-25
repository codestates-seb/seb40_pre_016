package stackoverflow.pre_project;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.annotation.Rollback;
import stackoverflow.pre_project.user.User;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

public class JpaTest {

    @PersistenceContext
    private EntityManager entityManager;

    @Test
    @Rollback(value = false)
    public void test() {
        User user = new User();
        user.setEmail("test@test.com");
        user.setUsername("test");
        user.setPassword("12345");
        entityManager.persist(user);
        System.out.println(user.getCreatedAt() + "=================" + user.getModifiedAt());
    }
}
