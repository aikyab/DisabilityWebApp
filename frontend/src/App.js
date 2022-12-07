import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import Dashboard from "./components/outliners/Dashboard"
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Registration from "./components/Registration";
import ProcessInfo from './components/ProcessInfo';
import Footer from './components/outliners/Footer';
import Surveys from './components/Surveys';
import Profile from './components/Profile';
import Random from './components/outliners/random';
import Results from './components/Results';
import NewSurvey from './components/NewSurvey';
import UpdateEmail from './components/UpdateUserEmail';
import DeleteUserAccount from './components/DeleteAccount';
import UniversityList from './components/UniversityList';
import UniDetails from './components/UniDetails';
import Landing from './components/Landing';


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
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Registration />} />
          <Route path="home" element={<Home />} />
          <Route path="random" element={<Random />} />
          <Route path="processInfo" element={<ProcessInfo />} />
          <Route path="dashboard" element={<Dashboard/>}>
            <Route index element={<Landing />} />
            <Route path="landing" element={<Landing />} />
            <Route path="surveys" element={<Surveys />} /> 
            <Route path="newSurvey" element={<NewSurvey />} />
            <Route path="processInfo" element={<ProcessInfo />} />
            <Route path="userProfile" element={<Profile />} />
            <Route path="surveyResults" element={<Results />}/>
            <Route path="universities" element={<UniversityList />} />
            <Route path="university/:id" element={<UniDetails />} />
            <Route path="updateEmail" element={<UpdateEmail />}/>
            <Route path="deleteAccount" element={<DeleteUserAccount />}/>
          </Route>
        </Routes>
        </Router>
        <Footer />
      </div>
  );
}

export default App;
