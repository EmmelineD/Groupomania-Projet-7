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
import { useContext } from "react";
import { AuthContext, ContextProvider } from "./context/AuthContext";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <ContextProvider>
    <Router>
      <Routes>
        <Route exact path="/" element={user ? <Home/> : <Login/>}/>
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login/>} />
        <Route path="/signup" element={user ? <Navigate to="/" /> : <Signup/>}/>
        <Route path="/profile/:username" element= {<Profile/>}/>
      </Routes>
    </Router>
    </ContextProvider>
  );
}

export default App;