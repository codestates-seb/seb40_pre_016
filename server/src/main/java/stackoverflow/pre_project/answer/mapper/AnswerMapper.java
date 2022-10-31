package stackoverflow.pre_project.answer.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;
import stackoverflow.pre_project.answer.dto.AnswerDto;
import stackoverflow.pre_project.answer.entity.Answer;
import stackoverflow.pre_project.comment.mapper.CommentMapper;
import stackoverflow.pre_project.user.mapper.UserMapper;

import java.util.List;

@Mapper(componentModel = "spring", uses = {CommentMapper.class,UserMapper.class})
public interface AnswerMapper {

    CommentMapper commentMapper = Mappers.getMapper(CommentMapper.class);
    UserMapper userMapper = Mappers.getMapper(UserMapper.class);

    public Answer answerRequestToAnswer(AnswerDto.Request request);

    public List<AnswerDto.Response> answersToAnswerResponses(List<Answer> answers);

    default public AnswerDto.Response answerToAnswerResponse(Answer answer) {

        return AnswerDto.Response.builder()
                .answerId(answer.getId())
                .content(answer.getContent())
                .createdAt(answer.getCreatedAt())
                .modifiedAt(answer.getModifiedAt())
                .voteCount(answer.getVoteCount())
                .comments(commentMapper.commentsToResponses(answer.getComments()))
                .user(userMapper.userToUserResponse(answer.getUser())).build();

    }
}
