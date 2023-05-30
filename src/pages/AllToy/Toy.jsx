import { Link } from "react-router-dom";

const Toy = ({ allToy }) => {
    const { _id, name, category, quantity, product_name, price } = allToy;
    return (
        <tbody>
            <tr>
                <td>
                    <div className="flex items-center space-x-3">
                        <div>
                            <div className="font-bold">{name}</div>
                        </div>
                    </div>
                </td>
                <td className="font-serif">
                    {product_name}
                    <br />
                    <span className="badge badge-warning badge-sm">{category}</span>
                </td>
                <td>{price}</td>
                <th>
                    <button className="btn btn-ghost btn-xs ml-12">{quantity}</button>
                </th>
                <th>
                    <Link to={`/single-toy/${_id}`}><button className="btn btn-success btn-xs">View Details</button></Link>
                </th>
            </tr>
        </tbody>
    );
};

export default Toy;