import React, { useState } from 'react'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight, Button } from './HeroElements'
import Video from './video.mp4'
import { useHistory } from 'react-router-dom';
const Hero = (props) => {

    const [hover, setHover] = useState(false)

    const history = useHistory();

    const [pageViewCount, setPageViewCount] = useState(0)

    const onHover = () => {
        setHover(!hover)
    }

    function toLogin() {
        setPageViewCount(pageViewCount + 1)
        if (pageViewCount > 1) {
            history.replace("/login")
            setPageViewCount(0)
        }
        else {
            history.push("/login")
            setPageViewCount(0)
        }
    }

    return (
        <HeroContainer id={props.id}>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
            </HeroBg>
            <HeroContent>
                <HeroH1>INNOVATIONS 2022</HeroH1>
                <HeroP>It gives us immense pleasure in announcing our 10th National Project Competition: Innovations 2022 which is a mixture of both creativity and innovation. We invite you to challenge your innovative mind and showcase your talent on 10th April 2022.</HeroP>
                <HeroBtnWrapper>
                    <Button primary="true" dark="true" onClick={toLogin} onMouseEnter={onHover} onMouseLeave={onHover} >
                        Get Started {hover ? <ArrowForward/> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
