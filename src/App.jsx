import { Outlet, Link, NavLink } from "react-router-dom";
import "./styles/App.css";
import apiFacade from "./apiFacade.js";
export default function App() {

  function logout() {
    apiFacade.logout();
  }


  return (
    <div>
      <header>
        <nav>
          <NavLink className="nav-link" to="/">Home</NavLink>
          <NavLink className="nav-link" to="animal">Generate</NavLink>
          {
            apiFacade.loggedIn() && <NavLink className="nav-link" to="favorites">Favorites</NavLink>
          }
          {   
              apiFacade.loggedIn() ?
                <NavLink className="nav-button" to="/" onClick={logout}>Logout</NavLink>
              :
                <NavLink className="nav-button" to="login">Login</NavLink> 
          }
        </nav>
      </header>
      <Outlet />
    </div>
  );
}
