import React, {useState} from 'react'
import Video from './../../videos/video.mp4';
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
} from './HeroSection'
import {Button} from './../Button'

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover);
    }

    return (
        <HeroContainer 
        id="home">
            <HeroBg>
                <VideoBg
                autoPlay
                loop
                muted
                src={Video}
                type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>
                Виртуальный Банкинг Стал Проще    
                </HeroH1>
                <HeroP>
                Зарегистрируйте новую учетную запись сегодня и получите 250 долларов в качестве кредита для вашего следующего платежа.
                </HeroP>
                <HeroBtnWrapper>
                    <Button 
                    to="signup"
                    onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    primary="true"
                    dark="true">
                    Начать {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
