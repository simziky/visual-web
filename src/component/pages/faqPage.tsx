import MainLayout from "../Layout/layout";
import Banner from "../reUseables/banner";

import { Collapse, Space } from "antd";

const Faq = () => {


  const CollapseProps = [
    {
      key: "1",
      label: (
        <h3 className=" text-[17px] font-semibold text-[#288EBD]">
          What is Mobile Wallet Technology?
        </h3>
      ),
      children: (
        <p className=" text-[#716F6F] font-normal text-base">
          In an age where smartphones are everywhere and there seems to be an
          app for everything, “mobile wallet” technology is becoming more
          popular every day. As a small business owner, here’s what you need to
          know about mobile wallets.
        </p>
      ),
    },
    {
      key: "2",
      label: (
        <h3 className=" text-[17px] font-semibold text-[#288EBD]">
          What is a Mobile Wallet?
        </h3>
      ),
      children: (
        <p className=" text-[#716F6F] font-normal text-base">
          Mobile wallets are essentially digital versions of traditional wallets
          that someone would carry in their pocket. While there are many
          variations, usually they can hold digital information about credit and
          debit cards for making payments, store coupons and loyalty programs,
          specific information about personal identity and more. Many companies
          are jumping into the mobile payments space— on both the paying and
          receiving sides of the transaction—and new innovators are continuously
          changing the industry. In the U.S., they include companies such as
          Google, Amazon, PayPal, Square, and Apple. Internationally, still more
          companies are developing and launching new technologies in this space.
        </p>
      ),
    },
    {
      key: "3",
      label: (
        <h3 className=" text-[17px] font-semibold text-[#288EBD]">
          How does a mobile wallet work?
        </h3>
      ),
      children: (
        <p className=" text-[#716F6F] font-normal text-base">
          A customer can utilize all of their stored information simply by
          opening an app on their phone, entering in a PIN, password or
          fingerprint and then selecting the information they need to access.
          The app then utilizes information transfer technology such as
          Near-Field Communications (NFC) to interact with a mobile wallet ready
          payment terminals. 
          <p className="font-bold ">* Mobile wallets store your credit or debit card
          securely </p>
          <p className="font-bold ">* They may also store your loyalty cards, coupons, tickets,
          etc.</p> 
          <p className="font-bold ">* They communicate with terminals using a variety of technologies</p>
          That’s where you come in as a small business owner. Without a device
          that receives mobile wallet information, you won’t be able to take
          advantage of this increasingly popular payment mechanism.
        </p>
      ),
    },
    {
      key: "4",
      label: (
        <h3 className=" text-[17px] font-semibold text-[#288EBD]">
          How Can Mobile Wallet Payments Help My Business?
        </h3>
      ),
      children: (
        <p className=" text-[#716F6F] font-normal text-base">
          Increased customer use of mobile wallet technology has benefits for
          businesses of all sizes. These include:
          <p className="font-bold "> Reduced fraud – mobile wallets
          are harder to steal or duplicate than cards or cash</p>
          <p className="font-bold "> Decreased payment
          time – especially important for high-volume businesses</p> 
          <p className="font-bold ">Lower fees –
          processing fees are expected to decrease over time relative to
          traditional cards</p>
           Better customer loyalty – built through sales and
          incentives sent directly to smartphones Leveraging new technologies
          that connect directly to a rich software experience in the customer’s
          hand can help enhance their experience and educate them about your
          company. Innovative small businesses will go beyond merely accepting
          mobile wallet payments to forming more comprehensive mobile strategies
          than their direct competitors.
        </p>
      ),
    },
    {
      key: "5",
      label: (
        <h3 className=" text-[17px] font-semibold text-[#288EBD]">
          How can small business owners best prepare for the future?
        </h3>
      ),
      children: (
        <p className=" text-[#716F6F] font-normal text-base">
          First, you should educate yourself about the technologies and business
          solutions in the marketplace. Second, you should take steps to upgrade
          your hardware and software solutions for accepting payments from
          customers. Chase Paymentech’s suite of terminal solutions enables
          businesses to accept NFC mobile wallet transactions as well as
          traditional credit cards. In addition, other new technologies,
          including the EMV security chip and contactless credit card
          transactions, are also supported. With our simple system, your
          business can be ready to help customers pay quickly and efficiently,
          no matter what payment method they choose.
        </p>
      ),
    },
  ];

  const onChange = (key: string | string[]) => {
    console.log(key);
  };
  return (
    <MainLayout>
      <div>
        <Banner
          title="FAQ’s"
          subTitle="Questions people ask us mostly"
          text="Whats on your mind, lets hear from you"
        />

        {/************************** */}
        <section className="flex justify-center px-2 py-10 md:py-32">
          <div className=" w-full md:w-[50%] space-y-7">
            {CollapseProps.map((elm, index) => (
              <Collapse key={index}>
                <Collapse.Panel key={elm.key} header={elm.label}>
                  {elm.children}
                </Collapse.Panel>
              </Collapse>
            ))}
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default Faq;
