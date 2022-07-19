import styled from "styled-components";
import { device } from './MobileDevice';


export const Container = styled.div`
    height: auto;
    position: relative;
`;

export const Wrapper = styled.div`
    padding-right: 10%;
    padding-left: 10%;  
    padding-bottom: 5%;
    flex: 3;
    margin-top: -4%;

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
      
      @media ${device. tablet} { 
        display: flex;
      }
      
      @media ${device. laptopL} { 
        display: flex;
        // flex-direction: row;
      }
      
      @media ${device. desktop} { 
        display: flex;
        // flex-direction: row;
      }
      
      @media ${device.laptop} { 
        display: flex;

      }
`;

export const MobileWrapper = styled.div`
padding-right: 5%;
padding-left: 5%;
padding-top: 20%;

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
  
  @media ${device. tablet} { 
    display: none;
  
  }
  
  @media ${device. laptopL} { 
    display: none;
  }
  
  @media ${device. desktop} { 
    display: none;
  }
  
  @media ${device.laptop} { 
    display: none;
  }
`;

export const Growth = styled.div`
    // border: 1px solid blue;
    flex: 1;
    padding-right: 5%;
    @media ${device.mobileS} { 
        margin-bottom: 30px;
       }

       @media ${device.mobilexS} { 
        margin-bottom: 30px;
       }

       @media ${device.laptop} { 
    
       }

`;

export const GrowthIcon = styled.div`
// border: 1px solid blue;
width: 22%;
`;

export const GrowthDesc = styled.div`
    // border: 1px solid black;
`;

export const GrowthDescHeader = styled.div`
    // border: 1px solid black;
    font-weight: 600;


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
      
      @media ${device. tablet} { 
        font-size: 1.45vw;
      }
      
      @media ${device. laptopL} { 
        font-size: 1.45vw;
      }
      
      @media ${device. desktop} { 
        font-size: 1.45vw;
      }
      
      @media ${device.laptop} { 
        font-size: 1.45vw;
      }
`;

export const GrowthDescBody = styled.div`
    // border: 1px solid black;
    color: rgba(0, 0, 0, 0.5);
    // width: 80%;
  

    @media ${device.mobilexxS} { 
      font-size: 4vw;
      }
      
      @media ${device.mobileS} { 
        font-size: 4vw;
      }
      
      @media ${device.mobilexS} { 
        font-size: 4vw;
      }
      
      @media ${device. mobileM} { 
        font-size: 4vw;
      }
      
      @media ${device. mobileL} { 
        font-size: 4vw;
      }

      @media ${device. tablet} { 
        font-size: 1.05vw;
      }


      @media ${device. laptopL} { 
        font-size: 1.05vw;
      }
      
      @media ${device. desktop} { 
        font-size: 1.05vw;
      }
      
      @media ${device.laptop} { 
        font-size: 1.05vw;
      }
      

`;
export const Search = styled.div`
    // border: 1px solid black;
    flex: 1;
    @media ${device.mobileS} { 
        margin-bottom: 30px;
       }

       @media ${device.mobilexS} { 
        margin-bottom: 30px;
       }

       @media ${device.laptop} { 
    
       }
`;

export const SearchIcon = styled.div`
// border: 1px solid blue;
width: 22%;
// @media ${device.mobilexxS} { 
//   width: 15%;
// }

// @media ${device.mobileS} { 
//   width: 15%;
// }

// @media ${device.mobilexS} { 
//   width: 15%;
// }

// @media ${device. mobileM} { 
//   width: 15%;
// }

// @media ${device. mobileL} { 
//   width: 15%;
// }

// @media ${device. tablet} { 
//   width: 15%;
// }

// @media ${device. laptopL} { 
//   width: 20%;
// }

// @media ${device. desktop} { 
//   width: 20%;
// }

// @media ${device.laptop} { 
//   width: 20%;

}
`;

export const SearchDesc = styled.div`
    // border: 1px solid black;
`;

export const SearchDescHeader = styled.div`
    // border: 1px solid black;
    font-weight: 600;


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
    
    @media ${device. tablet} { 
      font-size: 1.5vw;
    }
    
    @media ${device. laptopL} { 
      font-size: 1.5vw;
    }
    
    @media ${device. desktop} { 
      font-size: 1.5vw;
    }
    
    @media ${device.laptop} { 
      font-size: 1.45vw;
    }

`;

export const SearchDescBody = styled.div`
    // border: 1px solid black;
    font-size: 1.1vw;
    color: rgba(0, 0, 0, 0.5);

    @media ${device.mobilexxS} { 
      font-size: 4vw;
      }
      
      @media ${device.mobileS} { 
        font-size: 4vw;
      }
      
      @media ${device.mobilexS} { 
        font-size: 4vw;
      }
      
      @media ${device. mobileM} { 
        font-size: 4vw;
      }
      
      @media ${device. mobileL} { 
        font-size: 4vw;
      }

      @media ${device. tablet} { 
        font-size: 1.05vw;
      }


      @media ${device. laptopL} { 
        font-size: 1.05vw;
      }
      
      @media ${device. desktop} { 
        font-size: 1.05vw;
      }
      
      @media ${device.laptop} { 
        font-size: 1.05vw;
      }

`;
export const Business = styled.div`
    flex: 1;

    @media ${device.mobilexxS} { 
      padding-left: 0%;
    }
    
    @media ${device.mobileS} { 
      padding-left: 0%;
    }
    
    @media ${device.mobilexS} { 
      padding-left: 0%;
    }
    
    @media ${device. mobileM} { 
      padding-left: 0%;
    }
    
    @media ${device. mobileL} { 
      padding-left: 0%;
    }
    
    @media ${device. mobileLx} { 
      padding-left: 0%;
    }
    @media ${device. tablet} { 
      padding-left: 5%;

    }
    
    @media ${device.laptop} { 
      padding-left: 5%;

    }
    
    @media ${device. laptopL} { 
      padding-left: 5%;

    }
    
    @media ${device. desktop} { 
      padding-left: 5%;

    }
`;
export const BusinessIcon = styled.div`
// border: 1px solid blue;
width: 22%;
// @media ${device.mobilexxS} { 
//   width: 15%;
// }

// @media ${device.mobileS} { 
//   width: 15%;
// }

// @media ${device.mobilexS} { 
//   width: 15%;
// }

// @media ${device. mobileM} { 
//   width: 15%;
// }

// @media ${device. mobileL} { 
//   width: 15%;
// }

// @media ${device. tablet} { 
//   width: 15%;
// }

// @media ${device. laptopL} { 
//   width: 20%;
// }

// @media ${device. desktop} { 
//   width: 20%;
// }

// @media ${device.laptop} { 
//   width: 20%;

// }
`;

export const BusinessDesc = styled.div`
    // border: 1px solid black;
`;

export const BusinessDescHeader = styled.div`
    // border: 1px solid black;
    font-weight: 600;
 
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
    
    @media ${device. tablet} { 
      font-size: 1.45vw;
    }
    
    @media ${device. laptopL} { 
      font-size: 1.45vw;
    }
    
    @media ${device. desktop} { 
      font-size: 1.45vw;
    }
    
    @media ${device.laptop} { 
      font-size: 1.45vw;
    }
`;

export const BusinessDescBody = styled.div`
    // border: 1px solid black;
    font-size: 1.1vw;
    color: rgba(0, 0, 0, 0.5);
    @media ${device.mobilexxS} { 
      font-size: 4vw;
      }
      
      @media ${device.mobileS} { 
        font-size: 4vw;
      }
      
      @media ${device.mobilexS} { 
        font-size: 4vw;
      }
      
      @media ${device. mobileM} { 
        font-size: 4vw;
      }
      
      @media ${device. mobileL} { 
        font-size: 4vw;
      }

      @media ${device. tablet} { 
        font-size: 1.05vw;
      }


      @media ${device. laptopL} { 
        font-size: 1.05vw;
      }
      
      @media ${device. desktop} { 
        font-size: 1.05vw;
      }
      
      @media ${device.laptop} { 
        font-size: 1.05vw;
      }
`;