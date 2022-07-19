import styled from "styled-components";
import { device } from './MobileDevice';
export const ExclusiveContainer = styled.div`

`;
export const ExclusiveWrapper = styled.div`

display: flex;
flex: 2;
@media ${device.mobilexxS} { 
flex-direction: column;
padding-left: 5%;
padding-right: 5%;
padding-top: 20%;
}

@media ${device.mobileS} { 
    flex-direction: column;
    padding-left: 5%;
    padding-right: 5%;
    padding-top: 20%;
}

@media ${device.mobilexS} { 
    flex-direction: column;
    padding-left: 5%;
padding-right: 5%;
padding-top: 20%;
}

@media ${device. mobileM} { 
    flex-direction: column;
    padding-left: 5%;
padding-right: 5%;
padding-top: 20%;
}

@media ${device. mobileL} { 
    flex-direction: column;
    padding-left: 5%;
padding-right: 5%;
padding-top: 20%;
}

@media ${device. mobileLx} { 
    flex-direction: column;
    padding-left: 5%;
padding-right: 5%;
padding-top: 20%;
}
@media ${device. tablet} { 
    flex-direction: row;
    padding-left: 10%;
    padding-top: 10%;
    padding-right: 0%;
}

@media ${device.laptop} { 
    flex-direction: row;
    padding-left: 10%;
    padding-top: 10%;
    padding-right: 0%;
}

@media ${device. laptopL} { 
    flex-direction: row;
    padding-left: 10%;
    padding-top: 10%;
    padding-right: 0%;
}

@media ${device. desktop} { 
    flex-direction: row;
    padding-left: 10%;
    padding-top: 10%;
    padding-right: 0%;
}

`;

export const ExclusiveDiv = styled.div`
flex: 1.2;

`;

export const AlphaFeature = styled.div`
font-weight: 400;
color: #FFA500;


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

export const ExclusiveAlpha = styled.div`
color: #0A0C14;

font-weight: 600;
margin-top: -3vw;

@media ${device.mobilexxS} { 
    font-size: 6.5vw;
}

@media ${device.mobileS} { 
    font-size: 6.5vw;
}

@media ${device.mobilexS} { 
    font-size: 6.5vw;
}

@media ${device. mobileM} { 
    font-size: 6.5vw;
}

@media ${device. mobileL} { 
    font-size: 6.5vw;
}

@media ${device. mobileLx} { 
    font-size: 6.5vw;
}
@media ${device. tablet} { 
    font-size: 3.5vw;
}

@media ${device.laptop} { 
    font-size: 3.5vw;
}

@media ${device. laptopL} { 
    font-size: 3.5vw;
}

@media ${device. desktop} { 
    font-size: 3.5vw;
}
`;

export const ExclusiveList = styled.div`
color: #0A0C14;
position: relative;
font-weight: 400;
height: 35vw;
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
    font-size: 2.4vw;
    flex-direction: column;
}

@media ${device.laptop} { 
    display: flex;
    font-size: 2.4vw;
    flex-direction: column;
}

@media ${device. laptopL} { 
    display: flex;
    font-size: 2.4vw;
    flex-direction: column;
}

@media ${device. desktop} { 
    display: flex;
    flex-direction: column;
    font-size: 2.4vw;
}
`;

export const Items = styled.div`


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
    margin-bottom: -1vw;
}

@media ${device.laptop} { 
    display: flex;
    margin-bottom: -1vw;
}

@media ${device. laptopL} { 
    display: flex;
    margin-bottom: -1vw;
}

@media ${device. desktop} {
    display: flex; 
    margin-bottom: -1vw;
}

`;
export const ExclusiveImage = styled.div`
flex: 0.8;
display: flex;
align-items: center;
justify-content: center;
position: relative;
background: #FFEDCC;
z-index: -1;


@media ${device.mobilexxS} { 
    border-radius: 32px 32px 0px 0px;
    padding-top: 12%;
    margin-top: 5vw;
}

@media ${device.mobileS} { 
    border-radius: 32px 32px 0px 0px;
    padding-top: 12%;
    margin-top: 5vw;
}

@media ${device.mobilexS} { 
    border-radius: 32px 32px 0px 0px;
    padding-top: 12%;
    margin-top: 5vw;
}

@media ${device. mobileM} { 
    border-radius: 32px 32px 0px 0px;
    padding-top: 12%;
    margin-top: 5vw;
}

@media ${device. mobileL} { 
    border-radius: 32px 32px 0px 0px;
    padding-top: 12%;
    margin-top: 5vw;
}

@media ${device. mobileLx} { 
    border-radius: 32px 32px 0px 0px;
    padding-top: 12%;
    margin-top: 5vw;
}
@media ${device. tablet} { 
    border-radius: 32px 0px 0px 0px;
    padding-top: 5%;
}

@media ${device.laptop} { 
    border-radius: 32px 0px 0px 0px;
    padding-top: 5%;
}

@media ${device. laptopL} { 
    border-radius: 32px 0px 0px 0px;
    padding-top: 5%;
}

@media ${device. desktop} { 
    border-radius: 32px 0px 0px 0px;
    padding-top: 5%;
}
`;

export const ImageWrap = styled.div`

mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1.0) 50%, transparent 100%);

@media ${device.mobilexxS} { 
    width: 90%;
}

@media ${device.mobileS} { 
    width: 90%;
}

@media ${device.mobilexS} { 
    width: 90%;
}

@media ${device. mobileM} { 
    width: 90%;

}

@media ${device. mobileL} { 
    width: 90%;
}

@media ${device. mobileLx} { 
    width: 90%;
}
@media ${device. tablet} { 
    width: 70%;
}

@media ${device.laptop} { 
    width: 70%;
}

@media ${device. laptopL} { 
    width: 70%;
}

@media ${device. desktop} { 
    width: 70%;
}
`;

export const StoreDownload = styled.div`
position: absolute;



@media ${device.mobilexxS} { 
    width: 60%;
    top: 120vw;
}

@media ${device.mobileS} { 
    width: 60%;
    top: 120vw;
}

@media ${device.mobilexS} { 
    width: 60%;
    top: 120vw;
}

@media ${device. mobileM} { 
    width: 60%;
    top: 120vw;
}

@media ${device. mobileL} { 
    width: 60%;
    top: 120vw;
}

@media ${device. mobileLx} { 
    width: 60%;
    top: 120vw;
}
@media ${device. tablet} { 
    width: 45%;
    top: 35vw;
}

@media ${device.laptop} { 
    width: 45%;
    top: 35vw;
}

@media ${device. laptopL} { 
    width: 45%;
    top: 35vw;
}

@media ${device. desktop} { 
    width: 45%;
    top: 35vw;
}
`;

export const ExclusiveAndroid = styled.div`
margin-bottom: 1vw;

`;
export const ExclusiveApple = styled.div`

`;


export const MobileExclusiveList = styled.div`

color: #0A0C14;
position: relative;
font-weight: 400;

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
    display: flex;
    flex-direction: column;
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

export const MobileItems = styled.div`
@media ${device.mobilexxS} { 
display: flex;
font-size: 4vw;
}

@media ${device.mobileS} { 
    display: flex;
    font-size: 4vw;
}

@media ${device.mobilexS} { 
    display: flex;
    font-size: 4vw;
}

@media ${device. mobileM} { 
    display: flex;
    font-size: 4vw;
}

@media ${device. mobileL} { 
    display: flex;
    font-size: 4vw;
}

@media ${device. mobileLx} { 
    display: flex;
    font-size: 4vw;
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


