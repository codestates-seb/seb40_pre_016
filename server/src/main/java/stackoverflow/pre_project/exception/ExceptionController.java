package stackoverflow.pre_project.exception;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import javax.validation.ConstraintViolationException;

@Slf4j
@ControllerAdvice
public class ExceptionController {

    @ExceptionHandler
    public ResponseEntity<ErrorResponse> businessLogicException(BusinessLogicException exception) {
        log.warn(exception.getExceptionCode().getStatus() + " " + exception.getMessage());
        return ResponseEntity
                .status(exception.getExceptionCode().getStatus())
                .body(ErrorResponse.of(exception));
    }

    @ExceptionHandler
    public ResponseEntity<ErrorResponse> constraintViolationException(ConstraintViolationException exception) {
        log.warn("400 " + exception.getMessage());
        return ResponseEntity
                .status(400)
                .body(ErrorResponse.of(exception));
    }

    @ExceptionHandler
    public ResponseEntity<ErrorResponse> methodArgumentNotValidException(MethodArgumentNotValidException exception) {
        log.warn("400 " + exception.getBindingResult().getAllErrors().get(0).getDefaultMessage());
        return ResponseEntity
                .status(400)
                .body(ErrorResponse.of(exception));
    }

}
