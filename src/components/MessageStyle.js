import styled from "styled-components";
import { device } from './MobileDevice';

export const MessageContainer = styled.div`
background: #FFFAF0;
`;

export const MessageWrapper = styled.div`

padding-bottom: 10%;
padding-top: 10%;

@media ${device.mobilexxS} { 
    display: flex;
    flex-direction: column;
    padding-left: 5%;
    padding-right: 5%;
}

@media ${device.mobileS} { 
    display: flex;
    flex-direction: column;
    padding-left: 5%;
    padding-right: 5%;
}

@media ${device.mobilexS} { 
    display: flex;
    flex-direction: column;
    padding-left: 5%;
    padding-right: 5%;
}

@media ${device. mobileM} { 
    display: flex;
    flex-direction: column;
    padding-left: 5%;
    padding-right: 5%;
}

@media ${device. mobileL} { 
    display: flex;
    flex-direction: column;
    padding-left: 5%;
    padding-right: 5%;
}

@media ${device. mobileLx} { 
    display: flex;
    flex-direction: column;
    padding-left: 5%;
    padding-right: 5%;
}
@media ${device. tablet} { 
    display: flex;
    flex-direction: column;
    padding-left: 10%;
    padding-right: 10%;
}

@media ${device.laptop} { 
    display: flex;
    flex-direction: column;
    padding-left: 10%;
    padding-right: 10%;
}

@media ${device. laptopL} { 
    display: flex;
    flex-direction: column;
    padding-left: 10%;
    padding-right: 10%;
}

@media ${device. desktop} { 
    display: flex;
    flex-direction: column;
    padding-left: 10%;
    padding-right: 10%;
}
`;

export const Header = styled.div`

font-weight: 600;
font-size: 3vw;
color: #000000;

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

export const MobileHeader = styled.div`

font-weight: 600;
font-size: 3vw;
color: #000000;
font-size: 6vw;

@media ${device.mobilexxS} { 
    display: flex;
}

@media ${device.mobileS} { 
    display: flex;
}

@media ${device.mobilexS} { 
    display: flex;
}

@media ${device. mobileM} { 
    display: flex;
}

@media ${device. mobileL} { 
    display: flex;
}

@media ${device. mobileLx} { 
    display: flex;
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



export const EmailLabel = styled.div`

font-weight: 500;
font-size: 1.5vw;
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

export const EmailInput = styled.div`



@media ${device.mobilexxS} { 
    height: 10vw;
}

@media ${device.mobileS} { 
    height: 10vw;
}

@media ${device.mobilexS} { 
    height: 10vw;
}

@media ${device. mobileM} { 
    height: 10vw;
}

@media ${device. mobileL} { 
    height: 10vw;
}

@media ${device. mobileLx} { 
    height: 10vw;
}
@media ${device. tablet} { 
    height: 4vw;
}

@media ${device.laptop} { 
    height: 4vw;
}

@media ${device. laptopL} { 
    height: 4vw;
}

@media ${device. desktop} { 
    height: 4vw;
}
`;

export const MessageLabel = styled.div`
display: flex;
flex: 5;
margin-top: 3vw;
`;

export const Message = styled.div`
flex: 4;
color: #000000;


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

export const Help = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: end;

`;
export const HelpWrap = styled.div`


@media ${device.mobilexxS} { 
    width: 15%;
}

@media ${device.mobileS} { 

}

@media ${device.mobilexS} { 
    width: 15%;
}

@media ${device. mobileM} { 
    width: 15%;
}

@media ${device. mobileL} { 
    width: 15%;
}

@media ${device. mobileLx} { 
    width: 15%;
}
@media ${device. tablet} { 
    width: 10%;
}

@media ${device.laptop} { 
    width: 10%;
}

@media ${device. laptopL} { 
    width: 10%;
}

@media ${device. desktop} { 
    width: 10%;
}
`;


export const TxtMessage = styled.div`
display: flex;
flex-direction: row;
@media ${device.mobilexxS} { 
    height: 25vw;
}

@media ${device.mobileS} { 
    height: 25vw;
}

@media ${device.mobilexS} { 
    height: 25vw;
}

@media ${device. mobileM} { 
    height: 25vw;
}

@media ${device. mobileL} { 
    height: 25vw;
}

@media ${device. mobileLx} { 
    height: 25vw;
}
@media ${device. tablet} { 
    height: 15vw;
}

@media ${device.laptop} { 
    height: 15vw;
}

@media ${device. laptopL} { 
    height: 15vw;
}

@media ${device. desktop} { 
    height: 15vw;
}
`;


export const SendButton = styled.div`
display: flex;
align-items: center;
justify-content: center;
font-weight: 600;

background: #FFA500;
border-radius: 1vw;
color: #FFFFFF;




@media ${device.mobilexxS} { 
    height: 12vw;
    width: 100%;
    height: 12vw;
    width: 100%;
    margin-top: 5vw;
}

@media ${device.mobileS} { 
    width: 100%;
    height: 12vw;
    width: 100%;
    margin-top: 5vw;
}

@media ${device.mobilexS} { 
    height: 12vw;
    width: 100%;
    font-size: 4vw;
    margin-top: 5vw;
}

@media ${device. mobileM} { 
    height: 12vw;
    width: 100%;
    margin-top: 5vw;
    font-size: 4vw;
    margin-top: 5vw;
}

@media ${device. mobileL} { 
    height: 12vw;
    width: 100%;
    font-size: 4vw;
    margin-top: 5vw;
}

@media ${device. mobileLx} { 
    height: 12vw;
    width: 100%;
    font-size: 4vw;
    margin-top: 5vw;
}
@media ${device. tablet} { 
    height: 4vw;
    width: 30%;
    margin-top: 2vw;

font-size: 1.5vw;
}

@media ${device.laptop} { 
    height: 4vw;
    width: 30%;
    margin-top: 2vw;

font-size: 1.5vw;
}

@media ${device. laptopL} { 
    height: 4vw;
    width: 30%;
    margin-top: 2vw;

font-size: 1.5vw;
}

@media ${device. desktop} { 
    height: 4vw;
    width: 30%;
    margin-top: 2vw;

font-size: 1.5vw;
}
`;