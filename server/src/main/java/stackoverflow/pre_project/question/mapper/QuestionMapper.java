package stackoverflow.pre_project.question.mapper;

import lombok.extern.slf4j.Slf4j;
import org.mapstruct.Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import stackoverflow.pre_project.answer.dto.AnswerDto;
import stackoverflow.pre_project.answer.mapper.AnswerMapper;
import stackoverflow.pre_project.answer.mapper.AnswerMapperImpl;
import stackoverflow.pre_project.comment.mapper.CommentMapper;
import stackoverflow.pre_project.comment.mapper.CommentMapperImpl;
import stackoverflow.pre_project.question.dto.QuestionDto;
import stackoverflow.pre_project.question.entity.Question;
import stackoverflow.pre_project.tag.entity.QuestionTag;
import stackoverflow.pre_project.tag.entity.Tag;
import stackoverflow.pre_project.user.dto.UserDto;
import stackoverflow.pre_project.user.mapper.UserMapper;
import stackoverflow.pre_project.user.mapper.UserMapperImpl;

import java.util.ArrayList;
import java.util.List;

@Mapper(componentModel = "spring")

public interface QuestionMapper {

    AnswerMapper answerMapper = new AnswerMapperImpl();
    CommentMapper commentMapper = new CommentMapperImpl();
    UserMapper userMapper = new UserMapperImpl();

    List<QuestionDto.Response> questionsToQuestionResponseDtos(List<Question> questions);

    default Question questionRequestToQuestion(QuestionDto.Request request) {
        Question question = Question.builder()
                .title(request.getTitle())
                .content(request.getContent())
                .build();

        request.getTagNames().stream()
                .forEach(tagName -> {
                    Tag tag = Tag.builder().name(tagName).build();
                    QuestionTag questionTag = QuestionTag.builder().question(question).tag(tag).build();
                    question.getQuestionTags().add(questionTag);
                });
        return question;
    }

    default QuestionDto.Response questionToQuestionResponse(Question question) {
        List<String> tagNames = new ArrayList<>();
        question.getQuestionTags().stream()
                .forEach(questionTag -> tagNames.add(questionTag.getTag().getName()));

        return QuestionDto.Response.builder()
                .title(question.getTitle())
                .content(question.getContent())
                .createdAt(question.getCreatedAt())
                .modifiedAt(question.getModifiedAt())
                .voteCount(question.getVoteCount())
                .tagNames(tagNames)
                .user(userMapper.userToUserResponse(question.getUser()))
                .answers(answerMapper.answersToAnswerResponses(question.getAnswers()))
                .comments(commentMapper.commentsToResponses(question.getComments()))
                .build();
    }
}
