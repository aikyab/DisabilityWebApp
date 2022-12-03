import React, { useState } from 'react'
import { Row, Col, Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { logout, userAccountDelete, checkTokenValidation } from '../actions/userActions'
import Message from './outliners/Message'
import { Spinner } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
import { DELETE_USER_ACCOUNT_RESET } from '../constants'


function DeleteUserAccount() {

    let navigate = useNavigate()
    const dispatch = useDispatch()
    const [myPassword, setMyPassword] = useState("")

    // delete user account reducer
    const deleteUserAccountReducer = useSelector(state => state.deleteUserAccountReducer)
    const { success, loading, error } = deleteUserAccountReducer

    const onSubmit = (e) => {
        e.preventDefault()
        const userData = {
            "password": myPassword
        }
        dispatch(checkTokenValidation())        
        dispatch(userAccountDelete(userData))        
    }
    
    if(success) {
        alert("Account successfully deleted.")
        dispatch({
            type: DELETE_USER_ACCOUNT_RESET
        })
        dispatch(logout()) // action
        navigate("/login")
        window.location.reload()
    }

    return (
        <div>
            <Row className='justify-content-md-center'>
                <Col xs={12} md={6}>
                    <br />
                    <h3>Confirm your password to delete your account.</h3>
                    {loading && <span style = {{ display: "flex" }}><h5>Please wait</h5><span className = "ml-2"><Spinner animation="border" /></span></span>}                    
                    {error && <Message variant='danger'>Incorrect Password!</Message>}        
                    <div className="mt-4">
                        <Form onSubmit={onSubmit}>
                            <Form.Group controlId='password'>
                                <Form.Label>
                                    Password
                            </Form.Label>
                                <Form.Control
                                    required
                                    type="password"
                                    placeholder="Enter your password"
                                    value={myPassword}
                                    onChange={(e) => setMyPassword(e.target.value)}
                                >
                                </Form.Control>
                            </Form.Group>
                            <br />

                            <Button type="submit" variant="danger">Confirm Delete</Button>
                        </Form>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default DeleteUserAccount
