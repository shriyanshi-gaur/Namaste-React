import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const data = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.46310&lng=80.34790&restaurantId=${resId}`
      );
      const json = await data.json();

      const restaurantInfo = json?.data?.cards?.find(
        (card) => card?.card?.card?.info
      )?.card?.card?.info;

      const menuCards = json?.data?.cards?.find(
        (card) => card?.groupedCard
      )?.groupedCard?.cardGroupMap?.REGULAR?.cards;

      const items = [];

      menuCards?.forEach((card) => {
        const itemCards = card?.card?.card?.itemCards;
        if (itemCards) {
          itemCards.forEach((item) => {
            items.push(item.card.info);
          });
        }
      });

      setRestaurant(restaurantInfo);
      setMenuItems(items);
    } catch (error) {
      console.error("Failed to fetch restaurant menu:", error);
    }
  };

  if (!restaurant) return <h2>Loading...</h2>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">{restaurant.name}</h1>
      <h3 className="text-gray-600 mb-4">
        {restaurant.cuisines?.join(", ")} - {restaurant.areaName}
      </h3>

      <h2 className="text-xl font-semibold mb-4">Menu</h2>
      <ul className="space-y-2">
        {menuItems.map((item, index) => (
  <li key={`${item.id}-${index}`} className="p-3 border-b">

            <div className="flex justify-between">
              <span>{item.name}</span>
              <span>₹{item.price ? item.price / 100 : item.defaultPrice / 100}</span>
            </div>
            {item.description && (
              <p className="text-sm text-gray-500">{item.description}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
