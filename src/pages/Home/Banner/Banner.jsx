import banner from '../../../assets/banner.jpg';

const Banner = () => {
    return (
        <div>
            <div className="relative">
                <img src={banner} className="w-full" />
                <div className="absolute text-center bottom-0 w-full flex items-center top-5 bg-gradient-to-t from-black">
                    <div className="text-white w-3/4 mx-auto md:space-y-5">
                        <h2 className='md:text-5xl mb-0 font-bold gradient-text'>Challenge Your Mind</h2>
                        <p>Unlock your brain's potential and dive into a world of captivating puzzles on our website.</p>
                        <div>
                            <button className="btn btn-primary mr-5">Unlock Your Brain</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Banner;