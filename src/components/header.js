import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import UseOnlineStatus from "../Custom-Hooks/UseOnlineStatus";

const HeaderComponent = () => {
  const [loginName, setLoginName] = useState("Login");
  const [cartButtonName, setCartButtonName] = useState(["Add to cart"]);
  const onlineStatus = UseOnlineStatus();

  return (
    <div className="header flex justify-between px-2 py-2 bg-orange-300">
      <div className="test ">
        <Link to="/">
          <img
            src={require("../../assets/images/swiggy.png")}
            alt="swiggy"
            width="140"
            height="100"
          />
        </Link>
      </div>
      <div className="test1 flex items-center">
        <ul className="flex">
          <Link to="/home">
            <li className="px-3 font-semibold" href="#">
              Home
            </li>
          </Link>
          <Link to="/aboutUs">
            <li className="px-3 font-semibold" href="#">
              AboutUs
            </li>
          </Link>
          <Link to="help">
            <li className="px-3 font-semibold" href="#">
              Help
            </li>
          </Link>
          <Link to="/contactUs">
            <li className="px-3 font-semibold" href="#">
              ContactUs
            </li>
          </Link>
          <Link to="/grocery">
            <li className="px-3 font-semibold" href="#">
              Groceries
            </li>
          </Link>
          <li>
            <span className="px-3 font-semibold">
              {onlineStatus ? "🟢 Online" : "🔴 Offline"}
            </span>
          </li>
          <li>
            <button
              className="login-btn px-3 font-semibold"
              onClick={() => {
                setLoginName(loginName === "Login" ? "Logout" : "Login");
              }}
            >
              {loginName}
            </button>
          </li>
          <li>
            <button
              className="add-to-cart-btn px-3 font-semibold"
              onClick={() => {
                setCartButtonName(
                  cartButtonName == "Add to cart" ? "payment" : "Add to cart"
                );
              }}
            >
              {cartButtonName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default HeaderComponent;
