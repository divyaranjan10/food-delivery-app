import RestaurantCard, {IsResOpenLabel} from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, SetSearchText] = useState("");
    const RestaurantCardIsOpen = IsResOpenLabel(RestaurantCard);
    console.log("filtered res", filteredRestaurant);
    console.log("list res", listOfRestaurants);

    useEffect(()=>{
        fetchData();
    }, [])

    const fetchData = async() => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999");
        const json = await data.json();
        console.log("data", data);
        console.log("json", json);
        setListOfRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants || json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants || json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants || json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants || json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }


    return listOfRestaurants?.length === 0 ? (
        <Shimmer/>
    ) : (
        <div className='body'>
            <div className='filter flex flex-wrap justify-center'>
                <div className="search m-2 p-2">
                    <input 
                        type="text" 
                        className="search-box border border-solid border-black" 
                        value={searchText} onChange={(e)=>{
                        SetSearchText(e.target.value);
                    }}/>
                    <button 
                        className="px-4 py-1 bg-orange-100 mx-2 rounded-lg"
                        onClick={()=>{
                        const filteredRestaurant = listOfRestaurants.filter((res) => res?.info?.name?.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredRestaurant(filteredRestaurant);
                    }}>Search</button>
                </div>
                <div className="m-2 p-2">
                    <button 
                        className="filter-btn px-4 py-1 bg-orange-100 rounded-lg" 
                        onClick={()=>{
                        const filteredlist = listOfRestaurants.filter((res) => res?.info?.avgRating > 4)
                        setFilteredRestaurant(filteredlist);
                    }}>Top Rated Restaurant</button>
                </div>
            </div>

            {/* it contains the list of all restaurants from the API */}
            <div className='res-container flex flex-wrap justify-evenly'>
                {
                    filteredRestaurant.map((restaurant) => (
                        <Link key={restaurant?.info?.id} to={'/restaurants/'+restaurant?.info?.id}>
                            {restaurant.info.isOpen ? <RestaurantCardIsOpen resData={restaurant}/> : <RestaurantCard resData={restaurant}/>}           
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Body;