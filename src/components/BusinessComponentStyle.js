import styled from "styled-components";
import { device } from './MobileDevice';

export const BusinessContainer = styled.div`
background: linear-gradient(180.24deg, #FFFFFF 2.66%, #F8EFE2 41.75%, #E9FBF2 94.4%);
padding-top: 5%;

`;

export const BusinessImageDiv = styled.div`
flex: 1;
position: relative;
display: flex;
// justify-content: center;
padding-top: 5%;
`;

export const BusinessImageWrap = styled.div`


@media ${device.mobilexxS} { 
    width: 100%;
}

@media ${device.mobileS} { 
    width: 100%;
}

@media ${device.mobilexS} { 
    width: 100%;
}

@media ${device. mobileM} { 
    width: 100%;
}

@media ${device. mobileL} { 
    width: 100%;
}

@media ${device. mobileLx} { 
    width: 100%;
}
@media ${device. tablet} { 
    width: 75%;
}

@media ${device.laptop} { 
    width: 75%;
}

@media ${device. laptopL} { 
    width: 75%;
}

@media ${device. desktop} { 
    width: 75%;
}

`;

export const BussinessWrap = styled.div`
display: flex;
flex: 2;
// padding-top: 10%;
padding-left: 10%;
padding-right: 10%;

@media ${device.mobilexxS} { 
    flex-direction: column-reverse;
    padding-left: 5%;
padding-right: 5%;
height: auto;
}


@media ${device.mobileS} { 
    flex-direction: column-reverse;
    padding-left: 5%;
padding-right: 5%;
height: auto;
}


@media ${device.mobilexS} { 
    flex-direction: column-reverse;
    padding-left: 5%;
padding-right: 5%;
height: auto;
}


@media ${device. mobileM} { 
flex-direction: column-reverse;
padding-left: 5%;
padding-right: 5%;
height: auto;
}

@media ${device. mobileL} { 
    flex-direction: column-reverse;
    padding-left: 5%;
padding-right: 5%;
height: auto;
}


@media ${device. mobileLx} { 
    flex-direction: column-reverse;
    padding-left: 5%;
padding-right: 5%;
height: auto;
}

@media ${device. tablet} { 
    flex-direction: row;
    padding-left: 10%;
    padding-right: 10%;
    height: 50vh;
}


@media ${device.laptop} { 
    flex-direction: row;
    padding-left: 10%;
    padding-right: 10%;
    height: auto;
}

@media ${device. laptopL} { 
    flex-direction: row;
    padding-left: 10%;
    padding-right: 10%;
    height: auto;
}

@media ${device. desktop} { 
    flex-direction: row;
    padding-left: 10%;
    padding-right: 10%;
    height: auto;
}

`;