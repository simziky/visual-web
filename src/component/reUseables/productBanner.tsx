import images from "../../constants/images";

type props = {
    title: string,
    subTitle:string,
    text:string
    }
    
    const ProductBanner =({title,subTitle, text}:props)=>{
        return(
            <section className=" overflow-clip h-[50vh] lg:h-[70svh] max-h-[900px] flex justify-center items-center relative lg:pb-32">
                <img src={images.arrow} alt="image" className="absolute left-[-20px] md:left-[-120px] lg:left-0 h-[100px] md:h-[480px]" />
                <img src={images.arrow} alt="image" className="absolute right-[-20px] md:right-[-120px] lg:right-0 rotate-180 h-[100px] md:h-[480px]" />
              <div className="px-5 leading-10 text-center">
                <h1 className="mb-10 space-y-5 text-xl font-bold md:text-2xl text-primary">{title}</h1>
                <h2 className=" text-2xl mx-auto md:text-3xl lg:text-5xl font-semibold max-w-[100%] md:max-w-[600px]">
                  {subTitle}
                </h2>
                <p>{text}</p>
              </div>
            </section>
    
        )
    }
    export default ProductBanner;