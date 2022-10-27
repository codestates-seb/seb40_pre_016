package stackoverflow.pre_project.answer.entity;

import lombok.*;
import stackoverflow.pre_project.audit.Auditable;
import stackoverflow.pre_project.comment.entity.Comment;
import stackoverflow.pre_project.question.entity.Question;
import stackoverflow.pre_project.user.User;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@Builder
@Entity
public class Answer extends Auditable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "answer_id")
    private Long id;

    @Column(nullable = false)
    private String content;

    private int voteCount = 0;

    public void setContent(String content) {
        this.content = content;
    }

    public void setVoteCount(int voteCount) {
        this.voteCount = voteCount;
    }

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @OneToMany(mappedBy = "answer")
    private final List<Comment> comments = new ArrayList<>();

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "question_id")
    private Question question;

    public void addQuestion(Question question) {
        this.question = question;
        if (!this.question.getAnswers().contains(this)) {
            this.question.addAnswer(this);
        }
    }
}