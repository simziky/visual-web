import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "./component/navigations/loader"; // Use a loader for suspense fallback

const Landing = lazy(() => import("./component/pages/landing"));
const AboutUs = lazy(() => import("./component/pages/aboutUs"));
const ContactUs = lazy(() => import("./component/pages/contactUs"));
const Faq = lazy(() => import("./component/pages/faqPage"));
const MobileMoney = lazy(() => import("./component/pages/mobileMoney"));
const CashDisbursement = lazy(() => import("./component/pages/cashDisbursment"));
const PayRoll = lazy(() => import("./component/pages/payroll"));
const Gallery = lazy(() => import("./component/pages/gallery"));

export default function Root() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="aboutUs" element={<AboutUs />} />
        <Route path="contactUs" element={<ContactUs />} />
        <Route path="faq" element={<Faq />} />
        <Route path="mobileMoney" element={<MobileMoney />} />
        <Route path="cashDisbursement" element={<CashDisbursement />} />
        <Route path="payroll" element={<PayRoll />} />
        <Route path="gallery" element={<Gallery />} />
      </Routes>
    </Suspense>
  );
}
