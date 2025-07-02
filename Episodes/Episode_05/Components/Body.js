import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";


const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.46310&lng=80.34790&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await res.json();

      const restaurants = json?.data?.cards?.find(
        (card) =>
          card?.card?.card?.gridElements?.infoWithStyle?.restaurants
      )?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

      setAllRestaurants(restaurants);
      setFilteredRestaurants(restaurants);
    } catch (err) {
      console.error("Error fetching restaurant data:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = () => {
    const filtered = allRestaurants.filter((r) =>
      r?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filtered);
  };

  const handleTopRated = () => {
    const filtered = allRestaurants.filter(
      (r) => parseFloat(r?.info?.avgRating) > 4.4
    );
    setFilteredRestaurants(filtered);
  };

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      {/* Search & Filter */}
      <div className="search-container p-5 bg-pink-50 my-5">
        <input
          type="text"
          className="p-2 m-2 focus:bg-green-200"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className="p-2 m-2 bg-purple-800 text-white rounded" onClick={handleSearch}>
          Search
        </button>
        <button className="p-2 m-2 bg-yellow-400 text-black rounded" onClick={handleTopRated}>
          Top Rated
        </button>
      </div>

      {/* Restaurant Cards */}
      <div className="restaurant-list flex flex-wrap justify-center gap-4">
        {filteredRestaurants.length === 0 ? (
          <h2 className="text-red-500 text-xl">No restaurants found.</h2>
        ) : (
          filteredRestaurants.map((r) => (
           <RestaurantCard
  key={r.info.id}
  id={r.info.id}
  {...r.info}
/>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
