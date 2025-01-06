import images from "../../constants/images";
import MainLayout from "../Layout/layout";
import ProductBanner from "../reUseables/productBanner";
import { IoIosFunnel } from "react-icons/io";
import { MdOutlineKeyboardArrowRight, MdPayment } from "react-icons/md";
import { GiCycle } from "react-icons/gi";
import { motion } from "motion/react";

const CashDisbursement = () => {
  const card = [
    {
      icon: <MdPayment color="white" size={30} />,
      text: "Initiate payments instantly by tapping an NFC card or scanning the QR code on the beneficiary's payment card.",
    },
    {
      icon: <IoIosFunnel color="white" size={30} />,
      text: "Track disbursements by filtering transactions on a daily, weekly, or monthly basis.",
    },
    {
      icon: <GiCycle color="white" size={30} />,
      text: "Seamlessly sync all disbursements to your local server, enabling easy downloads for final reporting.",
    },
  ];

  const pageVariants = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 },
  };

  return (
    <MainLayout>
      <ProductBanner
        subTitle="Reconcile and report with ease using our cash disbursement services"
        title="Cash Disbursement"
        text="Say goodbye to reconciliation and reporting errors"
      />

      {/**.................................... */}
      <section className=" bg-[whitesmoke] px-5 lg:px-40 py-10 md:py-24">
        <motion.div
          className="flex flex-col items-center gap-10 md:flex-row lg:gap-32"
          initial="initial"
          whileInView="animate"
          exit="exit"
          variants={pageVariants}
          transition={{ duration: 0.5 }}
        >
          <img src={images.soicalPay} alt="image" />
          <div>
            <h3 className="text-2xl font-semibold md:text-4xl">Social Pay</h3>
            <p className="text-base font-normal text-[#716F6F] mt-3 max-w-[400px]">
              This fast-growing software enables seamless cash or e-money
              disbursements to predetermined beneficiaries, both offline and
              online, anywhere in the country.
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
              Get access to unlimited number of agents with a single admin
              access
            </h3>
            <p className="text-base font-normal text-[#716F6F] mt-3 max-w-[400px]">
              Easily create agents according to your need
            </p>
          </div>
          <img src={images.soicalPay2} alt="image" />
        </motion.div>
      </section>

      {/**.................................... */}
      <section className=" px-5 py-10 lg:px-40 md:py-24 bg-[whitesmoke]">
        <motion.div
          className="flex flex-col items-center gap-10 lg:gap-32 md:flex-row"
          initial="initial"
          whileInView="animate"
          exit="exit"
          variants={pageVariants}
          transition={{ duration: 0.5 }}
        >
          <img
            src={images.soicalPay3}
            alt="image"
            className="order-2 md:order-1"
          />
          <div className="order-1 md:order-2">
            <h3 className="text-2xl font-semibold md:text-4xl">
              Worry less about duplicate payments
            </h3>
            <p className="text-base font-normal text-[#716F6F] mt-3 max-w-[400px]">
              Smartly detect beneficiaries paid even in offline mode
            </p>
          </div>
        </motion.div>
      </section>

      {/**.................................... */}
      <section className="px-5 py-10 bg-white lg:px-40 md:py-24">
        <motion.div
          className="flex flex-col items-center gap-10 lg:gap-32 md:flex-row"
          initial="initial"
          whileInView="animate"
          exit="exit"
          variants={pageVariants}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h3 className="text-2xl font-semibold md:text-4xl ">
              Monitor disbursement process in real-time
            </h3>
            <p className="text-base font-normal text-[#716F6F] mt-3 max-w-[400px]">
              All transactions carried out can be viewed in real-time via the
              admin center if disbursements are done in online mode
            </p>
          </div>
          <img src={images.soicalPay4} alt="image" />
        </motion.div>
      </section>

      {/**........................................................ */}
      <section className="px-5 py-10 lg:px-40 md:py-32">
        <h3 className=" text-[40px] font-bold text-center">More features</h3>
        <div className="grid grid-cols-1 gap-10 mt-10 md:grid-cols-3">
          {card.map((item, index) => (
            <div
              key={index}
              className=" px-4 shadow-[0px_10px_30px_0px_#00000033] bg-white rounded-xl py-4"
            >
              <div className=" h-[40px] w-[40px] bg-[#3FBEF0] rounded-full flex justify-center items-center">
                {item.icon}
              </div>
              <p className="mt-4 text-xs font-semibold ">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/**....................................... */}
      <section className="px-2 py-10 lg:px-40 md:py-24">
        <div className="px-5 py-5 space-y-5 bg-black md:py-20 md:px-20 rounded-3xl">
          <p className=" text-base md:text-2xl font-semibold max-w-[70%] text-white">
            Enhance efficiency and security in your cash disbursements with our
            powerful, easy-to-use software solution.
          </p>

          <div className="flex flex-col gap-3 md:flex-row ">
            <button className="flex items-center gap-2 p-1 text-white rounded-md bg-primary w-fit">
              Create a Social Pay Account
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

export default CashDisbursement;
