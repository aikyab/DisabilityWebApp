import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../actions/userActions'
import { Card } from 'react-bootstrap'

const Navbar = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch()

    const userLoginReducer = useSelector(state => state.userLoginReducer)
    const { userInfo } = userLoginReducer

    const logoutHandler = async () => { 
        dispatch(logout()) // action
        navigate('/login');
        window.location.reload()
    }
    
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container px-2">
            { userInfo?.access_token ?
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <Link className="navbar-brand" to="/dashboard/landing">
                    <img variant="top" src="https://i.imgur.com/SybeeZv.png" height="60" width="100"/>
                    </Link>
                    <ul className="navbar-nav ms-auto mb-3 mb-lg-0">
                        <li className="nav-item"><Link className="nav-link" to="/dashboard/processInfo">Application Process</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/dashboard/surveys">Surveys</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/dashboard/surveyResults">Results</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/dashboard/universities">Universities</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/dashboard/userProfile">My Profile</Link></li>
                        <li className="nav-item"><Link onClick={logoutHandler} className="nav-link" to="/login">Logout</Link></li>
                    </ul>
                </div>
            :
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <Link className="navbar-brand" to="/home">
                        <img variant="top" src="https://i.imgur.com/SybeeZv.png" height="60" width="100"/>
                    </Link>
                    <ul className="navbar-nav ms-auto mb-3 mb-lg-0">
                    <li className="navbar-item"><Link className="nav-link" to="/login">Login</Link></li>
                    <li className="navbar-item"><Link className="nav-link" to="/register">Register</Link></li>
                    <li className="navbar-item"><Link className="nav-link" to="/processInfo">Application Process</Link></li>
                    </ul>
                </div>
            }
            </div>
        </nav>
    )
}

export default Navbar;
