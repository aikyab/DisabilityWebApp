import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../actions/userActions'
import "bootstrap/dist/css/bootstrap.min.css";
import Message from '../components/outliners/Message'


const Login = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    // reducer
    const userLoginReducer = useSelector(state => state.userLoginReducer)
    const { error, userInfo } = userLoginReducer

    const emailRef = useRef();

    const [email,setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    

    useEffect(() => {
        if (userInfo) {
            navigate('/dashboard') // homepage
        }
    }, [navigate, userInfo])

    useEffect(() => {
        emailRef.current.focus();
    },[])

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(login(email, pwd))
        setEmail('');
        setPwd('');
    }
    return(
        <div style={{
            paddingTop: "15%",
            height: "150"}}>
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 ">
                    <div className="col-md-4 mb-5">

                    </div>
                    <div className="col-md-4 mb-5">
                            <div className="card h-100">
                                <div className="card-body">
                                {error && <Message variant='danger'>Incorrect Email or Password!</Message>}        
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
                        <div className="col-md-4 mb-2">
                        </div>
                    </div>
                </div>
        </div>
)
}

export default Login;