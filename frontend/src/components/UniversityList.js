import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUniList } from '../actions/assetActions'
import { logout, checkTokenValidation } from '../actions/userActions'
import Message from '../components/outliners/Message'
import { Spinner, Row, Col, Container, Card } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
import University from './University'

function UniversityList() {

    let navigate = useNavigate()
    const dispatch = useDispatch()

    const [searchInput, setSearchInput] = useState("");

    // universities list reducer
    const uniListReducer = useSelector(state => state.uniListReducer)
    const { loading, error, universities } = uniListReducer

    // login reducer
    const userLoginReducer = useSelector(state => state.userLoginReducer)
    const { userInfo } = userLoginReducer

    // check token validation reducer
    const checkTokenValidationReducer = useSelector(state => state.checkTokenValidationReducer)
    const { error: tokenError } = checkTokenValidationReducer

    useEffect(() => {
        if (!userInfo) {
            navigate("/login")
        } else {
            try {
                dispatch(checkTokenValidation())
                dispatch(getUniList())
                
            } catch (error) {
                navigate("/")
            }
        }
    }, [navigate, userInfo, dispatch])
    
    console.log(universities)
    if (tokenError) {
        alert("Session expired, please login again.")
        dispatch(logout())
        navigate("/login")
        window.location.reload()
      }

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    };
    
    // if (searchInput.length > 0) {
    //     universities.filter((uni) => {
    //     return uni.name.match(searchInput);
    // });
    // }


    const showNothingMessage = () => {
        return (
            <div>
                {!loading ? <Message variant='info'>Nothing to show</Message> : ""}                
            </div>
        )
    }

    return (
        <div>
            <br />
            {/* <input
                type="text"
                placeholder="Search here"
                onChange={handleChange}
                value={searchInput} 
                className="align-center"/> */}
            <div className="form-group pull-right align-center" style={{paddingLeft: "70px",
                paddingRight: "700px"}}>
                <input type="text" className="search form-control" placeholder="Search Here" 
                onChange={handleChange}
                value={searchInput}/>
            </div>
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <span style={{ display: "flex" }}>
                <h5>Loading Universities</h5>
                <span className="ml-2">
                    <Spinner animation="border" />
                </span>
            </span>}
            <br />
            <div>

            <Container>
                <Row xs={1} md={4}>
                {(universities.filter((uni) =>
                        uni.name.toLowerCase().includes(searchInput !== "" ? searchInput : "")
                    )).length === 0 ? showNothingMessage() : (universities.filter((uni) =>
                        uni.name.toLowerCase().match(searchInput)
                    )).map((univ, idx) => (
                    <Col>
                    <Card key={univ.id} classname="mb-4 rounded" style={{paddingLeft:"30px"}}>
                    <div className="mx-2"> 
                        <University univ={univ} />
                    </div>
                    </Card>
                    </Col>
                    // <Row key={univ.id} style={{paddingBottom: "10px"}}>
                    //     
                    // </Row>
                )
                )}

                </Row>
                
                
            </Container>
            <br />
            </div>
        </div>
    )
}

export default UniversityList;
