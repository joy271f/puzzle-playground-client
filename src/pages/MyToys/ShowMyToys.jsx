import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const ShowMyToys = ({ myToy }) => {
    const { _id, name, category, quantity, product_name, price, description, email, photo, rating } = myToy;
    return (
        <tr>
            <th>
                <label>
                    <button className="btn btn-circle btn-sm bg-rose-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded-xl w-24 h-24">
                            <img src={photo} alt="" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold"><p>{product_name}</p></div>
                        <div className="text-sm">Category: {category}</div>
                        <div className="text-sm"><Rating style={{ maxWidth: 70 }} readOnly value={rating} /></div>
                        <div className="text-sm">Quantity: {quantity}</div>
                    </div>
                </div>
            </td>
            <td>${price}</td>
            <td>
                {name}
                <br />
                <span className="badge badge-ghost badge-sm">{email}</span>
            </td>
            <th>
                <button className="btn btn-success btn-sm font-bold">Update</button>
            </th>
        </tr>
    );
};

export default ShowMyToys;