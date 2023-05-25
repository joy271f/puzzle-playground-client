import Gallery from "react-photo-gallery";
import './PhotoGallary.css'

const PhotoGallary = () => {

    const photos = [
        {
            src: 'https://i.ibb.co/9v8JFmW/wallpaperflare-com-wallpaper.jpg',
            width: 4,
            height: 3
        },
        {
            src: 'https://i.ibb.co/VNBQ0qK/wallpaperflare-com-wallpaper-1.jpg',
            width: 1,
            height: 1
        },
        {
            src: 'https://i.ibb.co/4T03vy1/61-Moqp-Sf2q-L.jpg',
            width: 1,
            height: 1
        },
        {
            src: 'https://i.ibb.co/NW7qXKc/wallpaperflare-com-wallpaper-3.jpg',
            width: 1,
            height: 1
        },
        {
            src: 'https://i.ibb.co/0BVmQm2/wallpaperflare-com-wallpaper-2.jpg',
            width: 1,
            height: 1
        },
        {
            src: 'https://i.ibb.co/R27njTX/wallpaperflare-com-wallpaper-4.jpg',
            width: 3,
            height: 2
        },
        {
            src: 'https://i.ibb.co/jRgjjcY/51r-Zbh7-Ev-OL.jpg',
            width: 4,
            height: 3
        },
        {
            src: 'https://i.ibb.co/S50JYf1/photo-1591991564021-0662a8573199.jpg',
            width: 1,
            height: 1
        }
    ];


    return (
        <div>
            <h1 className="mt-12 md:mt-36 text-2xl md:text-4xl font-bold gradient-text">Masterpiece Puzzle Gallery</h1> 
            <hr className="border-1 rounded-full border-orange-500 mb-8 md:mb-12 w-60 mx-auto" />
            <Gallery photos={photos} />;
        </div>
    );
};

export default PhotoGallary;