package stackoverflow.pre_project.vote.repository;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import stackoverflow.pre_project.question.entity.Question;
import stackoverflow.pre_project.question.repository.QuestionRepository;
import stackoverflow.pre_project.user.entity.User;
import stackoverflow.pre_project.user.repository.UserRepository;
import stackoverflow.pre_project.util.TestConstant;
import stackoverflow.pre_project.vote.entity.Vote;

import static org.assertj.core.api.Assertions.assertThat;

@DataJpaTest
class VoteRepositoryTest {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private QuestionRepository questionRepository;
    @Autowired
    private VoteRepository voteRepository;

    private User user;
    private Question question;
    private int cnt = 0;

    @BeforeEach
    public void beforeEach() {
        cnt++;
        user = User.builder()
                .email(cnt + "testConstant@test.com")
                .username(cnt + "testConstantUserName")
                .password(cnt + "testConstantPassword")
                .message(cnt + "testConstantMessage")
                .build();
        question = Question.builder()
                .title(cnt + "testConstantTitle")
                .content(cnt + "testConstantContent")
                .build();

        userRepository.save(user);
        questionRepository.save(question);
    }

    @Test
    public void voteRepoSaveAndCount() throws Exception {
        // given
        int prev = voteRepository.countByQuestionAndIsUp(question, true)
                - voteRepository.countByQuestionAndIsUp(question, false);

        Vote vote = Vote.builder().user(user).question(question).isUp(true).build();
        voteRepository.save(vote);

        // when
        int cur = voteRepository.countByQuestionAndIsUp(question, true)
                - voteRepository.countByQuestionAndIsUp(question, false);

        // then
        assertThat(cur).isEqualTo(prev + 1);
    }

    @Test
    public void voteRepoSetAndCount() throws Exception {
        // given
        Vote vote = Vote.builder().user(user).question(question).isUp(true).build();
        voteRepository.save(vote);

        int prev = voteRepository.countByQuestionAndIsUp(question, true)
                - voteRepository.countByQuestionAndIsUp(question, false);

        vote.setUp(false);

        // when
        int cur = voteRepository.countByQuestionAndIsUp(question, true)
                - voteRepository.countByQuestionAndIsUp(question, false);

        // then
        assertThat(cur).isEqualTo(prev - 2);
    }

    @Test
    public void voteRepoDeleteAndCount() throws Exception {
        // given
        Vote vote = Vote.builder().user(user).question(question).isUp(true).build();
        voteRepository.save(vote);

        int prev = voteRepository.countByQuestionAndIsUp(question, true)
                - voteRepository.countByQuestionAndIsUp(question, false);

        voteRepository.delete(vote);

        // when
        int cur = voteRepository.countByQuestionAndIsUp(question, true)
                - voteRepository.countByQuestionAndIsUp(question, false);

        // then
        assertThat(cur).isEqualTo(prev - 1);
    }

}