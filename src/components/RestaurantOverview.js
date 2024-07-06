import { useState } from "react";
import { useParams } from "react-router-dom";
import UseRestaurantMenuList from "../Custom-Hooks/UseRestaurantMenuList";
import RestaurantCategory from "./Restaurantcategory";

const RestaurantOverview = () => {
  let { id } = useParams();
  const menuDetails = UseRestaurantMenuList(id);

  const restaurantName = menuDetails.restaurantName;
  const cardDetails = menuDetails.cardDetails;

  const [expandCategoryIndex, setExpandCategoryIndex] = useState(0);

  const categories = cardDetails.filter((category) => {
    return (
      category.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
      category.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    );
  });

  // const loadIndex = (event) => {
  //   setExpandCategoryIndex(Number(event.target.value));
  // };
  return cardDetails.length ? (
    <div className="w-10/12 m-auto">
      <h1 className="font-extrabold text-2xl my-5">{restaurantName}</h1>
      {/* <input type="text" className="border border-black" onChange={loadIndex} /> */}
      {categories.map((category, index) => {
        return (
          <RestaurantCategory
            key={category.card.card.title}
            category={category}
            expandHideCategory={expandCategoryIndex === index ? true : false}
            expandFunction={() =>
              setExpandCategoryIndex(
                expandCategoryIndex === index ? null : index
              )
            }
          />
        );
      })}
    </div>
  ) : (
    <h1 className="loader-cont">Loading...</h1>
  );
};

export default RestaurantOverview;
