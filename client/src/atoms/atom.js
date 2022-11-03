import { atom } from 'recoil';
import DUMMYDATA from '../components/main/Question/dummyData';

import { recoilPersist } from 'recoil-persist';
const { persistAtom } = recoilPersist();

export const questionList = atom({
  key: 'questionList',
  default: {
    answers: [],
    comments: [],
    content: '',
    createdAt: '',
    modifiedAt: '',
    questionId: '',
    tagNames: [],
    title: '',
    user: '',
    viewCount: '',
    voteCount: '',
  },
});

export const isLoginState = atom({
  key: 'isLoginState',
  default: false,
});

export const loginsubmitList = atom({
  key: 'loginsubmitList',
  default: { email: '', password: '' },
});

export const signupSubmitList = atom({
  key: 'signupSubmitList',
  default: {
    displayName: '',
    email: '',
    password: '',
    captcha: '',
    checked: false,
  },
});

export const filterBtnIdx = atom({
  key: 'filterBtnIdx',
  default: 'createdAt',
});

export const pageBtnIdx = atom({
  key: 'pageBtnIdx',
  default: 0,
});

export const totalPageNum = atom({
  key: 'totalPageNum',
  default: 0,
});

export const modalState = atom({
  key: 'modalState',
  default: true,
});

export const newQuestionState = atom({
  key: 'newQuestionState',
  default: {
    title: '',
    content: ' ',
    tagNames: [],
  },
});

export const editQuestionState = atom({
  key: 'editQuestionState',
  default: {
    title: '',
    content: ' ',
    tagNames: [],
  },
});

export const editAnswerState = atom({
  key: 'editAnswerState',
  default: {
    content: ' ',
  },
});

export const editorFocus = atom({
  key: 'editorFocus',
  default: 0,
});
