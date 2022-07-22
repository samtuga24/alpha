import React, { useState } from 'react'
import up from '../icons/arrow-up.svg'
import down from '../icons/arrow-down.svg'
import android from '../icons/android.svg'
import apple from '../icons/apple.svg'
import image_one from '../icons/question-image-1.svg'
import image_two from '../icons/question-image-2.svg'
import { AlphaFaqs, Android, Answer, AnswerDownloadStore, AnswerPhoneImage, AnswerTextWrap, Apple, Arrow, ArrowWrap, Container, DownArrow, FAQ, FaqsDiv, FaqsHeader, FaqWrap, FirstPhone, FWrapper, IconsDivs, MobileView, SecondPhone, UpArrow } from './Faq'

export const FaqsComponent = () => {
    const [isClicked, setIsClicked] = useState(false);
    const [secondClicked, setSecondClicked] = useState(false);
    const [thirdClicked, setThirdClicked] = useState(false);
    const [fourthClicked, setFourthClicked] = useState(false);
    const [fifthClicked, setFifthClicked] = useState(false);
  return (
    <Container id="faqs">
        <FWrapper>
            <AlphaFaqs><p>ALPHA — FAQS</p></AlphaFaqs>
            <FaqsHeader><p>Frequently Asked Questions</p></FaqsHeader>
            <FaqWrap style={isClicked ? 
                {borderImageSource: "linear-gradient(96.38deg, #FFA500 2.96%, #D0A41A 8.96%, #8DA23F 14.17%, #75A24C 21.8%, #5CA15A 29.43%, #32A071 36.26%)",
                borderWidth: '0.2vw',
                borderStyle: 'solid',
                borderImageSlice: 1
            }
                : null}>
            <FaqsDiv onClick={()=>setIsClicked(!isClicked)}>
                <FAQ className={isClicked ? 'faqs-weight': null}><p>How can I register an account on Alpha?</p></FAQ>
                <Arrow>
                    <UpArrow className=''>
                        <ArrowWrap>{isClicked && (<img src={up} alt="" className='manage-business faq-wrap'/>)}</ArrowWrap>
                    </UpArrow>
                    <DownArrow>
                        <ArrowWrap>{!isClicked && (<img src={down} alt="" className='manage-business faq-wrap'/>)}</ArrowWrap>
                    </DownArrow>
        
                </Arrow>    
            </FaqsDiv>
            {isClicked && (
            <Answer className='delay-arrow'>
                <AnswerTextWrap>
                    <p>You can register an account on Alpha by downloading the Alpha 
                        app on playstore <br/>clicking on Sign Up and filling in your details</p>
                </AnswerTextWrap>

                <IconsDivs>
                    <AnswerDownloadStore>
                        <Android className='manage-business'><img src={android} alt="" /></Android>
                        <Apple className='manage-business'><img src={apple} alt="" /></Apple>
                    </AnswerDownloadStore>
                    <AnswerPhoneImage>
                        <FirstPhone className='manage-business'>
                            <img src={image_one} alt="" />
                        </FirstPhone>
                        <SecondPhone className='manage-business'>
                        <img src={image_two} alt="" />
                        </SecondPhone>
                    </AnswerPhoneImage>
                </IconsDivs>
            </Answer>
            )}
        </FaqWrap>


        <FaqWrap style={secondClicked ? 
                {borderImageSource: "linear-gradient(96.38deg, #FFA500 2.96%, #D0A41A 8.96%, #8DA23F 14.17%, #75A24C 21.8%, #5CA15A 29.43%, #32A071 36.26%)",
                borderWidth: '0.2vw',
                borderStyle: 'solid',
                borderImageSlice: 1
            }
                : null}>
            <FaqsDiv onClick={()=>setSecondClicked(!secondClicked)}>
                <FAQ className={secondClicked ? 'faqs-weight': null}><p>How can I search for products or services on Alpha</p></FAQ>
                <Arrow>
                    <UpArrow>
                        <ArrowWrap className=''>{secondClicked && (<img src={up} alt="" />)}</ArrowWrap>
                    </UpArrow>
                    <DownArrow>
                        <ArrowWrap className=''>{!secondClicked && (<img src={down} alt="" />)}</ArrowWrap>
                    </DownArrow>
                </Arrow>

              
            </FaqsDiv>
            {secondClicked && (

                <Answer>
                <AnswerTextWrap>
                    <p>There are mainly three methods to find products on Alpha:<br/>

                        1) Search with keywords ie. wigs, books etc<br/>
                        2) Search with business name ie. Heavenly's wigs etc<br/>
                        3) Search with location ie. Accra, Abuja etc.</p>
                </AnswerTextWrap>

                <IconsDivs>
                    <AnswerDownloadStore>
                        <Android className='manage-business'><img src={android} alt="" /></Android>
                        <Apple className='manage-business'><img src={apple} alt="" /></Apple>
                    </AnswerDownloadStore>
                    <AnswerPhoneImage>
                        <FirstPhone className='manage-business'>
                            <img src={image_one} alt="" />
                        </FirstPhone>
                        <SecondPhone className='manage-business'>
                        <img src={image_two} alt="" />
                        </SecondPhone>
                    </AnswerPhoneImage>
                </IconsDivs>
                </Answer>
            )}

        </FaqWrap>



        <FaqWrap style={thirdClicked ? 
                {borderImageSource: "linear-gradient(96.38deg, #FFA500 2.96%, #D0A41A 8.96%, #8DA23F 14.17%, #75A24C 21.8%, #5CA15A 29.43%, #32A071 36.26%)",
                borderWidth: '0.2vw',
                borderStyle: 'solid',
                borderImageSlice: 1
            }
                : null}>
            <FaqsDiv onClick={()=>setThirdClicked(!thirdClicked)}>
                <FAQ className={thirdClicked ? 'faqs-weight': null}><p>How do I add a business or products to my favourite?</p></FAQ>
                <Arrow>
                    <UpArrow>
                        <ArrowWrap className=''>{thirdClicked && (<img src={up} alt="" />)}</ArrowWrap>
                    </UpArrow>
                    <DownArrow>
                        <ArrowWrap className=''>{!thirdClicked && (<img src={down} alt="" />)}</ArrowWrap>
                    </DownArrow>
                </Arrow>

              
            </FaqsDiv>
            {thirdClicked &&(
                <Answer>
                <AnswerTextWrap>
                    <p>On every business or product page, there is an "Add to Favorites" button.
                    Please click on it to add to "My Favorites"
                    Should I communicate with the business owner outside Alpha? We strongly advice both 
                    parties to strictly keep their communications on Alpha. Chat records will help our team make
                    informed and fair decisions in the case of disputes.
                    </p>
                </AnswerTextWrap>

                <IconsDivs>
                    <AnswerDownloadStore>
                        <Android className='manage-business'><img src={android} alt="" /></Android>
                        <Apple className='manage-business'><img src={apple} alt="" /></Apple>
                    </AnswerDownloadStore>
                    <AnswerPhoneImage>
                        <FirstPhone className='manage-business'>
                            <img src={image_one} alt="" />
                        </FirstPhone>
                        <SecondPhone className='manage-business'>
                        <img src={image_two} alt="" />
                        </SecondPhone>
                    </AnswerPhoneImage>
                </IconsDivs>
            </Answer>

            )}

        </FaqWrap>



        
        <FaqWrap style={fourthClicked ? 
                {borderImageSource: "linear-gradient(96.38deg, #FFA500 2.96%, #D0A41A 8.96%, #8DA23F 14.17%, #75A24C 21.8%, #5CA15A 29.43%, #32A071 36.26%)",
                borderWidth: '0.2vw',
                borderStyle: 'solid',
                borderImageSlice: 1
            }
                : null}>
            <FaqsDiv onClick={()=>setFourthClicked(!fourthClicked)}>
                <FAQ className={fourthClicked ? 'faqs-weight': null}><p>Should I communicate with the business owner outside Alpha?</p></FAQ>
                <Arrow>
                    <UpArrow>
                        <ArrowWrap className=''>{fourthClicked && (<img src={up} alt="" />)}</ArrowWrap>
                    </UpArrow>
                    <DownArrow>
                        <ArrowWrap className=''>{!fourthClicked && (<img src={down} alt="" />)}</ArrowWrap>
                    </DownArrow>
                </Arrow>

              
            </FaqsDiv>
            {fourthClicked && (
                <Answer>
                <AnswerTextWrap>
                    <p>We strongly advice both parties to strictly keep their communications on Alpha. Chat records will help our team make
                    informed and fair decisions in the case of disputes.

                    </p>
                </AnswerTextWrap>

                <IconsDivs>
                    <AnswerDownloadStore>
                        <Android className='manage-business'><img src={android} alt="" /></Android>
                        <Apple className='manage-business'><img src={apple} alt="" /></Apple>
                    </AnswerDownloadStore>
                    <AnswerPhoneImage>
                        <FirstPhone className='manage-business'>
                            <img src={image_one} alt="" />
                        </FirstPhone>
                        <SecondPhone className='manage-business'>
                        <img src={image_two} alt="" />
                        </SecondPhone>
                    </AnswerPhoneImage>
                </IconsDivs>
            </Answer>

            )}
            
        </FaqWrap>



        <FaqWrap style={fifthClicked ? 
                {borderImageSource: "linear-gradient(96.38deg, #FFA500 2.96%, #D0A41A 8.96%, #8DA23F 14.17%, #75A24C 21.8%, #5CA15A 29.43%, #32A071 36.26%)",
                borderWidth: '0.2vw',
                borderStyle: 'solid',
                borderImageSlice: 1
            }
                : null}>
            <FaqsDiv onClick={()=>setFifthClicked(!fifthClicked)}>
                <FAQ className={fifthClicked ? 'faqs-weight': null}><p>How do I write a review?</p></FAQ>
                <Arrow>
                    <UpArrow>
                        <ArrowWrap className=''>{fifthClicked && (<img src={up} alt="" />)}</ArrowWrap>
                    </UpArrow>
                    <DownArrow>
                        <ArrowWrap className=''>{!fifthClicked && (<img src={down} alt="" />)}</ArrowWrap>
                    </DownArrow>
                </Arrow>

              
            </FaqsDiv>
            {fifthClicked && (
                      <Answer>
                      <AnswerTextWrap>
                          <p>From the business page, click on the "Write a Review" button. From the homepage or your profile page, select 
                          "Write Review" Use the format [Place name] [Location] for best results. If you cannot find the place you are looking for,
                          click the "Add business" to add that business. Your review will immediately appear in your profile page and the business
                          page.</p>
                      </AnswerTextWrap>
      
                      <IconsDivs>
                          <AnswerDownloadStore>
                              <Android className='manage-business'><img src={android} alt="" /></Android>
                              <Apple className='manage-business'><img src={apple} alt="" /></Apple>
                          </AnswerDownloadStore>
                          <AnswerPhoneImage>
                              <FirstPhone className='manage-business'>
                                  <img src={image_one} alt="" />
                              </FirstPhone>
                              <SecondPhone className='manage-business'>
                              <img src={image_two} alt="" />
                              </SecondPhone>
                          </AnswerPhoneImage>
                      </IconsDivs>
                  </Answer>
            )}
      
        </FaqWrap>


        </FWrapper>











{/* ################################################################################################## */}

        <MobileView>
        <AlphaFaqs><p>ALPHA — FAQS</p></AlphaFaqs>
            <FaqsHeader><p>Frequently Asked <br/>Questions</p></FaqsHeader>
            <FaqWrap>
            <FaqsDiv onClick={()=>setIsClicked(!isClicked)}>
                <FAQ className={isClicked ? 'faqs-weight': null}><p>How can i register <br/>an account on Alpha?</p></FAQ>
                <Arrow>
                    <UpArrow>
                        <ArrowWrap className=''>{isClicked && (<img src={up} alt="" />)}</ArrowWrap>
                    </UpArrow>
                    <DownArrow>
                        <ArrowWrap className=''>{!isClicked && (<img src={down} alt="" />)}</ArrowWrap>
                    </DownArrow>
                </Arrow>

              
            </FaqsDiv>
            {isClicked && (
                            <Answer>
                            <AnswerTextWrap>
                                <p>You can register an account on <br/>Alpha by downloading the Alpha 
                                    app <br/>on playstore clicking on Sign Up <br/>and filling in your details</p>
                            </AnswerTextWrap>
                            <AnswerDownloadStore>
                                    <Android className='manage-business'><img src={android} alt="" /></Android>
                                    <Apple className='manage-business'><img src={apple} alt="" /></Apple>
                                </AnswerDownloadStore>
            
                        </Answer>
            )}

        </FaqWrap>


        <FaqWrap>
            <FaqsDiv onClick={()=>setSecondClicked(!secondClicked)}>
                <FAQ className={secondClicked ? 'faqs-weight': null}><p>How can I search for products or services on Alpha</p></FAQ>
                <Arrow>
                    <UpArrow>
                        <ArrowWrap className=''>{secondClicked && (<img src={up} alt="" />)}</ArrowWrap>
                    </UpArrow>
                    <DownArrow>
                        <ArrowWrap className=''>{!secondClicked && (<img src={down} alt="" />)}</ArrowWrap>
                    </DownArrow>
                </Arrow>

              
            </FaqsDiv>
            {secondClicked && (
                            <Answer>
                            <AnswerTextWrap>
                                <p>There are mainly three methods to find products on Alpha:
            
                                    1) Search with keywords ie. wigs, books etc
                                    2) Search with business name ie. Heavenly's wigs etc
                                    3) Search with location ie. Accra, Abuja etc.</p>
                            </AnswerTextWrap>
                            <AnswerDownloadStore>
                                    <Android className='manage-business'><img src={android} alt="" /></Android>
                                    <Apple className='manage-business'><img src={apple} alt="" /></Apple>
                                </AnswerDownloadStore>
            
                        </Answer>
            )}

        </FaqWrap>




        <FaqWrap>
            <FaqsDiv onClick={()=>setThirdClicked(!thirdClicked)}>
                <FAQ className={thirdClicked ? 'faqs-weight': null}><p>How do I add a business or product to my Favorites?</p></FAQ>
                <Arrow>
                    <UpArrow>
                        <ArrowWrap className=''>{thirdClicked && (<img src={up} alt="" />)}</ArrowWrap>
                    </UpArrow>
                    <DownArrow>
                        <ArrowWrap className=''>{!thirdClicked && (<img src={down} alt="" />)}</ArrowWrap>
                    </DownArrow>
                </Arrow>

              
            </FaqsDiv>
            {thirdClicked && (
                            <Answer>
                            <AnswerTextWrap>
                                <p>On every business or product page, there is an "Add to Favorites" button.
                                Please click on it to add to "My Favorites"</p>
                            </AnswerTextWrap>
                            <AnswerDownloadStore>
                                    <Android className='manage-business'><img src={android} alt="" /></Android>
                                    <Apple className='manage-business'><img src={apple} alt="" /></Apple>
                                </AnswerDownloadStore>
            
                        </Answer>
            )}

        </FaqWrap>



        
        <FaqWrap>
            <FaqsDiv onClick={()=>setFourthClicked(!fourthClicked)}>
                <FAQ className={fourthClicked ? 'faqs-weight': null}><p>Should I communicate with the business owner outside Alpha?</p></FAQ>
                <Arrow>
                    <UpArrow>
                        <ArrowWrap className=''>{fourthClicked && (<img src={up} alt="" />)}</ArrowWrap>
                    </UpArrow>
                    <DownArrow>
                        <ArrowWrap className=''>{!fourthClicked && (<img src={down} alt="" />)}</ArrowWrap>
                    </DownArrow>
                </Arrow>

              
            </FaqsDiv>
            {fourthClicked && (
                            <Answer>
                            <AnswerTextWrap>
                                <p>We strongly advice both parties to strictly keep their communications on Alpha. Chat records will help our team make
                                    informed and fair decisions in the case of disputes.
                                </p>
                            </AnswerTextWrap>
                            <AnswerDownloadStore>
                                    <Android className='manage-business'><img src={android} alt="" /></Android>
                                    <Apple className='manage-business'><img src={apple} alt="" /></Apple>
                                </AnswerDownloadStore>
            
                        </Answer>
            )}

        </FaqWrap>



        <FaqWrap>
            <FaqsDiv onClick={()=>setFifthClicked(!fifthClicked)}>
                <FAQ className={fifthClicked ? 'faqs-weight': null}><p>How do I write a review?</p></FAQ>
                <Arrow>
                    <UpArrow>
                        <ArrowWrap className=''>{fifthClicked && (<img src={up} alt="" />)}</ArrowWrap>
                    </UpArrow>
                    <DownArrow>
                        <ArrowWrap className=''>{!fifthClicked && (<img src={down} alt="" />)}</ArrowWrap>
                    </DownArrow>
                </Arrow>

              
            </FaqsDiv>
            {fifthClicked && (
                   <Answer>
                   <AnswerTextWrap>
                       <p>From the business page, click on the "Write a Review" button. From the homepage or your profile page, select 
   "Write Review" Use the format [Place name] [Location] for best results. If you cannot find the place you are looking for,
   click the "Add business" to add that business. Your review will immediately appear in your profile page and the business
   page.
                       </p>
                   </AnswerTextWrap>
                   <AnswerDownloadStore>
                           <Android className='manage-business'><img src={android} alt="" /></Android>
                           <Apple className='manage-business'><img src={apple} alt="" /></Apple>
                       </AnswerDownloadStore>
   
               </Answer>         
            )}

        </FaqWrap>
        </MobileView>
    </Container>

  )
}
