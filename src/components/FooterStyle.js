import styled from "styled-components";
import { device } from './MobileDevice';

export const FooterContainer = styled.div`
`;

export const FooterWrapper = styled.div`
display: flex;
flex: 3;
padding-right: 10%;
padding-left: 10%;


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

export const First = styled.div`
flex: 1;
`;

export const Second = styled.div`
flex: 1;
display: flex;
// align-items: center;
justify-content: center;
`;

export const Third = styled.div`
flex: 1;
display: flex;
// align-items: end;
// justify-content: end;
position: relative;
`;

export const ThirdWrap = styled.div`
right: 0;
top: 0;
position: absolute;
width: 65%;
`;

export const DownloadWrap = styled.div`



@media ${device.mobilexxS} { 
    width: 60%;
    margin-top: 3vw;
}

@media ${device.mobileS} { 
    width: 60%;
    margin-top: 3vw;
}

@media ${device.mobilexS} { 
    width: 60%;
    margin-top: 3vw;
}

@media ${device. mobileM} { 
    width: 60%;
    margin-top: 3vw;
}

@media ${device. mobileL} { 
    width: 60%;
    margin-top: 3vw;
}

@media ${device. mobileLx} { 
    width: 60%;
    margin-top: 3vw;
}
@media ${device. tablet} { 
    width: 100%;
    margin-top: 1vw;
}

@media ${device.laptop} { 
    width: 100%;
    margin-top: 1vw;
}

@media ${device. laptopL} { 
    width: 100%;
    margin-top: 1vw;
}

@media ${device. desktop} { 
    width: 100%;
    margin-top: 1vw;
}
`;


export const LogoWrap = styled.div`

width: 14%;
`;

export const Desc = styled.div`
font-weight: 400;
color: #8B8B8B;
margin-top: 3.5vw;


@media ${device.mobilexxS} { 
    font-size: 3.2vw;
}

@media ${device.mobileS} { 
    font-size: 3.2vw;
}

@media ${device.mobilexS} { 
    font-size: 3.2vw;
}

@media ${device. mobileM} { 
    font-size: 3.2vw;
}

@media ${device. mobileL} { 
    font-size: 3.2vw;
}

@media ${device. mobileLx} { 
    font-size: 3.2vw;
}
@media ${device. tablet} { 
    font-size: 1vw;
}

@media ${device.laptop} { 
    font-size: 1vw;
}

@media ${device. laptopL} { 
    font-size: 1vw;
}

@media ${device. desktop} { 
    font-size: 1vw;
}

`;

export const SocialMedia = styled.div`
display: flex;
margin-top: 3.5vw;
`;

export const SocialIconWrap = styled.div`
width: 14%;
display: flex;
align-items: center;



@media ${device.mobilexxS} { 

}

@media ${device.mobileS} { 

}

@media ${device.mobilexS} { 

}

@media ${device. mobileM} { 
    margin-right: 3vw;
}

@media ${device. mobileL} { 

}

@media ${device. mobileLx} { 

}
@media ${device. tablet} { 
    margin-right: 1vw;
}

@media ${device.laptop} { 
    margin-right: 1vw;
}

@media ${device. laptopL} { 
    margin-right: 1vw;
}

@media ${device. desktop} { 
    margin-right: 1vw;
}
`;

export const NavigateHeader = styled.div`
font-size: 1.6vw;
color: #FFA500;
font-weight: 600;


@media ${device.mobilexxS} { 
    font-size: 5vw;
    margin-top: 10vw;
}

@media ${device.mobileS} { 
    font-size: 5vw;
    margin-top: 10vw;
}

@media ${device.mobilexS} { 
    font-size: 5vw;
    margin-top: 10vw;
}

@media ${device. mobileM} { 
    font-size: 5vw;
    margin-top: 10vw;
}

@media ${device. mobileL} { 
    font-size: 5vw;
    margin-top: 10vw;
}

@media ${device. mobileLx} { 
    font-size: 5vw;
    margin-top: 10vw;
}
@media ${device. tablet} { 
    font-size: 1.6vw;
    margin-top: 0vw;
}


@media ${device.laptop} { 
    font-size: 1.6vw;
    margin-top: 0vw;
}

@media ${device. laptopL} { 
    font-size: 1.6vw;
    margin-top: 0vw;
}

@media ${device. desktop} { 
    font-size: 1.6vw;
    margin-top: 0vw;
}
`;

export const NavigateList = styled.div`
font-weight: 400;
display: flex;
color: #0A0C14;


@media ${device.mobilexxS} { 
    font-size: 4vw;
    flex-direction: row;
}

@media ${device.mobileS} { 
    font-size: 4vw;
    flex-direction: row;
}

@media ${device.mobilexS} { 
    font-size: 4vw;
    flex-direction: row;
}

@media ${device. mobileM} { 
    font-size: 4vw;
    flex-direction: row;
}

@media ${device. mobileL} { 
    font-size: 5vw;
    flex-direction: row;
}

@media ${device. mobileLx} { 
    font-size: 4vw;
    flex-direction: row;
}
@media ${device. tablet} { 
    font-size: 1.5vw;
    flex-direction: column;
}

@media ${device.laptop} { 
    font-size: 1.5vw;
    flex-direction: column;
}

@media ${device. laptopL} { 
    font-size: 1.5vw;
    flex-direction: column;
}

@media ${device. desktop} { 
    font-size: 1.5vw;
    flex-direction: column;
}
`;


export const List = styled.div`



@media ${device.mobilexxS} { 
    margin-right: 4vw;
}

@media ${device.mobileS} { 
    margin-right: 4vw;
}

@media ${device.mobilexS} { 
    margin-right: 4vw;
}

@media ${device. mobileM} { 
margin-right: 4vw;
}

@media ${device. mobileL} { 
    margin-right: 4vw;
}

@media ${device. mobileLx} { 
    margin-right: 4vw;
}
@media ${device. tablet} { 
    margin-top: -1.5vw;
}

@media ${device.laptop} { 
    margin-top: -1.5vw;
}

@media ${device. laptopL} { 
    margin-top: -1.5vw;
}

@media ${device. desktop} { 
    margin-top: -1.5vw;
}
`;

export const CopyRight = styled.div`
font-weight: 600;


background: #FFFFFF;
border-top: 0.4px solid #CCCCCC;
backdrop-filter: blur(20px);
margin-top: 5vw;


@media ${device.mobilexxS} { 
    padding-left: 5%;
    font-size: 3.5vw;
}

@media ${device.mobileS} { 
    padding-left: 5%;
    font-size: 3.5vw;
}

@media ${device.mobilexS} { 
    padding-left: 5%;
    font-size: 3.5vw;
}

@media ${device. mobileM} { 
    padding-left: 5%;
    font-size: 3vw;
}

@media ${device. mobileL} { 
    padding-left: 5%;
    font-size: 3.5vw;
}

@media ${device. mobileLx} { 
    padding-left: 5%;
    font-size: 3.5vw;
}
@media ${device. tablet} { 
    padding-left: 10%;
    font-size: 1vw;
}

@media ${device.laptop} { 
    padding-left: 10%;
    font-size: 1vw;
}

@media ${device. laptopL} { 
    padding-left: 10%;
    font-size: 1vw;
}

@media ${device. desktop} { 
    padding-left: 10%;
    font-size: 1vw;
}
`;


export const MobileView = styled.div`

padding-left: 5%;
padding-right: 5%;
@media ${device.mobilexxS} { 
display: flex;
flex-direction: column;
padding-top: 20%;
}

@media ${device.mobileS} { 
    display: flex;
    flex-direction: column;
    padding-top: 20%;
}

@media ${device.mobilexS} { 
    display: flex;
    flex-direction: column;
    padding-top: 20%;
}

@media ${device. mobileM} { 
    display: flex;
    flex-direction: column;
    padding-top: 20%;
}

@media ${device. mobileL} { 
    display: flex;
    flex-direction: column;
    padding-top: 20%;
}

@media ${device. mobileLx} { 
    display: flex;
    flex-direction: column;
    padding-top: 20%;
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


