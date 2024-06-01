import BaseUrls from "./baseUrls";

export const RestaurantComponent = (props) => {
  const {
    name,
    sla,
    avgRating,
    cuisines,
    locality,
    areaName,
    cloudinaryImageId,
  } = props.restData.info;
  return (
    <div className="rest-container">
      <div className="image-cont">
        <img
          className="img"
          src={`${BaseUrls.RESTAURANT_LIST_IMAGE_URL}${cloudinaryImageId}`}
          width="150"
          height="150"
          alt="image1"
        />
      </div>
      <h3>{name}</h3>
      <p>{avgRating}</p>
      <p>{sla.slaString}</p>
      <p>{cuisines.join(",")}</p>
      <p>{`${locality}, ${areaName}`}</p>
    </div>
  );
};
