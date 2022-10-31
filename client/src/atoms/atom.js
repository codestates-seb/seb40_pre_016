import { atom } from 'recoil'
import DUMMYDATA from '../components/main/Question/dummyData';


import { recoilPersist } from 'recoil-persist'
const { persistAtom } = recoilPersist()

export const questionList = atom({
  key: 'questinList',
  default: DUMMYDATA,
}
);

export const isLoginState = atom({
  key: 'isLoginState',
  default: false,

})

export const loginsubmitList = atom({
  key: 'loginsubmitList',
  default: { email: '', password: '' }
})

export const signupSubmitList = atom({
  key: 'signupSubmitList',
  default: { displayName: '', email: '', password: '', captcha: '', checked: false }
})


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

export const followQ = atom({
  key: 'followQ',
  default: false
})

export const editorFocus = atom({
  key: 'editorFocus',
  default: 0,
})

export const answerFocus = atom({
  key: 'answerFocus',
  default: 0,
})

export const answer = atom({
  key: 'content',
  default: "",
})
