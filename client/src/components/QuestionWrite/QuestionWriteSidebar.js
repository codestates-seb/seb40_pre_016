import React from 'react';
import { QuestionWriteSidebarContainer } from '../../style/QuestionWrite/QuestionWriteSidebar.style';

const QuestionWriteSidebar = () => {
  return (
    <QuestionWriteSidebarContainer>
      <div className='side1-container'>
        <div className='side1-title-container'>
          <h1>Step 1: Draft your question</h1>
        </div>

        <div className='side1-body-container'>
          <div className='side1-body-content'>
            <p>
              The community is here to help you with specific coding, algorithm,
              or language problems.
            </p>
            <p>Avoid asking opinion-based questions.</p>
          </div>
          <ul className='side1-body-accordion-container'>
            <div>
              <li>Summarize the problem</li>
              <div>^</div>
            </div>
            <div>
              <li>Describe what you’ve tried</li>
              <div>^</div>
            </div>
            <div>
              <li>Show some code</li>
              <div>^</div>
            </div>
          </ul>
        </div>
      </div>

      <div className='side2-container'>
        <h1>Have a non-programming question?</h1>
      </div>

      <div className='side3-container'>
        <h1>More helpful links</h1>
      </div>
    </QuestionWriteSidebarContainer>
  );
};

export default QuestionWriteSidebar;
