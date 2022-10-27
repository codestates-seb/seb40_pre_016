import { atom } from 'recoil'
import DUMMYDATA from '../components/main/Question/dummyData';

import { recoilPersist } from 'recoil-persist'
const { persistAtom } = recoilPersist()

export const questionList = atom({
  key: 'questinList',
  default: DUMMYDATA,
}
);

export const loadAuthPage = atom({
  key: 'loadAuthPage',
  default: false,
  effects_UNSTABLE: [persistAtom],
})

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