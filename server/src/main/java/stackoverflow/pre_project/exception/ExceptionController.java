package stackoverflow.pre_project.exception;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

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

}
