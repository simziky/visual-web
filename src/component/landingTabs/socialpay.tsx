import playStore from "../../assets/png/Playstore.png";
import appstore from "../../assets/png/appstore.png";

const SocialPay = () => {
  return (
    <section className="grid items-center justify-between gap-20 pt-5 md:flex">
      <div className="w-1/2 h-full ">
        <h3 className="text-2xl font-bold ">Your ever ready financial buddy </h3>
        <p className="mt-5 ">
          Experience seamless banking with TagPay—manage your finances
          effortlessly, anytime, anywhere. Enjoy top-notch security, instant
          transactions, and personalized financial insights at your fingertips.
          Elevate your banking experience with TagPay today!
        </p>

        <div className="flex gap-10 mt-20 ">
          
          <img src={appstore} alt="appStore" className="h-10 "/>
          <img src={playStore} alt="playstore" className="h-10 " />
        </div>

      </div>

      <div className="  h-[400px] bg-red-800 w-1/2">
       
      </div>
    </section>
  );
};

export default SocialPay;
