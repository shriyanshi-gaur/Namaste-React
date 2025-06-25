import { IMG_CDN_URL } from "../utils/constants";
const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  areaName,
  sla,
  costForTwo,
  avgRatingString,
}) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt={name} />
      <h2>{name}</h2>
      <h4>{cuisines?.join(", ")}</h4>
      <h4>{areaName}</h4>
      <div>
        <h4>
          <i className="fa-solid fa-star"></i> {avgRatingString}
        </h4>
        <h4>{sla?.lastMileTravelString || `${sla?.lastMileTravel} km`}</h4>
        <h4>{costForTwo}</h4>
      </div>
    </div>
  );
};
export default RestaurantCard;