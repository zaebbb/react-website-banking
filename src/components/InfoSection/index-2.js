// import React from 'react'
import {Button} from './../Button'
import svg1 from './../../images/svg-2.svg'
import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    ImgWrap,
    Img
} from './InfoSection';
// import {
//     id,
//     lightBg,
//     lightText,
//     lightTexDesc,
//     topLine,
//     headline,
//     description,
//     buttonLabel,
//     imgStart,
//     img,
//     alt,
//     dark,
//     primary,
//     darkText
// } from './Data';

const InfoSection_2 = ({
    lightBg, 
    id, 
    imgStart, 
    topLine, 
    lightText, 
    headline, 
    darkText, 
    description, 
    buttonLabel,
    alt,
    dark,
    dark2,
    primary,
    srcImage
}) => {
    return (
        <>
        <InfoContainer 
        lightBg={lightBg} 
        id={id}>
            <InfoWrapper>
                <InfoRow 
                imgStart={imgStart}>
                    <Column1>
                        <TextWrapper>
                            <TopLine>
                                {topLine}
                            </TopLine>
                            <Heading 
                            lightText={lightText ? 0 : 1}
                            dark={dark ? 1 : 0}>
                                {headline}
                            </Heading>
                            <Subtitle
                            darkText={darkText}>
                                {description}
                            </Subtitle>
                            <BtnWrap>
                                <Button
                                to="home"
                                smooth={true}
                                duration={500}
                                spy={true}
                                offset={-80}
                                primary={primary ? 0 : 1}
                                dark={dark ? 1 : 0}
                                dark2={dark2 ? 1 : 0}>
                                {buttonLabel}
                                </Button>
                            </BtnWrap>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img 
                            src={svg1} 
                            alt={alt} />
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
        </>
    )
}

export default InfoSection_2
