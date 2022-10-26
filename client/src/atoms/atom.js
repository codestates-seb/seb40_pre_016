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
