package stackoverflow.pre_project.tag.entity;

import lombok.*;
import stackoverflow.pre_project.question.entity.Question;

import javax.persistence.*;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@Builder
@Entity
public class QuestionTag {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "question_tag_id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.PERSIST)
    @JoinColumn(name = "question_id")
    @Setter
    private Question question;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.PERSIST)
    @JoinColumn(name = "tag_id")
    @Setter
    private Tag tag;

    public void addQuestion(Question question) {
        this.question = question;
        if (!this.question.getQuestionTags().contains(this)) {
            this.question.getQuestionTags().add(this);
        }
    }
}
