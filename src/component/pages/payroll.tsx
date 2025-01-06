import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import images from "../../constants/images";
import MainLayout from "../Layout/layout";
import ProductBanner from "../reUseables/productBanner";
import { motion } from "motion/react";

const pageVariants = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 100 },
};

const PayRoll = () => {
  return (
    <MainLayout>
      <ProductBanner
        subTitle="Discover seamless precision and unmatched reliability with our payroll services."
        title="Get your payments going in numbers"
        text="Say goodbye to reconciliation and reporting errors"
      />

      {/**.................................... */}
      <section className=" bg-[whitesmoke] px-5 py-10 lg:px-40  md:py-24">
        <motion.div
          className="flex flex-col items-center gap-10 md:flex-row lg:gap-32"
          initial="initial"
          whileInView="animate"
          exit="exit"
          variants={pageVariants}
          transition={{ duration: 0.5 }}
        >
          <img src={images.payRoll1} alt="image" />
          <div>
            <h3 className="text-2xl font-semibold md:text-4xl">Pay Disburse</h3>
            <p className="text-base font-normal text-[#716F6F] mt-3 max-w-[400px]">
              Our Payroll application offers a user-friendly interface for
              uploading payment schedules to any bank. Execute payments easily
              via web or mobile.
            </p>
          </div>
        </motion.div>
      </section>

      {/**.................................... */}
      <section className="px-5 py-10 bg-white lg:px-40 md:py-24">
        <motion.div
          className="flex flex-col items-center gap-10 md:flex-row lg:gap-32"
          initial="initial"
          whileInView="animate"
          exit="exit"
          variants={pageVariants}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h3 className="text-2xl font-semibold md:text-4xl">
              Efficent bulk transfers without any difficulty
            </h3>
            <p className="text-base font-normal text-[#716F6F] mt-3 max-w-[400px]">
              Easily make bulk transfers to users of different banks including
              TagPay users on the go.
            </p>
          </div>
          <img src={images.payRoll2} alt="image" />
        </motion.div>
      </section>

      {/**.................................... */}
      <section className=" px-5 py-10 lg:px-40 md:py-24 bg-[whitesmoke]">
        <motion.div
          className="flex flex-col items-center gap-10 md:flex-row lg:gap-32"
          initial="initial"
          whileInView="animate"
          exit="exit"
          variants={pageVariants}
          transition={{ duration: 0.5 }}
        >
          <img src={images.payRoll3} alt="image" />
          <div>
            <h3 className="text-2xl font-semibold md:text-4xl">
              Validate multiple BVN numbers without having to break a sweat
            </h3>
            <p className="text-base font-normal text-[#716F6F] mt-3 max-w-[400px]">
              Quickly and accurately validate multiple BVNs at once, enhancing
              efficiency and security for all your financial transactions
            </p>
          </div>
        </motion.div>
      </section>

      {/**....................................... */}
      <section className="px-2 py-10 lg:px-40 md:py-24">
        <div className="px-5 py-5 space-y-5 bg-black md:py-20 md:px-20 rounded-3xl">
          <p className="text-base md:text-2xl font-semibold max-w-[70%] text-white">
            Join us and streamline your payroll process with ease, accuracy, and
            unmatched reliability.
          </p>

          <div className="flex flex-col gap-3 md:flex-row ">
            <button className="flex items-center gap-2 p-1 text-white rounded-md bg-primary w-fit">
              Create a Pay Disburse Account
              <MdOutlineKeyboardArrowRight color="white" size={24} />
            </button>
            <button className=" bg-[#2A2828] flex items-center gap-2 rounded-md p-1 text-white w-fit">
              Sign in
              <MdOutlineKeyboardArrowRight color="white" size={24} />
            </button>
          </div>

          <div>
            <p className="font-bold text-white md:text-xl">
              Got more questions?{" "}
              <span className=" text-[#BAB518]">Contact Us</span>
            </p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default PayRoll;
