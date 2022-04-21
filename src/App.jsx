import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NoMatch from "./components/NoMatch";
import LoginPage from "./components/LoginPage";
import Animal from "./components/Animal";
import Favorites from "./components/Favorites";
import Header from "./components/Header"
import { useState } from "react";

export default function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      <BrowserRouter>
       <Header loggedIn={loggedIn} />
       <Routes>
        <Route path="/" element={<Home/>}/>
         <Route path="login" element={<LoginPage loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
         <Route path="animal" element={<Animal/>} />
         <Route path="favorites" element={<Favorites />} />
         <Route path="*" element={<NoMatch/>} />  
        </Routes>
      </BrowserRouter>
    </div>  
  );

}
