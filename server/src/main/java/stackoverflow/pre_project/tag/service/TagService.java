package stackoverflow.pre_project.tag.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import stackoverflow.pre_project.exception.BusinessLogicException;
import stackoverflow.pre_project.exception.ExceptionCode;
import stackoverflow.pre_project.tag.entity.Tag;
import stackoverflow.pre_project.tag.repository.TagRepository;

import java.util.Optional;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
@Slf4j
public class TagService {

    private final TagRepository tagRepository;

    @Transactional
    public Tag createTag(String tagName) {
        Tag tag = Tag.builder()
                .name(tagName)
                .build();
        tagRepository.save(tag);

        return tag;
    }

    @Transactional
    public Tag findTag(String tagName) {
        return tagRepository.findByName(tagName).orElseGet(() -> createTag(tagName));
    }

    public Tag findVerifiedTag(String tagName) {
        return tagRepository.findByName(tagName).orElse(null);
    }

    public Tag findTagById(Long tagId) {
        return tagRepository.findById(tagId).orElseThrow(() -> new RuntimeException());
    }

    public Page<Tag> findTags(Pageable pageable) {
        return tagRepository.findAll(pageable);
    }

    @Transactional
    public void deleteTag(Long tagId) {
        Tag tag = findTagById(tagId);
        tagRepository.delete(tag);
    }
}


