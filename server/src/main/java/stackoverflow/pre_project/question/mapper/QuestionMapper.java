package stackoverflow.pre_project.question.mapper;

import org.mapstruct.Mapper;
import stackoverflow.pre_project.question.dto.QuestionDto;
import stackoverflow.pre_project.question.entity.Question;

import java.util.List;

@Mapper(componentModel = "spring")
public interface QuestionMapper {

    Question questionPostToQuestion(QuestionDto.Post requestBody);

    Question questionPatchToQuestion(QuestionDto.Patch requestBody);

    QuestionDto.Response questionToQuestionResponse(Question question);

    List<QuestionDto.Response> questionsToQuestionResponseDtos(List<Question> questions);
}
