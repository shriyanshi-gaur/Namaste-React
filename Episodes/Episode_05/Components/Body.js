import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const filterData = (text, restaurants) => {
    return restaurants.filter((restaurant) =>
      restaurant?.info?.name?.toLowerCase().includes(text.toLowerCase())
    );
  };

  const fetchData = async () => {
  try {
    const response = await fetch(
      "https://swiggy-api-4c740.web.app/swiggy-api.json"
    );

    console.log("Response:", response); // 👀

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const json = await response.json();
    console.log("Fetched JSON:", json); // 👀

    const restaurantData =
      json?.data?.cards?.find(
        (card) =>
          card?.card?.card?.id === "restaurant_grid_listing_v2" &&
          card?.card?.card?.gridElements?.infoWithStyle?.restaurants
      )?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

    setAllRestaurants(restaurantData);
    setFilteredRestaurants(restaurantData);
  } catch (err) {
    console.error("Error fetching data:", err);
  }
};
  useEffect(() => {
    fetchData();
  }, []);

 return allRestaurants.length === 0 ? (
  <Shimmer />
) : (
    <div className="body">
      {/* Search and Filter */}
      <div className="search-container p-5 bg-pink-50 my-5">
        <input
          data-testid="search-input"
          type="text"
          className="focus:bg-green-200 p-2 m-2"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          data-testid="search-btn"
          className="p-2 m-2 bg-purple-900 hover:bg-gray-500 text-white rounded-md"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>

        <button
          className="p-2 m-2 bg-yellow-400 hover:bg-yellow-600 text-black rounded-md"
          onClick={() => {
            const topRated = allRestaurants.filter(
              (res) => parseFloat(res?.info?.avgRating) > 4.1
            );
            setFilteredRestaurants(topRated);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      {/* Restaurant Cards */}
      <div className="restaurant-list flex flex-wrap justify-center gap-4">
        {filteredRestaurants.length === 0 ? (
          <h2 className="text-center text-red-500 text-xl">
            No restaurants match your search.
          </h2>
        ) : (
          filteredRestaurants.map((restaurant) => {
            const info = restaurant.info;
            return <RestaurantCard key={info.id} {...info} />;
          })
        )}
      </div>
    </div>
  );
};

export default Body;
