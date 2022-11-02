package stackoverflow.pre_project.user.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import stackoverflow.pre_project.user.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String username);
}
