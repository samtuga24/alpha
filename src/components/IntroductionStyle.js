import styled from "styled-components";
import { device } from './MobileDevice';
import background from '../background/intro-background.svg'

export const Container = styled.div`
padding-top: 6%;
background: #FFF8EB;
`;

export const Wrapper = styled.div`
display: flex;
flex: 2;
padding-top: 5vw;
padding-left: 10%;
background: url(${background});
background-size: cover;
background-position: center;
@media ${device.mobilexxxS} { 
    display: none;
}
@media ${device.mobilexxS} { 
    display: none;
}

@media ${device.mobileS} { 
    display: none;
}

@media ${device.mobilexS} { 
    display: none;
}

@media ${device. mobileM} { 
    display: none;
}

@media ${device. mobileL} { 
    display: none;
}

@media ${device. mobileLx} { 
    display: none;
}
@media ${device. tablet} { 
    display: flex;
}

@media ${device.laptop} { 
    display: flex;
}

@media ${device. laptopL} { 
    display: flex;
}

@media ${device. desktop} { 
    display: flex;
}
`;

export const IntroDIv = styled.div`
flex: 1;
`;

export const IntroHeader = styled.div`
font-weight: 600;
font-size: 3.2vw;
// line-height: 5%;
letter-spacing: -0.03em;
color: #0A0C14;
`;

export const IntroDesc = styled.div`
font-weight: 400;
font-size: 1.2vw;
// line-height: 160%;
letter-spacing: -0.01em;
color: #666666;
// margin-top: -6%;
`;

export const IntroDownloadButton = styled.div`
display: flex;
width: 60%;
`;

export const Android = styled.div`
width: 100%;
margin-right: 1.2vw;
`;

export const Apple = styled.div`
width: 100%;
`;


export const IntroImageDiv = styled.div`
flex: 1;

`;

export const IntroImageIcons = styled.div`
display: flex;
flex: 2;
`;

export const Icons = styled.div`
flex: 1;
position: relative;
`;

export const Orange = styled.div`
position: absolute;
width: 100%;
left: 17vw;
top: -2vw;
`;

export const OrangeArrow = styled.div`
position: absolute;
left: 22.5vw;
top: 4.7vw;
width: 100%;
`;

export const Green = styled.div`
position: absolute;
width: 100%;
left: 3vw;
top: 3.3vw;
`;

export const GreenArrow = styled.div`
position: absolute;
left: 9vw;
top: 10.4vw;
width: 100%;
`;

export const Red = styled.div`
position: absolute;
width: 100%;
left: -2vw;
top: 19vw;
`;

export const RedArrow = styled.div`
position: absolute;
left: 6vw;
top: 23vw;
width: 100%;
`;


export const Black = styled.div`
position: absolute;
width: 100%;
left: 8vw;
top: 32vw;
`;

export const BlackArrow = styled.div`
position: absolute;
left: 16vw;
top: 27vw;
width: 100%;
`;



export const ShoppingLady = styled.div`
flex: 1;
width: 100%;
align-items: end;
justify-content: end;
// padding-top: 1vw;
`;

// ##################################################### mobile-view

export const MobileView = styled.div`



@media ${device.mobilexxxS} { 
    display: flex;
    flex-direction: column;
}
@media ${device.mobilexxS} { 
display: flex;
flex-direction: column;
}

@media ${device.mobileS} { 
    display: flex;
    flex-direction: column;
}

@media ${device.mobilexS} { 
    display: flex;
    flex-direction: column;
}

@media ${device. mobileM} { 
    display: flex;
    flex-direction: column;
}

@media ${device. mobileL} { 
    display: flex;
    flex-direction: column;
}

@media ${device. mobileLx} { 
    display: flex;
    flex-direction: column;
}
@media ${device. tablet} { 
display: none;
}

@media ${device.laptop} { 
    display: none;
}

@media ${device. laptopL} { 
    display: none;
}

@media ${device. desktop} { 
    display: none;
}


`;

export const MobileIntroHeader = styled.div`
font-weight: 600;
font-size: 6.5vw;
// line-height: 6%;
letter-spacing: -0.01em;
color: #0A0C14;
padding-left: 6%;
padding-right: 6%;
`;

export const MobileIntroDesc = styled.div`
font-weight: 400;
font-size: 3.5vw;
// line-height: 160%;
letter-spacing: -0.01em;
color: #666666;
// margin-top: -6%;
padding-left: 6%;
padding-right: 6%;
`;


export const MobileIntroDownloadButton = styled.div`
display: flex;
width: 86%;
padding-left: 6%;
padding-right: 6%;
margin-top: 5vw;
`;

export const MobileAndroid = styled.div`
width: 100%;
margin-right: 5vw;
`;

export const MobileApple = styled.div`
width: 100%;
`;

export const MobileImageIcons = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-top: 50px;
width: 100%;
`;

