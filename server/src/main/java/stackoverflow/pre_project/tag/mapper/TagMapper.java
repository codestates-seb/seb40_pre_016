package stackoverflow.pre_project.tag.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import stackoverflow.pre_project.tag.dto.TagDto;
import stackoverflow.pre_project.tag.entity.Tag;

@Mapper(componentModel = "spring")
public interface TagMapper {

    @Mapping(source = "id", target = "tagId")
    TagDto.Response tagToResponse(Tag tag);
}
