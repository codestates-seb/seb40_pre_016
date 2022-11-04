package stackoverflow.pre_project.answer.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
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
import stackoverflow.pre_project.answer.dto.AnswerDto;
import stackoverflow.pre_project.answer.entity.Answer;
import stackoverflow.pre_project.answer.mapper.AnswerMapper;
import stackoverflow.pre_project.answer.service.AnswerService;
import stackoverflow.pre_project.config.SecurityTestConfig;
import stackoverflow.pre_project.config.TestUserDetailService;
import stackoverflow.pre_project.question.controller.QuestionController;
import stackoverflow.pre_project.user.dto.UserDto;

import java.time.LocalDateTime;
import java.util.List;

import static org.mockito.BDDMockito.given;
import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.*;
import static org.springframework.restdocs.operation.preprocess.Preprocessors.*;
import static org.springframework.restdocs.operation.preprocess.Preprocessors.prettyPrint;
import static org.springframework.restdocs.payload.PayloadDocumentation.*;
import static org.springframework.restdocs.request.RequestDocumentation.parameterWithName;
import static org.springframework.restdocs.request.RequestDocumentation.pathParameters;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(controllers = AnswerController.class)
@WithUserDetails
@Import({SecurityTestConfig.class, TestUserDetailService.class})
@MockBean(JpaMetamodelMappingContext.class)
@AutoConfigureRestDocs
class AnswerControllerTest {

    @Autowired
    private MockMvc mockMvc;
    @Autowired
    private ObjectMapper objectMapper;
    @MockBean
    private AnswerService answerService;
    @MockBean
    private AnswerMapper mapper;

    @Test
    void postAnswer() throws Exception {
        // given
        Long questionId = 1L;

        AnswerDto.Request request = AnswerDto.Request.builder()
                .content("답변 내용")
                .build();
        String content = objectMapper.writeValueAsString(request);

        AnswerDto.Response response = AnswerDto.Response.builder()
                .answerId(1L)
                .content("답변 내용")
                .user(UserDto.Response.builder()
                        .userId(1L)
                        .username("user")
                        .email("test@test.com")
                        .build())
                .voteCount(5)
                .comments(List.of())
                .createdAt(LocalDateTime.now())
                .modifiedAt(LocalDateTime.now())
                .build();


        given(mapper.answerRequestToAnswer(Mockito.any(AnswerDto.Request.class))).willReturn(Answer.builder().build());
        given(answerService.createAnswer(Mockito.any(Long.class), Mockito.any(Answer.class))).willReturn(Answer.builder().build());
        given(mapper.answerToAnswerResponse(Mockito.any(Answer.class))).willReturn(response);

        // when
        ResultActions actions = mockMvc.perform(
                post("/api/questions/{question-id}/answers", questionId)
                        .accept(MediaType.APPLICATION_JSON)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(content));

        // then
        actions
                .andExpect(status().isCreated())
                .andDo(document(
                        "post_answer",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(parameterWithName("question-id").description("질문 식별자")),
                        relaxedRequestFields(fieldWithPath("content").type(JsonFieldType.STRING).description("답변 내용")),
                        relaxedResponseFields(
                                fieldWithPath("answerId").type(JsonFieldType.NUMBER).description("답변 식별자"),
                                fieldWithPath("content").type(JsonFieldType.STRING).description("답변 내용"),
                                fieldWithPath("createdAt").type(JsonFieldType.STRING).description("답변 등록 시간"),
                                fieldWithPath("modifiedAt").type(JsonFieldType.STRING).description("답변 수정 시간"),
                                fieldWithPath("voteCount").type(JsonFieldType.NUMBER).description("추천 수"),
                                fieldWithPath("user").type(JsonFieldType.OBJECT).description("유저 정보"),
                                fieldWithPath("comments").type(JsonFieldType.ARRAY).description("댓글 리스트")
                        )
                )
        );
    }

    @Test
    void patchAnswer() throws Exception{
        // given
        Long answerId = 1L;

        AnswerDto.Request request = AnswerDto.Request.builder()
                .content("답변 내용 수정")
                .build();
        String content = objectMapper.writeValueAsString(request);

        AnswerDto.Response response = AnswerDto.Response.builder()
                .answerId(1L)
                .content("답변 내용 수정")
                .user(UserDto.Response.builder()
                        .userId(1L)
                        .username("user")
                        .email("test@test.com")
                        .build())
                .voteCount(5)
                .comments(List.of())
                .createdAt(LocalDateTime.now())
                .modifiedAt(LocalDateTime.now())
                .build();


        given(mapper.answerRequestToAnswer(Mockito.any(AnswerDto.Request.class))).willReturn(Answer.builder().build());
        given(answerService.updateAnswer(Mockito.any(Long.class), Mockito.any(Answer.class))).willReturn(Answer.builder().build());
        given(mapper.answerToAnswerResponse(Mockito.any(Answer.class))).willReturn(response);

        // when
        ResultActions actions = mockMvc.perform(
                patch("/api/answers/{answer-id}", answerId)
                        .accept(MediaType.APPLICATION_JSON)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(content));

        // then
        actions
                .andExpect(status().isOk())
                .andDo(document(
                                "patch_answer",
                                preprocessRequest(prettyPrint()),
                                preprocessResponse(prettyPrint()),
                                pathParameters(parameterWithName("answer-id").description("답변 식별자")),
                                relaxedRequestFields(fieldWithPath("content").type(JsonFieldType.STRING).description("답변 내용")),
                                relaxedResponseFields(
                                        fieldWithPath("answerId").type(JsonFieldType.NUMBER).description("답변 식별자"),
                                        fieldWithPath("content").type(JsonFieldType.STRING).description("수정된 답변 내용"),
                                        fieldWithPath("createdAt").type(JsonFieldType.STRING).description("답변 등록 시간"),
                                        fieldWithPath("modifiedAt").type(JsonFieldType.STRING).description("답변 수정 시간"),
                                        fieldWithPath("voteCount").type(JsonFieldType.NUMBER).description("추천 수"),
                                        fieldWithPath("user").type(JsonFieldType.OBJECT).description("유저 정보"),
                                        fieldWithPath("comments").type(JsonFieldType.ARRAY).description("댓글 리스트")
                                )
                        )
                );
    }

    @Test
    void deleteAnswer() throws Exception {
        // given
        Long answerId = 1L;

        // when
        ResultActions actions = mockMvc.perform(
                delete("/api/answers/{answer-id}", answerId));

        // then
        actions
                .andExpect(status().isNoContent())
                .andDo(document(
                        "delete_answer",
                        pathParameters(parameterWithName("answer-id").description("답변 식별자"))
                        )
                );
    }
}