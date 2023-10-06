import ItemCategoryList from "./ItemCategoryList";

const RestaurantCategory = ({data, showItems, setShowIndex, index}) => {

    const handleClick = () => {
        if(showItems === true) {
            setShowIndex(null)
        }
        else{
            setShowIndex(index)
        }
    }

    return (
        <div>
            <div className="itemList w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-bold text-lg">{data?.title} ({data?.itemCards?.length})</span>
                    <span>⬇️</span>
                </div>
                {/* Accordian Body */}
                {showItems && <ItemCategoryList items={data?.itemCards}/>}
            </div>
        </div>
    )
}

export default RestaurantCategory;