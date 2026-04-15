import Image from "next/image";
import Link from "next/link";

const FoodCard = ({ food }) => {

    const {id, dish_name, image_link, category, price, origin_and_popularity} = food

    return (
        <div className="card bg-base-100 shadow-sm">
            <figure>
                <Image 
                    src={image_link}
                    alt={dish_name}
                    width={200}
                    height={200}
                    ></Image>
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {dish_name}
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p><small>Category: {category}</small></p>
                <p>Price: ${price}</p>
                <p>{origin_and_popularity}</p>
                <div className="card-actions justify-end">
                    <Link href={`/foods/${id}`} className="badge badge-outline btn">Show Details</Link>
                    <div className="badge badge-outline btn">Add To Cart</div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
