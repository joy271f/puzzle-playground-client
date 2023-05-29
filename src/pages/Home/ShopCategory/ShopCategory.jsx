import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { useState } from "react";

const ShopCategory = () => {
    const [rating, setRating] = useState(0) // Initial value

    return (
        <div>
            <h1 className="mt-12 md:mt-24 text-2xl md:text-4xl font-bold gradient-text">TOYS CATEGORY</h1>
            <hr className="border-1 rounded-full border-orange-500 mb-8 md:mb-12 w-36 mx-auto" />

            <Tabs className="text-center">
                <TabList>
                    <Tab>Monopoly</Tab>
                    <Tab>Chess</Tab>
                    <Tab>Rubik's Cube</Tab>
                </TabList>

                <TabPanel className=''>
                    <div className="flex justify-center mt-12 gap-6">
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure><img src="https://i.ibb.co/VNBQ0qK/wallpaperflare-com-wallpaper-1.jpg" alt="Shoes" /></figure>
                            <div className="card-body text-start">
                                <h2 className="card-title">Title is comming</h2>
                                <div className="flex">
                                    <p className="">$1280</p>
                                    <Rating style={{ maxWidth: 100 }} value={rating} onChange={setRating} />
                                </div>
                                <div>
                                    <button className="mt-12 btn btn-primary btn-block">View Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="flex justify-center mt-12 gap-6">
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure><img src="https://i.ibb.co/R27njTX/wallpaperflare-com-wallpaper-4.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">View Details</button>
                                </div>
                            </div>
                        </div>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure><img src="https://i.ibb.co/R27njTX/wallpaperflare-com-wallpaper-4.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">View Details</button>
                                </div>
                            </div>
                        </div>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure><img src="https://i.ibb.co/R27njTX/wallpaperflare-com-wallpaper-4.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">View Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="flex justify-center mt-12 gap-6">
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure><img src="https://i.ibb.co/4T03vy1/61-Moqp-Sf2q-L.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">View Details</button>
                                </div>
                            </div>
                        </div>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure><img src="https://i.ibb.co/4T03vy1/61-Moqp-Sf2q-L.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">View Details</button>
                                </div>
                            </div>
                        </div>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure><img src="https://i.ibb.co/4T03vy1/61-Moqp-Sf2q-L.jpg" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">View Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ShopCategory;