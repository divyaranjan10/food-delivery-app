import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
import ShimmerResMenu from "./ShimmerResMenu";

const RestaurantMenu = () => {
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);
    const [showIndex, setShowIndex] = useState(null);

    if (resInfo === null) return <ShimmerResMenu />;

    const {name, costForTwoMessage, cuisines} = resInfo?.cards[0]?.card?.card?.info;
    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((category) => category?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory") || resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((category) => category?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    return (
        <div className="menu text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">
                {cuisines.join(",")} - {costForTwoMessage}
            </p>
            {/* categories accordian*/}
            {categories?.map((category, index)=>(
                <RestaurantCategory 
                    key={category?.card?.card?.title} 
                    data={category?.card?.card} 
                    showItems={index === showIndex ? true : false}
                    setShowIndex={setShowIndex}
                    index={index}
                />
            ))}
        </div>
    );
};

export default RestaurantMenu;