package stackoverflow.pre_project.question.entity;

import lombok.*;
import stackoverflow.pre_project.answer.entity.Answer;
import stackoverflow.pre_project.audit.Auditable;
import stackoverflow.pre_project.comment.entity.Comment;
import stackoverflow.pre_project.tag.entity.QuestionTag;
import stackoverflow.pre_project.user.entity.User;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@Builder
@Entity
public class Question extends Auditable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "question_id")
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String content;

    @Setter
    private int voteCount = 0;

    @Setter
    private int viewCount = 0;

    public void setTitle(String title) {
        this.title = title;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public void setVoteCount(int voteCount) {
        this.voteCount = voteCount;
    }

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @OneToMany(mappedBy = "question", cascade = CascadeType.ALL, orphanRemoval = true)
    private final List<Comment> comments = new ArrayList<>();

    @OneToMany(mappedBy = "question")
    private final List<Answer> answers = new ArrayList<>();

    @OneToMany(mappedBy = "question", cascade = CascadeType.ALL, orphanRemoval = true)
    private final List<QuestionTag> questionTags = new ArrayList<>();

    public void addAnswer(Answer answer) {
        this.answers.add(answer);
        if (answer.getQuestion() != this) {
            answer.addQuestion(this);
        }
    }

    public void addQuestionTag (QuestionTag questionTag) {
        this.questionTags.add(questionTag);
        if (questionTag.getQuestion() != this) {
            questionTag.addQuestion(this);
        }
    }
}