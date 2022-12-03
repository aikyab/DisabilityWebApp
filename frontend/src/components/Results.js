import React from 'react'

const Results = () => {
  return (
    <div className="container px-4 px-lg-5">
            <br/>
            <h1 className="font-weight-light">Results</h1>
            <h6>
                Here are the results of the colleges that best match you.
                
            </h6>
            <br/>

            <div className="list-group">
                    <p> Survey 1</p>
                    <div className="row">
                        <div className="col-1">
                            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/8/86/Eastern_Illinois_Panthers_logo.svg/800px-Eastern_Illinois_Panthers_logo.svg.png" className="rounded-circle" alt="Cinque Terre" height="75px" />
                        </div>
                        <div className="col">
                            <div className="d-flex justify-content-between">
                                <h5 className="mb-1">Eastern Illinois University</h5>
                            </div>
                            <p className="mb-1">Charleston, IL</p>
                            <small className="text-muted">Admission Contacts: Sean Farrell, Disability Support Services: [Person of Contact]</small>
                        </div>
                        <div className="col d-flex justify-content-end align-items-center">
                            <div className="text-center">
                                <small>Total Match</small>
                                <h4>53%</h4>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div class="row">
                        <div class="col-1">
                            <img src="https://gistbok.ucgis.org/sites/default/files/document-sharing-form-files/209/uchicago.jpg" class="rounded-circle" alt="Cinque Terre" height="75px" />
                        </div>
                        <div class="col">
                            <div class="d-flex justify-content-between">
                                <h5 class="mb-1">The University of Chicago</h5>
                            </div>
                            <p class="mb-1">Chicago, IL</p>
                            <small class="text-muted">Head Coach: Sean Farrell</small>
                        </div>
                        <div class="col d-flex justify-content-end align-items-center">
                            <div class="text-center">
                                <small>Total Match</small>
                                <h4>24%</h4>
                            </div>
                        </div>
                    </div>

                    <br />
                    <div class="row">
                        <div class="col-1">
                            <img src="https://wlds.com/wp-content/uploads/2022/01/UIS-Logo-Dome_UISblue.jpg" class="rounded-circle" alt="Cinque Terre" height="75px" width="75px" />
                        </div>
                        <div class="col">
                            <div class="d-flex justify-content-between">
                                <h5 class="mb-1">The University of Illinois at Springfield</h5>
                            </div>
                            <p class="mb-1">Springfield, IL</p>
                            <small class="text-muted">Head Coach: Sean Farrell</small>
                        </div>
                        <div class="col d-flex justify-content-end align-items-center">
                            <div class="text-center">
                                <small>Total Match</small>
                                <h4>12%</h4>
                            </div>
                        </div>
                    </div>
                </div>
        </div>

  )
}
export default Results;
