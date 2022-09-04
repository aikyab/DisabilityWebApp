import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";


const Postlogin = () => {

    const { auth } = useAuth();
    const { setAuth } = useContext(AuthContext);
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
                    <a className="navbar-brand" href="#!"></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-3 mb-lg-0">
                        <li className="nav-item"><Link className="nav-link active" aria-current="page" to="index.html">Home</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="survey.html">Survey</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="results.html">My Results</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="process-info.html">Application Process</Link></li>
                        {/* <li className="nav-item"><Link className="nav-link" to="resources.html">Resources</Link></li> */}
                        <li className="nav-item"><Link className="nav-link" to="support-services.html">Support and Services</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="student-profile.html">My Profile</Link></li>
                        <li className="nav-item"><Link onClick={logout} className="nav-link" to="/login">Logout</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Postlogin;
