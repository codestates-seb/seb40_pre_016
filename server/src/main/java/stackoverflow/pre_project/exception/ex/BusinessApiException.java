package stackoverflow.pre_project.exception.ex;

public class BusinessApiException extends RuntimeException{

    private static final long serialVersionUID = 1L;

    public BusinessApiException(String message){
        super(message);
    }
}
