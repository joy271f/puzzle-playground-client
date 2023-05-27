import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const AddToy = () => {
    const { user } = useContext(AuthContext);

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

        const formData = { productName, productPhoto, sellerName, sellerEmail, productCategory, productPrice, productRating, productQuantity, productDescription };
        console.log(formData);
    }

    return (
        <div className="bg-gray-300">
            <div className="max-w-[60vw] mx-auto">
                <form onSubmit={handleAddToyForm} className="p-4 shadow-2xl">
                    <h2 className="text-primary text-center text-4xl font-bold mb-4">Add A Toy</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                                <span className="label-text">Sub-Category</span>
                            </label>
                            <select name="productCategory" className="input input-bordered" required>
                                <option value=""></option>
                                <option value="monopoly">Monopoly</option>
                                <option value="chess">Chess</option>
                                <option value="cube">Rubik's Cube</option>
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
                        <input type="text" name="productDescription" className="input input-bordered h-24" required />
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