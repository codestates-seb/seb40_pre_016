package stackoverflow.pre_project.exception;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.validation.ConstraintViolationException;

@Getter
@AllArgsConstructor(access = AccessLevel.PRIVATE)
public class ErrorResponse {
    private int code;
    private String message;

    static ErrorResponse of(BusinessLogicException exception) {
        return new ErrorResponse(
                exception.getExceptionCode().getStatus(),
                exception.getMessage());
    }

    static ErrorResponse of(ConstraintViolationException exception) {
        return new ErrorResponse(
                400,
                exception.getMessage());
    }
}
