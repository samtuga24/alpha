import styled from "styled-components";
import { device } from './MobileDevice';

export const Container = styled.div`
position: relative;
background: #FFF8EB;
`;

export const Wrapper = styled.div`
display: flex;
flex: 3;
padding-left: 10%;
padding-right: 6%;

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

export const PhoneOne = styled.div`
flex: 1;
margin-right: 1.5vw;
`;

export const PhoneTwo = styled.div`
flex: 1;
position: relative;
margin-right: 1.5vw;
`;

export const PhoneThree = styled.div`
flex: 1;
position: relative;
`;

export const MobileWrapper = styled.div`
padding-right: 5%;
padding-left: 5%;
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

export const PhoneTwoWrap = styled.div`
width: 100%;
`;


export const Review = styled.div`
position: absolute;
bottom: 0;
width         : 0;
height        : 0;
transform     : rotate(0deg);    
border-left   : 0px solid transparent;
border-right  : 100vw solid transparent;  
border-bottom : 18vw solid #FFFFFF;


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
    display: block;
}

@media ${device.laptop} { 
    display: block;
}

@media ${device. laptopL} { 
    display: block;
}

@media ${device. desktop} { 
    display: block;
}
`;

export const Div = styled.div`
position: absolute;
bottom: 0;
height: 6.5vw;
width: 100%;
background: #FFFFFF;


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
    display: block;
}

@media ${device.laptop} { 
    display: block;
}

@media ${device. laptopL} { 
    display: block;
}

@media ${device. desktop} { 
    display: block;
}
`;