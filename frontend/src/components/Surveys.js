// import { useState } from 'react';
import { Link } from "react-router-dom";
import { Row, Container, Card } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"

const Surveys = () => {

    // const [noSurveyYet, setNoSurveyYet] = useState(false);

    return (
    <div>
    
    <div>
        <br />
        <Container>
            <Row>
            <Card className="mb-4">
              <Card.Body>
                <Container>
                    <Row>
                    <Link
                        className="ml-2 mt-2"
                        to="/dashboard/newSurvey">
                      <h5 className="card-title text-capitalize" style={{textAlign: "center"}}>
                        Take New Survey
                      </h5>
                    </Link>
                    </Row>
                </Container>
              </Card.Body>
              </Card>

            </Row>
        </Container>
    </div>
    </div>
    )
}

export default Surveys;