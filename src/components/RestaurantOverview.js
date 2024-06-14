import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BaseUrls from "./baseUrls";

const RestaurantOverview_url =
  "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.89960&lng=80.22090&catalog_qa=undefined&submitAction=ENTER&restaurantId=";

const RestaurantOverview = () => {
  let { id } = useParams();

  const [restaurantMenuList, setRestaurantMenuList] = useState([]);
  const [restaurantName, setRestaurantName] = useState("Name");

  useEffect(() => {
    fetchRestaurantMenuList(id);
  }, []);
  const fetchRestaurantMenuList = async (id) => {
    const data = await fetch(`${RestaurantOverview_url}${id}`);
    const restaurantMenuJSON = await data.json();
    console.log(restaurantMenuJSON);

    const restaurantMenuData =
      restaurantMenuJSON.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2]
        .card.card.itemCards;
    setRestaurantMenuList(restaurantMenuData);
    setRestaurantName(restaurantMenuJSON.data.cards[0].card.card.text);
  };
  return restaurantMenuList.length ? (
    <div className="main">
      <h1>{restaurantName}</h1>
      {restaurantMenuList.map((restMenu) => {
        return restMenu.card.info.imageId ? (
          <div key={restMenu.card.info.id} className="rest-menu-list-cont">
            <div>
              <h3>{restMenu.card.info.name}</h3>

              <div>{`$ ${restMenu.card.info.price / 100}`}</div>

              <div>{`${restMenu.card.info.ratings.aggregatedRating.rating} (${restMenu.card.info.ratings.aggregatedRating.ratingCountV2})`}</div>
              <p>{restMenu.card.info.description}</p>
            </div>
            <img
              className="img list-overview"
              src={`${BaseUrls.RESTAURANT_LIST_IMAGE_URL}${restMenu.card.info.imageId}`}
              width="150"
              height="150"
              alt="restaurantimg1"
            />
          </div>
        ) : (
          <img
            className="img list-overview"
            src="Image Unavailable "
            width="150"
            height="150"
            alt="Image Available"
          />
        );
      })}
    </div>
  ) : (
    <h1 className="loader-cont">Loading...</h1>
  );
};

export default RestaurantOverview;
