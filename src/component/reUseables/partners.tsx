import yesso from "../../assets/png/yesso.png";
import zenith from "../../assets/png/zenith.png";
import ncto from "../../assets/png/ncto.png";
import nassco from "../../assets/png/nassco.png";
import paychex from "../../assets/png/payChex.png";
import interswitch from "../../assets/png/interswitch.png";
import providus from "../../assets/png/providus.png";

const TrustedPartners = () => {
  const images = [
    { img: yesso },
    { img: zenith },
    { img: ncto },
    { img: nassco },
    { img: paychex },
    { img: interswitch },
    { img: providus },
  ];

  return (
    <section className="bg-[#D9D9D9] w-full h-[70px] mb-10 md:mb-40 flex items-center overflow-hidden relative mx-auto  lg:container">
      <div className="absolute left-0 z-20 px-5 py-3 md:px-10 w-fit bg-inherit">
        <h2 className="text-[#6A6464] leading-tight">
          Our Trusted <br /> <span className="font-bold">Partners</span>
        </h2>
      </div>

      <div className="w-fit ">
        {/* Add the marquee container */}
        <div className="marquee">
          {/* Duplicate the images for seamless looping */}
          <div className="marquee__content">
            {images.map((item, index) => (
              <img
                src={item.img}
                alt=""
                key={index}
                className="h-[50px] w-auto mx-4"
              />
            ))}
            {images.map((item, index) => (
              <img
                src={item.img}
                alt=""
                key={index + images.length}
                className="h-[50px] w-auto mx-4"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedPartners;
