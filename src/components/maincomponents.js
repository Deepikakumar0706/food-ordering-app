import BannerComponent from "./banner";
import RestaurantListComponent from "./restlistcomponent";
const MainComponent = () => {
  return (
    <div className="main">
      <h2>What's On Your Mind</h2>
      <BannerComponent />
      <RestaurantListComponent />
    </div>
  );
};
export default MainComponent;
