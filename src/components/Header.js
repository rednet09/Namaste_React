import { useState } from "react";
import { CDN_URl } from "../Utils/constants";
const Header = () => {
  const [login, setLogin] = useState("Login");
  const handleClick = () => {
    login === "Login" ? setLogin("Logout") : setLogin("Login");
  };
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={CDN_URl} />
      </div>
      <div className="nav-item">
        <nav>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </nav>
        <button onClick={handleClick}>{login}</button>
      </div>
    </div>
  );
};
export default Header;
