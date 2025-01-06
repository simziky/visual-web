import logo from "../../assets/SVG/Visual-ICT-Logo.svg";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  const getCurrentYear = () => new Date().getFullYear();
  return (
    <footer className="px-5 pt-10 mx-auto border-t-2 md:px-24 md:pt-32 lg:container">
      <section>
        <div className="grid justify-between gap-5 md:gap-0 md:flex">
          <div className="flex flex-col items-start mr-20">
            <img src={logo} alt="footer-logo" className="" />
            <div className="flex gap-5 mt-10 ">
              <span>
                <FaFacebook color="#288EBD" size={25} />
              </span>
              <span>
                <FaInstagramSquare color="#288EBD" size={25} />
              </span>
              <span>
                <FaSquareXTwitter color="#288EBD" size={25} />
              </span>
              <span>
                <FaLinkedin color="#288EBD" size={25} />
              </span>
            </div>
          </div>

          <div className="grid justify-between grid-cols-2 gap-5 md:flex md:flex-wrap md:gap-10">
            <menu className=" text-base leading-[30px]">
              <h4 className="font-semibold text-primary">Company</h4>
              <Link to="/aboutUs">
              <li>About Us</li>
              </Link>
              <li>API Docs</li>
            </menu>

            <menu className=" text-base leading-[30px]">
              <h4 className="font-semibold text-primary">
                Product and Services
              </h4>
              <Link to="/mobileMoney">
              <li>Mobile Money</li>
              </Link>
              <Link to="/cashDisbursement">
              <li>Cash Disbursement</li>
              </Link>
              <Link to="/payroll">
              <li>Payroll Services</li>
              </Link>
            </menu>

            <menu className=" text-base leading-[30px]">
              <h4 className="font-semibold text-primary">Help</h4>
              <Link to="/contactUs">
              <li>Contact</li>
              </Link>
              <Link to="/faq">
              <li>FAQ's</li>
              </Link>
            </menu>

            <menu className=" text-base leading-[30px]">
              <h4 className="font-semibold text-primary">Legal</h4>
              <li>Privacy Policy</li>
              <li>Terms and conditions</li>
              <li>Data Protection Policy</li>
              <li>Merchant Service Agreement</li>
            </menu>
          </div>
        </div>
        <div className="my-10 ">
          <p className=" text-[#898686] text-sm md:text-base w-full md:w-[60%]">
            Visual ICT is fully liscensed by the Central Bank of Nigeria and all
            deposits are insured by the Nigeria Deposit Insurance Corporation.
          </p>
        </div>
        <div className=" py-10 border-t-[1.5px] border-[#EDEDED]">
          <h5 className=" text-[#898686] text-base md:text-xl">
            <span className=" text-[#A69F9F] font-bold">Visual ICT ©</span> {" "} {getCurrentYear()} {" "}
            All rights reserved
          </h5>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
