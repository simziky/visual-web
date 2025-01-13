import Lottie from "react-lottie";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import "../../landing.css";
import MainLayout from "../Layout/layout";
import animationData from "../../assets/lotties/hero.json";
import bolt from "../../assets/png/bolt.png";
import trend from "../../assets/png/trend.png";
import setting from "../../assets/png/settings.png";
import Tagpay from "../landingTabs/tagpay";
import ndic from "../../assets/png/ndic.png";
import cbn from "../../assets/png/cbn.png";
import cubes from "../../assets/SVG/cubes.svg";
import message from "../../assets/png/message.png";
import mobile_money from "../../assets/png/mobile_money.png";
import cash_disburs from "../../assets/png/cash_disburs.png"
import payroll from "../../assets/png/payroll.png"
import plane from "../../assets/SVG/plane.svg"
import front from "../../assets/png/api_front.png"
import back from "../../assets/png/api_back.png"
import Tap2Pay from "../landingTabs/tap2pay";
import SocialPay from "../landingTabs/socialpay";
import shield from "../../assets/SVG/shield.svg"
import { motion } from "motion/react";



const pageVariants = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 100 },
};


function Landing() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const onChange = (key: string) => {
    console.log(key);
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "TagPay",
      children: <Tagpay />,
    },
    {
      key: "2",
      label: "Tap2pay",
      
      children: <Tap2Pay />,
    },
    {
      key: "3",
      label: "SocialPay",
      children: <SocialPay />,
      
    },
    
  ];

  return (
    <MainLayout>
      <section className=" h-[50svh] md:h-svh max-h-[900px] relative">
        <div className="absolute hero-overlay">
          <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
          </div>

        <div className="absolute top-0 z-10 flex flex-col items-center justify-center w-full h-full text-center ">
          <h3 className="mb-10 text-base font-bold text-primary">
            Empowering Nigeria's Financial Future
          </h3>
          <h1 className=" px-1 md:px-0 w-[100%] lg:w-[70%] font-extrabold sm:text-4xl lg:text-6xl text-white leading-[70px]">
            We are your Digital Solution for Seamless Fintech Innovation
          </h1>
        </div>
        
      </section>
      {/**************************************************************************** */}

      <section className="relative px-5 py-10 space-y-20 md:space-y-48 md:py-24 md:px-20 ">
        <motion.div 
        className="flex flex-wrap justify-start w-full "
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
        transition={{ duration: 0.5 }}
        >
          <div className="space-y-5 ">
            <h3 className=" max-w-[500px] text-2xl md:text-4xl font-bold bg-gradient-to-r from-[#288EBD] via-[#6E7577] to-[#288EBD] bg-clip-text text-transparent w-fit">
              Building a financial space where every Nigerian can thrive
            </h3>
            <p className=" max-w-[500px]">
              This has been meticulously ensured through the dedication and
              unwavering commitment of our exceptional team.
            </p>
          </div>

          <div className="absolute right-0 hidden md:block">
            <img src={cubes} alt=" cubes" className="" />
            <img
              src={message}
              alt=" message"
              className="absolute -mt-14 right-10"
            />
          </div>
        </motion.div>

        {/****** */}

        <div className="grid items-center gap-10 md:flex md:gap-28">
          <motion.div 
          initial="initial"
          whileInView="animate"
          exit="exit"
          variants={pageVariants}
          transition={{ duration: 0.5 }}
          className=" md:w-1/2 h-[300px] md:h-[400px] inline-flex justify-center md:justify-normal">
            <img src={mobile_money} alt="image" className="h-full " />
          </motion.div>
          <motion.div 
          initial="initial"
          whileInView="animate"
          exit="exit"
          variants={pageVariants}
          transition={{ duration: 0.5 }}
          className="space-y-5 md:w-1/2 ">
            <h3 className=" text-4xl font-bold bg-gradient-to-r from-[#288EBD] via-[#6E7577] to-[#288EBD] bg-clip-text text-transparent w-fit">
              Mobile Money
            </h3>
            <p className=" max-w-[500px]">
              Our Mobile Money service platform allows users to create and
              manage electronic wallets, enabling them to store, retrieve, and
              transfer funds, as well as access a comprehensive suite of
              financial services.
            </p>
            <button className="py-2 font-medium text-white rounded-lg bg-primary px-7">
              Explore more {">"}
            </button>
          </motion.div>
        </div>

        {/****** */}

        <motion.div 
        className="grid items-center gap-10 md:flex md:gap-28"
        initial="initial"
          whileInView="animate"
          exit="exit"
          variants={pageVariants}
          transition={{ duration: 0.5 }}
        >
          <div className="order-2 space-y-5 md:w-1/2 md:order-1">
            <h3 className=" text-4xl font-bold bg-gradient-to-r from-[#288EBD] via-[#6E7577] to-[#288EBD] bg-clip-text text-transparent w-fit">
              Cash Disbursement
            </h3>
            <p className="max-w-[500px]">
              Think of us as the Robin Hood of mobile financial services,
              empowering NGOs and government bodies to distribute cash or
              e-money seamlessly. With our SocialPay App, disbursements are not
              just fast and efficient—they’re also making the world a better
              place, one transaction at a time.
            </p>
            <button className="py-2 font-medium text-white rounded-lg bg-primary px-7">
              Explore more {">"}
            </button>
          </div>

          <div className=" md:w-1/2 h-[300px] md:h-[400px] inline-flex justify-center md:justify-end order-1 md:order-2">
          <img src={cash_disburs} alt="image" className="h-full " />
          </div>
        </motion.div>

        {/****** */}

        <motion.div className="relative grid items-center gap-10 md:flex md:gap-28"
        initial="initial"
        whileInView="animate"
        exit="exit"
        variants={pageVariants}
        transition={{ duration: 0.5 }}
        >
          <div className=" md:w-1/2 h-[300px] md:h-[400px] ">
          <img src={payroll} alt="image" className="relative z-10 h-full" />
          </div>
          <div className="space-y-5 md:w-1/2 ">
            <h3 className=" text-4xl font-bold bg-gradient-to-r from-[#288EBD] via-[#6E7577] to-[#288EBD] bg-clip-text text-transparent w-fit">
              Payroll Services
              </h3>
            <p className="max-w-[500px]">
              Our user-friendly salary disbursement app is perfect for everyone,
              even the tech-averse. With an intuitive interface, companies can
              easily upload payment schedules for any bank. Accessible via web
              portal or mobile app, our solution makes payroll simple,
              efficient, and enjoyable!
            </p>
            <button className="py-2 font-medium text-white rounded-lg bg-primary px-7">
              Explore more {">"}
              </button>
          </div>
        </motion.div>

        <img src={plane} alt="" className=" absolute bottom-[22%] left-0 z-0"/>
      </section>
      {/************************************************************* */}
      <section className=" bg-[#14242B] h-svh max-h-[900px]">
        <div className="grid items-center w-full h-full p-5 md:p-20 md:flex api">
          <div className="relative h-full space-y-8 text-white md:w-1/2 ">
            <h3 className=" text-2xl md:text-4xl font-bold bg-gradient-to-r from-[#288EBD] via-[#6E7577] to-[#288EBD] bg-clip-text text-transparent w-fit">Simplified API Integration for every developer</h3>
            <p>
              Our API offers secure, real-time capabilities, backed by a
              dedicated support team to ensure seamless integration and
              operation. Enhance your financial workflows and achieve new levels
              of operational excellence
            </p>
            <button className="py-2 font-medium text-white rounded-lg bg-primary px-7">
              Explore our API Docs {">"}
              </button>
            <div className="absolute flex gap-4 md:bottom-0 ">
              <div className="flex items-center gap-2 md:gap-4">
                <span className=" h-[30px] w-[30px] md:h-[50px] md:w-[50px] flex justify-center items-center bg-[#132A36] rounded-full">
                  <img src={bolt} alt=" bolt" className=" h-[20px] md:h-[25px]" />
                </span>
                <h6 className="text-xs md:text-base ">Fast</h6>
              </div>
              <div className="flex items-center gap-4 ">
                <span className=" h-[30px] w-[30px] md:h-[50px] md:w-[50px] flex justify-center items-center bg-[#132A36] rounded-full">
                  <img src={trend} alt=" bolt" className="h-[20px] md:h-[25px]" />
                </span>
                <h6 className="text-xs md:text-base ">Efficient</h6>
              </div>
              <div className="flex items-center gap-4 ">
                <span className=" h-[30px] w-[30px] md:h-[50px] md:w-[50px] flex justify-center items-center bg-[#132A36] rounded-full">
                  <img src={setting} alt=" bolt" className="h-[20px] md:h-[25px]" />
                </span>
                <h6 className="text-xs md:text-base ">Reliable</h6>
              </div>
            </div>
          </div>
          {/****** */}
          <div className=" h-[300px] md:h-[450px] md:w-1/2 relative">
          <img src={front} alt="image" className="relative z-10 h-full " />
          <img src={back} alt="image" className=" h-[90%] absolute top-[100px] z-0 left-[100px]"/>
          </div>
        </div>
      </section>

      {/***************************************** */}
      <section className="px-5 py-20 md:px-20 ">
        <h1 className="text-2xl font-bold text-center md:text-5xl">
          We are here to serve you
        </h1>
        <Tabs
          defaultActiveKey="1"
          items={items}
          onChange={onChange}
          className="mt-10 "
          centered={true}
          indicator={{size:10}}
        />
      </section>

      {/********************************** */}
      <section className=" bg-[#E7EEF1] py-20 md:py-32">
        <div className="flex flex-col items-center space-y-6">
          <h1 className="text-2xl font-bold text-center md:text-5xl">Rest assured, you're in good hands.</h1>
          <img src={shield} alt="image" className="" />
          <h4 className="text-xl font-bold md:text-3xl ">Data Protection</h4>
          <p className=" w-[95%] md:w-[60%] text-center">
            Visual ICT employs comprehensive physical, administrative, and
            technical safeguards to protect your personal information from
            unauthorized access, use, and disclosure.
          </p>
          <div className="flex gap-10 ">
            <div className=" h-[55px] w-[77px] flex items-center justify-center rounded-3xl shadow-xl bg-white drop-shadow-xl">
              <img src={cbn} alt="" className=" h-[40px] w-[50px]" />
            </div>
            <div className=" h-[55px] w-[77px] flex items-center justify-center rounded-3xl bg-white drop-shadow-xl shadow-xl">
              <img src={ndic} alt="" className=" h-[40px] w-[50px]" />
            </div>
          </div>
        </div>
      </section>

      {/*************************************** */}
      <section></section>
    </MainLayout>
  );
}

export default Landing;
