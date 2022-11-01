package stackoverflow.pre_project.handler;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;
import stackoverflow.pre_project.exception.ex.BusinessApiException;
import stackoverflow.pre_project.exception.ex.BusinessException;
import stackoverflow.pre_project.exception.ex.BusinessValidationApiException;
import stackoverflow.pre_project.exception.ex.BusinessValidationException;
import stackoverflow.pre_project.util.Script;

@RestController
@ControllerAdvice
public class ControllerExceptionHandler {

    @ExceptionHandler(BusinessException.class)
    public String exception(BusinessException e){
        return Script.back(e.getMessage());
    }

    @ExceptionHandler(BusinessApiException.class)
    public ResponseEntity<?> apiException(BusinessApiException e){
        return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(BusinessValidationException.class)
    public String validationException(BusinessValidationException e){
        if(e.getErrorMap() == null)
            return Script.back(e.getMessage());
        return Script.back(e.getMessage().toString());
    }

    @ExceptionHandler(BusinessValidationApiException.class)
    public ResponseEntity<?> validationApiException(BusinessValidationApiException e){
        return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
    }
}
