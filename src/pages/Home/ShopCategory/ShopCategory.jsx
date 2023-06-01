import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ShopCategory = () => {
    const [toyData, setToyData] = useState([]);


    const handleTabCategory = category => {
        fetch(`http://localhost:5000/toys?category=${category}`)
            .then(res => res.json())
            .then(data => {
                setToyData(data.slice(0, 3));
            })
    }

    // inital category load
    useEffect(() => {
        fetch(`http://localhost:5000/toys?category=Monopoly`)
            .then(res => res.json())
            .then(data => {
                setToyData(data.slice(0, 3));
            })
    }, [])


    return (
        <div className="max-w-[90vw] mx-auto">
            <h1 className="mt-12 md:mt-24 text-2xl md:text-4xl font-bold gradient-text">TOYS CATEGORY</h1>
            <hr className="border-1 rounded-full border-orange-500 mb-8 md:mb-12 w-36 mx-auto" />

            <Tabs className="text-center">
                <TabList>
                    <Tab onClick={() => handleTabCategory("Monopoly")}>Monopoly</Tab>
                    <Tab onClick={() => handleTabCategory("Chess")}>Chess</Tab>
                    <Tab onClick={() => handleTabCategory("Cube")}>Rubik's Cube</Tab>
                </TabList>

                <TabPanel>
                    <div className="flex justify-center mt-12 gap-6">
                        {
                            toyData.map(toy => <>
                                <div className="card w-96 bg-base-100 shadow-xl">
                                    <figure><img src={toy.photo} className="h-60 object-cover" alt="Monopoly" /></figure>
                                    <div className="card-body text-start">
                                        <h2 className="card-title">{toy.product_name}</h2>
                                        <div className="flex">
                                            <p className="">${toy.price}</p>
                                            <Rating style={{ maxWidth: 100 }} value={toy.rating} readOnly />
                                        </div>
                                        <div>
                                            <Link to={`/single-toy/${toy._id}`}><button className="mt-12 btn btn-primary btn-block">View Details</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="flex justify-center mt-12 gap-6">
                        {
                            toyData.map(toy => <>
                                <div className="card w-96 bg-base-100 shadow-xl">
                                    <figure><img src={toy.photo} className="h-60 object-cover" alt="Chess" /></figure>
                                    <div className="card-body text-start">
                                        <h2 className="card-title">{toy.product_name}</h2>
                                        <div className="flex">
                                            <p className="">${toy.price}</p>
                                            <Rating style={{ maxWidth: 100 }} value={toy.rating} readOnly />
                                        </div>
                                        <div>
                                            <Link to={`/single-toy/${toy._id}`}><button className="mt-12 btn btn-primary btn-block">View Details</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="flex justify-center mt-12 gap-6">
                        {
                            toyData.map(toy => <>
                                <div className="card w-96 bg-base-100 shadow-xl">
                                    <figure><img src={toy.photo} className="h-60 object-cover" alt="Cube" /></figure>
                                    <div className="card-body text-start">
                                        <h2 className="card-title">{toy.product_name}</h2>
                                        <div className="flex">
                                            <p className="">${toy.price}</p>
                                            <Rating style={{ maxWidth: 100 }} value={toy.rating} readOnly />
                                        </div>
                                        <div>
                                            <Link to={`/single-toy/${toy._id}`}><button className="mt-12 btn btn-primary btn-block">View Details</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ShopCategory;