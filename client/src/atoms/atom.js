import { atom } from 'recoil'
import DUMMYDATA from '../components/main/Question/dummyData';





export const questionList = atom({
  key: 'questinList',
  default: DUMMYDATA,
}
);


export const answerFocus = atom({
  key: 'answerFocus',
  default: false
})