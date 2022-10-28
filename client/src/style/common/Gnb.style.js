import styled from 'styled-components';

export const GnbContainer = styled.aside`
position: sticky;
top: 50px;
min-width: 170px;
padding-top: 40px;
border-right: 1px solid var(    --black-100);
&.none{
    display: none;
}

@media screen and (max-width:  640px) {
        display: none;    
    }
`
export const GnbTag = styled.p`
font-size: 11px;
margin: 10px 0px;
    padding-left: 10px;
`
export const TabList = styled.ul`
width: 100%;

`
export const AList = styled.div`
& a{
text-decoration: none;
    display: block;
width: 100%;
transition: background-color 0.4s ease 0s;
cursor: pointer;
}
& a.select {
    background-color: var(--black-050);
    border-right: 3px solid var(--orange-400);
}
& a span{
    display: block;
   height: 40px;
   padding-left: 35px;
   position: relative;
   line-height: 40px;
   color:var(--black-500);
   font-size: 13px;

   & svg {
fill:var(--black-500);
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 16px;
   }
}

`
export const List = styled.li`
`