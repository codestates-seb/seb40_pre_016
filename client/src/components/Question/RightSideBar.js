import * as S from "../../style/question/RightSideBar.style";

function QuestionRightSidebar() {

    return (
        <S.RightSidebar>
                <S.YBox>
                    <li>The Overflow Blog</li>
                    <li>How hardware and software can maximize your flow states</li>
                    <li>A flight simulator for developers to practice real world challenges and...</li>
                </S.YBox>
                <S.YBox>
                    <li>Featured on Meta</li>
                    <li>The 2022 Community-a-thon has begun!</li>
                    <li>Mobile app infrastructure being decommissioned</li>
                    <li>Staging Ground Workflow: Canned Comments</li>
                    <li>The [script] tag is being burninated</li>
                    <li>Ask Wizard Test Graduation</li>
                </S.YBox>
            </S.RightSidebar>
    )
}

export default QuestionRightSidebar;