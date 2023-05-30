import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateToy = () => {
    const loadToyData = useLoaderData();
    const { _id, name, category, quantity, product_name, price, description, email, photo, rating } = loadToyData;
    document.title = `${category} Update - Puzzle Playground`

    const puzzles = [
        {
            id: 1,
            name: 'Monopoly'
        },
        {
            id: 2,
            name: 'Chess'
        },
        {
            id: 3,
            name: 'Cube'
        },
    ]

    const handleUpdateToy = event => {
        event.preventDefault();
        const form = event.target;
        const productName = form.productName.value;
        const productPhoto = form.productPhoto.value;
        const sellerName = form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const productCategory = form.productCategory.value;
        const productPrice = form.productPrice.value;
        const productRating = form.productRating.value;
        const productQuantity = form.productQuantity.value;
        const productDescription = form.productDescription.value;

        const UpdatedToyData = {
            product_name: productName,
            photo: productPhoto,
            name: sellerName,
            email: sellerEmail,
            category: productCategory,
            price: productPrice,
            rating: productRating,
            quantity: productQuantity,
            description: productDescription,
        };
        // console.log(toyData);


        fetch(`http://localhost:5000/toys/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(UpdatedToyData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success("Updated Toy Successfully")
                    form.reset();
                }
            })
    }



    return (
        <div className="bg-gray-300">
            <div className="max-w-[60vw] mx-auto">
                <form onSubmit={handleUpdateToy} className="p-8 shadow-2xl">
                    <h2 className="text-primary text-center text-4xl font-bold my-6">Update Toy</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seller Name</span>
                            </label>
                            <input type="text" name="sellerName" defaultValue={name} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seller Email</span>
                            </label>
                            <input type="email" name="sellerEmail" defaultValue={email} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                            <input type="text" name="productName" defaultValue={product_name} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product PhotoURL</span>
                            </label>
                            <input type="text" name="productPhoto" defaultValue={photo} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Sub-Category</span>
                            </label>
                            <select name="productCategory" className="input input-bordered" required>
                                <option defaultValue={category}>{category}</option>
                                {
                                    puzzles.map(puzzle => <option key={puzzle.id} value={puzzle.name}>{puzzle.name}</option>)
                                }
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Price</span>
                            </label>
                            <input type="number" name="productPrice" defaultValue={price} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Rating</span>
                            </label>
                            <input type="text" name="productRating" defaultValue={rating} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Available quantity</span>
                            </label>
                            <input type="number" name="productQuantity" defaultValue={quantity} className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Detail description</span>
                        </label>
                        <textarea type="text" name="productDescription" defaultValue={description} className="input input-bordered py-2 h-24" required />
                    </div>
                    <div className="form-control">
                        <input type="submit" className="btn btn-primary btn-block mt-4" value="Update Toy" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateToy;