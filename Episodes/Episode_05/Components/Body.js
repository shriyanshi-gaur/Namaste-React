import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../utils/mockData";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState(restaurantList);
  const [filteredRestaurants, setFilteredRestaurants] = useState(restaurantList);
  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  const filterData = (searchText, restaurants) => {
    return restaurants.filter((restaurant) =>
      restaurant.card?.card?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
    );
  };

  return (
    <div className="body">
      {/* Search Bar and User Inputs */}
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
        
      </div>

      {/* Top Rated Filter */}
      <div className="filter">
        <button
          className="filter-btn p-2 bg-yellow-200 rounded-md m-2"
          onClick={() => {
            const topRated = allRestaurants.filter(
              (restaurant) =>
                parseFloat(restaurant.card?.card?.info?.avgRating) > 4.4
            );
            setFilteredRestaurants(topRated);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      {/* Restaurant List */}
      <div className="restaurant-list flex flex-wrap justify-center">
        {filteredRestaurants.length === 0 ? (
          <h2 className="text-center text-red-500">No restaurants match your search</h2>
        ) : (
          filteredRestaurants.map((restaurant) => {
            const info = restaurant.card?.card?.info;
            return <RestaurantCard key={info.id} {...info} />;
          })
        )}
      </div>
    </div>
  );
};

export default Body;
