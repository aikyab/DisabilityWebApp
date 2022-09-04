import { useRef, useState, useEffect } from "react";
import React from 'react'
import { faCheck, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import axios from '../api/Axios';
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
// import Login from "./UserLogin";

const EMAIL_REGEX = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;


const Registration = () => {

    const emailRef = useRef();
    const errRef = useRef();

    const [email, setEmail] = useState('');
    const [validEmail, setValidName] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const currentDate = useState(new Date())
    const [birthDate, setBirthDate] = useState(currentDate)

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        emailRef.current.focus();
    }, [])

    useEffect(() => {
        setValidName(EMAIL_REGEX.test(email));
    }, [email])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('');
    }, [email, pwd, matchPwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        // if button enabled with JS hack
        const v1 = EMAIL_REGEX.test(email);
        const v2 = PWD_REGEX.test(pwd);
        if (!v1 || !v2) {
            setErrMsg("Invalid Entry");
            return;
        }
        // try {
            //     const response = await axios.post(REGISTER_URL,
            //         JSON.stringify({ user, pwd }),
            //         {
                //             headers: { 'Content-Type': 'application/json' },
                //             withCredentials: true
                //         }
                //     );
                //     // TODO: remove console.logs before deployment
                //     console.log(JSON.stringify(response?.data));
                
                //console.log(JSON.stringify(response))
        setSuccess(true);
        //clear state and controlled inputs
        setEmail('');
        setPwd('');
        setMatchPwd('');
        // } catch (err) {
            //     if (!err?.response) {
                //         setErrMsg('No Server Response');
                //     } else if (err.response?.status === 409) {
                    //         setErrMsg('Username Taken');
                    //     } else {
                        //         setErrMsg('Registration Failed')
                        //     }
                        //     errRef.current.focus();
                        // }
    }
    return (
    <>
    {success ? (
        <div>
            <h1>Success!</h1>
            <p>
                <a href="#">Sign In</a>
            </p>
        </div>
    ) : (
        <div style={{
            paddingTop: "10%",
            height: "150"}}>
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 ">
                    <div className="col-md-4 mb-5">
                        
                    </div>
                    <div className="col-md-4 mb-5">
                            <div className="card h-100">
                                <div className="card-body">
                                {errMsg &&
                                <p ref={errRef} aria-live="assertive">{errMsg}</p>}
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="username"> Email Address 
                                        <FontAwesomeIcon icon={email && validEmail ? faCheck : null} style={{color: "green"}} />
                                        </label>
                                        <input type="email"
                                        aria-describedby="uidnote"
                                        placeholder="Email"
                                        id="email"
                                        className="form-control"
                                        autoComplete="off"
                                        onChange={(e) => setEmail(e.target.value)}
                                        ref={emailRef}
                                        value={email}
                                        onFocus={() => setEmailFocus(true)}
                                        onBlur={() => setEmailFocus(false)}
                                        required/>
                                    {/* <p id='uidnote' className={emailFocus && email && !validEmail ? 'show' : 'hidden'}> */}
                                    {emailFocus && email && !validEmail &&
                                        <p>
                                        <FontAwesomeIcon icon={faInfoCircle} />
                                        Enter a valid email we can contact you at.
                                        </p>
                                    }
                                    {/* </p> */}
                                    <br />
                                    </div>
                                    <div className="form-group">
                                    <label htmlFor="password">
                                        Password
                                        <FontAwesomeIcon icon={pwd && validPwd ? faCheck : null} style={{ color: "green"}}/>
                                    </label>
                                        <input type="password"
                                        placeholder="Password"
                                        id="password"
                                        className="form-control"
                                        ref={emailRef}
                                        autoComplete="off"
                                        aria-invalid={validPwd ? "false" : "true"}
                                        aria-describedby="pwdnote"
                                        onChange={(e) => setPwd(e.target.value)}
                                        value={pwd}
                                        onFocus={() => setPwdFocus(true)}
                                        onBlur={() => setPwdFocus(false)}
                                        required/>
                                        {pwdFocus && pwd && !validPwd &&
                                        <p>
                                        <FontAwesomeIcon icon={faInfoCircle} />
                                        8 to 24 characters.<br />
                                        Must include uppercase and lowercase letters, a number and a special character.<br />
                                        Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                                        </p>
                                        }
                                    </div>
                                    <br />
                                    <div>
                                    <label htmlFor="confirm_pwd">
                                        Confirm Password
                                        <FontAwesomeIcon icon={validMatch && matchPwd ? faCheck : null} style={{color: "green"}}/>
                                    </label>
                                    <input
                                        type="password"
                                        id="confirm_pwd"
                                        className="form-control"
                                        onChange={(e) => setMatchPwd(e.target.value)}
                                        value={matchPwd}
                                        required
                                        aria-invalid={validMatch ? "false" : "true"}
                                        aria-describedby="confirmnote"
                                        onFocus={() => setMatchFocus(true)}
                                        onBlur={() => setMatchFocus(false)}
                                        />
                                    <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                                        <FontAwesomeIcon icon={faInfoCircle} />
                                        Passwords don't match!
                                    </p>
                                    </div>
                                    <div>
                                        <label htmlFor="date">
                                            Date of Birth
                                        </label>
                                        <input
                                            id="date"
                                            className="form-control"
                                            label="Choose your birthdate"
                                            type="date"
                                            onChange={(e) => setBirthDate(e.target.value)}
                                            value={new Date().toISOString().slice(0,10)}
                                            InputLabelProps={{
                                            shrink: true,
                                            }}
                                        />
                                    </div>
                                    <br />
                                    <button className="btn btn-primary" style={{
                                        color: "white", fontWeight: "600"}} disabled={!validEmail || !validPwd || !validMatch ? true : false}>Sign Up</button>
                                    </form>
                                    <p>
                                    Already registered?<br />
                                    <span className="line">
                                        <Link to="/">Sign In</Link>
                                    </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-5">
                            
                        </div>
                    </div>
                </div>
        </div>
        )
    }
    </>
    )
}

export default Registration;