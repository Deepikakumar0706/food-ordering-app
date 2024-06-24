import RestaurantComponent, {
  RecommendedRestaurantDetails,
} from "./restrauntcomponents";
import { useEffect, useState } from "react";

import ShimmerPage from "./ShimmerPage";
import useRestaurantList from "../Custom-Hooks/UseRestaurant";

const RestaurantList = () => {
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const restaurantList = useRestaurantList();

  const RecommendedCardDetails =
    RecommendedRestaurantDetails(RestaurantComponent);
  useEffect(() => {
    setFilteredRestaurantList(restaurantList);
  }, [restaurantList]);

  return filteredRestaurantList.length ? (
    <div className="main-cont">
      <div className="filter-cont  flex my-3 justify-between">
        <button
          className="bg-indigo-900 text-white px-2 py-2 font-normal rounded-md"
          onClick={() => {
            const filterOutput = restaurantList.filter((rest) => {
              return rest.info.avgRating > 4.5;
            });
            setFilteredRestaurantList(filterOutput);
          }}
        >
          Show top rated restaurants
        </button>
        <div className="search-cont">
          <input
            className="border border-gray-500 rounded w-4/6 mx-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="rest1"
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
          />
          <button
            className="bg-indigo-900 text-white px-2 py-2 font-normal rounded-md"
            onClick={() => {
              const searchTextOutput = restaurantList.filter((rest) => {
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
            className="bg-indigo-900 text-white px-2 py-2 font-normal rounded-md"
            onClick={() => {
              setFilteredRestaurantList(restaurantList);
              setSearchText("");
            }}
          >
            Reset
          </button>
        </div>
      </div>

      <div className="flex flex-wrap mt-6">
        {filteredRestaurantList.map((rest) => {
          return rest?.info?.avgRating >= 4 ? (
            <RecommendedCardDetails key={rest?.info?.id} restData={rest} />
          ) : (
            <RestaurantComponent key={rest?.info?.id} restData={rest} />
          );
        })}
      </div>
    </div>
  ) : (
    <ShimmerPage />
  );
};
export default RestaurantList;
