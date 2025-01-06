import playStore from "../../assets/png/Playstore.png";
import appstore from "../../assets/png/appstore.png";
import tap_pay from "../../assets/png/tappay.png"

const Tagpay = () => {
  return (
    <section className="grid items-center justify-between gap-5 pt-5 md:gap-20 md:flex">
      <div className="order-2 w-full h-full md:w-1/2 md:order-1">
        <h3 className="text-2xl font-bold ">Your ever ready financial buddy </h3>
        <p className="mt-5 ">
          Experience seamless banking with TagPay—manage your finances
          effortlessly, anytime, anywhere. Enjoy top-notch security, instant
          transactions, and personalized financial insights at your fingertips.
          Elevate your banking experience with TagPay today!
        </p>

        <div className="flex gap-10 mt-5 md:mt-20 ">
        <h2 className="text-2xl font-extrabold text-gray-300 md:text-5xl">COMING SOON ...</h2>
        {
          /** 
           * <img src={appstore} alt="appStore" className="h-10 "/>
          <img src={playStore} alt="playstore" className="h-10 " />
          */
        }
          
        </div>

      </div>

      <div className="  order-1 md:order-2 h-[250px] md:h-[400px] inline-flex md:justify-end w-full md:w-1/2 ">
        <img src={tap_pay} alt="image" className="h-full "/>
      </div>
    </section>
  );
};

export default Tagpay;
