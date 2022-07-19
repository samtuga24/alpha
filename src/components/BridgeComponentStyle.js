import styled from "styled-components";
import bridge from '../background/bridge-background.svg'
import { device } from './MobileDevice';
export const BridgeContainer = styled.div`
background: url(${bridge});
background-size: cover;
background-position: center;
`;

export const BridgeWrapper = styled.div`
padding-top: 5%;



@media ${device.mobilexxS} { 
    padding-left: 5%;
    padding-right: 5%;
    height: 180vw;
}

@media ${device.mobileS} { 
    padding-left: 5%;
    padding-right: 5%;
    height: 180vw;
}

@media ${device.mobilexS} { 
    padding-left: 5%;
    padding-right: 5%;
    height: 180vw;
}

@media ${device. mobileM} { 
    padding-left: 5%;
    padding-right: 5%;
    height: 180vw;
}

@media ${device. mobileL} { 
    padding-left: 5%;
    padding-right: 5%;
    height: 180vw;
}

@media ${device. mobileLx} { 
    padding-left: 5%;
    padding-right: 5%;
    height: 180vw;
}
@media ${device. tablet} { 
    padding-left: 10%;
    padding-right: 10%;
    height: 65vw;
}

@media ${device.laptop} { 
    padding-left: 10%;
    padding-right: 10%;
    height: 65vw;
}

@media ${device. laptopL} { 
    padding-left: 10%;
    padding-right: 10%;
    height: 65vw;
}

@media ${device. desktop} { 
    padding-left: 10%;
    padding-right: 10%;
    height: 65vw;
}
`;


export const MobileBridgeWrap = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
`;


export const MobileBridge = styled.div`


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
export const Choose = styled.div`

color: #0A0C14;
font-size: 2.5vw;
font-weight: 600;
margin-top: -2vw;


@media ${device.mobilexxS} { 
    font-size: 6vw;
    margin-bottom: 15vw;
}

@media ${device.mobileS} { 
    font-size: 6vw;
    margin-bottom: 15vw;
}

@media ${device.mobilexS} { 
    font-size: 6vw;
    margin-bottom: 15vw;
}

@media ${device. mobileM} { 
    font-size: 6vw;
    margin-bottom: 15vw;
}

@media ${device. mobileL} { 
    font-size: 6vw;
    margin-bottom: 15vw;
}

@media ${device. mobileLx} { 

}    font-size: 6vw;
margin-bottom: 15vw;
@media ${device. tablet} { 
    font-size: 2.5vw;
    margin-bottom: 0vw;
}

@media ${device.laptop} { 
    font-size: 2.5vw;
    margin-bottom: 0vw;
}

@media ${device. laptopL} { 
    font-size: 2.5vw;
    margin-bottom: 0vw;
}

@media ${device. desktop} { 
    font-size: 2.5vw;
    margin-bottom: 0vw;
}

`;

export const BridgeDiv = styled.div`
;
`;


export const BridgeHeader = styled.div`

font-weight: 600;

color: #F7302B;

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

export const BridgeDesc = styled.div`

font-weight: 400;
font-size: 1.2vw;
color: #666666;
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

export const MobileBridgeDesc = styled.div`

font-weight: 400;
font-size: 3.8vw;
color: #666666;
margin-top: -5vw;
@media ${device.mobilexxS} { 
display: flex;
}

@media ${device.mobileS} { 
    display: flex;
}

@media ${device.mobilexS} { 
    display: flex;
    font-size: 3.2vw;
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

export const BridgeIconsDiv = styled.div`
position: relative;

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

export const ChooseAlpha = styled.div`
position: absolute;
width: 15%;
left: 35vw;
top: 13vw;
`;

export const First = styled.div`
position: absolute;
width: 13%;
left: 55vw;
top: -4vw;
`;

export const FirstArrow = styled.div`
position: absolute;
left: 43vw;
top: 1vw;
width: 100%;
`;

export const Second = styled.div`

position: absolute;
width: 13%;
left: 65vw;
top: 3vw;
`;

export const SecondArrow = styled.div`
position: absolute;
left: 45vw;
top: 6vw;
width: 100%;
`;

export const Third = styled.div`
position: absolute;
width: 13%;
left: 60vw;
top: 11vw;
`;

export const ThirdArrow = styled.div`
position: absolute;
left: 45vw;
top: 13.8vw;
width: 100%;
`;

export const Fourth = styled.div`
position: absolute;
width: 13%;
left: 54vw;
top: 19vw;
`;

export const FourthArrow = styled.div`
position: absolute;
left: 45vw;
top: 19vw;
width: 100%;
`;


export const FifthArrow = styled.div`
position: absolute;
left: 44vw;
top: 19.5vw;
width: 100%;
`;

export const SixthArrow = styled.div`
position: absolute;
left: 40vw;
top: 22vw;
width: 100%;
`;

export const Black = styled.div`
position: absolute;
width: 13%;
left: 28vw;
top: 32vw;
`;

export const BlackArrow = styled.div`
position: absolute;
left: 32.5vw;
top: 22vw;
width: 100%;
`;

export const SeventhArrow = styled.div`
position: absolute;
left: 20.5vw;
top: 21.5vw;
width: 100%;
`;

export const Green = styled.div`
position: absolute;
width: 12%;
left: 10vw;
top: 20vw;
`;

export const GreenArrow = styled.div`
position: absolute;
left: 17vw;
top: 20vw;
width: 100%;
`;

export const TenthArrow = styled.div`
position: absolute;
left: 14vw;
top: 15vw;
width: 100%;
`;

export const Red = styled.div`
position: absolute;
width: 12%;
left: 10vw;
top: 5vw;
`;

export const RedArrow = styled.div`
position: absolute;
left: 17vw;
top: 9vw;
width: 100%;
`;

export const Orange = styled.div`
position: absolute;
width: 11%;
left: 22vw;
top: 2vw
`;

export const OrangeArrow = styled.div`
position: absolute;
left: 28vw;
top: 7.5vw;
width: 100%;
`;

export const Thirteen = styled.div`
position: absolute;
width: 10%;
left: 32vw;
top: 1vw
`;

export const ThirteenthArrow = styled.div`
position: absolute;
left: 36vw;
top: 6vw;
width: 100%;
`;

export const FourteenthArrow = styled.div`
position: absolute;
left: 41vw;
top: 1vw;
width: 100%;
`;
















