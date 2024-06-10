import { RestaurantComponent } from "./restrauntcomponents";
import ShimmerPage from "./ShimmerPage";
import { useEffect, useState } from "react";

const RestaurantListDataUrl =
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.89960&lng=80.22090&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

const RestaurantListComponent = () => {
  const [restaurantDetails, setRestaurantDetails] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    console.log("called");
    fetchComponents();
  }, []);
  const fetchComponents = async () => {
    const data1 = await fetch(RestaurantListDataUrl);
    const restaruantJSON = await data1.json();
    const restaurantListData =
      restaruantJSON.data.cards[4].card.card.gridElements.infoWithStyle
        .restaurants;
    setRestaurantDetails(restaurantListData);
    setFilteredRestaurantList(restaurantListData);
  };

  return filteredRestaurantList.length ? (
    <div className="main-cont">
      <div className="filter-cont">
        <button
          onClick={() => {
            const filterOutput = restaurantDetails.filter((rest) => {
              return rest.info.avgRating > 4.5;
            });
            setFilteredRestaurantList(filterOutput);
          }}
        >
          Show top rated restaurants
        </button>
        <div className="search-cont">
          <input
            type="text"
            id="rest1"
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
          />
          <button
            onClick={() => {
              const searchTextOutput = restaurantDetails.filter((rest) => {
                return rest.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilteredRestaurantList(searchTextOutput);
            }}
          >
            Search
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              setFilteredRestaurantList(restaurantDetails);
              setSearchText("");
            }}
          >
            Reset
          </button>
        </div>
      </div>

      <div className="rest-link-content">
        {filteredRestaurantList.map((rest) => {
          return <RestaurantComponent key={rest?.info?.id} restData={rest} />;
        })}
      </div>
    </div>
  ) : (
    <ShimmerPage />
  );
};
export default RestaurantListComponent;
