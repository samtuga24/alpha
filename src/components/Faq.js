import styled from "styled-components";
import { device } from './MobileDevice';

export const Container = styled.div`
background: linear-gradient(180deg, #FFFFFF 54.57%, #FFFBF5 100%);
`;
export const FWrapper = styled.div`
padding-left: 10%;
padding-right: 10%;
padding-top: 10%;
@media ${device.mobilexxS} { 
    display:  none;
}

@media ${device.mobileS} { 
    display:  none;
}

@media ${device.mobilexS} { 
    display:  none;
}

@media ${device. mobileM} { 
    display:  none;
}

@media ${device. mobileL} { 
    display:  none;
}

@media ${device. mobileLx} { 
    display:  none;
}
@media ${device. tablet} { 
    display:  flex;
    flex-direction: column;
}

@media ${device.laptop} { 
    display:  flex;
    flex-direction: column;
}

@media ${device. laptopL} { 
    display:  flex;
    flex-direction: column;
}

@media ${device. desktop} { 
    display:  flex;
    flex-direction: column;
}

`;

export const AlphaFaqs = styled.div`
font-weight: 400;

color: #FFA500;

@media ${device.mobilexxS} { 
    font-size: 3vw;
}

@media ${device.mobileS} { 
    font-size: 3vw;
}

@media ${device.mobilexS} { 
    font-size: 3vw;
}

@media ${device. mobileM} { 
    font-size: 3vw;
}

@media ${device. mobileL} { 
    font-size: 3vw;
}

@media ${device. mobileLx} { 
    font-size: 3vw;
}
@media ${device. tablet} { 
    font-size: 1.2vw;
}

@media ${device.laptop} { 
    font-size: 1.2vw;
}

@media ${device. laptopL} { 
    font-size: 1.2vw;
}

@media ${device. desktop} { 
    font-size: 1.2vw;
}
`;

export const FaqsHeader = styled.div`
font-weight: 600;

color: #0A0C14;
margin-top: -3vw;

@media ${device.mobilexxS} { 
    font-size: 7vw;
}

@media ${device.mobileS} { 
    font-size: 7vw;
}

@media ${device.mobilexS} { 
    font-size: 7vw;
}

@media ${device. mobileM} { 
    font-size: 7vw;
}

@media ${device. mobileL} { 
    font-size: 7vw;
}

@media ${device. mobileLx} { 
    font-size: 7vw;
}
@media ${device. tablet} { 
    font-size: 3.2vw;
}

@media ${device.laptop} { 
    font-size: 3.2vw;
}

@media ${device. laptopL} { 
    font-size: 3.2vw;
}

@media ${device. desktop} { 
    font-size: 3.2vw;
}
`;

export const FaqWrap = styled.div`
border: 0.8px solid #CCCCCC;
border-radius: 2vw;
// padding-left: 2%;
// padding-right: 2%;
// padding-bottom: 2%;
height: auto;

background: #FFFFFF;

@media ${device.mobilexxS} { 
    padding-left: 3%;
    padding-right: 3%;
    padding-bottom: 0%;
    margin-bottom: 5%;
}

@media ${device.mobileS} { 
    padding-left: 3%;
    padding-right: 3%;
    padding-bottom: 0%;
    margin-bottom: 5%;
}

@media ${device.mobilexS} { 
    padding-left: 3%;
    padding-right: 3%;
    padding-bottom: 0%;
    margin-bottom: 5%;
}

@media ${device. mobileM} { 
    padding-left: 3%;
    padding-right: 3%;
    padding-bottom: 0%;
    margin-bottom: 5%;
}

@media ${device. mobileL} { 
    padding-left: 3%;
    padding-right: 3%;
    padding-bottom: 0%;
    margin-bottom: 5%;
}

@media ${device. mobileLx} { 
    padding-left: 3%;
    padding-right: 3%;
    padding-bottom: 0%;
    margin-bottom: 5%;
}
@media ${device. tablet} { 
    padding-left: 2%;
    padding-right: 2%;
    padding-bottom: 0%;
    margin-bottom: 2%;
    border-radius: 1vw;
}

@media ${device.laptop} { 
    padding-left: 2%;
    padding-right: 2%;
    padding-bottom: 0%;
    margin-bottom: 2%;
    border-radius: 1vw;
}

@media ${device. laptopL} { 
    padding-left: 2%;
    padding-right: 2%;
    padding-bottom: 0%;
    margin-bottom: 2%;
    border-radius: 1vw;
}

@media ${device. desktop} { 
    padding-left: 2%;
    padding-right: 2%;
    padding-bottom: 0%;
    margin-bottom: 2%;
    border-radius: 1vw;
}
`;

export const FaqsDiv = styled.div`
display: flex;
flex: 5;
`;

export const FAQ = styled.div`
flex: 4;
// font-weight: 600;
// font-size: 1.2vw;
color: #000000;

@media ${device.mobilexxS} { 
    font-size: 4vw;
}

@media ${device.mobileS} { 
    font-size: 4vw;
}

@media ${device.mobilexS} { 
    font-size: 4vw;
}

@media ${device. mobileM} { 
    font-size: 4vw;
}

@media ${device. mobileL} { 
    font-size: 4vw;
}

@media ${device. mobileLx} { 
    font-size: 4vw;
}
@media ${device. tablet} { 
    font-size: 1.3vw;
}

@media ${device.laptop} { 
    font-size: 1.3vw;
}

@media ${device. laptopL} { 
    font-size: 1.3vw;
}

@media ${device. desktop} { 
    font-size: 1.3vw;
}
`;

export const Arrow = styled.div`
flex: 1;

`;

export const ArrowWrap = styled.div`
position: absolute;
transition: transform .5s linear;
display: flex;
align-items: center;
@media ${device.mobilexxS} { 
    top: 3vw;
    right: 6vw;
    width: 8%;
}

@media ${device.mobileS} { 
    top: 3vw;
    right: 6vw;
    width: 8%;
}

@media ${device.mobilexS} { 
    top: 3vw;
    right: 3vw;
    right: 6vw;
    width: 8%;
}

@media ${device. mobileM} { 
    top: 3vw;
    right: 6vw;
    width: 8%;
}

@media ${device. mobileL} { 
    top: 4.5vw;
    right: 6vw;
    width: 8%;
}

@media ${device. mobileLx} { 
    top: 4.5vw;
    right: 6vw;
    width: 8%;
}
@media ${device. tablet} { 
    top: 0.5vw;
    right: 0;
    width: 20%;
}

@media ${device.laptop} { 
    top: 1vw;
    right: 0;
    width: 22%;
}

@media ${device. laptopL} { 
    top: 1vw;
    right: 0;
    width: 22%;
}

@media ${device. desktop} { 
    top: 1vw;
    right: 0;
    width: 22%;
}
`;


export const UpArrow = styled.div`
// display: flex;
position: relative;
width: 100%;
// display: none;
`;

export const DownArrow = styled.div`
display: flex;
position: relative;
width: 100%;
// display: none;
`;

export const Answer = styled.div`
display: flex;
flex-direction: column;
background: #FFF8EB;
border-radius: 16px;
padding-left: 2%;

@media ${device.mobilexxS} { 
    padding-left: 5%;
    padding-right: 5%;
    padding-bottom: 10%;
    margin-bottom: 3%;
}

@media ${device.mobileS} { 
    padding-left: 5%;
    padding-right: 5%;
    padding-bottom: 10%;
    margin-bottom: 3%;
}

@media ${device.mobilexS} { 
    padding-left: 5%;
    padding-right: 5%;
    padding-bottom: 10%;
    margin-bottom: 3%;
}

@media ${device. mobileM} { 
    padding-left: 5%;
    padding-right: 5%;
    padding-bottom: 10%;
    margin-bottom: 3%;
}

@media ${device. mobileL} { 
    padding-left: 5%;
    padding-right: 5%;
    padding-bottom: 10%;
    margin-bottom: 3%;
}

@media ${device. mobileLx} { 
    padding-left: 5%;
    padding-right: 5%;
    padding-bottom: 10%;
    margin-bottom: 3%;
}
@media ${device. tablet} { 
    padding-left: 2%;
    padding-bottom: 0%;
    padding-right: 0%;
    margin-bottom: 2%;
}

@media ${device.laptop} { 
    padding-left: 2%;
    padding-bottom: 0%;
    padding-right: 0%;
    margin-bottom: 2%;
}

@media ${device. laptopL} { 
    padding-left: 2%;
    padding-bottom: 0%;
    padding-right: 3%;
    margin-bottom: 2%;
}

@media ${device. desktop} { 
    padding-left: 2%;
    padding-bottom: 0%;
    padding-right: 0%;
    margin-bottom: 2%;
}
`;

export const AnswerTextWrap = styled.div`
font-weight: 400;
color: #0A0C14;
padding-right: 2%;


@media ${device.mobilexxS} { 
    font-size: 3.8vw;
}

@media ${device.mobileS} { 
    font-size: 3.8vw;
}

@media ${device.mobilexS} { 
    font-size: 3.8vw;
}

@media ${device. mobileM} { 
    font-size: 3.8vw;
}

@media ${device. mobileL} { 
    font-size: 3.8vw;
}

@media ${device. mobileLx} { 
    font-size: 3.8vw;
}
@media ${device. tablet} { 
    font-size: 1.5vw;
}

@media ${device.laptop} { 
    font-size: 1.5vw;
}

@media ${device. laptopL} { 
    font-size: 1.5vw;
}

@media ${device. desktop} { 
    font-size: 1.5vw;
}
`;

export const AnswerDownloadStore = styled.div`
flex: 0.8;
display: flex;
margin-top: 2vw;

@media ${device.mobilexxS} { 
    width: 80%;
}

@media ${device.mobileS} { 
    width: 80%;
}

@media ${device.mobilexS} { 
    width: 80%;
}

@media ${device. mobileM} { 
width: 80%;
}

@media ${device. mobileL} { 
    width: 80%;
}

@media ${device. mobileLx} { 
    width: 80%;
}
@media ${device. tablet} { 
}

@media ${device.laptop} { 

}

@media ${device. laptopL} { 

}

@media ${device. desktop} { 

}
`;

export const Android = styled.div`



@media ${device.mobilexxS} { 
    margin-right: 3vw;
}

@media ${device.mobileS} { 
    margin-right: 3vw;
}

@media ${device.mobilexS} { 
    margin-right: 3vw;
}

@media ${device. mobileM} { 
    margin-right: 3vw;
}

@media ${device. mobileL} { 
    margin-right: 3vw;
}

@media ${device. mobileLx} { 
    margin-right: 3vw;
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

export const Apple = styled.div`

`;


export const AnswerPhoneImage = styled.div`
 flex: 1.2;

position: relative;
display: flex;
flex-direction: row;
margin-top: 23%;
`;

export const IconsDivs = styled.div`
display: flex;
flex: 2;
`;

export const FirstPhone = styled.div`
width: 70%;
position: absolute;
bottom: 0;
left: 0;
`;

export const SecondPhone = styled.div`
width: 50%;
position: absolute;
right: 0;
bottom: 0;
`;


// ######################################################################

export const MobileView = styled.div`
padding-left: 5%;
padding-right: 5%;

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












