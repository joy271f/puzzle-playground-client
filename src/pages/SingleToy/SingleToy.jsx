import { useLoaderData } from "react-router-dom";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const SingleToy = () => {
    const loadToyData = useLoaderData();
    const { product_name, photo, name, category, price, rating, quantity, description } = loadToyData;
    return (
        <div className="font-serif">
            <h1 className="text-5xl gradient-text mt-12 font-bold">Welcome to our Toy Store</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[80vw] mx-auto mt-12">
                <div>
                    <img src={photo} className="w-3/4 mx-auto h-96 rounded-xl" alt="" />
                </div>
                <div>
                    <h1><span className="font-bold">Category:</span> {category}</h1>
                    <p className="mt-1"><small><span className="font-bold">Seller Name:</span> {name}</small></p>
                    <div className="flex mt-1">
                        <Rating style={{ maxWidth: 100 }} readOnly value={rating} />
                        <p className="ml-2">{rating}</p>
                    </div>
                    <h1 className="mt-8 font-bold">{product_name}</h1>
                    <h1 className="mt-4">{description}</h1>
                    <h1 className="mt-8"><span className="font-bold">Available Quantity:</span> {quantity}</h1>
                    <h1 className="mt-2"><span className="font-bold">Regular Price:</span> ${price}</h1>
                    <button className="btn btn-primary btn-sm mt-8">Bye Now</button>
                </div>
            </div>
        </div>
    );
};

export default SingleToy;