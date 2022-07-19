import styled from "styled-components";
import background from '../background/variety-background.svg'
import { device } from './MobileDevice';
export const VarietyContainer = styled.div`
background: url(${background});
background-size: cover;

background-position: center;

@media ${device.mobilexxS} { 
    height: auto;
}

@media ${device.mobileS} { 
    height: auto;
}

@media ${device.mobilexS} { 
    height: auto;
}

@media ${device. mobileM} { 
    height: auto;
}

@media ${device. mobileL} { 
    height: auto;
}

@media ${device. mobileLx} { 
    height: auto;
}
@media ${device. tablet} { 
    height: 50vw;
}

@media ${device.laptop} { 
    height: 50vw;
}

@media ${device. laptopL} { 
    height: 50vw;
}

@media ${device. desktop} { 
    height: 50vw;
}

`;

export const VarietyWrapper = styled.div`
// border: 2px solid blue;
padding-left: 10%;
padding-right: 10%;

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

export const VarietyHeader = styled.div`
color: #FFFFFF;
font-size: 3vw;
font-weight: 600;

@media ${device.mobilexxS} { 
    font-size: 6vw;
}

@media ${device.mobileS} { 
    font-size: 6vw;
}

@media ${device.mobilexS} { 
    font-size: 6vw;
}

@media ${device. mobileM} { 
    font-size: 6vw;
}

@media ${device. mobileL} { 
    font-size: 6vw;
}

@media ${device. mobileLx} { 
    font-size: 6vw;
}
@media ${device. tablet} { 
    font-size: 3vw;
}

@media ${device.laptop} { 
    font-size: 3vw;
}

@media ${device. laptopL} { 
    font-size: 3vw;
}

@media ${device. desktop} { 
    font-size: 3vw;
}
`;

export const VarietyDesc = styled.div`
color: #FFFFFF;
font-size: 1.5vw;
margin-top: -3vw;


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
    font-size: 1.5vw;
    display: flex;
}

@media ${device.laptop} { 
    font-size: 1.5vw;
    display: flex;
}

@media ${device. laptopL} { 
    font-size: 1.5vw;
    display: flex;
}

@media ${device. desktop} { 
    font-size: 1.5vw;
    display: flex;
}
`;


export const MobileVarietyDesc = styled.div`

color: #FFFFFF;

margin-top: -5vw;


@media ${device.mobilexxS} { 
    display: flex;
    font-size: 3.3vw;
}

@media ${device.mobileS} { 
    display: flex;
    font-size: 3.3vw;
}

@media ${device.mobilexS} { 
    display: flex;
    font-size: 3.3vw;
}

@media ${device. mobileM} { 
    display: flex;
    font-size: 3.3vw;
}

@media ${device. mobileL} { 
    display: flex;
    font-size: 3.3vw;
}

@media ${device. mobileLx} { 
    display: flex;
    font-size: 3.3vw;
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

export const VarietyIcons = styled.div`
display: flex;
display: flex;
flex: 4;
margin-top: 5vw;
`;

export const VarietyIconWrap = styled.div`

position: relative;
width: 90%;
display: flex;
align-items: center;
justify-content: center;
// padding-top: 5%;
`;

export const FirstCircle = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex: 1;
`;

export const SecondCircle = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex: 1;
`;

export const ThirdCircle = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex: 1;
`;

export const FourthCircle = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex: 1;
`;


export const MobileVariety = styled.div`
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


export const MobileVarietyIcons = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
padding-bottom: 10%;
`;

export const MobileIconWrap = styled.div`
width: 60%;
margin-top: 5vw;
`;





