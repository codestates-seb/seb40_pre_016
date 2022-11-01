package stackoverflow.pre_project.exception.ex;

import java.util.Map;

public class BusinessValidationApiException extends RuntimeException{

    private static final long serialVersionUID = 1L;

    private Map<String, String> errorMap;

    public BusinessValidationApiException(String message){
        super(message);
    }

    public BusinessValidationApiException(String message, Map<String, String> errorMap){
        super(message);
        this.errorMap = errorMap;
    }

    public Map<String, String> getErrorMap(){
        return errorMap;
    }
}
