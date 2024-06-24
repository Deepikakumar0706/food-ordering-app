import { useEffect, useState } from "react";

const RestaurantOverview_url =
  "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.89960&lng=80.22090&catalog_qa=undefined&submitAction=ENTER&restaurantId=";

const useRestaurantMenuList = (id) => {
  // const [restaurantMenuList, setRestaurantMenuList] = useState([]);
  const [restaurantName, setRestaurantName] = useState("Name");
  const [cardItems, setCardItems] = useState([]);

  useEffect(() => {
    fetchRestaurantMenuList(id);
  }, []);
  const fetchRestaurantMenuList = async (id) => {
    const data = await fetch(`${RestaurantOverview_url}${id}`);
    const restaurantMenuJSON = await data.json();
    console.log(restaurantMenuJSON);

    // const card1 =
    //   restaurantMenuJSON.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1]
    //     .card.card.itemCards;
    // const card2 =
    //   restaurantMenuJSON.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2]
    //     .card.card.itemCards;

    // const restaurantMenuData = card1 ? card1 : card2;
    // setRestaurantMenuList(restaurantMenuData);
    setRestaurantName(restaurantMenuJSON.data.cards[0].card.card.text);
    setCardItems(
      restaurantMenuJSON.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards
    );
  };

  return {
    //  menuList: restaurantMenuList,
    restaurantName: restaurantName,
    cardDetails: cardItems,
  };
};

export default useRestaurantMenuList;
