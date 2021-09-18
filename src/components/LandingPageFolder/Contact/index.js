import React from 'react'
import { ContactContainer, ContactWrapper, ImgWrap, ContactRow, Column1, Column2, TextWrapper, TopLine, ContactCard, ContactIcon, ContactH2, ContactP } from './ContactElements'
import {Card} from 'react-bootstrap'
import ResponsiveEmbed from 'react-responsive-embed'
const Contact = ({id, img, alt}) => {
    return (
        <>
            <ContactContainer id={id}  >
                <ContactWrapper>
                    <ContactRow >
                        <Column1>
                            <TextWrapper>
                                <TopLine>Contact Us</TopLine>
                            </TextWrapper>
                            <ImgWrap>
                                <ResponsiveEmbed ratio='4:3' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7542.983025945375!2d73.01917792402745!3d19.04211544842928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c3db45555555%3A0xd9b61b1f0f5373ea!2sSIES%20Graduate%20School%20of%20Technology!5e0!3m2!1sen!2sin!4v1631452869288!5m2!1sen!2sin" />
                            </ImgWrap>
                        </Column1>
                        <Column2>
                        <TextWrapper>
                            <Card className="card">
                                <Card.Img variant="top" src={img} />
                                <Card.Body>
                                    <Card.Title>SIES Graduate School Of Technology</Card.Title>
                                    <Card.Text>
                                        Visit our website for more details: &nbsp;
                                    <Card.Link style={{textDecoration: 'none', color: '#01bf71'}} target = "_blank" href="https://csi.siesgst.ac.in">csi.siesgst.ac.in </Card.Link>
                                    </Card.Text>
                                    
                                    <Card.Text>
                                    Further queries regarding the competition?
                                    </Card.Text>
                                    <Card.Text>
                                    Contact:
                                    </Card.Text>
                                    <Card.Text>
                                        Dhruv Suvarna &nbsp;
                                    <Card.Link style={{textDecoration: 'none', color: '#01bf71'}} href="tel:+918356985953">+918356985953</Card.Link>
                                    </Card.Text>
                                </Card.Body>
                            </Card>  
                        </TextWrapper>                            
                        </Column2>
                    </ContactRow>
                </ContactWrapper>
            </ContactContainer>
        </>
    )
}

export default Contact
