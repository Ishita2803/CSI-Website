import React, {useRef, useState, useEffect} from 'react'
import {Form, Button, Card, Container, Alert} from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'
import Login from '../components/LoginFolder'

function LoginPage() {

    // const emailRef = useRef()
    // const passwordRef = useRef()
    // const { login } = useAuth()
    // const {emailVerification} = useAuth()
    // const [error, setError] = useState('')
    // const [loading, setLoading] = useState(false)
    // const history = useHistory()
    
    // async function handleSubmit(e) {
    //     e.preventDefault()
    //     if (emailVerification() === false) {
    //         return setError("Please complete verification")
    //     }

    //     try {
    //         setError('')
    //         setLoading(true)
    //         await login(emailRef.current.value, passwordRef.current.value)
    //         history.replace("/")
    //     } catch {
    //         setError('Failed to login')
    //     }
    //     setLoading(false)
    // }

    return (
        <>
        
        {/* <Container className="d-flex align-items-center justify-content-center"
            style={{minHeight: "100vh"}}
        >
            <div className="w-100" style={{maxWidth: "400px"}} >
                <Card>
                    <Card.Body>
                        <h2 className="text-center mb-4">Login</h2>
                        {error && <Alert variant="danger">{error}</Alert>}
                        <Form onSubmit={handleSubmit} >
                            <Form.Group id="email">
                                <Form.Label>Team Lead Email</Form.Label>
                                <Form.Control type="email" ref={emailRef} required ></Form.Control>
                            </Form.Group>
                            <Form.Group id="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" ref={passwordRef} required ></Form.Control>
                            </Form.Group>
                            <Button disabled={loading} className="mt-5 w-100" type="submit" >Login</Button>
                        </Form>
                    </Card.Body>
                </Card>
                <div className="w-100 text-center mt-2">
                    Need an account? <Link to="/register" replace>Register Here</Link>
                </div>
            </div>
        </Container> */}

        <Login/>
        </>
    )
}

export default LoginPage

