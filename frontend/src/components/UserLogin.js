import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../api/Axios';
import useAuth from '../hooks/useAuth';
import Footer from './Footer';
import "bootstrap/dist/css/bootstrap.min.css";


const Login = () => {
    const navigate = useNavigate();
    const { auth, setAuth } = useAuth();

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
            console.log(auth?.accessToken)
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
        <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
        <div className="card card0 border-0">
            <div className="row d-flex">
                <div className="col-lg-6">
                    <div className="card2 card border-0 px-4 py-5">

                            {errMsg &&
                        <p ref={errRef} aria-live="assertive">{errMsg}</p>}
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                            <label htmlFor="email">Email Address</label>
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
                        </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-blue py-4">
                <div className="row px-3">
                    <small className="ml-4 ml-sm-5 mb-2">Copyright &copy; 2019. All rights reserved.</small>
                    <div className="social-contact ml-4 ml-sm-auto">
                        <span className="fa fa-facebook mr-4 text-sm"></span>
                        <span className="fa fa-google-plus mr-4 text-sm"></span>
                        <span className="fa fa-linkedin mr-4 text-sm"></span>
                        <span className="fa fa-twitter mr-4 mr-sm-5 text-sm"></span>
                    </div>
                </div>
            </div>
        </div>
)
}

export default Login;