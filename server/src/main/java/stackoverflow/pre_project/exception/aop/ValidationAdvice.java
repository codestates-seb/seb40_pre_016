package stackoverflow.pre_project.exception.aop;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.stereotype.Component;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import stackoverflow.pre_project.exception.ex.BusinessValidationApiException;
import stackoverflow.pre_project.exception.ex.BusinessValidationException;

import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Component
@Aspect
public class ValidationAdvice {

    @Around("execution(* stackoverflow.pre_project.apiController.*Controller.*(..))")
    public Object apiAdvice(ProceedingJoinPoint proceedingJoinPoint) throws Throwable{
        Object[] args = proceedingJoinPoint.getArgs();
        for(Object arg : args){
            if(arg instanceof BindingResult){
                BindingResult bindingResult = (BindingResult) arg;
                if(bindingResult.hasErrors()){
                    Map<String, String> errorMap = new ConcurrentHashMap<>();
                    for(FieldError error : bindingResult.getFieldErrors())
                        errorMap.put(error.getField(), error.getDefaultMessage());
                    throw new BusinessValidationApiException("유효성 검사 실패", errorMap);
                }
            }
        }
        return proceedingJoinPoint.proceed();
    }

    @Around("execution(* stackoverflow.pre_project.*Controller.*(..))")
    public Object advice(ProceedingJoinPoint proceedingJoinPoint) throws Throwable{
        Object[] args = proceedingJoinPoint.getArgs();
        for(Object arg : args)
            if(arg instanceof BindingResult){
                BindingResult bindingResult = (BindingResult) arg;
                if(bindingResult.hasErrors()){
                    Map<String,String> errorMap = new ConcurrentHashMap<>();
                    for(FieldError error : bindingResult.getFieldErrors())
                        errorMap.put(error.getField(), error.getDefaultMessage());
                    throw new BusinessValidationException("유효성 검사 실패", errorMap);
                }
            }
        return proceedingJoinPoint.proceed();
    }
}
