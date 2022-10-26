package stackoverflow.pre_project.comment.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import stackoverflow.pre_project.comment.dto.CommentDto;
import stackoverflow.pre_project.comment.entity.Comment;

@Mapper(componentModel = "spring")
public interface CommentMapper {
    @Mapping(source = "id", target = "commentId")
    CommentDto.Response of(Comment comment);
}
