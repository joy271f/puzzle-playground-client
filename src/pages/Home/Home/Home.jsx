import Banner from "../Banner/Banner";
import PhotoGallary from "../PhotoGallary/PhotoGallary";
import ShopCategory from "../ShopCategory/ShopCategory";

const Home = () => {
    document.title = 'Home - Puzzle Playground';
    return (
        <div>
            <Banner />
            <PhotoGallary />
            <ShopCategory />
        </div>
    );
};

export default Home;