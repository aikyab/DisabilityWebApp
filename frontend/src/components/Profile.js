import React from 'react'

export const Profile = () => {
  return (
    <div className="container" style="padding: 100px;">
        <div className="main-body">
            <div className="row gutters-sm">
                <div className="col-md-4 mb-3">
                    <div className="card-body">
                    <div className="d-flex flex-column align-items-center text-center">
                        <img src="https://gistbok.ucgis.org/sites/default/files/document-sharing-form-files/209/uchicago.jpg" alt="Admin" className="rounded-circle" width="300px" />
                        <div className="mt-3">
                        <h3><a href="https://www.eiu.edu/">The University of Chicago</a></h3>
                        <h4>Illinois</h4>
                        <br/>
                        <br/>
                        <h6>Address</h6>
                        <small>5801 S Ellis Ave, Chicago, IL 60637</small>
                        <br/>
                        <br/>
                        <h6>Website</h6>
                        <small><a href="https://www.uchicago.edu/">www.uchicago.edu/</a></small>
                        <br/>
                        <br/>
                        <h6>Contact Person</h6>
                        <small>Sharon Peters</small>
                        <br/>
                        <br/>
                        <h6>Contact Email</h6>
                        <small><a href="mailto:sharon@eiu.edu">sharon@uchicago.edu</a></small>
                        <br/>
                        <br/>
                    </div>
                </div>
                </div>
            
            </div>
                <div className="col-md-8">

                <h4>Institutional Data</h4>
                <div className="">
                    <div className="card-body">
                    <div className="row">
                        <div className="col-sm-3">
                        <h6 className="mb-0">Type</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                        4 year, Private University 
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-sm-3">
                        <h6 className="mb-0">Region</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                        Midwest
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-sm-3">
                        <h6 className="mb-0">Context</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                        Urban
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-sm-3">
                        <h6 className="mb-0">Size</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                        Small, ~5K
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-sm-3">
                        <h6 className="mb-0">Tuition</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                        $60K 
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-sm-3">
                        <h6 className="mb-0">Graduation Rate %</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                        4 years - 89%, 6 years - 92%
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-sm-3">
                        <h6 className="mb-0">Addmission Rate %</h6>
                        </div>
                        <div className="col-sm-9 text-secondary">
                        56%
                        </div>
                    </div>
                    <hr />
                </div>
                <h4>Student Body Race/Ethnicity (%)</h4>

                <div className="row gutters-sm">
                    <div className="col-lg-12">
                    <div className="">
                        <div className="card-body">
                        
                        <small>Black/AA</small>
                        <div className="progress mb-3" style="height: 5px">
                            <div className="progress-bar bg-primary" role="progressbar" style="width: 6%" aria-valuenow="6" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <small>Latinx</small>
                        <div className="progress mb-3" style="height: 5px">
                            <div className="progress-bar bg-primary" role="progressbar" style="width: 14%" aria-valuenow="14" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <small>AAPI</small>
                        <div className="progress mb-3" style="height: 5px">
                            <div className="progress-bar bg-primary" role="progressbar" style="width: 18%" aria-valuenow="18" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <small>White</small>
                        <div className="progress mb-3" style="height: 5px">
                            <div className="progress-bar bg-primary" role="progressbar" style="width: 37%" aria-valuenow="37" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <small>Mixed</small>
                        <div className="progress mb-3" style="height: 5px">
                            <div className="progress-bar bg-primary" role="progressbar" style="width: 7%" aria-valuenow="7" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <small>Unknown</small>
                        <div className="progress mb-3" style="height: 5px">
                            <div className="progress-bar bg-primary" role="progressbar" style="width: 2%" aria-valuenow="2" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <small>International</small>
                        <div className="progress mb-3" style="height: 5px">
                            <div className="progress-bar bg-primary" role="progressbar" style="width: 15%" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        
                    </div>
                    </div>
                </div>

                <h4>General Accomodations</h4>

                <div className="row gutters-sm">
                    <div className="col-lg-12">
                    <div className="">
                        <div className="card-body">
                        
                        <small>ASL Interpreters</small>
                        <div className="progress mb-3" style="height: 5px">
                            <div className="progress-bar bg-primary" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <small>Note takers/scribes</small>
                        <div className="progress mb-3" style="height: 5px">
                            <div className="progress-bar bg-primary" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>                        </div>
                        <small>Recorded Lectures</small>
                        <div className="progress mb-3" style="height: 5px">
                            <div className="progress-bar bg-primary" role="progressbar" style="width: 0%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>                        </div>
                        <small>Testing Accomodations</small>
                        <div className="progress mb-3" style="height: 5px">
                            <div className="progress-bar bg-primary" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>                        </div>
                        <small>Assistive Listening Devices</small>
                        <div className="progress mb-3" style="height: 5px">
                            <div className="progress-bar bg-primary" role="progressbar" style="width: 0%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>                        </div>
                        <small>Removal of Architectural Barriers</small>
                        <div className="progress mb-3" style="height: 5px">
                            <div className="progress-bar bg-primary" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>                        </div>
                        <small>Course Substitutions/Waivers</small>
                        <div className="progress mb-3" style="height: 5px">
                            <div className="progress-bar bg-primary" role="progressbar" style="width: 0%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <small>Alternative Written Materials</small>
                        <div className="progress mb-3" style="height: 5px">
                            <div className="progress-bar bg-primary" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <small>Preferential Seating</small>
                        <div className="progress mb-3" style="height: 5px">
                            <div className="progress-bar bg-primary" role="progressbar" style="width: 0%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <small>Adaptive Equipment</small>
                        <div className="progress mb-3" style="height: 5px">
                            <div className="progress-bar bg-primary" role="progressbar" style="width: 0%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <small>Assistive Tech</small>
                        <div className="progress mb-3" style="height: 5px">
                            <div className="progress-bar bg-primary" role="progressbar" style="width: 0%" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    </div>
                </div>

                <h4>Supports For</h4>

                <div className="row gutters-sm">
                    <div className="col-lg-12">
                    <div className="">
                        <div className="card-body">
                        
                        <small>Writing</small>
                        <div className="progress mb-3" style="height: 5px">
                            <div className="progress-bar bg-primary" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <small>Inclusive</small>
                        <div className="progress mb-3" style="height: 5px">
                            <div className="progress-bar bg-primary" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>                        </div>
                        <small>Math</small>
                        <div className="progress mb-3" style="height: 5px">
                            <div className="progress-bar bg-primary" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>                        </div>
                        <small>Inclusive</small>
                        <div className="progress mb-3" style="height: 5px">
                            <div className="progress-bar bg-primary" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>                        </div>
                        <small>Career Center</small>
                        <div className="progress mb-3" style="height: 5px">
                            <div className="progress-bar bg-primary" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>                        </div>
                            <small>Inclusive</small>
                            <div className="progress mb-3" style="height: 5px">
                                <div className="progress-bar bg-primary" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>                        </div>
                            
                            <small>Study Skills</small>
                        <div className="progress mb-3" style="height: 5px">
                            <div className="progress-bar bg-primary" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <small>Inclusive</small>
                        <div className="progress mb-3" style="height: 5px">
                            <div className="progress-bar bg-primary" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>                        </div>
                        
                        <small>Tutoring</small>
                        <div className="progress mb-3" style="height: 5px">
                            <div className="progress-bar bg-primary" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <small>Inclusive</small>
                        <div className="progress mb-3" style="height: 5px">
                            <div className="progress-bar bg-primary" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>                        </div>
                        
                    </div>
                    </div>
                </div>

                <h4>Other Supports</h4>

                <div className="row gutters-sm">
                    <div className="col-lg-12">
                    <div className="">
                        <div className="card-body">
                        
                        <small>Peer-mentoring</small>
                        <div className="progress mb-3" style="height: 5px">
                            <div className="progress-bar bg-primary" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <small>Inclusive</small>
                        <div className="progress mb-3" style="height: 5px">
                            <div className="progress-bar bg-primary" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>                        </div>
                        <small>Faculty-mentoring</small>
                        <div className="progress mb-3" style="height: 5px">
                            <div className="progress-bar bg-primary" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>                        </div>
                        <small>Inclusive</small>
                        <div className="progress mb-3" style="height: 5px">
                            <div className="progress-bar bg-primary" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>                        </div>
                        <small>Social Skills/Activities</small>
                        <div className="progress mb-3" style="height: 5px">
                            <div className="progress-bar bg-primary" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>                        </div>
                        <small>Inclusive</small>
                        <div className="progress mb-3" style="height: 5px">
                            <div className="progress-bar bg-primary" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>                        </div>
                        <small>Summer Bridge</small>
                        <div className="progress mb-3" style="height: 5px">
                            <div className="progress-bar bg-primary" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <small>Inclusive</small>
                        <div className="progress mb-3" style="height: 5px">
                            <div className="progress-bar bg-primary" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <small>Programming for Students with IDD</small>
                        <div className="progress mb-3" style="height: 5px">
                            <div className="progress-bar bg-primary" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    </div>
                </div>

            </div>
          </div>

        </div>
    </div>
  )
}
