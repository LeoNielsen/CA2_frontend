import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./components/Home";
import NoMatch from "./components/NoMatch";
import LoginPage from "./components/LoginPage";
import Animal from "./components/Animal";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home/>}>
        </Route>
        <Route path="login" element={<LoginPage/>} />
        <Route path="animal" element={<Animal/>} />
        <Route path="*" element={<NoMatch/>} />
    
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
