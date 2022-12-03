import React from 'react'

const NewSurvey = () => {
  return (

    <div className="container px-4 px-lg-5">
            <br/>
            <h1 className="font-weight-light">Survey Form</h1>
            <h6>
                Please fill out this survey.
                <small className="text-muted">This will be used to generate your matches.</small>
            </h6>
            <br/>
            <form>
                <div className="form-group">
                    <label>1. University Type:</label>
                    <div className="form-check">
                    <input name="uni-type" className="form-check-input" type="radio" />
                    <label className="form-check-label">
                        2 year
                    </label>
                    </div>
                    <div className="form-check">
                    <input name="uni-type" className="form-check-input" type="radio" />
                    <label className="form-check-label">
                        4 year
                    </label>
                    </div>
                    <div className="form-check">
                    <input name="uni-type" className="form-check-input" type="radio" />
                    <label className="form-check-label">
                        Any
                    </label>
                    </div>
                </div>
                <br/>

                <div className="form-group">
                    <label>2. University Funding: </label>
                    <div className="form-check">
                    <input name="fund-type" className="form-check-input" type="radio" />
                    <label className="form-check-label" for="exampleRadios1">
                        Public
                    </label>
                    </div>
                    <div className="form-check">
                    <input name="fund-type" className="form-check-input" type="radio" />
                    <label className="form-check-label" for="exampleRadios2">
                        Private
                    </label>
                    </div>
                    <div className="form-check">
                    <input name="fund-type" className="form-check-input" type="radio" />
                    <label className="form-check-label" for="exampleRadios3">
                        Any
                    </label>
                    </div>
                </div>
                <br/>

                <div className="form-group">
                    <label>3. Select a location: </label>
                    <select id="location" className="form-select" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option>Illinois</option>
                        <option>Ohio</option>
                        <option>Michigan</option>
                        <option>Any</option>
                    </select>
                </div>
                <br/>

                <div className="form-group">
                    <label>4. Select a setting: </label>
                    <select id="setting" className="form-select" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option>Rural</option>
                        <option>Urban</option>
                        <option>Suburban</option>
                        <option>Any</option>
                    </select>
                </div>
                <br/>

                <div className="form-group">
                    <label>5. Select a size: </label>
                    <select id="size" className="form-select" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option>Small - Less than 5K</option>
                        <option>Medium - 5K - 15K</option>
                        <option>Large - Greater than 15K</option>
                        <option>Any</option>
                    </select>
                </div>
                <br/>

                <div className="form-group">
                    <label>6. Select school specialization (Select All): </label>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" />
                        <label className="form-check-label">
                            HBCU
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" />
                        <label className="form-check-label">
                            MSI
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" />
                        <label className="form-check-label">
                            HSI
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" />
                        <label className="form-check-label">
                            Religious
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" />
                        <label className="form-check-label">
                            Male
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" />
                        <label className="form-check-label">
                            Female
                        </label>
                    </div>
                </div>
                <br/>

                <div className="form-group">
                    <label for="exampleFormControlTextarea1">7. School selectivity: </label>
                    <br/>
                    <br/>

                    <h6><b>MOST SELECTIVE</b> colleges accept fewer than 15% of all applicants AND possess an average composite ACT (25%tile) score of at least 30 or an average combined SAT (25%tile) score of at least 1370.</h6>
                    <h6><b>EXTREMELY SELECTIVE</b> colleges accept fewer than 35% of all applicants AND possess an average composite ACT (25%tile) score of at least 29 OR an average combined SAT (25%tile) score of at least 1340.</h6>
                    <h6><b>VERY SELECTIVE colleges</b>  accept fewer than 50% of all applicants AND possess an average composite ACT (25%tile) score of at least 27 or an average combined SAT (25%tile) score of at least 1280.</h6>
                    <h6><b>MODERATELY SELECTIVE</b>  colleges accept fewer than 60% of all applicants AND possess an average composite ACT (25%tile) score of at least 25 or an average combined SAT (25%tile) score of at least 1210.</h6>
                    <br/>

                    <div className="form-check">
                        <input name="selective" className="form-check-input" type="radio" />
                        <label className="form-check-label">
                            Most Selective
                        </label>
                    </div>
                    <div className="form-check">
                        <input name="selective" className="form-check-input" type="radio" />
                        <label className="form-check-label">
                            Extremely Selective
                        </label>
                    </div>
                    <div className="form-check">
                        <input name="selective" className="form-check-input" type="radio" />
                        <label className="form-check-label">
                            Very Selective
                        </label>
                    </div>
                    <div className="form-check">
                        <input name="selective" className="form-check-input" type="radio" />
                        <label className="form-check-label">
                            Moderately Selective
                        </label>
                    </div>
                    <div className="form-check">
                        <input name="selective" className="form-check-input" type="radio" />
                        <label className="form-check-label">
                            Any
                        </label>
                    </div>
                </div>
                <br/>

                <div className="form-group">
                    <label>7. High School GPA (0.0 - 4.0): </label>
                    <input name="gpa" type="text" className="form-control" placeholder="Please enter your highschool GPA." />
                </div>
                <br/>

                <div className="form-group">
                    <label for="exampleFormControlTextarea1">8. ACT Score (0 - 36): </label>
                    <input name="act" type="text" className="form-control" placeholder="Please enter your ACT Score." />
                </div>
                <br/>

                <div className="form-group">
                    <label for="exampleFormControlTextarea1">9. SAT Score (0 - 1600): </label>
                    <input name="sat" type="text" className="form-control" placeholder="Please enter your SAT Score." />
                </div>
                <br/>

                <div className="form-group">
                    <label for="exampleFormControlTextarea1">10. Academic Programs (Please select 3 areas of interest.)</label>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label className="form-check-label" for="flexCheckChecked">
                            Computer Science
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label className="form-check-label" for="flexCheckChecked">
                            Nursing
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label className="form-check-label" for="flexCheckChecked">
                            Business
                        </label>
                    </div>
                </div>
                <br/>

                <div className="form-group">
                    <label for="exampleFormControlTextarea1">11. Types of supports and services that you would require:</label>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label className="form-check-label" for="flexCheckChecked">
                            General accommodations (generate a list for them to check)
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label className="form-check-label" for="flexCheckChecked">
                            Tutoring 
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label className="form-check-label" for="flexCheckChecked">
                            Support in writing, math, speaking, professional development (resume and interview preparation)
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label className="form-check-label" for="flexCheckChecked">
                            Study skills and executive functioning skills (organization, time management)
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label className="form-check-label" for="flexCheckChecked">
                            Social skills and activities
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label className="form-check-label" for="flexCheckChecked">
                            Peer-mentoring
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label className="form-check-label" for="flexCheckChecked">
                            Faculty mentoring
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label className="form-check-label" for="flexCheckChecked">
                            Summer Bridge Program
                        </label>
                    </div>
                </div>
                <br/>

                <button className="btn btn-primary" onClick="totalMatchNumber()" >Submit</button>

                <p id="result"></p>
                <br/>
                <br/>
                
            </form>
            
        </div>
  )
}

export default NewSurvey;
