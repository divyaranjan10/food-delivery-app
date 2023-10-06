const ShimmerDesign = () => {
    return (
        <div className="shimmer-card w-72 h-96 m-4 p-4 ">
            <div className="h-1/2 w-full bg-gray-200 rounded-lg my-1"></div>
            <div className="h-1/2 w-full text-center">
                <div className="h-1/4 w-3/4 bg-gray-200 rounded-lg mx-auto my-1"></div>
                <div className="h-2/4 w-full bg-gray-200 rounded-lg my-1"></div>
                <div className="h-1/4 w-1/4 bg-gray-200 rounded-lg mx-auto"></div>
            </div>
        </div>
    )
}

export default ShimmerDesign;
