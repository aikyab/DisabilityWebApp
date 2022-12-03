import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
// import Message from '../components/Message'
import { useDispatch, useSelector } from 'react-redux'
import { userDetails, logout, checkTokenValidation } from '../actions/userActions'
import { Spinner } from 'react-bootstrap'
import Moment from 'moment';


const Profile = () => {

    let navigate = useNavigate()
    const dispatch = useDispatch()

    // check token validation reducer
    const checkTokenValidationReducer = useSelector(state => state.checkTokenValidationReducer)
    const { error: tokenError } = checkTokenValidationReducer

    // login reducer
    const userLoginReducer = useSelector(state => state.userLoginReducer)
    const { userInfo } = userLoginReducer

    // user details reducer
    const userDetailsReducer = useSelector(state => state.userDetailsReducer)
    const { user: userAccDetails, loading } = userDetailsReducer

    useEffect(() => {
        if (!userInfo) {
            navigate("/login")
        } else {
            try {
                dispatch(checkTokenValidation())
                dispatch(userDetails())
                // console.log(userAccDetails)
            } catch (error) {
                navigate("/")
            }
        }
    }, [navigate, userInfo, dispatch])

    if (userInfo && tokenError) {
        alert("Session expired, please login again.")
        dispatch(logout())
        navigate("/login")
        window.location.reload()
      }

    // console.log(userAccDetails)
    let birthDate = userAccDetails?.date_of_birth
    if (birthDate){
        Moment.locale('en');
        birthDate = Moment(birthDate).format('d MMM YYYY')
    }
    let createdDate = userAccDetails?.created_date
    if (createdDate){
        Moment.locale('en');
        createdDate = Moment(createdDate).format('d MMM YYYY')
    }

  return (
    <div>
        {loading && <span style = {{ display: "flex" }}><h5>Getting User Information</h5><span className = "ml-2"><Spinner animation="border" /></span></span>}
        <br />
        <br />
        <Container>
            <Row className="mr-6 mb-2 border border-dark">
                <Col xs={2} className="p-3 bg-info text-white">Name:</Col>
                <Col className="p-3">{userAccDetails?.full_name}</Col>
            </Row>
            <Row className="mb-2 border border-dark">
                <Col xs={2} className="p-3 bg-info text-white">Email:</Col>
                <Col className="p-3">{userAccDetails?.email}</Col>
            </Row>
            <Row className="mb-2 border border-dark">
                <Col xs={2} className="p-3 bg-info text-white">Date of Birth:</Col>
                <Col className="p-3">{birthDate}</Col>
            </Row>
            <Row className="mb-2 border border-dark">
                <Col xs={2} className="p-3 bg-info text-white">Surveys</Col>
                <Col className="p-3">{userAccDetails?.surveys}</Col>
            </Row>
            <Row className="mb-2 border border-dark">
                <Col xs={2} className="p-3 bg-info text-white">Account Created On</Col>
                <Col className="p-3">{createdDate}</Col>
            </Row>
        </Container>
        <br />
        <br />

        <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Link to={`/dashboard/updateEmail`}>Update Email</Link>
        </span>
        <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Link to={`/dashboard/deleteAccount`}> Delete Account</Link>
        </span>
    </div>

    )
}

export default Profile;
