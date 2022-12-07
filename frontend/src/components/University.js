import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import React from 'react'
import { Col } from 'react-bootstrap'

function University({ univ }) {
    return (
        <div>
                <Card.Body>
                <Col md={8}>
                <Link to={`/dashboard/university/${univ.id}`}>
                    <Card.Img variant="top" src={ univ.logo_file_name } height="162"/>
                </Link>
                <Link to={`/dashboard/university/${univ.id}`}>
                    <Card.Title as="div">
                        <strong>{univ.name} {univ?.uni_type}</strong>
                    </Card.Title>
                </Link>
                </Col>
                </Card.Body>
        </div>

    )
}

export default University;
