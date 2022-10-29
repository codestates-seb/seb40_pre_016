package stackoverflow.pre_project.tag.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import stackoverflow.pre_project.tag.entity.Tag;
import stackoverflow.pre_project.tag.repository.TagRepository;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
@Slf4j
public class TagService {

    private final TagRepository tagRepository;

    public Tag createTag(String tagName) {
        Tag tag = Tag.builder()
                .name(tagName)
                .build();
        tagRepository.save(tag);

        return tag;
    }

    public Tag findTag(String tagName) {
        return tagRepository.findByName(tagName).orElseGet(() -> createTag(tagName));
    }

    public Tag findTagById(Long tagId) {
        return tagRepository.findById(tagId).orElseThrow(() -> new RuntimeException());
    }

    public Page<Tag> findTags(int page, int size) {
        return tagRepository.findAll(
                PageRequest.of(page - 1, size, Sort.by("questionCount").descending()));
    }

    public void deleteTag(Long tagId) {
        Tag tag = findTagById(tagId);
        tagRepository.delete(tag);
    }
}


