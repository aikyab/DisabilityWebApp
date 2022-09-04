import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../api/Axios';
import useAuth from '../hooks/useAuth';
import "bootstrap/dist/css/bootstrap.min.css";


const Login = () => {
    const navigate = useNavigate();
    const { setAuth } = useAuth();

    const emailRef = useRef();
    const errRef = useRef();

    const [email,setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        emailRef.current.focus();
    },[])

    useEffect(() => {
        setErrMsg('');
    }, [email, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        let formData = new FormData()
        formData.append('username', email);
        formData.append('password', pwd);
        try {
            const response = await axios.post(
                "/auth",
                formData,
                {withCredentials: true}
            );
            // console.log(JSON.stringify(response?.data));
            // console.log(JSON.stringify(response));
            const accessToken = response?.data?.access_token;
            console.log(accessToken)
            // const roles = response?.data?.roles;
            setAuth({ email, accessToken });
            //clear state and controlled inputs
            setEmail('');
            setPwd('');
            navigate("/dashboard");
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Email or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }
    return(
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
                                    <label htmlFor="email">Email address</label>
                                    <input type="email"
                                    aria-describedby="emailHelp" 
                                    placeholder="Email"
                                    id="email"
                                    className="form-control"
                                    ref={emailRef}
                                    autoComplete="off"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    required/>
                                    </div>
                                    <br />
                                    <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" 
                                    id="password"
                                    className="form-control"
                                    placeholder="Password"
                                    onChange={(e) => setPwd(e.target.value)}
                                    value={pwd}
                                    required/>
                                    </div>
                                    <br />
                                    <button className="btn btn-primary" style={{
                                        color: "white", fontWeight: "600"}}>Log In</button>
                                        {/* Will go to survey.html after logging in */}
                                </form>
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

export default Login;