import "bootstrap/dist/css/bootstrap.min.css";

const ProcessInfo = () => {
  return (
    <>        
    <div className="container px-4 px-lg-5" style={{padding: "100px"}}>

        <div className="row gx-4 gx-lg-5 align-items-center my-5">
            <div className="col-lg-7"><img class="img-fluid rounded mb-4 mb-lg-0" src="assets/momanddaughtercomputer.jpg" alt="..."/></div>
            <div className="col-lg-5">
                <h1><strong>1. Before you apply</strong></h1>
                <p>Before you apply, make sure you have everything you need.  Most schools require high school transcripts and ACT or SAT scores.  Some schools also require admissions essays, or letters of recommendation.  Check what the requirements are for the schools you are interested, and make sure you have everything you need</p>
                <p>If you need recommendations, think carefully about who to ask.  Make sure that you ask people who think highly of you.  Some ideas for people to ask might be: sports coaches, teachers, school counselors, club or activity sponsors.</p>
                <p>f you need to answer an essay question, plan out your answer ahead of time.  Check what the question is, and come back and complete it when you have planned out your answer.</p>
                <a className="btn btn-primary" style={{color: "white", fontWeight: "600"}} href="#!">More Info</a>
            </div>
        </div>
    </div>
        <div style={{backgroundColor: "lightgrey"}}>
            
            <div className="container px-4 px-lg-5" style={{padding: "100px"}}>
                <div className="row gx-4 gx-lg-5 align-items-center my-5">
                    <div className="col-lg-5">
                        <h1><strong>2. Applying For Addmissions</strong></h1>
                        <p> Many colleges and universities use the common application (hyperlink to common app). Check if the schools you are interested in use the common app, or other applications here.(hyperlink).</p>
                        <a className="btn btn-primary" style={{color: "white", fontWeight: "600"}} href="#!">More Info</a>
                    </div>
                    <div className="col-lg-7"><img class="img-fluid rounded mb-4 mb-lg-0" src="assets/glenn-carstens-peters-RLw-UC03Gwc-unsplash.jpg" alt="..."/></div>
                </div>
            </div>

        </div>

        <div className="container px-4 px-lg-5" style={{padding: "100px"}}>
            <div className="row gx-4 gx-lg-5 align-items-center my-5">
                <div className="col-lg-7"><img className="img-fluid rounded mb-4 mb-lg-0" src="assets/start-digital-fr7tf56u54o-unsplash.jpg" alt="..."/></div>
                <div className="col-lg-5">
                    <h1><strong>3. After You Apply</strong></h1>
                    <p>After you apply you have to wait to hear back from the schools you applied to.  Waiting to hear back can be stressful, but it can also be exciting.  Think about all your options.  Make a list to help you make decisions once you hear back.  If you got accepted to all the schools you 
                        applied to, which would you want to go to?  Rank all your choices in order of which you wantto go to the most.</p>
                    <p>When you get your decisions back, it’s decision time.  Look at the list you made, and decide, of all the schools you got into, which is the best fit for you?  Look at all the factors.  Location, programs, cost, and disability services.  You can only accept one offer, so be thoughtful in making the best decision for yourself.</p>
                    <a className="btn btn-primary" style={{color: "white", fontWeight: "600"}} href="#!">More Info</a>
                </div>
            </div>
        </div>
        
    </>
  )
}

export default ProcessInfo;
