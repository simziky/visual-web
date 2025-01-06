import { motion } from "motion/react";
import images from "../../constants/images";
import MainLayout from "../Layout/layout";
import ProductBanner from "../reUseables/productBanner";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const pageVariants = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 100 },
};

const MobileMoney = () => {
  const card = [
    {
      icon: images.tagIcon1,
      text: "Effortlessly make and receive payments from anywhere in the world!",
    },
    {
      icon: images.tagIcon2,
      text: "Pay bills without any hassle all from your comfort zone",
    },
    {
      icon: images.tagIcon3,
      text: "Helping you stay connected with uninterrupted  airtime and data services",
    },
  ];
  return (
    <MainLayout>
      <ProductBanner
        subTitle="Join us on a mission to rethink how you make Payment  "
        title="Mobile Money"
        text="Making every transaction an epic adventure "
      />

      {/**................................ */}
      <section className=" bg-[whitesmoke] px-5 lg:px-40 py-10 md:py-24">
        <motion.div
          className="flex flex-col items-center gap-10 lg:gap-32 md:flex-row"
          initial="initial"
          whileInView="animate"
          exit="exit"
          variants={pageVariants}
          transition={{ duration: 0.5 }}
        >
          <img src={images.tagpay} alt="image" />
          <div>
            <h3 className="text-4xl font-semibold ">TagPay</h3>
            <p className="text-base font-normal text-[#716F6F] mt-3 max-w-[400px]">
              Our simple system ensures you can manage your finances and
              transactions quickly and efficiently.
            </p>

            <button className="flex items-center gap-3 px-2 py-2 mt-10 font-bold text-white rounded-lg bg-primary">
              Create Account
              <MdOutlineKeyboardArrowRight color="white" size={24} />
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-10 mt-20 md:grid-cols-3">
          {card.map((item, index) => (
            <div
              key={index}
              className=" shadow-[0px_10px_30px_0px_#00000033] bg-white rounded-xl pb-5"
            >
              <img src={item.icon} alt="icon" />
              <p className="px-4 mt-4 text-xs font-semibold">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/**................................ */}
      <section className="px-5 py-24 bg-white lg:px-40">
        <motion.div
          className="flex flex-col items-center gap-10 lg:gap-32 md:flex-row"
          initial="initial"
          whileInView="animate"
          exit="exit"
          variants={pageVariants}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h3 className="text-4xl font-semibold ">TagPay Business</h3>
            <p className="text-base font-normal text-[#716F6F] mt-3 max-w-[400px]">
              Open a business account to streamline your operations: send
              invoices, receive POS payments, pay bills, and handle bulk
              transfers with ease—giving you more time to focus on growing your
              business.{" "}
            </p>

            <button className="flex items-center gap-3 px-2 py-2 mt-10 font-bold text-white rounded-lg bg-primary">
              Create Account
              <MdOutlineKeyboardArrowRight color="white" size={24} />
            </button>
          </div>
          <img src={images.tagPayBusiness} alt="image" />
        </motion.div>
      </section>
    </MainLayout>
  );
};

export default MobileMoney;
