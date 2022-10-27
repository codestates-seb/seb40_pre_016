package stackoverflow.pre_project.answer.mapper;

import org.mapstruct.Mapper;
import stackoverflow.pre_project.answer.dto.AnswerDto;
import stackoverflow.pre_project.answer.entity.Answer;

@Mapper(componentModel = "spring")
public interface AnswerMapper {

    public Answer answerPostToAnswer(AnswerDto.Post post);

    public AnswerDto.Response answerToAnswerResponse(Answer answer);
}
