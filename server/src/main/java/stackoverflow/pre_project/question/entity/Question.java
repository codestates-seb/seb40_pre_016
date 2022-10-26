package stackoverflow.pre_project.question.entity;

import lombok.*;
import stackoverflow.pre_project.answer.Answer;
import stackoverflow.pre_project.audit.Auditable;
import stackoverflow.pre_project.comment.entity.Comment;
import stackoverflow.pre_project.tag.QuestionTag;
import stackoverflow.pre_project.user.User;

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

    private int voteCount = 0;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @OneToMany(mappedBy = "question")
    private final List<Comment> comments = new ArrayList<>();

    @OneToMany(mappedBy = "question")
    private final List<Answer> answers = new ArrayList<>();

    @OneToMany(mappedBy = "question")
    private final List<QuestionTag> questionTags = new ArrayList<>();
}