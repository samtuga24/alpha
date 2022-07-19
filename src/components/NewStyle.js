import styled from "styled-components";
import { device } from './MobileDevice';
export const NewsContainer = styled.div`

background: linear-gradient(180deg, #FFFAF0 0%, #FFFFFF 66.13%);


@media ${device.mobilexxS} { 
    padding-left: 5%;
    padding-right: 5%;
    padding-top: 30%;
    // padding-bottom: 10%;
}

@media ${device.mobileS} { 
    padding-left: 5%;
    padding-right: 5%;
    padding-top: 30%;
    // padding-bottom: 10%;
}

@media ${device.mobilexS} { 
    padding-left: 5%;
    padding-right: 5%;
    padding-top: 30%;
    // padding-bottom: 10%;
}

@media ${device. mobileM} { 
    padding-left: 5%;
    padding-right: 5%;
    padding-top: 30%;
    // padding-bottom: 10%;
}

@media ${device. mobileL} { 
    padding-left: 5%;
    padding-right: 5%;
    padding-top: 30%;
    // padding-bottom: 10%;
}

@media ${device. mobileLx} { 
    padding-left: 5%;
    padding-right: 5%;
    padding-top: 30%;
    // padding-bottom: 10%;
}
@media ${device. tablet} { 
    padding-left: 10%;
    padding-right: 10%;
    padding-top: 5%;
    padding-bottom: 10%;
}

@media ${device.laptop} { 
    padding-left: 10%;
    padding-right: 10%;
    padding-top: 5%;
    padding-bottom: 10%;
}

@media ${device. laptopL} { 
    padding-left: 10%;
    padding-right: 10%;
    padding-top: 5%;
    padding-bottom: 10%;
}

@media ${device. desktop} { 
    padding-left: 10%;
    padding-right: 10%;
    padding-top: 5%;
    padding-bottom: 10%;
}
`;

export const NewsWrapper = styled.div`
padding-left: 5%;
padding-right: 5%;
padding-top: 5%;
padding-bottom: 5%;
background: #0A0C14;
box-shadow: 0px 18px 100px rgba(255, 165, 0, 0.1);
border-radius: 2vw;
height: 20vw;
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
    flex-direction: column;
}

@media ${device.laptop} { 
    display: flex;
    flex-direction: column;
}

@media ${device. laptopL} { 
    display: flex;
    flex-direction: column;
}

@media ${device. desktop} { 
    display: flex;
    flex-direction: column;
}

`;

export const SubscribeHeader = styled.div`
font-weight: 600;
font-size: 2.2vw;
color: #FFFFFF;
`;



export const EmailDiv = styled.div`
height: 10vw;
position: relative;
padding-left: 5%;
padding-right: 5%;
`;

export const DivWrapper = styled.div`
position: absolute;
width: 100%;
right: 0;
left: 0;
height: inherit;
`;

export const EmailInput = styled.div`
display: flex;
margin-top: -1vw;
`;

export const EmailEntry = styled.div`
width: 70%;
`;
export const SendButton = styled.div`
width: 30%;
background: #FFA500;
border-radius: 1vw;
display: flex;
align-items: center;
justify-content: center;
margin-left: 2vw;
cursor: pointer;
`;

export const EmailLabel = styled.div`
display: flex;
`;


export const EmailTextWrap = styled.div`
width: 70%;
color: #FFFFFF;
display: flex;
text-align: center;


@media ${device.mobilexxS} { 
    font-size: 3.5vw;
}

@media ${device.mobileS} { 
    font-size: 3.5vw;
}

@media ${device.mobilexS} { 
    font-size: 3.5vw;
}

@media ${device. mobileM} { 
    font-size: 3.5vw;
}

@media ${device. mobileL} { 
    font-size: 3.5vw;
}

@media ${device. mobileLx} { 
    font-size: 3.5vw;
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
export const HelpWrap = styled.div`
width: 6%;
`;

export const Help = styled.div`
width: 30%;
display: flex;
align-items: center;
margin-left: -3vw
`;



export const ButtonWrap = styled.div`
font-size: 1.15vw;
`;


export const SuccessDiv = styled.div`
display: flex;
flex: 5;
border-radius: 1vw;
position: absolute;
// bottom: 10%;
width: 100%;
left: 0;
height: 10vw;
`;

export const SuccessDivWrap = styled.div`
border: 1.5px dashed #27C078;
border-radius: 0.5vw;
width: 100%;
height: 6vw;
position: absolute;
bottom: 5%;
display: flex;
flex: 5;
`;


export const SuccessIcon = styled.div`
flex:0.5;
display: flex;
align-items: center;
padding-left: 1vw;
`;

export const SuccessIconWrap = styled.div`

`;

export const SuccessText = styled.div`
flex:4;
color: #FFFFFF;
margin-left: -3vw;
font-size: 1.15vw;
display: flex;
align-items: center;
`;

export const SuccessButton = styled.div`
flex:0.5;
color: #27C078;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
`;




export const MobileView = styled.div`

background: #0A0C14;
box-shadow: 0px 18px 100px rgba(255, 165, 0, 0.1);
border-radius: 5vw;
padding-left: 5%;
padding-right: 5%;
padding-top: 5%;
padding-bottom: 20%;

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

export const MobileSubscribeHeader = styled.div`
font-weight: 600;
font-size: 6vw;
color: #FFFFFF;
`;


export const MobileEmailWrap = styled.div`
display: flex;
font-size: 4vw;
color: #FFFFFF;
position: relative;
width: 100%;
align-items: center;
`;

export const MobileHelpWrap = styled.div`
display: flex;
position: absolute;
right: 0;
width: 5%;
`;


export const MobileButtonWrap = styled.div`
display: flex;
align-items: center;
justify-content: center;
font-size: 3vw;
font-weight: 600;
background: #FFA500;
border-radius: 1vw;
width: 100%;
height: 10vw;
margin-top: 5vw;
`;