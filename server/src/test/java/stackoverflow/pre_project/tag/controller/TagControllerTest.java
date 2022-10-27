package stackoverflow.pre_project.tag.controller;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.restdocs.AutoConfigureRestDocs;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.mapping.JpaMetamodelMappingContext;
import org.springframework.http.MediaType;
import org.springframework.restdocs.payload.JsonFieldType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;
import stackoverflow.pre_project.comment.controller.CommentController;
import stackoverflow.pre_project.tag.dto.TagDto;
import stackoverflow.pre_project.tag.entity.Tag;
import stackoverflow.pre_project.tag.mapper.TagMapper;
import stackoverflow.pre_project.tag.service.TagService;

import java.util.List;

import static org.mockito.BDDMockito.given;
import static org.springframework.restdocs.mockmvc.MockMvcRestDocumentation.document;
import static org.springframework.restdocs.mockmvc.RestDocumentationRequestBuilders.get;
import static org.springframework.restdocs.operation.preprocess.Preprocessors.*;
import static org.springframework.restdocs.operation.preprocess.Preprocessors.prettyPrint;
import static org.springframework.restdocs.payload.PayloadDocumentation.fieldWithPath;
import static org.springframework.restdocs.payload.PayloadDocumentation.responseFields;
import static org.springframework.restdocs.request.RequestDocumentation.parameterWithName;
import static org.springframework.restdocs.request.RequestDocumentation.pathParameters;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(controllers = {TagController.class, TagMapper.class})
@MockBean(JpaMetamodelMappingContext.class)
@AutoConfigureRestDocs
class TagControllerTest {

    @Autowired
    private MockMvc mockMvc;
    @Autowired
    private TagMapper tagMapper;
    @MockBean
    private TagService tagService;

    @Test
    public void getTags() throws Exception {
        // given
        int page = 1;
        int size = 5;
        Tag java = Tag.builder().id(1L).name("java").questionCount(123).build();
        Tag javascript = Tag.builder().id(4L).name("javascript").questionCount(234).build();
        Tag python = Tag.builder().id(2L).name("python").questionCount(345).build();
        Tag spring = Tag.builder().id(5L).name("spring").questionCount(456).build();
        Tag react = Tag.builder().id(3L).name("react").questionCount(789).build();
        PageImpl<Tag> tags = new PageImpl<>(
                List.of(react, spring, python, javascript, java),
                PageRequest.of(page - 1, size),
                123);

        given(tagService.findTags(page, size))
                .willReturn(tags);

        // when
        ResultActions actions =
                mockMvc.perform(
                        get("/api/tags")
                                .param("page", String.valueOf(page))
                                .param("size", String.valueOf(size))
                                .contentType(MediaType.APPLICATION_JSON)
                );

        // then
        actions.andExpect(status().isOk())
                .andDo(document(
                        "/tag/getTags",
                        preprocessRequest(prettyPrint()),
                        preprocessResponse(prettyPrint()),
                        responseFields(
                                fieldWithPath("data").type(JsonFieldType.ARRAY).description("태그"),
                                fieldWithPath("data[].tagId").type(JsonFieldType.NUMBER).description("태그 식별자"),
                                fieldWithPath("data[].name").type(JsonFieldType.STRING).description("태그 이름"),
                                fieldWithPath("data[].questionCount").type(JsonFieldType.NUMBER).description("태그 질문 개수"),
                                fieldWithPath("pageInfo").type(JsonFieldType.OBJECT).description("페이지 정보"),
                                fieldWithPath("pageInfo.page").type(JsonFieldType.NUMBER).description("페이지"),
                                fieldWithPath("pageInfo.size").type(JsonFieldType.NUMBER).description("사이즈"),
                                fieldWithPath("pageInfo.totalElements").type(JsonFieldType.NUMBER).description("총 개수"),
                                fieldWithPath("pageInfo.totalPages").type(JsonFieldType.NUMBER).description("총 페이지 수")
                        )
                ));
    }

}