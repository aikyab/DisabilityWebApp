import { useState } from 'react';
import { Row, Container, Card } from 'react-bootstrap'

const Random = () => {

  const [noSurveyYet, setNoSurveyYet] = useState(false);

  return (

  //   <div style={{
  //       width: '40%',
  //       backgroundColor: 'whitesmoke',
  //       borderRadius: 40,
  //       margin: 50}}>
  //   <div style={{height: '100%',
  //       backgroundColor: "blue",
  //      borderRadius:40,
  //       textAlign: 'right'}}>
  //       <ProgressBar now={25}/>
  //   </div>
  // </div>

    <div>
    { !noSurveyYet ?
    <div>
        <br />
        <Container>
            <Row>
            <Card className="mb-4">
              <Card.Body>
                <Container>
                    <Row>

                      <h5 className="card-title text-capitalize">

                          Take New Survey
                      </h5>
                    {/* </form> */}
                    </Row>
                </Container>
              </Card.Body>
              </Card>

            </Row>
        </Container>
    </div>
    :
    <div className="container px-4 px-lg-5">
      Hello World!
    </div>
  }
  </div>
  )
}

export default Random;