package stackoverflow.pre_project.exception;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum ExceptionCode {
    FORBIDDEN(403, "Forbidden"),
    DELETION_FORBIDDEN(403, "Question deletion forbidden"),

    QUESTION_NOT_FOUND(404, "Question not found"),
    ANSWER_NOT_FOUND(404, "Answer not found"),
    COMMENT_NOT_FOUND(404, "Comment not found"),
    COMMENT_TYPE_NOT_FOUND(404, "Comment type not found"),
    USER_NOT_FOUND(404, "User not found"),
    TAG_NOT_FOUND(404, "Tag not found"),


    ;

    private final int status;
    private final String message;
}
