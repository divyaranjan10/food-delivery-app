import { CDN_URL } from "../../utils/constants";

const RestaurantCard = (props) => {
    const{resData} = props;
    const{cloudinaryImageId, name, cuisines, avgRating} = resData.info;
    const{deliveryTime} = resData.info.sla;


    return(
        <div className='res-card m-4 p-4 w-72 h-96 bg-orange-100 rounded-lg text-center hover:bg-orange-200'>
            <img 
                className='res-logo h-48 w-72 rounded-lg'
                src={CDN_URL+cloudinaryImageId}
                alt='restaurant-logo'
            />
            <h3 className="font-bold py-2 text-lg">{name}</h3>
            <h4>{cuisines.length > 5?(cuisines.slice(0,5).join(", ")):(cuisines.join(", "))}</h4>
            <h4>{avgRating} Stars</h4>
            <h4>{deliveryTime} Minutes</h4>
        </div>
    )
}

export const IsResOpenLabel = (RestaurantCard) => {
        return (props) => {
            return (
                <div>
                    <label className="absolute bg-black text-white px-2 py-1 ml-4 rounded-lg">Open</label>
                    <RestaurantCard {...props}/>
                </div>
            )
    }
}


export default RestaurantCard;