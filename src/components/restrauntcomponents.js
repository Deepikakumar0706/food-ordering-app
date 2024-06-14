import BaseUrls from "./baseUrls";
import { Link } from "react-router-dom";

export const RestaurantComponent = (props) => {
  const {
    id,
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
      <Link to={`/details/${id}`}>
        <h3>{name}</h3>
      </Link>

      <p>{avgRating}</p>
      <p>{sla.slaString}</p>
      <p>{cuisines.join(",")}</p>
      <p>{`${locality}, ${areaName}`}</p>
    </div>
  );
};
