package stackoverflow.pre_project.question.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;
import stackoverflow.pre_project.answer.dto.AnswerDto;
import stackoverflow.pre_project.answer.mapper.AnswerMapper;
import stackoverflow.pre_project.comment.mapper.CommentMapper;
import stackoverflow.pre_project.question.dto.QuestionDto;
import stackoverflow.pre_project.question.entity.Question;
import stackoverflow.pre_project.tag.entity.QuestionTag;
import stackoverflow.pre_project.tag.entity.Tag;
import stackoverflow.pre_project.user.mapper.UserMapper;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring", uses = {AnswerMapper.class, CommentMapper.class, UserMapper.class})
public interface QuestionMapper {

    AnswerMapper answerMapper = Mappers.getMapper(AnswerMapper.class);
    CommentMapper commentMapper = Mappers.getMapper(CommentMapper.class);
    UserMapper userMapper = Mappers.getMapper(UserMapper.class);

    List<QuestionDto.Response> questionsToQuestionResponseDtos(List<Question> questions);

    default Question questionRequestToQuestion(QuestionDto.Request request) {
        Question question = Question.builder()
                .title(request.getTitle())
                .content(request.getContent())
                .user(request.getUser())
                .build();

        request.getTagNames().stream()
                .forEach(tagName -> {
                    Tag tag = Tag.builder().name(tagName.toLowerCase()).build();
                    QuestionTag questionTag = QuestionTag.builder().question(question).tag(tag).build();
                    question.addQuestionTag(questionTag);
                });
        return question;
    }

    default QuestionDto.Response questionToQuestionResponse(Question question) {
        List<String> tagNames = new ArrayList<>();
        question.getQuestionTags().stream()
                .forEach(questionTag -> tagNames.add(questionTag.getTag().getName()));

        return QuestionDto.Response.builder()
                .questionId(question.getId())
                .title(question.getTitle())
                .content(question.getContent())
                .createdAt(question.getCreatedAt())
                .modifiedAt(question.getModifiedAt())
                .voteCount(question.getVoteCount())
                .viewCount(question.getViewCount())
                .tagNames(tagNames)
                .user(userMapper.userToUserResponse(question.getUser()))
                .answers(
                        answerMapper.answersToAnswerResponses(question.getAnswers()).stream()
                                .sorted(Comparator.comparing(AnswerDto.Response::getVoteCount).reversed())
                                .collect(Collectors.toList())
                )
                .comments(commentMapper.commentsToResponses(question.getComments()))
                .build();
    }
}
