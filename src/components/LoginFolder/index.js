import React, {useRef, useState} from 'react'
import { LoginContainer, LoginCard, ImageCard } from './LoginElements'
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ReactCardFlip from 'react-card-flip'
 
const Login = () => {

    const emailRef = useRef()
    const passwordRef = useRef()

    const [isFlipped, setIsFlipped] = useState(false)

    const handleFlip = () => {
        setIsFlipped(!isFlipped)
    }

    return (
        <>
        <LoginContainer>
            <ImageCard src={require("./undraw_secure_login_pdn4.svg").default}>

            </ImageCard>
            <LoginCard>
                <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                    <Form className="front">
                        <h2 style={{color: '#01bf71'}} className="text-center">Login</h2>
                        <Form.Group id="email-participant">
                            <Form.Label>Team Lead Email</Form.Label>
                            <Form.Control className="input" type="email" ref={emailRef} required ></Form.Control>
                        </Form.Group>
                        <Form.Group id="password-participant">
                            <Form.Label>Password</Form.Label>
                            <Form.Control className="input" type="password" ref={passwordRef} required ></Form.Control>
                        </Form.Group>
                        <Button className="mt-5 w-100" type="submit" >Login</Button>
                        <h6 style={{fontWeight: 'normal'}} className="w-100 text-center mt-2">Need an account? <Link to="/register" replace style={{ textDecoration: 'none', color: '#01bf71', fontWeight: 'normal' }} >Register here</Link></h6>
                        <Button className="btn w-100 text-center mt-2" variant="link" onClick={handleFlip} style={{ textDecoration: 'none', color: '#01bf71', fontWeight: 'normal' }} >Admin Login here</Button>
                    </Form>
                    
                    <Form className="back">
                        <h2 style={{color: '#01bf71'}} className="text-center">Admin Login</h2>
                        <Form.Group id="email-admin">
                            <Form.Label>Admin Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required ></Form.Control>
                        </Form.Group>
                        <Form.Group id="password-admin">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required ></Form.Control>
                        </Form.Group>
                        <Button className="mt-5 w-100" type="submit" >Login</Button>
                        <h6 style={{fontWeight: 'normal'}} className="w-100 text-center mt-2">Need an account? <Link to="/register" replace style={{ textDecoration: 'none', color: '#01bf71', fontWeight: 'normal' }} >Register here</Link></h6>
                        <Button className="btn w-100 text-center mt-2" variant="link" onClick={handleFlip} style={{ textDecoration: 'none', color: '#01bf71', fontWeight: 'normal' }} >Participant Login here</Button>
                    </Form>
                </ReactCardFlip>
            </LoginCard>
        </LoginContainer>
        </>
    )
}

export default Login
