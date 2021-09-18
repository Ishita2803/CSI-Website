import React from 'react'
import { Carousel } from 'react-bootstrap'
import { ScheduleContainer, ScheduleWrapper, ScheduleRow, TopLine, Column1, Column2, CarouselWrapper, ImgWrap, Img} from './ScheduleElements'
const Schedule = ({lightBg, id, imgStart, img, alt, topLine}) => {
    return (
        
            <ScheduleContainer id={id} lightBg={lightBg}>
                <ScheduleWrapper>
                    <ScheduleRow imgStart={imgStart}  >
                        <Column1 >
                            <CarouselWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Carousel touch fade>
                                    <Carousel.Item>
                                        <img
                                        className="d-block w-100"
                                        src="https://images.unsplash.com/photo-1603366615917-1fa6dad5c4fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                                        alt="First slide"
                                        />
                                        <Carousel.Caption>
                                        <h2>11th March</h2>
                                        <p>Registration Opens.</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                        className="d-block w-100"
                                        src="https://images.unsplash.com/photo-1603366615917-1fa6dad5c4fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                                        alt="Second slide"/>
                                        <Carousel.Caption>
                                        <h2>3rd April</h2>
                                        <p>Registration Ends.</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                        className="d-block w-100"
                                        src="https://images.unsplash.com/photo-1603366615917-1fa6dad5c4fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                                        alt="Third slide"/>
                                        <Carousel.Caption>
                                        <h2>4th April</h2>
                                        <p>Abstract Idea Submission.</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                        className="d-block w-100"
                                        src="https://images.unsplash.com/photo-1603366615917-1fa6dad5c4fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                                        alt="Fourth slide"/>
                                        <Carousel.Caption>
                                        <h2>10th April</h2>
                                        <p>Event Date (Online Mode).</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                </Carousel>
                            </CarouselWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </ScheduleRow>
                </ScheduleWrapper>
            </ScheduleContainer>
        
    )
}

export default Schedule
