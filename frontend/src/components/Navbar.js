import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const { auth, setAuth } = useAuth();
    const navigate = useNavigate();

    const logout = async () => {
        // if used in more components, this should be in context 
        // axios to /logout endpoint 
        setAuth({});
        navigate('/login');
        console.log(auth?.accessToken)
    }
    
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container px-2">
            { auth?.accessToken ?
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-3 mb-lg-0">
                        <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/dashboard/home">Home</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/dashboard/survey">Survey</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="results.html">My Results</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/dashboard/processInfo">Application Process</Link></li>
                        {/* <li className="nav-item"><Link className="nav-link" to="resources.html">Resources</Link></li> */}
                        <li className="nav-item"><Link className="nav-link" to="student-profile.html">My Profile</Link></li>
                        <li className="nav-item"><Link onClick={logout} className="nav-link" to="/login">Logout</Link></li>
                    </ul>
                </div>
            :
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <Link className="navbar-brand" to="/register">Welcome - Please Register to start your College Planning</Link>
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
