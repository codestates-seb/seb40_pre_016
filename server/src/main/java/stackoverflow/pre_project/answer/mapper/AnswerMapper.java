package stackoverflow.pre_project.answer.mapper;

import org.mapstruct.Mapper;
import stackoverflow.pre_project.answer.dto.AnswerDto;
import stackoverflow.pre_project.answer.entity.Answer;
import stackoverflow.pre_project.comment.dto.CommentDto;
import stackoverflow.pre_project.comment.entity.Comment;
import stackoverflow.pre_project.comment.mapper.CommentMapper;
import stackoverflow.pre_project.comment.mapper.CommentMapperImpl;
import stackoverflow.pre_project.user.dto.UserDto;
import stackoverflow.pre_project.user.mapper.UserMapper;
import stackoverflow.pre_project.user.mapper.UserMapperImpl;

import java.util.List;

@Mapper(componentModel = "spring")
public interface AnswerMapper {

    CommentMapper commentMapper = new CommentMapperImpl();
    UserMapper userMapper = new UserMapperImpl();

    public Answer answerPostToAnswer(AnswerDto.Post post);

    public Answer answerPatchToAnswer(AnswerDto.Patch patch);

    public List<AnswerDto.Response> answersToAnswerResponses(List<Answer> answers);

    default public AnswerDto.Response answerToAnswerResponse(Answer answer) {

        return AnswerDto.Response.builder()
                .content(answer.getContent())
                .createdAt(answer.getCreatedAt())
                .modifiedAt(answer.getModifiedAt())
                .voteCount(answer.getVoteCount())
                .comments(commentMapper.commentsToResponses(answer.getComments()))
                .user(userMapper.userToUserResponse(answer.getUser())).build();

    }

}
