package stackoverflow.pre_project.tag.repository;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import stackoverflow.pre_project.tag.entity.Tag;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
class TagRepositoryTest {

    @Autowired
    private TagRepository tagRepository;

    @Test
    public void findAllTags() throws Exception {
        // given
        Tag java = Tag.builder().name("java").questionCount(123).build();
        Tag javascript = Tag.builder().name("javascript").questionCount(234).build();
        Tag python = Tag.builder().name("python").questionCount(345).build();
        Tag spring = Tag.builder().name("spring").questionCount(456).build();
        Tag react = Tag.builder().name("react").questionCount(789).build();
        tagRepository.saveAll(List.of(java, python, react, javascript, spring));

        // when
        Page<Tag> tags = tagRepository.findAll(
                PageRequest.of(0, 5, Sort.by("questionCount").descending()));

        // then
        assertThat(tags.getContent().get(0).getQuestionCount())
                .isGreaterThanOrEqualTo(tags.getContent().get(1).getQuestionCount());
        assertThat(tags.getContent().get(1).getQuestionCount())
                .isGreaterThanOrEqualTo(tags.getContent().get(2).getQuestionCount());
        assertThat(tags.getContent().get(2).getQuestionCount())
                .isGreaterThanOrEqualTo(tags.getContent().get(3).getQuestionCount());
        assertThat(tags.getContent().get(3).getQuestionCount())
                .isGreaterThanOrEqualTo(tags.getContent().get(4).getQuestionCount());
    }

}