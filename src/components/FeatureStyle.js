import styled from "styled-components";
import back from "../background/feature-background.svg";
import { device } from './MobileDevice';

export const Container = styled.div`
`;

export const FeatureWrapper = styled.div`

background: url(${back});
padding-bottom: 5%;
padding-top: 5%;


@media ${device.mobilexxS} { 
    padding-left: 5%;
    padding-right: 5%;
}

@media ${device.mobileS} { 
    padding-left: 5%;
    padding-right: 5%;
}

@media ${device.mobilexS} { 
    padding-left: 5%;
    padding-right: 5%;
}

@media ${device. mobileM} { 
    padding-left: 5%;
    padding-right: 5%;
}

@media ${device. mobileL} { 
    padding-left: 5%;
    padding-right: 5%;
}

@media ${device. mobileLx} { 
    padding-left: 5%;
    padding-right: 5%;
}
@media ${device. tablet} { 
    padding-left: 10%;
    padding-right: 10%;
}

@media ${device.laptop} { 
    padding-left: 10%;
    padding-right: 10%;
}

@media ${device. laptopL} { 
    padding-left: 10%;
    padding-right: 10%;
}

@media ${device. desktop} { 
    padding-left: 10%;
    padding-right: 10%;
}
`;

export const CardWrap = styled.div`
display: flex;
flex: 3;

@media ${device.mobilexxS} { 
flex-direction: column;
}

@media ${device.mobileS} { 
flex-direction: column;
}

@media ${device.mobilexS} { 
    flex-direction: column;
}

@media ${device. mobileM} { 
    flex-direction: column;
}

@media ${device. mobileL} { 
    flex-direction: column;
}

@media ${device. mobileLx} { 
    flex-direction: column;
}
@media ${device. tablet} { 
    flex-direction: row;
}

@media ${device.laptop} { 
    flex-direction: row;
}

@media ${device. laptopL} { 
    flex-direction: row;
}

@media ${device. desktop} { 
    flex-direction: row;
}
`;

export const LocacalCard = styled.div`
flex: 1;
// border: 1px solid blue;
padding-right: 1vw;
`;

export const LocacalCardWrap = styled.div`
width: 88%;
padding-left: 5%;
padding-right: 5%;
padding-top: 5%;
background: linear-gradient(180deg, #0A3320 0%, #0A3320 100%);
padding-bottom: 20%;
margin-right: 1vw;



@media ${device.mobilexxS} { 
    margin-bottom: 5vw;
    height: 100vw;
    border-radius: 3vw;
    height: 100vw;
    width: 90%;
}

@media ${device.mobileS} { 
    margin-bottom: 5vw;
    height: 100vw;
    border-radius: 3vw;
    height: 100vw;
    width: 90%;
}

@media ${device.mobilexS} { 
    margin-bottom: 5vw;
    height: 100vw;
    border-radius: 3vw;
    height: 100vw;
    width: 90%;
}

@media ${device. mobileM} { 
    margin-bottom: 5vw;
    height: 100vw;
    border-radius: 3vw;
    height: 100vw;
    width: 90%;
}

@media ${device. mobileL} { 
    margin-bottom: 5vw;
    height: 100vw;
    border-radius: 3vw;
    height: 100vw;
    width: 90%;
}

@media ${device. mobileLx} { 
    margin-bottom: 5vw;
    height: 100vw;
    border-radius: 3vw;
    height: 100vw;
    width: 90%;
}
@media ${device. tablet} { 
    height: 40vw;
    margin-bottom: 5vw;
    border-radius: 1vw;
    width: 88%;
}

@media ${device.laptop} { 
    height: 40vw;
    margin-bottom: 5vw;
    border-radius: 1vw;
    height: 40vw;
    width: 88%;
}

@media ${device. laptopL} { 
    height: 40vw;
    margin-bottom: 5vw;
    border-radius: 1vw;
    width: 88%;
}

@media ${device. desktop} { 
    height: 40vw;
    margin-bottom: 5vw;
    border-radius: 1vw;
    width: 88%;
}


`;

export const BookmarkCard = styled.div`
flex: 1;
padding-right: 1vw;
`;

export const LiveChatCard = styled.div`
flex: 1;
display: flex;
// align-items: end;
// justify-content: end;
width: 100%;
`;

export const FeatureHeaderDiv = styled.div`
`;

export const AlphaFeature = styled.div`
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

export const AwesomeFeature = styled.div`
font-weight: 600;
color: #FFFFFF;



@media ${device.mobilexxS} { 
    font-size: 5vw;
}

@media ${device.mobileS} { 
    font-size: 5vw;
}

@media ${device.mobilexS} { 
    font-size: 5vw;
}

@media ${device. mobileM} { 
    font-size: 5vw;
}

@media ${device. mobileL} { 
    font-size: 5vw;
}

@media ${device. mobileLx} { 
    font-size: 5vw;
}
@media ${device. tablet} { 
    font-size: 2.5vw;
}

@media ${device.laptop} { 
    font-size: 2.5vw;
}

@media ${device. laptopL} { 
    font-size: 2.5vw;
}

@media ${device. desktop} { 
    font-size: 2.5vw;
}
`;

export const ImageWrap = styled.div`
display: flex;
align-items: center;
justify-content: center;
background: #072215;

padding-top: 20%;
padding-bottom: 20%;


@media ${device.mobilexxS} { 
    height: 40vw;
    border-radius: 2vw;
}

@media ${device.mobileS} { 
    height: 40vw;
    border-radius: 2vw;
}

@media ${device.mobilexS} { 
    height: 40vw;
    border-radius: 2vw;
}

@media ${device. mobileM} { 
    height: 40vw;
    border-radius: 2vw;
}

@media ${device. mobileL} { 
    height: 40vw;
    border-radius: 2vw;
}

@media ${device. mobileLx} { 
    height: 40vw;
    border-radius: 2vw;
}
@media ${device. tablet} { 
    height: 18vw;
    border-radius: 1vw;
}

@media ${device.laptop} { 
    height: 18vw;
    border-radius: 1vw;
}

@media ${device. laptopL} { 
    height: 18vw;
    border-radius: 1vw;
}

@media ${device. desktop} { 
    height: 18vw;
    border-radius: 1vw;
}
`;

export const CardDescHeader = styled.div`
font-weight: 600;

color: #FFFFFF;

@media ${device.mobilexxS} { 
    font-size: 4.5vw;
}

@media ${device.mobileS} { 
    font-size: 4.5vw;
}

@media ${device.mobilexS} { 
    font-size: 4.5vw;
}

@media ${device. mobileM} { 
    font-size: 4.5vw;
}

@media ${device. mobileL} { 
    font-size: 4.5vw;
}

@media ${device. mobileLx} { 
    font-size: 4.5vw;
}
@media ${device. tablet} { 
    font-size: 1.6vw;
}

@media ${device.laptop} { 
    font-size: 1.6vw;
}

@media ${device. laptopL} { 
    font-size: 1.6vw;
}

@media ${device. desktop} { 
    font-size: 1.6vw;
}
`;

export const CardDesc = styled.div`

color: rgba(255, 255, 255, 0.5);

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
    font-size: 1.1vw;
}

@media ${device.laptop} { 
    font-size: 1.1vw;
}

@media ${device. laptopL} { 
    font-size: 1.1vw;
}

@media ${device. desktop} { 
    font-size: 1.1vw;
}
`;
