package stackoverflow.pre_project.util;

public class Script {
    public static String back(String msg) {
        return "<script>" +
                "alert(" + msg + ")" +
                "history.back();" +
                "</script>";
    }
}
