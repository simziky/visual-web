import images from "../../constants/images";
import MainLayout from "../Layout/layout";
import Banner from "../reUseables/banner";

const galleryImages =[
    {image: images.gal1},
    {image: images.gal2},
    {image: images.gal3},
    {image: images.gal5},
    {image: images.gal6},
    {image: images.gal7},
    {image: images.gal8},
    {image: images.gal9},
    {image: images.gal10},
]

const Gallery = () => {
    return (
        
        <MainLayout>
            <Banner 
            title="Gallery"
            subTitle="Our Impact in Action "
            text="A visual journey showcasing our fintech solutions transforming lives and businesses in the field."
            />
            

            <section className="p-5 md:py-32">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                    {
                        galleryImages.map((image, index) => (
                            <div key={index} className=" rounded-xl overflow-clip">
                                <img src={image.image} alt="image" />
                            </div>
                        ))
                    }
                </div>
            </section>
        </MainLayout>
    )
    
}

export default Gallery;