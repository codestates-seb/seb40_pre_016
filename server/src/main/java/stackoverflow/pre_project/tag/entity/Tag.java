package stackoverflow.pre_project.tag.entity;

import lombok.*;

import javax.persistence.*;
import java.util.LinkedList;
import java.util.List;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor(access = AccessLevel.PRIVATE)
@Builder
@Entity
public class Tag {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "tag_id")
    private Long id;

    @Column(nullable = false, unique = true)
    private String name;

    private int questionCount = 0;

    @OneToMany(mappedBy = "tag", cascade = {CascadeType.PERSIST, CascadeType.REMOVE}, orphanRemoval = true)
    private final List<QuestionTag> questionTags = new LinkedList<>();

    public void addQuestionTag(QuestionTag questionTag) {
        this.questionTags.add(questionTag);
        updateQuestionCount(true);
        if (questionTag.getTag() != this) {
            questionTag.addTag(this);
        }
    }

    public void deleteQuestionTag(QuestionTag questionTag) {
        this.questionTags.remove(questionTag);
        updateQuestionCount(false);
    }

    private void updateQuestionCount(boolean isUp) {
        if (isUp) questionCount++;
        else questionCount--;
    }
}
