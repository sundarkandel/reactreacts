import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

import { useState, useEffect} from "react";

const Body = () => {
  // Local State variable- Super powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const[filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");


// Whenever state variable updates, react triggers a reconcialition cycle(re-renders the component)
  console.log("Body is rendered");


useEffect(() => {
  fetchData();
}, []);


const fetchData =async()=>{
  const data = await fetch (
    "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  );

  const json =await data.json();
  console.log(json);

  // Optional Chaining

setListOfRestaurants(json?.data?.cards[2]?.card?.card);
setFilteredRestaurant(json?.data?.cards[2]?.card?.card);

};

// Conditional Rendering

return listOfRestaurants.length === 0 ? (
   <Shimmer />
) : (
    <div className="body">
      <div className="filter">
      <div className="search">
        <input type="text" className="search-box"  
        value = {searchText}
        onChange ={(e)=>{
          setSearchText(e.target.value);
        }}

        />
        <button onClick ={
          ()=> {

            //Filter the restaurant cards and update the UI
            // search Text
            console.log(searchText);

            const filteredRestaurant = listOfRestaurants.filter((res) =>
            res.data.name.toLowerCase().includes(searchText.toLowerCase()));

            setFilteredRestaurant(filteredRestaurant);

          }
        }> Search </button>
        </div> 


        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  )
};

export default Body;
