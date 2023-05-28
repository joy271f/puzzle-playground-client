
const Toy = ({allToy}) => {
    const {name, category, quantity, product_name, price} = allToy;
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
                <td>
                    {product_name}
                    <br />
                    <span className="badge badge-ghost badge-sm">{category}</span>
                </td>
                <td>{price}</td>
                <th>
                    <button className="btn btn-ghost btn-xs">{quantity}</button>
                </th>
                <th>
                    <button className="btn btn-ghost btn-xs">View Details</button>
                    <button className="btn btn-ghost btn-xs">Delete</button>
                </th>
            </tr>
        </tbody>
    );
};

export default Toy;