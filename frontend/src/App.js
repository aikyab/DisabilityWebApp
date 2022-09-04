import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import Landing from "./components/Landing";
import Login from "./components/UserLogin";
import Prelogin from "./components/Navbars/Prelogin";
import Registration from "./components/Registration";
// import useToken from './hooks/useToken';


function App() {
  // const { token, setToken } = useToken();

  // if(!token) {
  //   return <Login setToken={setToken} />
  // }
  
  return (
      <div>
        <Router>
        <Prelogin />
          <Routes>
          <Route index element={<Landing />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Registration />} />
          <Route path="dashboard" element={<Dashboard/>}>
            <Route index element={<Home />} />
            {/* <Route path="account" element={<Account />} /> */}
          </Route>
        </Routes>

        </Router>
      </div>
  );
}

export default App;
