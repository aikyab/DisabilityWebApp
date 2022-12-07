import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUniDetails } from '../actions/assetActions'
import Message from './outliners/Message'
import { Spinner, Row, Col, Container, Card } from 'react-bootstrap'
import {Link, useParams} from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Chart from 'react-apexcharts'

function UniDetails() {

    const dispatch = useDispatch()

    // product details reducer
    const uniDetailsReducer = useSelector(state => state.uniDetailsReducer)
    const { loading, error, uniDetails } = uniDetailsReducer
    
    const params = useParams()

    // login reducer
    const userLoginReducer = useSelector(state => state.userLoginReducer)
    const { userInfo } = userLoginReducer

    useEffect(() => {
        dispatch(getUniDetails(params.id))
    }, [dispatch])

    const uni_type = uniDetails?.uni_type
    const state = uniDetails?.state
    const location = uniDetails?.location
    const tuition_in_state = uniDetails?.tuition_in_state
    const tuition_out_state = uniDetails?.tuition_out_state
    const logo_file_name = uniDetails?.logo_file_name

    const series = [uniDetails?.black_aa, 
        uniDetails?.latinx, 
        uniDetails?.aapi, 
        uniDetails?.white, 
        uniDetails?.mixed_race,
        uniDetails?.unknown,
        uniDetails?.international]

    const options = {
        chart: {
        width: 380,
        type: 'pie',
        },
        labels: ['Black AA', 'LatinX', 'AAPI', 'White', 'Mixed Race', 'Unknown', 'International'],
        responsive: [{
        breakpoint: 480,
        options: {
            chart: {
            width: 200
            },
            legend: {
            position: 'bottom'
            }
        }
        }]
    }

    return (
        <div>

            {loading && <span style={{ display: "flex" }}>
                <h5>Getting University Details</h5>
                <span className="ml-2">
                    <Spinner animation="border" />
                </span>
            </span>}
            {error ? <Message variant='danger'>{error}</Message>
                :
                <div>
                    <br />
                    <Container>
                        <Row>
                            <Col md={2}>
                                <Card.Img variant="top" src={logo_file_name} height="200" />
                            </Col>

                            <Col style={{paddingLeft: "40px"}}>
                                <h4>{uniDetails?.name}</h4>
                                <hr />
                                <span className="justify-description-css">
                                   <b>University Type: {uni_type}</b> 
                                 </span>

                                <div style={{paddingTop:"10px", paddingBottom:"10px"}}>
                                <span style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    border: "1px solid",
                                    borderColor: "#C6ACE7",
                                    padding: "2px"
                                }}>
                                    State: {state} </span>
                                <span className="text-success ml-2"> 
                                </span>
                                <span style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    border: "1px solid",
                                    borderColor: "#C6ACE7",
                                    padding: "2px"
                                }}>
                                    Location: {location}
                                </span>
                                </div>

                                <Table striped bordered hover>
                                    <thead>
                                        <b>Graduation Rate</b>
                                    </thead>
                                    <tbody>
                                    <tr>
                                    <td>Four Years</td>
                                    <td>{uniDetails?.four_years}%</td>
                                    </tr>
                                    <tr>
                                    <td>Six Years</td>
                                    <td>{uniDetails?.six_years}%</td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </Col>
                            <Col sm>
                                <h5>Tuition Fees</h5>
                                <hr />
                                <span>In State:</span> <t />
                                <span>
                                    <b>${tuition_in_state}</b>
                                </span>
                                <br />
                                <span>Out Of State:</span> <t />
                                <span>
                                    <b>${tuition_out_state}</b>
                                </span>
                                <hr />

                                <div>
                                <h5 >Important Information</h5>
                                <span>Admission Rate: </span> <t />
                                <span>
                                    <b>{uniDetails?.admission_rate}%</b>
                                </span>
                                <br />
                                <span>Selectivity: </span> <t />
                                <span>
                                    <b>{uniDetails?.selectivity}</b>
                                </span>
                                <br />
                                <span>Interview: </span> <t />
                                <span>
                                    <b>{uniDetails?.interview}</b>
                                </span>
                                <br />
                                <span>Recommendations: </span> <t />
                                <span>
                                    <b>{uniDetails?.recommendations}</b>
                                </span>
                                <br />
                                {uniDetails?.other_notes &&
                                <span>Other Requirements: </span> } <t />
                                {uniDetails?.other_notes &&
                                    <span>
                                    <b>  {uniDetails?.other_notes} </b>
                                    </span> 
                                }
                                

                                </div>
                            </Col>
                        </Row>
                        <Row style={{paddingTop: "20px"}}>
                        <Col>
                        <div id="chart" style={{paddingLeft: "50px"}}>
                            <h4> Student Body</h4>
                            <Chart options={options} series={series} type="pie" width={380} />
                        </div>
                        </Col>
                        <Col style={{paddingTop: "10px"}}>
                            <h5>
                            Go to the official website <a href={uniDetails?.link} target="_blank">here</a>
                            </h5>

                            <div style={{paddingTop: "20px"}}>
                            <Table striped bordered hover>
                                    <thead>
                                        <b>Test Score Requirements</b>
                                    </thead>
                                    <tbody>
                                    <tr>
                                    <td>Tests to be given</td>
                                    <td>{uniDetails?.tests}</td>
                                    </tr>
                                    <tr>
                                    <td>High School GPA</td>
                                    <td>{uniDetails?.gpa_hs}</td>
                                    </tr>
                                    <tr>
                                    <td>ACT</td>
                                    <td>{uniDetails?.act}</td>
                                    </tr>
                                    <tr>
                                    <td>SAT Reading/Writing</td>
                                    <td>{uniDetails?.sat_rw_score}</td>
                                    </tr>
                                    <tr>
                                    <td>SAT Mathematics</td>
                                    <td>{uniDetails?.sat_math}</td>
                                    </tr>
                                    <tr>
                                    <td>Essay Requirement</td>
                                    <td>{uniDetails?.essay}</td>
                                    </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </Col>
                        </Row>
                        <Row style={{paddingTop: "10px"}}>
                            <div>
                                <span style={{paddingRight: "200px"}}>
                                    <b>On campus Housing Availability: {uniDetails?.on_campus_housing_availability}</b>
                                </span>
                                <span style={{paddingRight: "180px"}}>
                                    <b>Living Learning Communities: {uniDetails?.living_learning_communities}</b>
                                </span>
                                <span style={{paddingRight: "20px"}}>
                                    <b>On campus Housing Requirement: {uniDetails?.on_campus_housing_requirement}</b>
                                </span>
                            </div>
                        </Row>

                    </Container>
                </div>
            }
        </div >
    )
}

export default UniDetails
