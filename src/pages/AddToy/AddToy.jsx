import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";

const AddToy = () => {
    document.title = 'Add A Toy - Puzzle Playground'
    const { user } = useContext(AuthContext);

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

    const handleAddToyForm = event => {
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

        const toyData = {
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


        fetch('https://puzzle-playground-server.vercel.app/toy', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(toyData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success("Toy Added Successfully")
                    form.reset();
                }
            })
    }

    return (
        <div className="bg-gray-300">
            <div className="max-w-[60vw] mx-auto">
                <form onSubmit={handleAddToyForm} className="p-8 shadow-2xl">
                    <h2 className="text-primary text-center text-4xl font-bold my-6">Add A Toy</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seller Name</span>
                            </label>
                            <input type="text" name="sellerName" defaultValue={user?.displayName} readOnly className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seller Email</span>
                            </label>
                            <input type="email" name="sellerEmail" defaultValue={user?.email} readOnly className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                            <input type="text" name="productName" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product PhotoURL</span>
                            </label>
                            <input type="text" name="productPhoto" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Sub-Category</span>
                            </label>
                            <select name="productCategory" className="input input-bordered" required>
                                <option></option>
                                {
                                    puzzles.map(puzzle => <option key={puzzle.id} value={puzzle.name}>{puzzle.name}</option>)
                                }
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Price</span>
                            </label>
                            <input type="number" name="productPrice" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Rating</span>
                            </label>
                            <input type="text" name="productRating" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Available quantity</span>
                            </label>
                            <input type="number" name="productQuantity" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Detail description</span>
                        </label>
                        <textarea type="text" name="productDescription" className="input input-bordered py-2 h-24" required />
                    </div>
                    <div className="form-control">
                        <input type="submit" className="btn btn-primary btn-block mt-4" value="Add Toy" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddToy;