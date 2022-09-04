
const Home = () => {
  return (
      <>
        <div className="container px-4 px-lg-5" style={{padding: "100px"}}>
            <div className="row gx-4 gx-lg-5 align-items-center my-5">
                <div className="col-lg-7">
                    {/* <img className="img-fluid rounded mb-4 mb-lg-0" src="assets/istockphoto-1196667100-612x612.jpg" alt="..."/> */}
                    </div>
                <div className="col-lg-5">
                    <h1><strong>Interested in college and have a disability? Find colleges that meet your needs.</strong></h1>
                    <p> Every year approximately <strong>19%</strong> of students entering college are students with disabilities.  This transition can be overwhelming for both students and their families.  This site aims to give you to the tools and information you need to help make decisions and plan for the future.  We use information about students' needs, and interests, as well as what they are looking for in a college, to help match them to schools that are most likely to be a good fit for them.  We match students based on what type of accommodations, services, and support they require.  We also consideravailable majorsand school location, size,and selectivity, in addition to other factors.  We also offer campus climate scores that tell you how welcoming the school is for students with disabilities.</p>
                    <a className="btn btn-primary" style={{color: "white", fontWeight: "600"}} href="#!">More Info</a>
                </div>
            </div>
        </div>

        <div style={{backgroundColor: "lightgrey", padding: "100px"}}>
            <h1><strong>Find the right path for you...</strong></h1>
            <br/>
            <br/>
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 ">
                    <div className="col-md-4 mb-5">
                        <div className="card h-100">
                            <div className="card-body text-center">
                                <h2 className="card-title ">Parents</h2>
                                <p className="card-text ">Parents start here and get exposure.</p>
                                <a className="btn" style={{backgroundColor: "orange", color: "white", fontWeight: "600"}} href="#!">Click Here to Start</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-5">
                        <div className="card h-100">
                            <div className="card-body text-center">
                                <h2 className="card-title ">Students</h2>
                                <p className="card-text ">Students start here and get discovered.</p>
                                <a className="btn" style={{backgroundColor: "blue", color: "white", fontWeight: "600"}} href="login.html">Click Here to Start</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-5">
                        <div className="card h-100">
                            <div className="card-body text-center">
                                <h2 className="card-title ">Counselors</h2>
                                <p className="card-text ">Counselors start here and recruit athletes.</p>
                                <a className="btn" style={{backgroundColor: "gray", color: "white", fontWeight: "600"}} href="#!">Click Here to Start</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container px-4 px-lg-5" style={{padding: "100"}}>
            <div className="row gx-4 gx-lg-5 align-items-center my-5">
                <div className="col-lg-5">
                    <h1><strong>Our Mission</strong></h1>
                    <br/>
                    <h2>Our mission is to ensure that every student and family has the tools they need to find a school that meets their unique needs, interests, and values. </h2>
                    <br/>
                    <a className="btn btn-primary" style={{color: "white", fontWeight: "600"}} href="#!">Learn More</a>
                </div>

                <div className="col-lg-7"><img className="img-fluid rounded mb-4 mb-lg-0" src="assets/istockphoto-899704912-612x612.jpg" alt="..."/></div>
            </div>
        </div>

        <section className="bg-light-blue pt-5 pb-5" style={{backgroundColor: "lightgrey"}}>
            <h1 style={{textAlign: "center"}}><strong>Meet Our Team</strong></h1>
            <br/>
            <div className="container align-items-center">
                <div className="row align-items-center">
                    <div className="col-md-4 d-flex">
                        <div className="card mb-3">
                            {/* <img className="card-img-top" src="https://education.uic.edu/wp-content/uploads/sites/137/2017/11/Profile-Lisa-Cushing.jpg" alt="John Doe" style="height: 300px; width: 300px;"> */}
                            <div className="card-body py-3">
                                <h5 className="mb-0">Lisa Cushing</h5>
                                <span>Principal Researcher, UIC</span>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                            </div>
                            <div className="card-footer pt-0 border-top-0">
                                <a href="#">lcushing@uic.edu</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex">
                        <div className="card mb-3">
                            {/* <img className="card-img-top" src="assets/headshot.jpg" alt="John Doe" style="height: 300px; width: 300px;"> */}
                            <div className="card-body py-3">
                                <h5 className="mb-0">Sarah Deangelo</h5>
                                <span>MAT, Special Education <br/>
                                    PhD Student, Special Education <br/>
                                    NCLII Scholar <br/>
                                    LEND Trainee 2021-2022</span>
                            </div>
                            <div className="card-footer pt-0 border-top-0">
                                <a href="#">sdeang3@uic.edu</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 d-flex">
                        <div className="card mb-3">
                            {/* <img className="card-img-top" src="https://swe.students.uic.edu/wp-content/uploads/sites/594/2020/08/Webp.net-resizeimage-2-550x550.jpg" alt="John Doe" style="height: 300px; width: 300px;"> */}
                            <div className="card-body py-3">
                                <h5 className="mb-0">Mallika Patil</h5>
                                <span>Masters Graduate, Computer Science</span>
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                            </div>
                            <div className="card-footer pt-0 border-top-0">
                                <a href="#">email@email.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )

}

export default Home;
