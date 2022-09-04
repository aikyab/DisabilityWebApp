import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthProvider";


export const Logout = () => {

    const { setAuth } = useContext(AuthContext);
    const navigate = useNavigate();

    setAuth({});
    navigate('/login');
    

    return (
        <div>Logout</div>
    )
}
