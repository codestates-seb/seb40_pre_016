package stackoverflow.pre_project.question.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.restdocs.AutoConfigureRestDocs;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Import;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.mapping.JpaMetamodelMappingContext;
import org.springframework.http.MediaType;
import org.springframework.restdocs.payload.JsonFieldType;
import org.springframework.security.test.context.support.WithUserDetails;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;
import stackoverflow.pre_project.config.SecurityTestConfig;
import stackoverflow.pre_project.config.TestUserDetailService;
import stackoverflow.pre_project.question.dto.QuestionDto;
import stackoverflow.pre_project.question.entity.Question;
import stackoverflow.pre_project.question.mapper.QuestionMapper;
import stackoverflow.pre_project.question.service.QuestionService;
import stackoverflow.pre_project.user.dto.UserDto;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import static org.mockito.BDDMockito.given;
import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.*;
import static org.springframework.restdocs.operation.preprocess.Preprocessors.*;
import static org.springframework.restdocs.payload.PayloadDocumentation.*;
import static org.springframework.restdocs.request.RequestDocumentation.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(controllers = QuestionController.class)
@WithUserDetails
@Import({SecurityTestConfig.class, TestUserDetailService.class})
@MockBean(JpaMetamodelMappingContext.class)
@AutoConfigureRestDocs
class QuestionControllerTest {

    @Autowired
    private MockMvc mockMvc;
    @Autowired
    private ObjectMapper objectMapper;
    @MockBean
    private QuestionService questionService;
    @MockBean
    private QuestionMapper mapper;

    @Test
    public void  postQuestion() throws Exception {
        // given
        QuestionDto.Request request =
                QuestionDto.Request.builder()
                        .title("?????? ??????")
                        .content("?????? ??????")
                        .tagNames(List.of("java", "python", "c++"))
                        .build();
        String content = objectMapper.writeValueAsString(request);

        given(mapper.questionRequestToQuestion(Mockito.any(QuestionDto.Request.class))).willReturn(Question.builder().build());
        given(questionService.createQuestion(Mockito.any(Question.class))).willReturn(Question.builder().id(1L).build());

        // when
        ResultActions actions = mockMvc.perform(
                post("/api/questions")
                        .accept(MediaType.TEXT_PLAIN_VALUE)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(content)
        );

        // then
        actions
                .andExpect(status().isCreated())
                .andDo(document(
                        "question/post",
                        preprocessRequest(prettyPrint()),
                        relaxedRequestFields(
                                List.of(
                                        fieldWithPath("title").type(JsonFieldType.STRING).description("?????? ??????"),
                                        fieldWithPath("content").type(JsonFieldType.STRING).description("?????? ??????"),
                                        fieldWithPath("tagNames").type("List of String").description("?????? ?????????")
                                )
                        ))
                );
    }

    @Test
    public void  patchQuestion() throws Exception {
        // given
        Long questionId = 1L;

        QuestionDto.Request request =
                QuestionDto.Request.builder()
                        .title("?????? ??????")
                        .content("?????? ??????")
                        .tagNames(List.of("java", "python", "c++"))
                        .build();
        String content = objectMapper.writeValueAsString(request);

        given(mapper.questionRequestToQuestion(Mockito.any(QuestionDto.Request.class))).willReturn(Question.builder().build());
        given(questionService.updateQuestion(Mockito.any(Long.class), Mockito.any(Question.class))).willReturn(Question.builder().build());

        // when
        ResultActions actions = mockMvc.perform(
                patch("/api/questions/{question-id}", questionId)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(content)
        );

        // then
        actions
                .andExpect(status().isOk())
                .andDo(document(
                                "question/patch",
                                preprocessRequest(prettyPrint()),
                                pathParameters(
                                        parameterWithName("question-id").description("?????? ?????????")
                                ),
                                relaxedRequestFields(
                                        List.of(
                                                fieldWithPath("title").type(JsonFieldType.STRING).description("????????? ?????? ??????"),
                                                fieldWithPath("content").type(JsonFieldType.STRING).description("????????? ?????? ??????"),
                                                fieldWithPath("tagNames").type(JsonFieldType.ARRAY).description("????????? ?????? ?????????")
                                        )
                                )
                        )
                );
    }

    @Test
    public void getQuestion() throws Exception {
        // given
        Long questionId = 1L;

        QuestionDto.Response response =
                QuestionDto.Response.builder()
                        .questionId(1L)
                        .title("?????? ??????")
                        .content("?????? ??????")
                        .createdAt(LocalDateTime.now())
                        .modifiedAt(LocalDateTime.now())
                        .voteCount(3)
                        .viewCount(15)
                        .user(UserDto.Response.builder()
                                .userId(1L)
                                .username("user")
                                .email("test@test.com")
                                .build())
                        .tagNames(List.of("java", "python", "c++"))
                        .answers(new ArrayList<>())
                        .comments(new ArrayList<>())
                        .build();

        given(questionService.findQuestion(Mockito.any(Long.class))).willReturn(Question.builder().build());
        given(mapper.questionToQuestionResponse(Mockito.any(Question.class))).willReturn(response);

        // when
        ResultActions actions = mockMvc.perform(
                                get("/api/questions/{question-id}", questionId)
                                        .accept(MediaType.APPLICATION_JSON)
        );

        // then
        actions
                .andExpect(status().isOk())
                .andDo(document(
                        "question/get",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(
                                parameterWithName("question-id").description("?????? ?????????")
                        ),
                        relaxedResponseFields(
                                List.of(
                                        fieldWithPath("questionId").type(JsonFieldType.NUMBER).description("?????? ?????????"),
                                        fieldWithPath("title").type(JsonFieldType.STRING).description("?????? ??????"),
                                        fieldWithPath("content").type(JsonFieldType.STRING).description("?????? ??????"),
                                        fieldWithPath("createdAt").type(JsonFieldType.STRING).description("?????? ?????? ??????"),
                                        fieldWithPath("modifiedAt").type(JsonFieldType.STRING).description("?????? ?????? ??????"),
                                        fieldWithPath("voteCount").type(JsonFieldType.NUMBER).description("?????????"),
                                        fieldWithPath("viewCount").type(JsonFieldType.NUMBER).description("?????????"),
                                        fieldWithPath("user").type(JsonFieldType.OBJECT).description("?????? ??????"),
                                        fieldWithPath("tagNames").type(JsonFieldType.ARRAY).description("?????? ?????????"),
                                        fieldWithPath("answers").type(JsonFieldType.ARRAY).description("?????? ?????????"),
                                        fieldWithPath("comments").type(JsonFieldType.ARRAY).description("?????? ?????????")
                                )
                        )
                        )
                );
    }

    @Test
    public void getQuestions() throws Exception {
        // given
        int page = 0;
        int size = 30;
        String sort = "createdAt,DESC";

        PageRequest pageRequest = PageRequest.of(page, size, Sort.by("createdAt").descending());
        PageImpl<Question> response = new PageImpl<>(List.of(), pageRequest,0);


        given(questionService.findQuestions(Mockito.any(Pageable.class))).willReturn(response);
        given(mapper.questionsToQuestionResponseDtos(Mockito.any())).willReturn(List.of());

        // when
        ResultActions actions = mockMvc.perform(
                get("/api/questions")
                        .param("page", String.valueOf(page))
                        .param("size", String.valueOf(size))
                        .param("sort", sort)
                        .accept(MediaType.APPLICATION_JSON)
        );

        // then
        actions
                .andExpect(status().isOk())
                .andDo(document(
                        "question/get/all",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        requestParameters(
                                parameterWithName("page").description("?????????"),
                                parameterWithName("size").description("????????? ?????????"),
                                parameterWithName("sort").description("?????? ??????")
                        ),
                        responseFields(
                                List.of(
                                        fieldWithPath("data").type(JsonFieldType.ARRAY).description("?????? ?????????"),
                                        fieldWithPath("pageInfo").type(JsonFieldType.OBJECT).description("????????? ??????"),
                                        fieldWithPath("pageInfo.page").type(JsonFieldType.NUMBER).description("?????????"),
                                        fieldWithPath("pageInfo.size").type(JsonFieldType.NUMBER).description("????????? ?????????"),
                                        fieldWithPath("pageInfo.totalElements").type(JsonFieldType.NUMBER).description("??? ?????? ???"),
                                        fieldWithPath("pageInfo.totalPages").type(JsonFieldType.NUMBER).description("??? ????????? ???")
                                )
                        )
                )
        );
    }

    @Test
    public void getQuestionsByUser() throws Exception {
        // given
        Long userId = 1L;

        int page = 0;
        int size = 30;
        String sort = "createdAt,DESC";

        PageRequest pageRequest = PageRequest.of(page, size, Sort.by("createdAt").descending());
        PageImpl<Question> response = new PageImpl<>(List.of(), pageRequest,0);


        given(questionService.findQuestionsByUser(Mockito.any(Long.class), Mockito.any(Pageable.class))).willReturn(response);
        given(mapper.questionsToQuestionResponseDtos(Mockito.any())).willReturn(List.of());

        // when
        ResultActions actions = mockMvc.perform(
                get("/api/questions/users/{user-id}", userId)
                        .param("page", String.valueOf(page))
                        .param("size", String.valueOf(size))
                        .param("sort", sort)
                        .accept(MediaType.APPLICATION_JSON)
        );

        // then
        actions
                .andExpect(status().isOk())
                .andDo(document(
                        "question/get/allByUser",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(parameterWithName("user-id").description("?????? ?????????")),
                        requestParameters(
                                parameterWithName("page").description("?????????"),
                                parameterWithName("size").description("????????? ?????????"),
                                parameterWithName("sort").description("?????? ??????")
                        ),
                        responseFields(
                                List.of(
                                        fieldWithPath("data").type(JsonFieldType.ARRAY).description("?????? ?????????"),
                                        fieldWithPath("pageInfo").type(JsonFieldType.OBJECT).description("????????? ??????"),
                                        fieldWithPath("pageInfo.page").type(JsonFieldType.NUMBER).description("?????????"),
                                        fieldWithPath("pageInfo.size").type(JsonFieldType.NUMBER).description("????????? ?????????"),
                                        fieldWithPath("pageInfo.totalElements").type(JsonFieldType.NUMBER).description("??? ?????? ???"),
                                        fieldWithPath("pageInfo.totalPages").type(JsonFieldType.NUMBER).description("??? ????????? ???")
                                )
                        )
                )
        );
    }

    @Test
    public void getQuestionsByTag() throws Exception {
        // given
        String tagName = "java";

        int page = 0;
        int size = 30;
        String sort = "createdAt,DESC";

        PageRequest pageRequest = PageRequest.of(page, size, Sort.by("createdAt").descending());
        PageImpl<Question> response = new PageImpl<>(List.of(), pageRequest,0);


        given(questionService.findQuestionsByTag(Mockito.any(String.class), Mockito.any(Pageable.class))).willReturn(response);
        given(mapper.questionsToQuestionResponseDtos(Mockito.any())).willReturn(List.of());

        // when
        ResultActions actions = mockMvc.perform(
                get("/api/questions/tags/{tagName}", tagName)
                        .param("page", String.valueOf(page))
                        .param("size", String.valueOf(size))
                        .param("sort", sort)
                        .accept(MediaType.APPLICATION_JSON)
        );

        // then
        actions
                .andExpect(status().isOk())
                .andDo(document(
                        "question/get/allByTag",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(parameterWithName("tagName").description("??????")),
                        requestParameters(
                                parameterWithName("page").description("?????????"),
                                parameterWithName("size").description("????????? ?????????"),
                                parameterWithName("sort").description("?????? ??????")
                        ),
                        responseFields(
                                List.of(
                                        fieldWithPath("data").type(JsonFieldType.ARRAY).description("?????? ?????????"),
                                        fieldWithPath("pageInfo").type(JsonFieldType.OBJECT).description("????????? ??????"),
                                        fieldWithPath("pageInfo.page").type(JsonFieldType.NUMBER).description("?????????"),
                                        fieldWithPath("pageInfo.size").type(JsonFieldType.NUMBER).description("????????? ?????????"),
                                        fieldWithPath("pageInfo.totalElements").type(JsonFieldType.NUMBER).description("??? ?????? ???"),
                                        fieldWithPath("pageInfo.totalPages").type(JsonFieldType.NUMBER).description("??? ????????? ???")
                                )
                        )
                )
        );
    }

    @Test
    public void deleteQuestion() throws Exception {
        // given
        Long questionId = 1L;

        // when
        ResultActions actions = mockMvc.perform(
                delete("/api/questions/{question-id}", questionId));

        // then
        actions
                .andExpect(status().isNoContent())
                .andDo(document(
                        "question/delete",
                        pathParameters(parameterWithName("question-id").description("?????? ?????????"))
                        )
                );
    }
}