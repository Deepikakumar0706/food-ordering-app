import { useState } from "react";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  const [loginName, setLoginName] = useState("Login");
  return (
    <div className="header">
      <div className="test">
        <img
          src={require("../../assets/images/swiggy.png")}
          alt="swiggy"
          width="80"
          height="80"
        />
        <div className="test1">
          <Link to="/home">
            <div>Home</div>
          </Link>
          <Link to="/aboutUs">
            <div>AboutUs</div>
          </Link>
          <Link to="help">
            <div>Help</div>
          </Link>
          <Link to="/contactUs">
            <div>ContactUs</div>
          </Link>

          <button
            onClick={() => {
              setLoginName(loginName === "Login" ? "Logout" : "Login");
            }}
          >
            {loginName}
          </button>
        </div>
      </div>
    </div>
  );
};
export default HeaderComponent;
