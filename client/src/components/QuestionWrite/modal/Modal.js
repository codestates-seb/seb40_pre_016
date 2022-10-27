import React from "react";
import * as S from '../../../style/QuestionWrite/Modal.style'
import { useRecoilState } from 'recoil';
import { modalState } from "../../../atoms/atom";


const Modal = ({ className }) => {
  const [isOpen, setIsopen] = useRecoilState(modalState);
  setIsopen(true);
  const modalHandler = () => {
    setIsopen(false);
  };

  return (
    <S.ModalSelect>
      <S.ModalBack onClick={modalHandler}></S.ModalBack>
      <S.ModalContainer>
        <div>
          <button className="cancel" onClick={modalHandler}>X</button>
          <h1>Asking a good question</h1>
          <p>You’re ready to ask your first programming-related question and the community is here to help! To get you the best answers, we’ve provided some guidance:</p>
          <p>Before you post, <a href="https://stackoverflow.com/search">search the site</a> to make sure your question hasn’t been answered.</p>
          <ul>
            <li>Summarize the problem</li>
            <li>Describe what you’ve tried</li>
            <li>When appropriate, show some code</li>
          </ul>
          <p className="last_p">You’ll find more tips in the sidebar.</p>
        </div>
        <footer>
          <button className="startWriting">Start Writing</button>
          <button className="dontShow">Don't show me this again</button>
        </footer>
      </S.ModalContainer>
    </S.ModalSelect>
  );
};

export default Modal;