package stackoverflow.pre_project.tag.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import stackoverflow.pre_project.tag.entity.Tag;

import java.util.Optional;

public interface TagRepository extends JpaRepository<Tag, Long> {
    Optional<Tag> findByName(String name);
}