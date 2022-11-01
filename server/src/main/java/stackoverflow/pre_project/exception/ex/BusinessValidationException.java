package stackoverflow.pre_project.exception.ex;

import java.util.Map;

public class BusinessValidationException extends RuntimeException{

    private static final long serialVersionUID = 1L;

    private Map<String, String> errorMap;

    public BusinessValidationException(String message, Map<String, String> errorMap){
        super(message);
        this.errorMap = errorMap;
    }

    public Map<String, String> getErrorMap(){
        return errorMap;
    }
}
