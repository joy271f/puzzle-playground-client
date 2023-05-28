import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useState } from "react";
import { useEffect } from "react";
import ShowMyToys from "./ShowMyToys";


const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/toys-email?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [])

    return (
        <div className='max-w-[95vw] mx-auto'>
            <img src='/public/banner2.jpg' alt="" className='object-cover h-[40vh] w-full rounded-xl mt-4' />
            <div>
                <h1 className='gradient-text mt-8 text-4xl font-bold'>My Toys</h1>
                <div className="overflow-x-auto w-3/4 mx-auto">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <th>Toy Details</th>
                                <th>Price</th>
                                <th>Seller Details</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myToys.map(myToy => <ShowMyToys
                                    key={myToy._id}
                                    myToy={myToy}
                                ></ShowMyToys>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyToys;