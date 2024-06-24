import UserClass from "./Userclass";
import UserFunction from "./UserFunction";
const AboutUs = () => {
  return (
    <div className="main">
      <div className="main-cont bg-grey">
        <UserFunction name="Deepika" email="deepika" id="273159" />
        <UserClass
          name="Deepika from class based comp"
          email="deepika.kumar0706@gmail.com"
          id="273159 from class based comp"
        />
      </div>
    </div>
  );
};
export default AboutUs;
