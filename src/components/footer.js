import { useContext } from "react";
import UserContext from "../../utils/UserContext";

const FooterComponent = () => {
  const userDetails = useContext(UserContext);
  return <div>{userDetails.loggedUser}</div>;
};
export default FooterComponent;
