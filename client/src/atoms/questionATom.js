import { atom } from "recoil";

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
