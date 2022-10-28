package stackoverflow.pre_project.comment.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import stackoverflow.pre_project.comment.dto.CommentDto;
import stackoverflow.pre_project.comment.entity.Comment;

import java.util.List;

@Mapper(componentModel = "spring")
public interface CommentMapper {
    @Mapping(source = "id", target = "commentId")
    CommentDto.Response commentToResponse(Comment comment);

    List<CommentDto.Response> commentsToResponses(List<Comment> comments);
}
