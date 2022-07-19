import styled from "styled-components";
import { device } from './MobileDevice';

export const CreateContainer = styled.div`
padding-top: 5%;
`;

export const CreateWrapper = styled.div`

display: flex;
flex: 3;
padding-left: 10%;
height: 50vw;


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
position: relative;
// display: flex;
// align-items: center;
// justify-content: center;

margin-right: 1.5vw;
`;

export const ManageHeader = styled.div`
margin-top: -1.5vw;
font-weight: 600;
color: #F7302B;
font-size: 3vw;
`;

export const ManageDesc = styled.div`

font-weight: 400;
font-size: 1.2vw;
color: #666666;
margin-top: -2vw;
`;

export const ImageWrap = styled.div`

width: 100%;
// margin-top: 8vw;
position: absolute;
bottom: 0;



`;

export const SecondImageWrap = styled.div`

width: 100%;
position: absolute;
bottom: 0;

`;

export const ThirdImageWrap = styled.div`

width: 100%;
position: absolute;
bottom: 0;
`;
export const Second = styled.div`

flex: 1;
position: relative;
margin-right: 1.5vw;
`;

export const Third = styled.div`

flex: 1;
position: relative;
`;

export const MobileView = styled.div`
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

export const MobileImageWrap = styled.div`
`;

export const MobileManageHeader = styled.div`
padding-left: 5%;
padding-right: 10%;
font-weight: 600;
color: #F7302B;
font-size: 5vw;
`;

export const MobileManageDesc = styled.div`
font-weight: 400;
font-size: 3.5vw;
color: #666666;
padding-left: 5%;
padding-right: 10%;
margin-top: -5vw;
`;
