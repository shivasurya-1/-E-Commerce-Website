import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home";
import Aboutus from "./components/Aboutus";
import Logout from "./components/Logout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>

        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/aboutus" element={<Aboutus></Aboutus>}></Route>
        <Route path="/" element={<Logout></Logout>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
