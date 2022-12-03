import React, { useState, useEffect } from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { userDetails, userUpdateDetails, checkTokenValidation, logout } from '../actions/userActions'
import Message from './outliners/Message'
import { Spinner } from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
import { UPDATE_USER_DETAILS_RESET } from '../constants'

function UpdateEmail() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    // check token validation reducer
    const checkTokenValidationReducer = useSelector(state => state.checkTokenValidationReducer)
    const { error: tokenError } = checkTokenValidationReducer

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // login reducer
    const userLoginReducer = useSelector(state => state.userLoginReducer)
    const { userInfo } = userLoginReducer

    // user details reducer
    const userDetailsReducer = useSelector(state => state.userDetailsReducer)
    const { user: userAccDetails, loading } = userDetailsReducer
    // user update details reducer
    const userDetailsUpdateReducer = useSelector(state => state.userDetailsUpdateReducer)
    const { success } = userDetailsUpdateReducer
        
    
    useEffect(() => {
        if (!userInfo) {
            navigate("/login")
        }
        dispatch(checkTokenValidation())
        dispatch(userDetails())
    }, [dispatch, navigate, userInfo])

    if (userInfo && tokenError === "Request failed with status code 401") {
        alert("Session expired, please login again.")
        dispatch(logout())
        navigate("/login")
        window.location.reload()
      }

    const onSubmit = (e) => {
        e.preventDefault()
        // console.log(email)
        const email_set = email === "" ? userAccDetails.email : email
        const userData = {
            'email': email_set,
            'password': password,
        }
        // console.log(userData)
        dispatch(userUpdateDetails(userData))
        console.log(userDetailsUpdateReducer)
        
    }

    // logout
    const logoutHandler = () => {
        navigate("/login")
        dispatch(logout()) // action        
    }

    if(success) {
        alert("Account successfully updated.")
        dispatch({
            type: UPDATE_USER_DETAILS_RESET
        })
        navigate("/dashboard/userProfile/")
        dispatch(userDetails())
    }

    

    const renderData = () => {
        try {
            return (
                <div>
                    <Row className='justify-content-md-center'>
                        <Col xs={12} md={6}>
                            <span
                                className="d-flex justify-content-center"
                                style={{ display: "flex", marginBottom: "15px", color: "#008080" }}>
                                <em>Update Email</em>
                            </span>
                            {loading && <Spinner animation="border" />}
                            <Form onSubmit={onSubmit}>
                                <Form.Group controlId='email'>
                                        <Form.Label>
                                            Email Address
                                        </Form.Label>
                                        <Form.Control
                                            type="email"
                                            placeholder="Enter Email"
                                            defaultValue={userAccDetails.email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        >
                                        </Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId='password'>
                                        <Form.Label>
                                            Enter Password for authentication
                                        </Form.Label>
                                        <Form.Control
                                            type="password"
                                            placeholder="Password"
                                            onChange={(e) => setPassword(e.target.value)}
                                        >
                                        </Form.Control>
                                    </Form.Group>
                                <br />
                                <Button type="submit" variant='success' className="btn-sm">Update Email</Button>
                                <Link to={`/dashboard/userProfile`}>
                                    <button className="btn btn-primary btn-sm ml-2" type="button">
                                        Cancel
                                    </button>
                                </Link>
                            </Form>
                        </Col>
                    </Row>
                </div>
            )
        } catch (error) {
            return <Message variant='danger'>Something went wrong, go back to <Link
                onClick={logoutHandler} to={`/login`}
            > Login</Link> page.</Message>
        }
    }

    return renderData()
}

export default UpdateEmail
