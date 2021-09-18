import React, {useState} from 'react'
import { AboutContainer, AboutWrapper, AboutRow, Column1, TextWrapper, Heading, Subtitle, TopLine, BtnWrap, Button, Column2, ImgWrap, Img} from './AboutElements'
import { useHistory } from 'react-router-dom';

const About = ({lightBg, id, imgStart, topLine, lightText, headLine, darkText, description, buttonLabel, img, alt, primary, dark, dark2, description2, buttonLabel2 }) => {

    const history = useHistory();

    const [pageViewCount, setPageViewCount] = useState(0)

    function toRegister() {
        setPageViewCount(pageViewCount + 1)
        if (pageViewCount > 1) {
            history.replace("/register")
            setPageViewCount(0)
        }
        else {
            history.push("/register")
            setPageViewCount(0)
        }
    }

    return (
        <>
            <AboutContainer lightBg={lightBg} id={id}  >
                <AboutWrapper>
                    <AboutRow imgStart={imgStart} >
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText} >{headLine}</Heading>
                                <Subtitle darkText={darkText} >{description}</Subtitle>
                                <Subtitle darkText={darkText} >{description2}</Subtitle>
                                <BtnWrap>
                                    <Button onClick={toRegister} smooth={true} duration={500} spy={true} exact="true" offset={-80}  primary={primary ? 1 : 0} dark={dark ? 1 : 0} dark2={dark2 ? 1 : 0}  >{buttonLabel}</Button>
                                    <Button smooth={true} duration={500} spy={true} exact="true" offset={-80}  primary={primary ? 1 : 0} dark={dark ? 1 : 0} dark2={dark2 ? 1 : 0}  >{buttonLabel2}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </AboutRow>
                </AboutWrapper>
            </AboutContainer>
        </>
    )
}

export default About
