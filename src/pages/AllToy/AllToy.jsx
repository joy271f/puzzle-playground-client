import { useState } from 'react';
import banner from '../../../public/bannerAllToy.jpg'
import { useEffect } from 'react';
import Toy from './toy';



const AllToy = () => {
    document.title = 'All Toys - Puzzle Playground'
    const [allToys, setAllToys] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then(res => res.json())
            .then(data => setAllToys(data))
    }, [])


 
    return (
        <div className='max-w-[95vw] mx-auto'>
            <img src={banner} alt="" className='object-cover h-[40vh] w-full rounded-xl mt-4' />
            <div className="overflow-x-auto w-full max-w-[80vw] mx-auto mt-8">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Toy Name</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th></th>
                        </tr>
                    </thead>
                    {
                        allToys.map(allToy => <Toy
                        key={allToy._id}
                        allToy={allToy}
                        ></Toy>)
                    }

                </table>
            </div>
        </div>
    );
};

export default AllToy;