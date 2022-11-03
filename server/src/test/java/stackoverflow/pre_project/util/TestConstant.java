package stackoverflow.pre_project.util;

import stackoverflow.pre_project.question.entity.Question;
import stackoverflow.pre_project.user.entity.User;

public class TestConstant implements Reflection {
    public static final User USER = User.builder()
            .email("testConstant@test.com")
            .username("testConstantUserName")
            .password("testConstantPassword")
            .message("testConstantMessage")
            .build();
    public static final Question QUESTION = Question.builder()
            .title("testConstantTitle")
            .content("testConstantContent")
            .build();
}
