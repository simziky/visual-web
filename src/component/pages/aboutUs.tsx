import MainLayout from "../Layout/layout";
import { reviews } from "./data";
import { Swiper, SwiperSlide } from "swiper/react";
import arrow from "../../assets/png/aboutArrow.png";
import aboutBG from "../../assets/png/aboutBG.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Autoplay } from "swiper/modules";
import images from "../../constants/images";
import Banner from "../reUseables/banner";
import { GrCompliance } from "react-icons/gr";
import { IoIosCash } from "react-icons/io";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { PiShootingStarDuotone } from "react-icons/pi";
import { GiBinoculars } from "react-icons/gi";
import { TbTargetArrow } from "react-icons/tb";
import NumberCounter from "../reUseables/numberCounter";

const AboutUs = () => {

  const certifications =[
    {id:1, image: images.cbn},
    {id:2, image: images.ndic},
    {id:3, image: images.iso1},
    {id:4, image: images.iso2},
    {id:5, image: images.ndpc},
  ]
  return (
    <MainLayout>
      <div>
        <Banner 
        title="About Us"
        subTitle="Everything you need to know"
        text="We're all about making life easy for every Nigerian"
        />

        {/*********************************************** */}
        <section className=" px-5 lg:px-20 py-20 relative flex flex-col items-center justify-center border-b border-[#8E8E8E]">
          <div className="w-full ">
            <h2 className="mb-5 text-4xl font-bold ">
              Here’s how far we’ve come
            </h2>
            <p className=" max-w-[500px]">
              Over the years, we have established ourselves as a leading
              provider of Fintech solutions for both the government and the
              general public.
            </p>

            <img
              src={arrow}
              alt=""
              className="hidden md:block absolute right-0 top-[-150px] "
            />
          </div>

          <div className="grid justify-center grid-cols-1 gap-5 mt-10 md:grid-cols-2 lg:grid-cols-4 ">
            <div className=" shadow-[0px_10px_40px_0px_#0000000D] rounded-2xl p-5 text-center">
              <div className=" h-[50px] w-[50px]"><GrCompliance size={50} color="#288EBD"/></div>
              <div>
                <div className="flex justify-center !text-5xl font-bold  text-primary">
                <NumberCounter start={0} end={3500} duration={5} />
                <h5 className="">+</h5>
                </div>
                <p className=" text-base text-[#716F6F]">
                  Projects completed across Nigeria
                </p>
              </div>
            </div>

            <div className=" shadow-[0px_10px_40px_0px_#0000000D] rounded-2xl p-5 text-center">
              <div className=" h-[50px] w-[50px]"><IoIosCash size={50} color="#288EBD"/></div>
              <div>
                <div className="flex justify-center text-5xl font-bold text-primary">
                <NumberCounter start={0} end={90} duration={5} />
                <h5 >B+</h5>
                </div>
                <p className=" text-base text-[#716F6F]">
                  Disbursed to beneficiaries
                </p>
              </div>
            </div>

            <div className=" shadow-[0px_10px_40px_0px_#0000000D] rounded-2xl p-5 text-center">
              <div className=" h-[50px] w-[50px]"><HiOutlineUserGroup size={50} color="#288EBD"/></div>
              <div>
                <div className="flex justify-center text-5xl font-bold text-primary">
                <NumberCounter start={0} end={1500} duration={5} />
                <h5>k+</h5>
                </div>
                <p className=" text-base text-[#716F6F]">
                  Beneficiaries onboarded and paid successfully
                </p>
              </div>
            </div>

            <div className=" shadow-[0px_10px_40px_0px_#0000000D] rounded-2xl p-5 text-center">
              <div className=" h-[50px] w-[50px]"><PiShootingStarDuotone size={50} color="#288EBD"/></div>
              <div>
                <div className="flex justify-center text-5xl font-bold text-primary">
                <NumberCounter start={0} end={15} duration={3} />
                <h5>+</h5>
                </div>
                <p className=" text-base text-[#716F6F]">Years of Experience</p>
              </div>
            </div>
          </div>
        </section>

        {/********************************* */}
        <section className="flex justify-center py-28">
          <div className=" w-full md:w-[90%] lg:w-[70%] grid grid-cols-1 px-2 md:grid-cols-2 gap-5">
            <div className=" border-primary border-[0.2px] rounded-3xl p-5 space-y-5">
              <div className=" h-[50px] w-[50px]"><GiBinoculars size={50} color="#288EBD"/></div>
              <h3 className="text-base font-semibold ">Our Vision</h3>
              <p className=" text-base text-[#5D5B5B]">
                To become a strategic enabler of ICT infrastructure development
                in Nigeria, the company visualizes being a key player in the
                business of ensuring financial inclusion of Nigerians through
                the deployment of it’s own homegrown mobile money business.
              </p>
            </div>

            <div className=" border-primary border-[0.2px] rounded-3xl p-5 space-y-5">
              <div className=" h-[50px] w-[50px]"><TbTargetArrow size={50} color="#288EBD"/></div>
              <h3 className="text-base font-semibold ">Our Mission</h3>
              <p className=" text-base text-[#5D5B5B]">
                Offering and supporting the Nigerian ICT sector with reliable
                technologies and solution to help them stay at the competitive
                edge of their business while ensuring an indigenous cutting edge
                mobile money platform to enable a secure, affordable and
                convenient mobile transfer network among financial institutions
                and mobile network operators
              </p>
            </div>
          </div>
        </section>

        {/**************************************** */}
        <section
          className=" min-h-svh  bg-[#0D212A] bg-cover bg-no-repeat py-28"
          style={{ backgroundImage: `url(${aboutBG})` }}
        >
          <div className="px-5 lg:px-20">
            <div className="flex flex-col-reverse items-center gap-20 lg:gap-40 md:flex-row">
              <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-6 lg:w-1/2">
              <div className="md:col-span-4 bg-white h-[180px] rounded-3xl overflow-clip">
              <img src={images.abPip} alt="image" className="w-full "/>
              </div>

              <div className="md:col-span-2 bg-white h-[180px] rounded-3xl overflow-clip">
              <img src={images.abPhone} alt="image" className="w-full "/>
              </div>

              <div className="md:col-span-2 bg-white h-[180px] rounded-3xl overflow-clip">
              <img src={images.abPip5} alt="image" className="w-full" />
              </div>

              <div className="md:col-span-4 bg-white h-[180px] rounded-3xl overflow-clip">
              <img src={images.abPip2} alt="image" className="w-full" />
              </div>

              <div className="md:col-span-6 bg-white h-[180px] rounded-3xl overflow-clip">
              <img src={images.abPip4} alt="image" className="w-full" />
              </div>
              </div>

              <div className="w-full space-y-5 text-white lg:w-1/2">
                <h2 className=" text-[40px] font-bold ">About Visual ICT</h2>
                <p>
                  Visual ICT Limited is a dynamic Fintech startup and Mobile
                  Financial Services Provider, licensed by the Central Bank of
                  Nigeria to offer Mobile Money Services. This area remains the
                  core focus of our business. We collaborate with key
                  stakeholders in the financial services sector, including the
                  Central Bank of Nigeria, commercial banks, telecommunications
                  operators, technology vendors, financial application
                  developers, prepaid bill issuers, and switching companies.
                </p>

                <p>
                  As a fully Nigerian-owned company, we operate nationwide,
                  delivering a comprehensive suite of mobile financial services.
                  Our offerings include mobile money services, agent networks,
                  cash and electronic disbursements, payroll processing,
                  e-wallet management, airtime top-up, inter-bank transfers,
                  bill payments, and tailored financial solutions. These
                  services cater to the financial needs of Nigeria's banked,
                  underbanked, and unbanked populations, promoting financial
                  inclusion across the country.
                </p>

                <p>
                  Founded in 2010, Visual ICT Limited boasts a team of highly
                  skilled professionals with over 50 years of combined industry
                  experience.
                </p>
              </div>
            </div>

            <div className="px-2 mt-20 md:px-24">
              <div className="flex place-items-center text-white h-44 md:h-56 w-full rounded-3xl border-[1px] border-[rgba(94,93,82,0.749)] shadow-[-2px_2px_32px_-1px_rgba(94,93,82,0.749)] ">
                {/**
                 *   <h1 className="mt-5 text-2xl font-bold text-center ">
                  Our Certifications
                </h1>
                 */}
              
                <div className="flex flex-wrap justify-between w-full px-5 mt-5 md:px-10">
                  {
                    certifications.map((cert, index) => (
                      <img src={cert.image} alt="cert" key={index} className=" h-[30px] md:h-[50px] lg:h-[100px]" />
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
        </section>

        {/********************************************** */}
        <section>
          <div>
            <div className="flex flex-col items-center justify-between px-5 md:flex-row lg:px-32 py-28">
              <div>
                <h2 className="text-4xl font-bold bg-gradient-to-r from-[#288EBD] via-[#6E7577] to-[#288EBD] bg-clip-text text-transparent w-fit">
                  Values we stand by
                </h2>
                <p className=" text-[#5D5B5B] text-base max-w-[450px] mt-10">
                  These values have been our pillars over the years making us
                  standout among other fintechs.
                </p>
              </div>

              <div className=" text-[#5D5B5B] text-lg md:text-lg lg:text-3xl grid grid-cols-2 gap-5">
                <h4 className=" rounded-xl shadow-[0px_10px_30px_0px_#00000033] p-3">
                  Ownership
                </h4>
                <h4 className=" rounded-xl p-3 shadow-[0px_10px_30px_0px_#00000033]">
                  Team Spirit
                </h4>
                <h4 className=" rounded-xl shadow-[0px_10px_30px_0px_#00000033] p-3">
                  Entrepreneurship
                </h4>
                <h4 className=" rounded-xl shadow-[0px_10px_30px_0px_#00000033] p-3">
                  Achievement
                </h4>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-center md:text-5xl">
                What people are saying about us
              </h2>

              <div className="py-10 ">
                <Swiper
                  slidesPerView={3}
                  spaceBetween={30}
                  freeMode={true}
                  //loop={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  modules={[FreeMode,Autoplay ]}
                  className="py-10 mySwiper"
                >
                  {reviews.map((rev, index) => (
                    <SwiperSlide key={index} className=" relative p-5 rounded-xl shadow-[4px_10px_40px_3px_#0000001A] h-[250px] !w-[250px] md:!w-[300px]">
                      <p className="text-sm ">{rev.review}</p>
                      <div className=" flex gap-5 items-center absolute bottom-[20px]">
                        <div className=" text-white bg-[#288EBD] h-[51px] w-[55px] rounded-full flex justify-center items-center text-3xl font-black">{rev.initial}</div>
                        <h6 className="text-sm font-bold ">{rev.name}</h6>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </section>

        {/*********************************** */}
        {/** 
         * <section className="py-20 ">
          <h1 className="text-5xl font-bold text-center ">Meet our team</h1>
          <div></div>
        </section>
        */}
        
      </div>
    </MainLayout>
  );
};
export default AboutUs;
