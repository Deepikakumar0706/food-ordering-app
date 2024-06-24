import { useState } from "react";
import RestaurantMenuListItem from "./RestaurantMenuListItem";

const Restaurantcategory = (props) => {
  const category = props.category;

  const [showDetails, setShowDetails] = useState(false);
  const [showsubcategory, setshowsubcategory] = useState(false);
  const showHideDetailsMenu = () => {
    setShowDetails(!showDetails);
  };
  const showHideSubCategory = () => {
    setshowsubcategory(!showDetails);
  };
  return (
    <div className="shadow-lg shadow-gray-400 mb-5">
      <div
        className="flex justify-between bg-gray-300 py-2 px-5 cursor-pointer"
        onClick={showHideDetailsMenu}
      >
        <p className="font-semibold text-lg">
          {category.card.card.title}
          {category.card.card?.itemCards?.length
            ? " (" + category.card.card?.itemCards?.length + " )"
            : ""}
        </p>
        <p>⏬</p>
      </div>
      {showDetails ? (
        <div>
          {category.card.card["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory" ? (
            <div>
              {category.card.card.categories.map((subCategory) => {
                return (
                  <div className="mx-7 my-4" key={subCategory.title}>
                    <div
                      className="px-2 py-2 flex justify-between  bg-gray-200 cursor-pointer"
                      onClick={showHideSubCategory}
                    >
                      <p className="font-semibold text-lg ">
                        {subCategory.title}
                      </p>
                      <p>⏬</p>
                    </div>
                    {showsubcategory ? (
                      <div>
                        {subCategory.itemCards.map((categoryItem) => {
                          return (
                            <RestaurantMenuListItem
                              key={categoryItem.card.info.id}
                              cardItems={categoryItem}
                            />
                          );
                        })}
                      </div>
                    ) : (
                      <div></div>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            category.card.card.itemCards.map((item) => {
              return (
                <RestaurantMenuListItem
                  key={item.card.info.id}
                  cardItems={item}
                />
              );
            })
          )}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Restaurantcategory;
