package stackoverflow.pre_project.tag.service;

import lombok.RequiredArgsConstructor;
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
public class TagService {

    private final TagRepository tagRepository;

    public Page<Tag> findTags(int page, int size) {
        return tagRepository.findAll(
                PageRequest.of(page - 1, size, Sort.by("questionCount").descending()));
    }

}
