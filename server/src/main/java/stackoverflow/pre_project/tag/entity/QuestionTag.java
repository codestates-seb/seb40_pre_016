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
    private Question question;

    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.PERSIST)
    @JoinColumn(name = "tag_id")
    private Tag tag;

    public void addQuestion(Question question) {
        this.question = question;
        if (!question.getQuestionTags().contains(this)) {
            question.addQuestionTag(this);
        }
    }

    public void addTag(Tag tag) {
        this.tag = tag;
        if (!tag.getQuestionTags().contains(this)) {
            tag.addQuestionTag(this);
        }
    }
}
