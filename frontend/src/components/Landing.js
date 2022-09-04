import Prelogin from "./Navbars/Prelogin";
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Login from "./UserLogin";
import Registration from "./Registration";

const Landing = () => {
    return (
        <div>
        {/* <Prelogin />
            <Routes>
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Registration />} />
            </Routes> */}
        {/* <Outlet /> */}
        </div>
    )
}

export default Landing;