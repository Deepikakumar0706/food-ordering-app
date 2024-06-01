const HeaderComponent = () => {
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
          <p>Search</p>
          <p>Offers</p>
          <p>Online Services</p>
          <p>Sign In</p>
        </div>
      </div>
    </div>
  );
};
export default HeaderComponent;
