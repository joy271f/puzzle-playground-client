import { useLoaderData } from "react-router-dom";

const SingleToy = () => {
    const loadToyData = useLoaderData();
    return (
        <div>
            <h1>Single Toy: {loadToyData.product_name}</h1>
        </div>
    );
};

export default SingleToy;