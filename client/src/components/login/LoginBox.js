import React, { useState } from 'react';
import * as S from '../../style/login/LoginBox.style'

const LoginBox = () => {

    const [isSubmit, setIsSubmit] = useState(true)
    return (
        <S.Box>
            <S.InputWrap>
                <S.Label >Email</S.Label>
                <S.InputPosition>
                    <S.Input type='text' className={isSubmit ? null : `rejectInput`} />
                    {
                        isSubmit ?
                            null :
                            <>
                                <S.FloatingIcon>
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>
                                </S.FloatingIcon>
                                <p>Checking for invalid email address.</p>
                            </>

                    }
                </S.InputPosition>


            </S.InputWrap>
            <S.InputWrap>
                <S.Label >Password</S.Label>
                <S.InputPosition>
                    <S.Input type='text' className={isSubmit ? null : `rejectInput`} />
                    {
                        isSubmit ?
                            null :
                            <>
                                <S.FloatingIcon>
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg>
                                </S.FloatingIcon>
                                <p>Checking for invalid email address.</p>
                            </>

                    }
                </S.InputPosition>
            </S.InputWrap>

            <S.SubmitBtn>
                Log in
            </S.SubmitBtn>

        </S.Box>
    );
};

export default LoginBox;