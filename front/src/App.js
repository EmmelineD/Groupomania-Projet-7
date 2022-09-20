import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Signup from "./pages/signup/Signup";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext, AuthContextProvider } from "./context/AuthContext";

function App() {
  let { user } = useContext(AuthContext);

  useEffect(()=>{
    console.log({newUserApp: user})
  },[user])
  
  return (
    <AuthContextProvider>
    <Router>
      <Routes>
        <Route exact path="/" element={user ? <Home/> : <Login/>}/>
        <Route path="/login" element={user ? <Navigate to="/"/> : <Login/>} />
        <Route path="/signup" element={user ? <Navigate to="/profile/:username"/> : <Signup/>}/>
        <Route path="/profile/:username" element= {user ? <Profile/> : <Navigate to="/login"/>}/>
      </Routes>
    </Router>
    </AuthContextProvider>
  );
}

export default App;