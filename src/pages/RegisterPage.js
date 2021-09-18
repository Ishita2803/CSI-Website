import React, {useRef, useState} from 'react'
import {Form, Button, Card, Container, Alert, InputGroup, FormControl} from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory  } from 'react-router-dom'
import { FormGroup } from '@material-ui/core'
import Register from '../components/RegisterFolder'


function RegisterPage() {

    // const emailRef = useRef()
    // const passwordRef = useRef()
    // const passwordConfirmRef = useRef()
    // const {register} = useAuth()
    // const {emailVerificationMessage} = useAuth()
    // const [error, setError] = useState('')
    // const [message, setMessage] = useState('')
    // const [loading, setLoading] = useState(false)


    // async function handleSubmit(e) {
    //     e.preventDefault()

    //     if (passwordRef.current.value !== passwordConfirmRef.current.value) {
    //         return setError('Passwords do not match')
    //     }
        
    //     try {
    //         setError('')
    //         setMessage('')
    //         setLoading(true)
    //         await register(emailRef.current.value, passwordRef.current.value)
    //         await emailVerificationMessage()
    //     } catch {
    //         setError('Failed to register')
    //     } finally {
    //         setMessage("Please check your inbox")
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
                         <h2 className="text-center mb-4">Register</h2>
                         {error && <Alert variant="danger">{error}</Alert>}
                         {message && <Alert variant="success">{message}</Alert>}
                         <Form onSubmit={handleSubmit} >
                             <Form.Group id="domain_selection" className="mb-2" >
                                 <Form.Select>
                                     <option>Choose your Domain</option>
                                     <option value="1">Hardware</option>
                                     <option value="2">Software</option>
                                 </Form.Select>
                             </Form.Group>
                             <Form.Group id="email">
                                 <Form.Label>Team Lead Email</Form.Label>
                                 <Form.Control type="email" ref={emailRef} required ></Form.Control>
                             </Form.Group>
                             <Form.Group id="password">
                                 <Form.Label>Password</Form.Label>
                                 <Form.Control type="password" ref={passwordRef} required ></Form.Control>
                             </Form.Group>
                             <Form.Group id="password-confirm">
                                 <Form.Label>Password Confirmation</Form.Label>
                                 <Form.Control type="password" ref={passwordConfirmRef} required ></Form.Control>
                             </Form.Group>
                             <Form.Group className="" controlId="teamName">
                                 <Form.Label>Enter your Team Name</Form.Label>
                                 <Form.Control as="textarea" rows={1} />
                             </Form.Group>
                             <FormGroup>
                                 <Form.Label>Enter Names of Team Members</Form.Label>
                                 <InputGroup className="">
                                     <FormControl placeholder="Team Lead Name"type="text" aria-label="Teammate1" />
                                     <FormControl placeholder="Teammate 2 Name" type="text" aria-label="Teammate2" />
                                 </InputGroup>
                                 <InputGroup className="mt-3">
                                     <FormControl placeholder="Teammate 3 Name"type="text" aria-label="Teammate3" />
                                     <FormControl placeholder="Teammate 4 Name" type="text" aria-label="Team mate4" />
                                 </InputGroup>
                             </FormGroup>
                            
                            
                            
                             <Button disabled={loading} className="mt-5 w-100" type="submit" >Register</Button>
                         </Form>
                     </Card.Body>
                 </Card>
                 <div className="w-100 text-center mt-2">
                     Already have  an account? <Link to="/login" replace>Login Here</Link>
                 </div>
             </div>
         </Container> */}
         <Register/> 
        </>
    )
}

export default RegisterPage
