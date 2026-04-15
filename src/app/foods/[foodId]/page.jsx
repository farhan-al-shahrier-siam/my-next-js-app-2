
const FoodPage = async({params}) => {
    const {foodId} = await params;



    return (
        <div>
            <h2>Show details of food: {foodId}</h2>
        </div>
    );
};

export default FoodPage;