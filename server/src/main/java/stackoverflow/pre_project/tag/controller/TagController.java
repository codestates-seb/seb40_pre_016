package stackoverflow.pre_project.tag.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import stackoverflow.pre_project.dto.MultiResponseDto;
import stackoverflow.pre_project.tag.dto.TagDto;
import stackoverflow.pre_project.tag.entity.Tag;
import stackoverflow.pre_project.tag.mapper.TagMapper;
import stackoverflow.pre_project.tag.service.TagService;

import javax.validation.constraints.Positive;
import javax.websocket.server.PathParam;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/tags")
public class TagController {

    private final TagMapper tagMapper;
    private final TagService tagService;

    @GetMapping
    public MultiResponseDto<TagDto.Response> getTags(
            @PageableDefault(size = 30, sort = "questionCount", direction = Sort.Direction.DESC) Pageable pageable) {
        Page<Tag> tags = tagService.findTags(pageable);
        return MultiResponseDto.of(tags.stream()
                .map(tagMapper::tagToResponse)
                .collect(Collectors.toList()), tags);
    }

}
