import { Button } from "antd";
import MainLayout from "../Layout/layout";
import Banner from "../reUseables/banner";
import { BsEnvelope } from "react-icons/bs";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import locationIcon from "../../assets/icons/location.svg";
import contactBg from "../../assets/SVG/contact-bg.svg";

const ContactUs = () => {
  return (
    <MainLayout>
      <div>
        <Banner
          title="Contact"
          subTitle="Talk to us, we are here for you"
          text="We're here for you around the clock, every day of the week!"
        />

        {/****************************** */}

        <section>
          <div className="py-20 ">
            <address className="flex flex-col justify-around gap-5 px-5 md:gap-0 md:px-0 md:flex-row">
              <div className="flex items-center gap-3  text-[#716F6F]">
                <div>
                  <img src={locationIcon} alt="icon" className="" />
                </div>
                <h4>Phase 3, Brains and Hammers Estate Galadimawa, Abuja</h4>
              </div>

              <div className=" text-[#716F6F] flex items-center gap-3 ">
                <BsEnvelope size={50} color="#288EBD" />
                <h4>info@visualict.com</h4>
              </div>

              <div className="flex items-center gap-3 text-[#716F6F]">
                <LiaPhoneVolumeSolid size={50} color="#288EBD" />
                <div>
                  <h4>+234 8034038700</h4>
                  <h4> +234 8033632061</h4>
                </div>
              </div>
            </address>
          </div>
        </section>

        {/****************************************************** */}

        <section
          className=" bg-[#0D212A]"
          style={{
            backgroundImage: `url(${contactBg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="flex flex-col justify-center gap-10 px-2 py-10 md:py-40 md:px-20 md:flex-row">
            <div className="mt-20 ">
              <h2 className=" max-w-[400px] text-2xl md:text-4xl font-bold bg-gradient-to-r from-[#288EBD] via-[#6E7577] to-[#288EBD] bg-clip-text text-transparent w-fit">
                Send us a message, we are happy to help
              </h2>
              <p className="mt-5 text-white">
                Ask us anything, we’ll be in touch as soon as possible
              </p>
            </div>

            <div>
              <form className="p-5 space-y-6 bg-white rounded-3xl">
                <div className="grid grid-cols-1 gap-5 md:gap-10 md:grid-cols-2">
                  <div className="grid ">
                    <label className="text-base font-medium ">First Name</label>
                    <input
                      type="text"
                      className=" border-[0.3px] border-[#848D91] rounded-lg bg-[#F8F9FA] h-[50px] px-2"
                    />
                  </div>
                  <div className="grid">
                    <label className="text-base font-medium ">Last Name</label>
                    <input
                      type="text"
                      className=" border-[0.3px] border-[#848D91] rounded-lg bg-[#F8F9FA] h-[50px] px-2"
                    />
                  </div>
                </div>

                <div className="grid ">
                  <label className="text-base font-medium ">Email</label>
                  <input
                    type="email"
                    className=" border-[0.3px] border-[#848D91] rounded-lg bg-[#F8F9FA] h-[50px] px-2"
                  />
                </div>

                <div className="grid ">
                  <label className="text-base font-medium ">Phone Number</label>
                  <input
                    type="email"
                    className=" border-[0.3px] border-[#848D91] rounded-lg bg-[#F8F9FA] h-[50px] px-2"
                  />
                </div>

                <div className="grid ">
                  <label className="text-base font-medium ">
                    Write us a message
                  </label>
                  <textarea className="resize-none h-[150px] rounded-lg border-[0.3px] border-[#848D91] bg-[#F8F9FA]" />
                </div>

                <Button className=" w-full bg-[#288EBD] rounded-xl font-bold text-white border-none !py-5">
                  Send
                </Button>
              </form>
            </div>
          </div>
        </section>

        {/************************************** */}

        <section>
          <div className="p-5 md:p-32">
            <div className="space-y-5 ">
              <h2 className="text-4xl font-semibold ">
                You could also pay us a visit
              </h2>
              <p className="text-base font-normal ">
                We would be delighted to have you around
              </p>
            </div>
            <div className="flex justify-center ">
              <div className=" p-2 md:p-5 mt-10 h-[300px] md:h-[500px] w-full md:w-[70%] border border-[#D9D9D9] shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4136.700633954967!2d7.415827539058224!3d8.992528476361596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e7322b08bcad7%3A0x696fa1d2fdce8a18!2sBrains%20%26%20Hammers%20Estate%2C%20Galadimawa!5e0!3m2!1sen!2sng!4v1731928122974!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default ContactUs;
