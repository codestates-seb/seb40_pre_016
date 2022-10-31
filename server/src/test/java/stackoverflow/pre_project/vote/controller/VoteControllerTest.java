package stackoverflow.pre_project.vote.controller;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.restdocs.AutoConfigureRestDocs;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.FilterType;
import org.springframework.context.annotation.Import;
import org.springframework.data.jpa.mapping.JpaMetamodelMappingContext;
import org.springframework.http.MediaType;
import org.springframework.restdocs.payload.FieldPathPayloadSubsectionExtractor;
import org.springframework.restdocs.payload.JsonFieldType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;
import stackoverflow.pre_project.config.SecurityTestConfig;
import stackoverflow.pre_project.vote.service.VoteService;

import static org.mockito.BDDMockito.given;
import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.post;
import static org.springframework.restdocs.operation.preprocess.Preprocessors.*;
import static org.springframework.restdocs.operation.preprocess.Preprocessors.prettyPrint;
import static org.springframework.restdocs.payload.PayloadDocumentation.*;
import static org.springframework.restdocs.request.RequestDocumentation.parameterWithName;
import static org.springframework.restdocs.request.RequestDocumentation.pathParameters;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(controllers = VoteController.class)
@Import(SecurityTestConfig.class)
@MockBean(JpaMetamodelMappingContext.class)
@AutoConfigureRestDocs
class VoteControllerTest {

    @Autowired
    private MockMvc mockMvc;
    @MockBean
    private VoteService voteService;

    @Test
    void postQuestionVote() throws Exception {
        // given
        Long questionId = 1L;
        int flag = 1;

        given(voteService.questionVote(questionId, flag, null))
                .willReturn(1);

        // when
        ResultActions actions = mockMvc.perform(
                post("/api/questions/{question-id}/vote/{flag}", questionId, flag)
                        .contentType(MediaType.APPLICATION_JSON)
        );

        // then
        actions.andExpect(status().isOk())
                .andExpect(jsonPath("$").value(1))
                .andDo(document("/vote/postQuestionVote",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(
                                parameterWithName("question-id").description("질문 식별자"),
                                parameterWithName("flag").description("1: 추천 / 2: 비추천 / 3: 취소")
                        )));
    }

    @Test
    void postAnswerVote() throws Exception {
        // given
        Long answerId = 1L;
        int flag = 1;

        given(voteService.answerVote(answerId, flag, null))
                .willReturn(1);

        // when
        ResultActions actions = mockMvc.perform(
                post("/api/answers/{answer-id}/vote/{flag}", answerId, flag)
                        .contentType(MediaType.APPLICATION_JSON)
        );

        // then
        actions.andExpect(status().isOk())
                .andExpect(jsonPath("$").value(1))
                .andDo(document("/vote/postAnswerVote",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        pathParameters(
                                parameterWithName("answer-id").description("답변 식별자"),
                                parameterWithName("flag").description("1: 추천 / 2: 비추천 / 3: 취소")
                        )));
    }

}