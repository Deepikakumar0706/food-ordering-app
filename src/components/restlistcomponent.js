import { RestaurantComponent } from "./restrauntcomponents";
import restaurantData from "../../assets/data/restaruant.json";

const restaurantListData =
  restaurantData.data.cards[0].card.card.gridElements.infoWithStyle.restaurants;
const RestaurantListComponent = () => {
  return (
    <div className="rest-link-content">
      {restaurantListData.map((rest) => {
        return <RestaurantComponent restData={rest} />;
      })}
    </div>
  );
};
export default RestaurantListComponent;
