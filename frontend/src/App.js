import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
// import Landing from "./components/Landing";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Registration from "./components/Registration";
import ProcessInfo from './components/ProcessInfo';
import Footer from './components/Footer';
import Survey from './components/Survey';
// import useToken from './hooks/useToken';


function App() {
  // const { token, setToken } = useToken();

  // if(!token) {
  //   return <Login setToken={setToken} />
  // }
  return (
      <div>
        <Router>
        <Navbar />
          <Routes>
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Registration />} />
          <Route path="processInfo" element={<ProcessInfo />} />
          <Route path="dashboard" element={<Dashboard/>}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="survey" element={<Survey />} />
            <Route path="processInfo" element={<ProcessInfo />} />
            {/* <Route path="account" element={<Account />} /> */}
          </Route>
        </Routes>
        </Router>
        <Footer />
      </div>
  );
}

export default App;
