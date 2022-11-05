import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
const {persistAtom} = recoilPersist()

export const followQ = atom({
  key: "followQ",
  default: false,
});

export const answerFocus = atom({
  key: "answerFocus",
  default: 0,
});

export const answer = atom({
  key: "content",
  default: "",
});

export const questionData = atom({
    key: "questionData",
    default: {
        questionId: '',
        title: '',
        user: '',
        content: '',
        createdAt: '',
        modifiedAt: '',
        viewCount: '',
        voteCount: '',
        tagNames: [],
        answers: [{}],
        comments: [{}],
    }
})

export const voteValue = atom({
  key: "vote",
  default: 1,
  effects_UNSTABLE: [persistAtom]
})

export const voteAnswerValue = atom({
  key: "voteAnswerValue",
  default: 1,
  effects_UNSTABLE: [persistAtom]
})