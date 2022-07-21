import React from 'react'
import loupe from '../icons/loupe.svg'
import default_loupe from '../icons/default_loupe.svg'
import book from '../icons/bookmark.svg'
import orange_book from '../icons/orange-bookmark.svg'
import orange_chat from '../icons/orange-live-chat.svg'
import chat from '../icons/chat.svg'
import { AlphaFeature, AwesomeFeature, BookmarkCard, CardDesc, CardDescHeader, CardWrap, Container, FeatureHeaderDiv, FeatureWrapper, ImageWrap, LiveChatCard, LocacalCard, LocacalCardWrap } from './FeatureStyle'
import { useState } from 'react'


export const Feature = () => {
    const [firstEnter, setFirstEnter] = useState(default_loupe);
    const [secondEnter, setSecondEnter] = useState(book);
    const [thirdEnter, setThirdEnter] = useState(chat);
  return (
    <Container id='feature'>
        <FeatureWrapper>
            <FeatureHeaderDiv>
                <AlphaFeature><p>ALPHA — FEATURES</p></AlphaFeature>
                <AwesomeFeature><p>Awesome features <br/>just for you.</p></AwesomeFeature>
            </FeatureHeaderDiv>
            <CardWrap>
                <LocacalCard>
                    <LocacalCardWrap onMouseOver={()=>setFirstEnter(loupe)} onMouseLeave={()=>setFirstEnter(default_loupe)}>
                        <ImageWrap className='card-image-wrap'><img src={firstEnter} alt="" /></ImageWrap>
                        <CardDescHeader><p>Local Directory</p></CardDescHeader>
                        <CardDesc><p>Search for product/service providers or <br/>
                            list your business on Alpha to connect to <br/>thousands of customers around you.</p></CardDesc>
                    </LocacalCardWrap>
                </LocacalCard>
                <BookmarkCard>
                <LocacalCardWrap onMouseOver={()=>setSecondEnter(orange_book)} onMouseLeave={()=>setSecondEnter(book)}>
                        <ImageWrap className='card-image-wrap'><img src={secondEnter} alt="" /></ImageWrap>
                        <CardDescHeader><p>Bookmark in Folders</p></CardDescHeader>
                        <CardDesc><p>Save products/services for later into <br/>organised 
                            folders & come back to them <br/>when you’re ready for purchase.</p></CardDesc>
                    </LocacalCardWrap>
                </BookmarkCard>
                <LiveChatCard>
                <LocacalCardWrap onMouseOver={()=>setThirdEnter(orange_chat)} onMouseLeave={()=>setThirdEnter(chat)}>
                        <ImageWrap className='card-image-wrap'><img src={thirdEnter} alt="" /></ImageWrap>
                        <CardDescHeader><p>Live Chat</p></CardDescHeader>
                        <CardDesc><p>A line of communication is always <br/>open for you to make 
                        inquiries if you’re a customer or provide a response if <br/>you’re a vendor.</p></CardDesc>
                    </LocacalCardWrap>
                </LiveChatCard>
            </CardWrap>
        </FeatureWrapper>
    </Container>
  )
}
