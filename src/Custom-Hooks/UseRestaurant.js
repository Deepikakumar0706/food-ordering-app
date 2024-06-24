import { useEffect, useState } from "react";

const RestaurantListDataUrl =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.89960&lng=80.22090&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

const useRestaurantList = () => {
  useEffect(() => {
    console.log("use effect called");
    fetchRestaurantList();
  }, []);
  const [restaurantList, setRestaurantList] = useState([]);

  const fetchRestaurantList = async () => {
    const data = await fetch(RestaurantListDataUrl);
    const restaurantJSON = await data.json();
    const restaurantData =
      restaurantJSON.data.cards[4].card.card.gridElements.infoWithStyle
        .restaurants;
    setRestaurantList(restaurantData);
  };

  return restaurantList;
};

export default useRestaurantList;
