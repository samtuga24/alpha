import styled from "styled-components";
import { device } from './MobileDevice';

export const Container = styled.div`
padding-top: 50px;
background: linear-gradient(180.24deg, #FFFFFF 2.66%, #F8EFE2 41.75%, #E9FBF2 94.4%);
height: auto;
`;

export const Wrapper = styled.div`

display: flex;
flex: 3;

@media ${device.mobilexxS} { 
    flex-direction: column-reverse;
    padding-left: 5%;
    padding-right: 5%;
  }
  
  @media ${device.mobileS} { 
    flex-direction: column-reverse;
    padding-left: 5%;
    padding-right: 5%;
  }
  
  @media ${device.mobilexS} { 
    flex-direction: column-reverse;
    padding-left: 5%;
    padding-right: 5%;
  }
  
  @media ${device. mobileM} { 
    flex-direction: column-reverse;
    padding-left: 5%;
    padding-right: 5%;
  }
  
  @media ${device. mobileL} { 
    flex-direction: column-reverse;
    padding-left: 5%;
    padding-right: 5%;
  }
  
    @media ${device. tablet} { 
        flex-direction: column-reverse;
        padding-left: 10%;
        padding-right: 10%;
    }
  
    @media ${device. laptopL} { 
        flex-direction: row;
        padding-left: 10%;
        padding-right: 10%;
    }
  
    @media ${device. desktop} { 
        flex-direction: row;
        padding-left: 10%;
        padding-right: 10%;
    }
  
    @media ${device.laptop} { 
        flex-direction: row;
        padding-left: 10%;
        padding-right: 10%;
    }

`;
export const BusinessImage = styled.div`

flex: 0.7;


`;
export const ForBusiness = styled.div`
flex: 1.3;
`;
export const ImageWrap = styled.div`
width: 100%;

@media ${device.mobilexxS} { 
  margin-top: 50px;
}

@media ${device.mobileS} { 
  margin-top: 50px;
}

@media ${device.mobilexS} { 
  margin-top: 50px;
}

@media ${device. mobileM} { 
  margin-top: 50px;
}

@media ${device. mobileL} { 
  margin-top: 50px;
}

  @media ${device. tablet} { 
    margin-top: 100px;
  }

  @media ${device. laptopL} { 
    margin-top: 0px;
  }
  
  @media ${device. desktop} { 
    margin-top: 0px;
  }
  
  @media ${device.laptop} { 
    margin-top: 0px;
  }

`;

export const BusinessHeader = styled.div`
font-weight: 600;
font-size: 38px;
line-height: 0px;
letter-spacing: -0.01em;
color: #0A0C14;
width: 85%;
float: right;

@media ${device.mobilexxS} { 
  width: 100%;
  font-size: 24px;
  margin-bottom: 30px;
}

@media ${device.mobileS} { 
  width: 100%;
  font-size: 24px;
  margin-bottom: 30px;
}

@media ${device.mobilexS} { 
  width: 100%;
  font-size: 24px;
  margin-bottom: 30px;
}

@media ${device. mobileM} { 
  width: 100%;
  font-size: 24px;
  margin-bottom: 30px;
}

@media ${device. mobileL} { 
  width: 100%;
  font-size: 24px;
  margin-bottom: 30px;
}

@media ${device. tablet} { 
  width: 100%;
  font-size: 24px;
  margin-bottom: 30px;
}

@media ${device. laptopL} { 
  width: 85%;
}

@media ${device. desktop} { 
  width: 85%;
}

@media ${device.laptop} { 
  width: 85%;
}
`;
export const BusinessList = styled.div`

width: 85%;
float: right;

@media ${device.mobileS} { 

   }

   @media ${device.mobilexS} { 
    width: 100%;
   }

   @media ${device.laptop} { 
    width: 85%;
   }



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
    width: 100%;
  }
  
  @media ${device.laptop} { 
    width: 85%;
  }
  
  @media ${device. laptopL} { 
    width: 85%;
  }
  
  @media ${device. desktop} { 
    width: 85%;
  }
`;

export const BusinessStepsDiv = styled.div`
// border: 1px solid green;
display: flex;
width: 100%;
flex: 2;
background: #FFFFFF;
box-shadow: 0px 15px 200px rgba(247, 48, 43, 0.06);
border-radius: 16px;
margin-bottom: 20px;
border-image: linear-gradient(96.38deg, #FFA500 2.96%, #D0A41A 8.96%, #8DA23F 14.17%, #75A24C 21.8%, #5CA15A 29.43%, #32A071 36.26%) 1;
`;
