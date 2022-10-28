import { atom } from 'recoil'
import DUMMYDATA from '../components/main/Question/dummyData';

export const questionList = atom(
  {
    key: 'questinList',
    default: DUMMYDATA,
  }
);

export const filterBtnIdx = atom(
  {
    key: 'filterBtnIdx',
    default: 0,
  }
);

export const pageBtnIdx = atom(
  {
    key: 'pageBtnIdx',
    default: 0,
  }
);

export const modalState = atom(
  {
    key: 'modalState',
    default: true,
  }
);


export const newQuestionState = atom(
  {
    key: 'newQuestionState',
    default: {
      title: '',
      content: ' ',
      tags: [],
    },
  }
)

// export const answerFocus = atom({
//   key: 'answerFocus',
//   default: false
// })


export const answerFocus = atom({
  key: 'answerFocus',
  default: false,
})

export const answer = atom({
  key: 'content',
  default: "",
})

