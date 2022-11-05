package stackoverflow.pre_project.comment.controller;

import com.google.gson.Gson;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.restdocs.AutoConfigureRestDocs;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Import;
import org.springframework.data.jpa.mapping.JpaMetamodelMappingContext;
import org.springframework.http.MediaType;
import org.springframework.restdocs.payload.JsonFieldType;
import org.springframework.security.test.context.support.WithUserDetails;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;
import stackoverflow.pre_project.comment.dto.CommentDto;
import stackoverflow.pre_project.comment.entity.Comment;
import stackoverflow.pre_project.comment.entity.CommentType;
import stackoverflow.pre_project.comment.mapper.CommentMapper;
import stackoverflow.pre_project.comment.service.CommentService;
import stackoverflow.pre_project.config.SecurityTestConfig;
import stackoverflow.pre_project.config.TestUserDetailService;
import stackoverflow.pre_project.user.entity.User;
import stackoverflow.pre_project.util.Reflection;
import stackoverflow.pre_project.util.TestConstant;

import java.time.LocalDateTime;

import static org.mockito.BDDMockito.given;
import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.*;
import static org.springframework.restdocs.operation.preprocess.Preprocessors.*;
import static org.springframework.restdocs.payload.PayloadDocumentation.fieldWithPath;
import static org.springframework.restdocs.payload.PayloadDocumentation.responseFields;
import static org.springframework.restdocs.request.RequestDocumentation.parameterWithName;
import static org.springframework.restdocs.request.RequestDocumentation.pathParameters;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(controllers = CommentController.class)
@WithUserDetails
@Import({SecurityTestConfig.class, TestUserDetailService.class})
@MockBean(JpaMetamodelMappingContext.class)
@AutoConfigureRestDocs
class CommentControllerTest implements Reflection {

    @Autowired
    private MockMvc mockMvc;
    @Autowired
    private Gson gson;
    @MockBean
    private CommentService commentService;
    @MockBean
    private CommentMapper commentMapper;

    @Test
    void postQuestionComment() throws Exception {
        // given
        Long questionId = 1L;
        String content = "댓글입니다.";

        CommentDto.Request request = newInstance(CommentDto.Request.class);
        setField(request, "content", content);
        String json = gson.toJson(request);

        Comment comment = Comment.builder().build();

        CommentDto.Response response = CommentDto.Response.builder()
                .commentId(1L)
                .userId(1L)
                .username("닉네임")
                .content(content)
                .createdAt(LocalDateTime.now())
                .build();

        given(commentService.createComment(CommentType.QUESTION, questionId, content, TestConstant.USER))
                .willReturn(comment);
        given(commentMapper.commentToResponse(comment))
                .willReturn(response);

        // when
        ResultActions actions =
                mockMvc.perform(
                        post("/api/questions/{question-id}/comments", questionId)
                                .accept(MediaType.APPLICATION_JSON)
                                .contentType(MediaType.APPLICATION_JSON)
                                .content(json)
                );

        // then
        actions.andExpect(status().isCreated())
                .andExpect(jsonPath("$.commentId").value(1L))
                .andExpect(jsonPath("$.content").value(content))
                .andDo(document(
                        "/comment/post/QuestionComment",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(
                                parameterWithName("question-id").description("질문 식별자")
                        ),
                        responseFields(
                                fieldWithPath("commentId").type(JsonFieldType.NUMBER).description("댓글 식별자"),
                                fieldWithPath("userId").type(JsonFieldType.NUMBER).description("유저 식별자"),
                                fieldWithPath("username").type(JsonFieldType.STRING).description("유저 닉네임"),
                                fieldWithPath("content").type(JsonFieldType.STRING).description("댓글 내용"),
                                fieldWithPath("createdAt").type(JsonFieldType.STRING).description("작성 시간")
                        )
                ));
    }

    @Test
    void postAnswerComment() throws Exception {
        // given
        Long answerId = 1L;
        String content = "댓글입니다.";

        CommentDto.Request request = newInstance(CommentDto.Request.class);
        setField(request, "content", content);
        String json = gson.toJson(request);

        Comment comment = Comment.builder().build();

        CommentDto.Response response = CommentDto.Response.builder()
                .commentId(1L)
                .userId(1L)
                .username("닉네임")
                .content(content)
                .createdAt(LocalDateTime.now())
                .build();

        given(commentService.createComment(CommentType.ANSWER, answerId, content, TestConstant.USER))
                .willReturn(comment);
        given(commentMapper.commentToResponse(comment))
                .willReturn(response);

        // when
        ResultActions actions =
                mockMvc.perform(
                        post("/api/answers/{answer-id}/comments", answerId)
                                .accept(MediaType.APPLICATION_JSON)
                                .contentType(MediaType.APPLICATION_JSON)
                                .content(json)
                );

        // then
        actions.andExpect(status().isCreated())
                .andExpect(jsonPath("$.commentId").value(1L))
                .andExpect(jsonPath("$.content").value(content))
                .andDo(document(
                        "/comment/post/AnswerComment",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(
                                parameterWithName("answer-id").description("답변 식별자")
                        ),
                        responseFields(
                                fieldWithPath("commentId").type(JsonFieldType.NUMBER).description("댓글 식별자"),
                                fieldWithPath("userId").type(JsonFieldType.NUMBER).description("유저 식별자"),
                                fieldWithPath("username").type(JsonFieldType.STRING).description("유저 닉네임"),
                                fieldWithPath("content").type(JsonFieldType.STRING).description("댓글 내용"),
                                fieldWithPath("createdAt").type(JsonFieldType.STRING).description("작성 시간")
                        )
                ));
    }

    @Test
    void patchAnswerComment() throws Exception {
        // given
        Long commentId = 1L;
        String content = "수정된 댓글입니다.";

        CommentDto.Request request = newInstance(CommentDto.Request.class);
        setField(request, "content", content);
        String json = gson.toJson(request);

        Comment comment = Comment.builder().build();

        CommentDto.Response response = CommentDto.Response.builder()
                .commentId(commentId)
                .userId(1L)
                .username("닉네임")
                .content(content)
                .createdAt(LocalDateTime.now())
                .build();

        given(commentService.updateComment(commentId, content, TestConstant.USER))
                .willReturn(comment);
        given(commentMapper.commentToResponse(comment))
                .willReturn(response);

        // when
        ResultActions actions = mockMvc.perform(
                patch("/api/comments/{comment-id}", commentId)
                        .accept(MediaType.APPLICATION_JSON)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(json)
        );

        // then
        actions.andExpect(status().isOk())
                .andExpect(jsonPath("$.commentId").value(1L))
                .andExpect(jsonPath("$.content").value(content))
                .andDo(document(
                        "/comment/patch",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(
                                parameterWithName("comment-id").description("댓글 식별자")
                        ),
                        responseFields(
                                fieldWithPath("commentId").type(JsonFieldType.NUMBER).description("댓글 식별자"),
                                fieldWithPath("userId").type(JsonFieldType.NUMBER).description("유저 식별자"),
                                fieldWithPath("username").type(JsonFieldType.STRING).description("유저 닉네임"),
                                fieldWithPath("content").type(JsonFieldType.STRING).description("댓글 내용"),
                                fieldWithPath("createdAt").type(JsonFieldType.STRING).description("작성 시간")
                        )
                ));
    }

    @Test
    void deleteAnswerComment() throws Exception {
        // given
        Long commentId = 1L;

        // when
        ResultActions actions =
                mockMvc.perform(
                        delete("/api/comments/{comment-id}", commentId)
                );

        // then
        actions.andExpect(status().isNoContent())
                .andDo(document("comment/delete",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(
                                parameterWithName("comment-id").description("댓글 식별자")
                        )
                ));
    }
}