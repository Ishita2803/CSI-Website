import React, {useRef, useState} from 'react'
import { RegisterContainer, ImageCard, RegisterCard } from './RegisterElements'
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ReactCardFlip from 'react-card-flip'

const Register = () => {

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()

    const [isFlipped, setIsFlipped] = useState(false)

    const handleFlip = () => {
        setIsFlipped(!isFlipped)
    }

    return (
        <>
            <RegisterContainer>
            <RegisterCard>
                <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                    <Form className="front">
                        <h2 style={{color: '#01bf71'}} className="text-center">Register</h2>
                        <Form.Group id="email-participant">
                            <Form.Label>Team Lead Email</Form.Label>
                            <Form.Control className="input" type="email" ref={emailRef} required ></Form.Control>
                        </Form.Group>
                        <Form.Group id="password-participant">
                            <Form.Label>Password</Form.Label>
                            <Form.Control className="input" type="password" ref={passwordRef} required ></Form.Control>
                        </Form.Group>
                        <Form.Group id="password-confirm-participant">
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control className="input" type="password" ref={passwordConfirmRef} required ></Form.Control>
                        </Form.Group>
                        <Form.Group controlId="teamName">
                            <Form.Label>Enter your Team Name</Form.Label>
                            <Form.Control className="input" as="textarea" rows={1} />
                        </Form.Group>
                        <Form.Group id="domain_selection" className="" >
                            <Form.Label>Choose your domain</Form.Label>
                            <Form.Select className="input">
                                <option value="1">Hardware</option>
                                <option value="2">Software</option>
                            </Form.Select>
                        </Form.Group>
                        <Button className="mt-5 w-100" type="submit" >Register</Button>
                        <h6 style={{fontWeight: 'normal'}} className="w-100 text-center mt-2">Already Registered? <Link to="/login" replace style={{ textDecoration: 'none', color: '#01bf71', fontWeight: 'normal' }} >Login here</Link></h6>
                        <Button className="btn w-100 text-center mt-2" variant="link" onClick={handleFlip} style={{ textDecoration: 'none', color: '#01bf71', fontWeight: 'normal' }} >Admin Register here</Button>
                    </Form>
                    
                    <Form className="back">
                        <h2 style={{color: '#01bf71'}} className="text-center">Admin Register</h2>
                        <Form.Group id="email-admin">
                            <Form.Label>Admin Email</Form.Label>
                            <Form.Control className="input" type="email" ref={emailRef} required ></Form.Control>
                        </Form.Group>
                        <Form.Group id="password-admin">
                            <Form.Label>Password</Form.Label>
                            <Form.Control className="input" type="password" ref={passwordRef} required ></Form.Control>
                        </Form.Group>
                        <Form.Group id="password-confirm-admin">
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control className="input" type="password" ref={passwordConfirmRef} required ></Form.Control>
                        </Form.Group>
                        <Button className="mt-5 w-100" type="submit" >Register</Button>
                        <h6 style={{fontWeight: 'normal'}} className="w-100 text-center mt-2">Already Registered? <Link to="/login" replace style={{ textDecoration: 'none', color: '#01bf71', fontWeight: 'normal' }} >Login here</Link></h6>
                        <Button className="btn w-100 text-center mt-2" variant="link" onClick={handleFlip} style={{ textDecoration: 'none', color: '#01bf71', fontWeight: 'normal' }} >Participant Register here</Button>
                    </Form>
                </ReactCardFlip>
            </RegisterCard>
            <ImageCard src={require("./undraw_authentication_fsn5.svg").default}>

            </ImageCard>
        </RegisterContainer>
        </>
    )
}

export default Register
