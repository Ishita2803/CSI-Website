import React from 'react'
import { Accordion } from 'react-bootstrap'
import { FaqContainer, FaqWrapper, FaqRow, Column1, Column2, TextWrapper, ImgWrap, Img, TopLine } from './FaqElements'

const Faq= ({topLine, img, alt, id}) => {
    return (
        <FaqContainer id={id}>
            <FaqWrapper>
                <FaqRow>
                    <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Is there any registration fees?</Accordion.Header>
                                        <Accordion.Body>
                                        No, this is a completely free event. All you need is to spend your knowledge and skills.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>What are the benefits of participating?</Accordion.Header>
                                        <Accordion.Body>
                                        This is the place where you get to learn and enhance your technical skills and serves as a platform for young minds to take this window of opportunity and bring forward their innovative ideas in the form of projects.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>What are the number of participants in each team?</Accordion.Header>
                                        <Accordion.Body>
                                        The minimum requirement is of 2 participants and the maximum number of members in a team can be 4 candidates.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>Where can I submit the abstract?</Accordion.Header>
                                        <Accordion.Body>
                                        You can submit your abstracts at the innovations 2021 official website.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="4">
                                        <Accordion.Header>Will I get a participation certificate?</Accordion.Header>
                                        <Accordion.Body>
                                        Yes, you will be provided with a participation certificate.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="5">
                                        <Accordion.Header>Can I form a team from different colleges?</Accordion.Header>
                                        <Accordion.Body>
                                        Yes you can form a team from different colleges and different branches as well.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="6">
                                        <Accordion.Header>Is there an email to contact for support?</Accordion.Header>
                                        <Accordion.Body>
                                        Yes you can contact us and clear your doubts by mailing to us here csi-council@siesgst.ac.in
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="7">
                                        <Accordion.Header>Can a team submit more than one abstract?</Accordion.Header>
                                        <Accordion.Body>
                                        No you need to strictly submit only one abstract.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="8">
                                        <Accordion.Header>Do I have to be online and available for the entire duration of the competition?</Accordion.Header>
                                        <Accordion.Body>
                                        You will have to be present for the introductory session on the day of the event i.e 10th April. You will also have to be present during the stipulated time frame and schedule which will be mentioned on the day of the event. It is necessary to be available during the final submission of your project.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={img} alt={alt} />
                        </ImgWrap>
                    </Column2>
                </FaqRow>
            </FaqWrapper>
        </FaqContainer>
    )
}

export default Faq
