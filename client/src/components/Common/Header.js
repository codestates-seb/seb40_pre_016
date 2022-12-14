import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { isLoginState, loginIdstorige } from './../../atoms/atom';
import * as S from './../../style/common/Header.style';
import userImage from './../../assets/img/user_porfile.png';
import SearchHint from './SearchHint';

const Header = () => {
    let isLogin = useRecoilValue(isLoginState);
    let [isSearchClicked, setIsSearchClicked] = useState(false);
    const loginId = useRecoilValue(loginIdstorige);

    const navigate = useNavigate();
    const handleClickButton = () => {
        setIsSearchClicked(false);
        navigate('/askquestion');
    };
    const onHint = () => {
        setIsSearchClicked(true);
    };
    const myHintRef = useRef();
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (myHintRef.current && !myHintRef.current.contains(e.target)) {
                setIsSearchClicked(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [myHintRef]);


    const LinkuserPage = () => {
        navigate(`/users/${loginId}/profile`)
        window.location.reload()
    }


    return (
        <S.HeaderContainer>
            <S.Container>
                <S.MHamberBtn>
                    <S.SpanLine></S.SpanLine>
                    <S.SpanLine></S.SpanLine>
                    <S.SpanLine></S.SpanLine>
                </S.MHamberBtn>
                <S.Logo>
                    <Link to='/questions/page=1'>
                        <svg
                            width='189'
                            height='530'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                            className='sc-elYLMi iDCEbB'
                        >
                            <path
                                d='M48 280.8v7.6l8.5 7.6L73 281.2V273l-16.5 14.9-8.5-7.1zM22 324v3l4 4 7-6v-4l-7 6'
                                fill='#5EBA7D'
                            ></path>
                            <path
                                d='M8 280.8v7.6l8.6 7.6L33 281.2V273l-16.4 14.9'
                                fill='#C9CBCF'
                            ></path>
                            <path d='M45 191h29l-14.4-15' fill='#F48024'></path>
                            <path d='M5 191h29l-14.5-15' fill='#C9CBCF'></path>
                            <path
                                d='M59.6 243L74 228H45l14.6 15zM6.5 322.5L0 329h13'
                                fill='#F48024'
                            ></path>
                            <path
                                d='M7.5 386.5L0 380v13l7.5-6.5zm47.5 87l-8-6.5v13l8-6.5zm-48.5 0L14 480v-13l-7.5 6.5zm20-84L33 383H20M6.5 341.5L0 348h13M19.5 243L34 228H5M19.5 120l2.9 9.2H32l-7.7 5.6 3 9.2-7.8-5.7-7.8 5.7 3-9.2-7.7-5.6h9.6'
                                fill='#C9CBCF'
                            ></path>
                            <path
                                d='M59.6 120l2.9 9.2h9.6l-7.7 5.6 3 9.2-7.8-5.7-7.8 5.7 3-9.2-7.7-5.6h9.6'
                                fill='#FFD83D'
                            ></path>
                            <path
                                d='M59.6 123.3l2.2 6.9H69l-5.8 4.2 2.3 6.9-5.9-4.3-5.9 4.3 2.3-6.9-5.8-4.2h7.3l2.1-6.9zm0-3.3l-2.9 9.2h-9.6l7.7 5.6-3 9.2 7.8-5.7 7.8 5.7-3-9.2 7.7-5.6h-9.6l-2.9-9.2z'
                                fill='#EAC328'
                            ></path>
                            <path d='M65 408a3 3 0 100-6 3 3 0 000 6z' fill='#D1A684'></path>
                            <path d='M85 408a3 3 0 100-6 3 3 0 000 6z' fill='#B4B8BC'></path>
                            <path d='M105 408a3 3 0 100-6 3 3 0 000 6z' fill='current'></path>
                            <path
                                d='M47 367h2v2h-2v-2zm3 3h2v2h-2v-2zm6 0h2v2h-2v-2zm6 0h2v2h-2v-2zm6 0h2v2h-2v-2zm-15-3h2v2h-2v-2zm6 0h2v2h-2v-2zm6 0h2v2h-2v-2zm6 0h2v2h-2'
                                fill='#93999F'
                            ></path>
                            <path d='M0 400v31h31v-31' fill='#C9CBCF'></path>
                            <path
                                d='M20 419a14 14 0 018 12H3a14.1 14.1 0 018-12v-.5a7.5 7.5 0 1111.6-8.4 7.5 7.5 0 01-2.6 8.4v.5z'
                                fill='#fff'
                            ></path>
                            <path d='M60 340h2v14h-2M63 341h10v8H63' fill='#C9CBCF'></path>
                            <path d='M60 320h2v14h-2' fill='#DD3C4C'></path>
                            <path d='M63 321h10v8H63' fill='#EEC4C8'></path>
                            <path d='M80 320h14v14H80' fill='#FE6502'></path>
                            <path
                                d='M84 329c-1.4 0-2 .6-2 2 0 .4.6 1 2 1 .4 0 1-.6 1-1 0-1.4-.6-2-1-2zm-2-4v2a5.1 5.1 0 015 5h2a7 7 0 00-7-7zm0-3v2a7.9 7.9 0 018 8h2a10 10 0 00-10-10z'
                                fill='#fff'
                            ></path>
                            <path
                                d='M22.6 347.1l-.7 3.2 3.2-.7-2.5-2.5zm.8-.7l3.6-3.6 2.5 2.5-3.6 3.6-2.5-2.5zm5.7-5.1c-.4 0-.8.1-1.1.4l-.7.7 2.5 2.5.7-.7c.2-.3.4-.7.4-1.1 0-1-.8-1.8-1.8-1.8z'
                                fill='#6C737A'
                            ></path>
                            <path
                                d='M107 459a7 7 0 100-14 7 7 0 000 14z'
                                fill='#C91D2E'
                            ></path>
                            <path
                                d='M110.2 453.7l-1.9-1.9 1.9-1.9v-.3l-.9-.8h-.3l-2 2-1.8-2h-.3l-.9.8v.3l1.9 1.9-1.9 1.9v.3l.9.9h.3l1.9-1.9 1.9 1.9h.3l.9-.9'
                                fill='#fff'
                            ></path>
                            <path
                                d='M47 354a7 7 0 100-14 7 7 0 000 14z'
                                fill='#C91D2E'
                            ></path>
                            <path
                                d='M50.2 348.7l-1.9-1.9 1.9-1.9v-.3l-.9-.8H49l-2 2-1.8-2h-.3l-.9.8v.3l1.9 1.9-1.9 1.9v.3l.9.9h.3l1.9-1.9 1.9 1.9h.3l.9-.9'
                                fill='#fff'
                            ></path>
                            <path
                                d='M47 333a7 7 0 100-14 7 7 0 000 14z'
                                fill='#C9CBCF'
                            ></path>
                            <path
                                d='M50.2 327.7l-1.9-1.9 1.9-1.9v-.3l-.9-.8H49l-2 2-1.8-2h-.3l-.9.8v.3l1.9 1.9-1.9 1.9v.3l.9.9h.3l1.9-1.9 1.9 1.9h.3l.9-.9'
                                fill='#fff'
                            ></path>
                            <path
                                d='M42 31l-2.2-.2c-1.7-.1-2.3-.8-2.3-2 0-1.4 1-2.2 3-2.2 1.3-.1 2.6.3 3.6 1.1l1.3-1.3a7.5 7.5 0 00-4.8-1.4c-2.9 0-4.9 1.5-4.9 3.9 0 2.2 1.4 3.4 4 3.6l2.2.2c1.6.1 2.2.8 2.2 2 0 1.6-1.4 2.4-3.6 2.4-1.6.1-3.1-.5-4.2-1.6L35 36.8c1.5 1.4 3.5 2 5.5 1.9 3.2 0 5.5-1.5 5.5-4.1 0-2.6-1.6-3.4-4-3.6zm15.8-6.1c-2.2 0-3.5.4-4.7 1.9l1.3 1.3a3.6 3.6 0 013.4-1.5c2.5 0 3.4 1 3.4 2.9v1.3h-4c-3 0-4.6 1.5-4.6 3.9 0 1 .3 2 1 2.7.8.9 1.9 1.2 3.8 1.2 1.4.1 2.9-.4 3.9-1.4v1.3h2v-9.1c-.1-2.9-1.9-4.5-5.5-4.5zm3.4 8.9c.1.8-.1 1.7-.7 2.3a4 4 0 01-3 .9c-2.1 0-3.1-.7-3.1-2.3 0-1.6 1-2.4 3-2.4h3.8v1.5zm9.7-7.1c1.2 0 2.4.5 3.1 1.5l1.3-1.3a5.4 5.4 0 00-4.4-2c-3.4 0-5.9 2.3-5.9 6.9 0 4.6 2.6 6.9 5.9 6.9 1.7.1 3.3-.7 4.4-2L74 35.4c-.7 1-1.9 1.5-3.1 1.5-1.2.1-2.4-.5-3.1-1.5-.7-1.1-1-2.3-.9-3.6-.1-1.3.2-2.5.9-3.6.7-1 1.9-1.6 3.1-1.5zm16.8-1.6h-2.4L79.2 31V19.1h-2v19.4h2v-4.9l2.4-2.4 4.5 7.3h2.4l-5.6-8.6 4.8-4.8zm9.2-.2c-1.6 0-3.2.5-4.3 1.7-1.3 1.3-1.6 3-1.6 5.4 0 2.5.3 4.1 1.6 5.4a6.1 6.1 0 004.3 1.7c1.6.1 3.2-.5 4.3-1.7 1.3-1.3 1.6-2.9 1.6-5.4 0-2.5-.3-4-1.6-5.4a5.4 5.4 0 00-4.3-1.7zm1.7 10.5c-.9.8-2.3.8-3.2 0-.7-.7-.8-2-.8-3.4s.1-2.7.8-3.4c.9-.8 2.3-.8 3.2 0 .7.7.8 2 .8 3.4 0 1.5-.1 2.7-.8 3.4zM112.2 25l-2.8 8.6-2.8-8.6h-3.7l5.2 14h2.7l5.1-14h-3.7zm9.6 0c-3.6 0-6.1 2.5-6.1 7 0 5.7 3.2 7.2 6.5 7.2 2 .1 4-.7 5.3-2.2l-2.1-2c-.8.8-2 1.3-3.2 1.2a3 3 0 01-3.1-2.7v-.4h8.7v-1.6c.1-3.8-2.1-6.6-6-6.6zm-2.7 5.7l.3-1.5c.4-.9 1.3-1.4 2.3-1.4 1 0 1.9.5 2.3 1.4l.3 1.5h-5.2zm13.3-4.3v-1.3H129v14h3.5v-8.4c0-1.3.8-2.4 2.1-2.6h.2c.7 0 1.4.3 1.8.8l2.6-2.6A4.1 4.1 0 00136 25c-1.3 0-2.6.4-3.5 1.4zm7.6-2.8V39h3.5V28h2.6v-2.7h-2.6v-1.5c0-.6.3-1.2 1-1.3h1.5v-3h-2a3.9 3.9 0 00-4 3.8v.3zm20.3 1.3c-1.6 0-3.2.5-4.3 1.7-1.3 1.3-1.6 3-1.6 5.4 0 2.5.3 4.1 1.6 5.4a6.1 6.1 0 004.3 1.7c1.6.1 3.2-.5 4.3-1.7 1.3-1.3 1.6-2.9 1.6-5.4 0-2.5-.3-4-1.6-5.4a5.4 5.4 0 00-4.3-1.7zm1.7 10.5c-.9.8-2.3.8-3.2 0-.7-.7-.8-2-.8-3.4s.1-2.7.8-3.4c.9-.8 2.3-.8 3.2 0 .7.7.8 2 .8 3.4 0 1.5-.1 2.7-.8 3.4zM182.7 25l-2.3 8.6-2.9-8.6H175l-2.8 8.7-2.3-8.6h-3.7l4.3 14h2.9l2.9-8.8 2.9 8.8h3l4.3-14h-3.8zm-31.2 9.8V19.6H148V35a3.8 3.8 0 003.6 4h2.5v-3h-1.3c-.6.1-1.1-.2-1.3-.8v-.4zm-98.8-9.4H49V21h-2v13.9c0 2 1.1 3.6 3.4 3.6h1.4v-1.7h-1c-1.3 0-1.8-.7-1.8-2v-7.7h1.9l1.8-1.7z'
                                fill='#222426'
                            ></path>
                            <path d='M26 41v-9h4v13H0V32h4v9h22z' fill='#BCBBBB'></path>
                            <path
                                d='M23 34l.8-3-16.1-3.3L7 31l16 3zM9.2 23.2l15 7 1.4-3-15-7-1.4 3zm4.2-7.4L26 26.4l2.1-2.5-12.7-10.6-2.1 2.5zM21.5 8l-2.7 2 9.9 13.3 2.7-2L21.5 8zM7 38h16v-3H7v3z'
                                fill='#F48024'
                            ></path>
                            <path d='M21 527v-8h3v11H0v-11h3v8h18z' fill='#BCBBBB'></path>
                            <path
                                d='M5.4 519.1l13.6 2 .1-2.4L6 516l-.5 3zm1.8-6.8l12 5.6 1.1-2.4-12-5.6-1.1 2.4zm3.4-5.9l10.2 8.5 1.7-2-10.2-8.5-1.7 2zm6.5-6.2l-2.1 1.6 7.9 10.6 2.1-1.6-7.9-10.6zM5 525h14v-3H5v3z'
                                fill='#F48024'
                            ></path>
                            <path
                                d='M34 518.9l-1.7-.2c-1.3 0-1.8-.6-1.8-1.5 0-1 .7-1.8 2.3-1.8 1 0 2 .3 2.6.8l1-1c-1-.7-2.2-1-3.6-1-2.2 0-3.8 1.1-3.8 3 0 1.7 1 2.6 3 2.8l1.8.1c1.2.1 1.7.6 1.7 1.6 0 1.2-1 1.8-2.6 1.8-1.3 0-2.4-.3-3.2-1.1l-1 1c1.2 1 2.5 1.3 4.2 1.3 2.5 0 4.2-1.1 4.2-3-.2-2-1.5-2.6-3.2-2.8zm12.7-4.6c-1.7 0-2.7.3-3.6 1.4l1 1c.6-.9 1.2-1.2 2.6-1.2 1.8 0 2.6.8 2.6 2.2v1h-3.1c-2.3 0-3.6 1.2-3.6 3 0 .7.3 1.5.8 2 .7.8 1.4 1 2.9 1a4 4 0 003-1v1h1.5v-7c-.1-2.3-1.4-3.4-4.1-3.4zm2.6 6.7c0 .9-.2 1.4-.5 1.7-.7.6-1.5.7-2.3.7-1.7 0-2.3-.6-2.3-1.7 0-1.2.7-1.8 2.3-1.8h2.9l-.1 1.1zm7.2-5.4c1 0 1.6.3 2.4 1.2l1-1c-1.1-1.1-2-1.5-3.4-1.5-2.6 0-4.6 1.7-4.6 5.3 0 3.4 2 5.2 4.6 5.2 1.4 0 2.3-.3 3.3-1.5l-1-1c-.8 1-1.4 1.2-2.3 1.2a3 3 0 01-2.4-1.1c-.5-.7-.7-1.5-.7-2.8 0-1.3.2-2.1.7-2.8.6-.8 1.5-1.2 2.4-1.2zm12.9-1.2h-1.8l-4.6 4.5v-9.1h-1.6v14.8H63v-3.8l1.8-1.8 3.5 5.6H70l-4.2-6.7 3.5-3.5zm7-.3c-1.5 0-2.6.6-3.3 1.3-1 1-1.2 2.3-1.2 4.2 0 1.9.3 3.1 1.2 4 .7.8 1.8 1.4 3.3 1.4 1.5 0 2.7-.5 3.3-1.3 1-1 1.2-2.2 1.2-4.1 0-2-.3-3.2-1.2-4.2-.6-.7-1.7-1.3-3.3-1.3zm1.3 8c-.3.3-.7.4-1.3.4-.6 0-1-.1-1.2-.4-.6-.6-.6-1.6-.6-2.6 0-1.2 0-2 .6-2.6.2-.3.6-.5 1.2-.5s1 .2 1.3.5c.5.6.5 1.4.5 2.6.1 1.1 0 2-.5 2.6zm10.3-7.9l-2.1 6.6-2.2-6.6h-2.8l4 10.6h2l4-10.6H88zm7.3-.1c-2.8 0-4.6 2-4.6 5.5 0 4.3 2.4 5.4 4.9 5.4 2 0 3-.5 4-1.6L98 522a3 3 0 01-2.4 1c-1.5 0-2.3-1-2.3-2.5h6.6v-1.1c0-3-1.6-5.2-4.6-5.2zm-2 4.4c0-.5 0-.8.3-1.1.3-.7.8-1.2 1.8-1.2a2 2 0 011.8 1.2c.2.3.2.6.3 1.1h-4.2zm10.5-3.2v-1.1h-2.5v10.6h2.6v-6.4c0-1.3.9-1.9 1.8-1.9.6 0 1 .2 1.4.7l2-2c-.8-.8-1.4-1-2.5-1-1.2-.1-2.2.4-2.8 1zm5.4-2.3v11.8h2.7v-8.4h2v-2h-2v-1.2c0-.5.3-1 1-1h1v-2.1h-1.5c-2.2 0-3.2 1.5-3.2 3zm16.2 1.1c-1.5 0-2.6.6-3.2 1.3-1 1-1.3 2.3-1.3 4.2 0 1.9.3 3.1 1.3 4 .6.8 1.7 1.4 3.2 1.4 1.6 0 2.7-.5 3.3-1.3 1-1 1.2-2.2 1.2-4.1 0-2-.3-3.2-1.2-4.2-.6-.7-1.7-1.3-3.3-1.3zm1.3 8c-.3.3-.7.4-1.3.4-.6 0-1-.1-1.2-.4-.6-.6-.6-1.6-.6-2.6 0-1.2.1-2 .6-2.6.3-.3.6-.5 1.2-.5s1 .2 1.3.5c.5.6.5 1.4.5 2.6 0 1.1 0 2-.5 2.6zm15.8-7.9l-1.7 6.6-2.2-6.6h-2l-2.2 6.6-1.7-6.6H130l3.3 10.6h2.2l2.2-6.7 2.2 6.7h2.2l3.3-10.6h-2.8zm-24.6 7.4V510h-2.7v11.8c0 1.5 1 3 3.1 3h1.6v-2.2h-1c-.7 0-1-.3-1-1zM41 516l1.4-1.3h-3v-3.4H38V522c0 1.5.9 2.7 2.6 2.7h1v-1.2h-.7c-1 0-1.4-.6-1.4-1.5V516H41z'
                                fill='#222426'
                            ></path>
                        </svg>
                    </Link>
                </S.Logo>
                <S.Product className='mList'>About</S.Product>
                <S.Product>products</S.Product>
                <S.Product className='mList'>ForTeam</S.Product>
                <S.SearchCopo
                    ref={myHintRef}
                    onClick={onHint}
                    className={isLogin ? 'inputsize' : null}
                >
                    <input placeholder='Search' type='text' />
                    <svg
                        stroke='currentColor'
                        fill='currentColor'
                        strokeWidth='0'
                        viewBox='0 0 16 16'
                        className='sc-fIavCj bZJnjy'
                        height='1em'
                        width='1em'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'></path>
                    </svg>
                    {isSearchClicked ? (
                        <SearchHint handleClickButton={handleClickButton} />
                    ) : null}
                </S.SearchCopo>
                <S.SearchBtnWarp>
                    <S.SearchBtn>
                        {' '}
                        <svg
                            stroke='currentColor'
                            fill='currentColor'
                            strokeWidth='0'
                            viewBox='0 0 16 16'
                            className='sc-fIavCj bZJnjy'
                            height='1em'
                            width='1em'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'></path>
                        </svg>
                    </S.SearchBtn>
                </S.SearchBtnWarp>
                <S.IsLoginWarp className={isLogin ? null : 'none'}>
                    <Link onClick={LinkuserPage}>
                        <S.UserProfile>
                            <img src={userImage} alt='uerimg' />{' '}
                        </S.UserProfile>
                    </Link>
                    <S.IconListWarp>
                        <S.Icon>
                            <svg
                                aria-hidden='true'
                                className='sc-afnQL iWgnXm'
                                width='20'
                                height='18'
                                viewBox='0 0 20 18'
                            >
                                <path d='M4.63 1h10.56a2 2 0 0 1 1.94 1.35L20 10.79V15a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-4.21l2.78-8.44c.25-.8 1-1.36 1.85-1.35Zm8.28 12 2-2h2.95l-2.44-7.32a1 1 0 0 0-.95-.68H5.35a1 1 0 0 0-.95.68L1.96 11h2.95l2 2h6Z'></path>
                            </svg>
                        </S.Icon>
                        <S.Icon>
                            <svg
                                aria-hidden='true'
                                className='sc-kngDgl cBjwpD'
                                width='18'
                                height='18'
                                viewBox='0 0 18 18'
                            >
                                <path d='M15 2V1H3v1H0v4c0 1.6 1.4 3 3 3v1c.4 1.5 3 2.6 5 3v2H5s-1 1.5-1 2h10c0-.4-1-2-1-2h-3v-2c2-.4 4.6-1.5 5-3V9c1.6-.2 3-1.4 3-3V2h-3ZM3 7c-.5 0-1-.5-1-1V4h1v3Zm8.4 2.5L9 8 6.6 9.4l1-2.7L5 5h3l1-2.7L10 5h2.8l-2.3 1.8 1 2.7h-.1ZM16 6c0 .5-.5 1-1 1V4h1v2Z'></path>
                            </svg>
                        </S.Icon>
                        <S.Icon>
                            <svg
                                aria-hidden='true'
                                className='sc-cwpsFg fKuhbU'
                                width='18'
                                height='18'
                                viewBox='0 0 18 18'
                            >
                                <path d='M9 1C4.64 1 1 4.64 1 9c0 4.36 3.64 8 8 8 4.36 0 8-3.64 8-8 0-4.36-3.64-8-8-8Zm.81 12.13c-.02.71-.55 1.15-1.24 1.13-.66-.02-1.17-.49-1.15-1.2.02-.72.56-1.18 1.22-1.16.7.03 1.2.51 1.17 1.23ZM11.77 8c-.59.66-1.78 1.09-2.05 1.97a4 4 0 0 0-.09.75c0 .05-.03.16-.18.16H7.88c-.16 0-.18-.1-.18-.15.06-1.35.66-2.2 1.83-2.88.39-.29.7-.75.7-1.24.01-1.24-1.64-1.82-2.35-.72-.21.33-.18.73-.18 1.1H5.75c0-1.97 1.03-3.26 3.03-3.26 1.75 0 3.47.87 3.47 2.83 0 .57-.2 1.05-.48 1.44Z'></path>
                            </svg>
                        </S.Icon>
                        <S.Icon>
                            <svg
                                aria-hidden='true'
                                className='sc-dkSuNL BKRVt'
                                width='18'
                                height='18'
                                viewBox='0 0 18 18'
                            >
                                <path d='M15 1H3a2 2 0 0 0-2 2v2h16V3a2 2 0 0 0-2-2ZM1 13c0 1.1.9 2 2 2h8v3l3-3h1a2 2 0 0 0 2-2v-2H1v2Zm16-7H1v4h16V6Z'></path>
                            </svg>
                        </S.Icon>
                    </S.IconListWarp>
                </S.IsLoginWarp>
                <S.LoginBtn className={isLogin ? 'none' : null}>
                    <Link to='/login'>Log in</Link>
                </S.LoginBtn>
                <S.SignupBtn className={isLogin ? 'none' : null}>
                    <Link to='/signup'>Sign up</Link>
                </S.SignupBtn>
            </S.Container>
        </S.HeaderContainer>
    );
};

export default Header;
