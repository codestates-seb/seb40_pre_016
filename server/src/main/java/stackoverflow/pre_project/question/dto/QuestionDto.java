package stackoverflow.pre_project.question.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import stackoverflow.pre_project.answer.dto.AnswerDto;
import stackoverflow.pre_project.comment.dto.CommentDto;
import stackoverflow.pre_project.user.dto.UserDto;
import stackoverflow.pre_project.user.entity.User;

import java.time.LocalDateTime;
import java.util.List;

public class QuestionDto {

    @Getter
    @Builder
    public static class Request {
        private String title;
        private String content;
        private List<String> tagNames;

        @Setter
        private User user;
    }

    @AllArgsConstructor
    @Getter
    @Builder
    public static class Response {
        private Long questionId;
        private String title;
        private String content;
        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;
        private int voteCount;
        private int viewCount;
        private UserDto.Response user;
        private List<String> tagNames;
        private List<AnswerDto.Response> answers;
        private List<CommentDto.Response> comments;
    }
}
