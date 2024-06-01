import { RestaurantComponent } from "./restrauntcomponents";
import restaurantData from "../../assets/data/restaruant.json";
import { useState } from "react";

const restaurantListData =
  restaurantData.data.cards[0].card.card.gridElements.infoWithStyle.restaurants;

const RestaurantListComponent = () => {
  const [restaurantDetails, setRestaurantDetails] =
    useState(restaurantListData);
  const [filteredRestaurantList, setFilteredRestaurantList] =
    useState(restaurantListData);
  const [searchText, setSearchText] = useState("");
  return (
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
              setFilteredRestaurantList(restaurantListData);
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
  );
};
export default RestaurantListComponent;
