import Image from "next/image";

const FoodPage = async({params}) => {
    const {foodId} = await params;
    const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/foods/${foodId}`)
    const data = await res.json()

    const { dish_name, image_link } = await data.data;
    

    return (
        <div className="mx-auto text-center">
            <h2>Show details of food: {foodId}</h2>
            <h3 className="text-3xl">{dish_name}</h3>
            <Image
                className="mx-auto"
                src={image_link}
                alt={dish_name}
                height={300}
                width={400}
            ></Image>

        </div>
    );
};

export default FoodPage;