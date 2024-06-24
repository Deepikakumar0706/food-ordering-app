import { useParams } from "react-router-dom";
// import BaseUrls from "./baseUrls";
import UseRestaurantMenuList from "../Custom-Hooks/UseRestaurantMenuList";

import Restaurantcategory from "./Restaurantcategory";

const RestaurantOverview = () => {
  let { id } = useParams();
  const menuDetails = UseRestaurantMenuList(id);

  const restaurantName = menuDetails.restaurantName;
  const cardDetails = menuDetails.cardDetails;

  const categories = cardDetails.filter((category) => {
    return (
      category.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
      category.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    );
  });
  return cardDetails.length ? (
    <div className="w-10/12 m-auto">
      <h1 className="font-extrabold text-2xl my-5">{restaurantName}</h1>
      {categories.map((category) => {
        return (
          <Restaurantcategory
            key={category.card.card.title}
            category={category}
          />
        );
      })}
    </div>
  ) : (
    <h1 className="loader-cont">Loading...</h1>
  );
};

export default RestaurantOverview;
