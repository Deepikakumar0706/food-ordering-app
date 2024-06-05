import { useState } from "react";

const HeaderComponent = () => {
  const [loginName, setLoginName] = useState("Login");
  return (
    <div className="header">
      <div className="test">
        <img
          src={require("../../assets/images/swiggy.png")}
          alt="swiggy"
          width="60"
          height="50"
        />
        <div className="test1">
          <div>Search</div>
          <div>Offers</div>
          <div>Online Services</div>
          <div>Sign In</div>
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
