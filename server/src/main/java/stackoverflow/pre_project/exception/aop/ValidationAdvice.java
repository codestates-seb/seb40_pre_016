package stackoverflow.pre_project.exception.aop;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.stereotype.Component;

@Component
@Aspect
public class ValidationAdvice {

//    @Around("execution(* stackoverflow.pre_project. *Controller.*(..))")
//    public Object apiAdvice(ProceedingJoinPoint proceedingJoinPoint) throws Throwable{
//
//        return proceedingJoinPoint.proceed();
//    }
//
//    @Around("execution(* stackoverflow.pre_project. *Controller.*(..))")
//    public Object advice(ProceedingJoinPoint proceedingJoinPoint) throws Throwable{
//        return proceedingJoinPoint.proceed();
//    }
}
