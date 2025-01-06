import type { MenuProps } from "antd";
import { Dropdown } from "antd";
import { MdKeyboardArrowDown } from "react-icons/md";
import logo from "../../assets/SVG/Visual-ICT-Logo.svg";

//IMPORTS FOR DROPDOWN MENU ICONS
import about_icon from "../../assets/icons/abt-icon.png";
import api_icon from "../../assets/icons/api-icon.png";
import phone_icon from "../../assets/icons/phone-icon.svg";
import cash_icon from "../../assets/icons/cash-icon.svg";
import payroll_icon from "../../assets/icons/payroll-icon.svg";
//import tagpay_icon from "../../assets/icons/tagpay-icon.svg";
//import tap2pay_icon from "../../assets/icons/tap2pay-icon.svg";
//import social_icon from "../../assets/icons/social-icon.svg";
import contact_icon from "../../assets/icons/contact-icon.svg";
import faq_icon from "../../assets/icons/faq-icon.svg";
import { useNavigate } from "react-router-dom";
import { GrGallery } from "react-icons/gr";
import MobileNav from "./mobileNav";




const Header = () => {
  const navigate = useNavigate();
 // const onClick: MenuProps["onClick"] = ({ key }) => {
    //message.info(`Click on item ${key}`);
  //};

  const items: MenuProps["items"] = [
    {
      label: (
        <div className="flex gap-3 ">
          <span className=" h-[50px] w-[50px] flex justify-center items-center bg-[#E9F3F8] rounded-full">
            <img src={about_icon} alt="icon" className="  h-[20px] w-[30px]" />
          </span>
          <div>
            <h2 className="font-bold text-primary">About Us</h2>
            <p className="text-xs ">Everything you need to know about us</p>
          </div>
        </div>
      ),
      key: "1",
      onClick: () => navigate("/aboutUs"),
    },
    {
      label: (
        <div className="flex gap-3 ">
          <span className=" h-[50px] w-[50px] flex justify-center items-center bg-[#E9F3F8] rounded-full">
            <img src={api_icon} alt="icon" className="  h-[30px] w-[30px]" />
          </span>
          <div>
            <h2 className="font-bold text-primary">Api Docs</h2>
            <p className="text-xs ">See all our API documentations here</p>
          </div>
        </div>
      ),
      key: "2",
    },
    {
      label: (
        <div className="flex gap-3 ">
          <span className=" h-[50px] w-[50px] flex justify-center items-center bg-[#E9F3F8] rounded-full">
            <GrGallery size={25} color="#288EBD" />
            
          </span>
          <div>
            <h2 className="font-bold text-primary">Gallery</h2>
            <p className="text-xs ">View images from some of our projects</p>
          </div>
        </div>
      ),
      key: "3",
      onClick: () => navigate("/gallery"),
    },
  ];

  
  //******************************************************************* */
  const items1: MenuProps["items"] = [
    {
      label: (
        <div className="flex gap-3 ">
          <span className=" h-[50px] w-[50px] flex justify-center items-center bg-[#E9F3F8] rounded-full overflow-clip">
            <img src={phone_icon} alt="icon" className="" />
          </span>
          <div>
            <h2 className="font-bold text-primary">Mobile Money</h2>
            <p className="text-xs ">
              Enjoy seamless transactions on our TagPay App
            </p>
          </div>
        </div>
      ),
      key: "1",
      onClick: () => navigate("/mobileMoney"),
      
    },
    {
      label: (
        <div className="flex gap-3 ">
          <span className=" h-[50px] w-[50px] flex justify-center items-center bg-[#E9F3F8] rounded-full overflow-clip">
            <img src={cash_icon} alt="icon" className="" />
          </span>
          <div>
            <h2 className="font-bold text-primary">Cash Disbursement</h2>
            <p className="text-xs ">
              Make your cash disbursement activities efficient with our services
            </p>
          </div>
        </div>
      ),
      key: "2",
      onClick: () => navigate("/cashDisbursement"),
    },
    {
      label: (
        <div className="flex gap-3 ">
          <span className=" h-[50px] w-[50px] flex justify-center items-center bg-[#E9F3F8] rounded-full overflow-clip">
            <img
              src={payroll_icon}
              alt="icon"
              className=""
            />
          </span>
          <div>
            <h2 className="font-bold text-primary">Payroll Services</h2>
            <p className="text-xs ">
              Make your cash disbursement activities efficient with our services
            </p>
          </div>
        </div>
      ),
      key: "3",
      onClick: () => navigate("/payroll"),
    },
    /** 
    {
      label: (
        <div className="flex gap-3 ">
          <span className=" h-[50px] w-[50px] flex justify-center items-center bg-[#E9F3F8] rounded-full overflow-clip">
            <img src={tagpay_icon} alt="icon" className="" />
          </span>
          <div>
            <h2 className="font-bold text-primary">TagPay</h2>
            <p className="text-xs ">Everything you need to know about us</p>
          </div>
        </div>
      ),
      key: "4",
    },
    {
      label: (
        <div className="flex gap-3 ">
          <span className=" h-[50px] w-[50px] flex justify-center items-center bg-[#E9F3F8] rounded-full overflow-clip">
            <img
              src={tap2pay_icon}
              alt="icon"
              className=""
            />
          </span>
          <div>
            <h2 className="font-bold text-primary">Tap2Pay</h2>
            <p className="text-xs ">Everything you need to know about us</p>
          </div>
        </div>
      ),
      key: "5",
    },
    {
      label: (
        <div className="flex gap-3 ">
          <span className=" h-[50px] w-[50px] flex justify-center items-center bg-[#E9F3F8] rounded-full overflow-clip">
            <img src={social_icon} alt="icon" className="" />
          </span>
          <div>
            <h2 className="font-bold text-primary">Social Pay</h2>
            <p className="text-xs ">Everything you need to know about us</p>
          </div>
        </div>
      ),
      key: "6",
    },
    */
  ];

  //**************************************************** */
  const items2: MenuProps["items"] = [
    {
      label: (
        <div className="flex gap-3 ">
          <span className=" h-[50px] w-[50px] flex justify-center items-center bg-[#E9F3F8] rounded-full overflow-clip">
            <img src={contact_icon} alt="icon" className="" />
          </span>
          <div>
            <h2 className="font-bold text-primary">Contact Us</h2>
            <p className="text-xs ">Reach out to us anytime we are here from you</p>
          </div>
        </div>
      ),
      key: "1",
      onClick: () => navigate("/contactUs"),
    },
    {
      label: (
        <div className="flex gap-3 ">
          <span className=" h-[50px] w-[50px] flex justify-center items-center bg-[#E9F3F8] rounded-full overflow-clip">
            <img src={faq_icon} alt="icon" className="" />
          </span>
          <div>
            <h2 className="font-bold text-primary">FAQ’s</h2>
            <p className="text-xs ">Frequently asked questions</p>
          </div>
        </div>
      ),
      key: "2",
      onClick: () => navigate("/faq"),
    },
  ];



  return (
    <header className=" py-3 md:pl-20  shadow-[0px_7px_40px_7px_#00000012] ">
      <nav className="items-center hidden w-full gap-20 mx-auto lg:flex justify-left lg:container">
        <div>
          <img src={logo} alt="LOGO" className=" w-[300px] cursor-pointer" onClick= {() => navigate("/")} />
        </div>

        <menu className="flex gap-10 ">
          <Dropdown menu={{ items }}>
            <li className="inline-flex items-end gap-1 hover:cursor-pointer">Company <MdKeyboardArrowDown /></li>
          </Dropdown>

          <Dropdown
           menu={{ items: items1 }}
           >
            <li className="inline-flex items-end gap-1 hover:cursor-pointer">Product and Services <MdKeyboardArrowDown /></li>
          </Dropdown>

          <Dropdown menu={{ items: items2 }}>
            <li className="inline-flex items-end gap-1 hover:cursor-pointer">Help <MdKeyboardArrowDown /></li>
          </Dropdown>
        </menu>
      </nav>

      <MobileNav />
    </header>
  );
};

export default Header;
