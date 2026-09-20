import { EnquiryProvider } from "./components/Enquiry";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Ticker from "./components/Ticker";
import Categories from "./components/Categories";
import Catalogue from "./components/Catalogue";
import Featured from "./components/Featured";
import WhyUs from "./components/WhyUs";
import StoreVisit from "./components/StoreVisit";
import LocalTrust from "./components/LocalTrust";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MobileDock from "./components/MobileDock";

export default function App() {
  return (
    <EnquiryProvider>
      <a
        href="#products"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[100] focus:rounded-full focus:bg-pine focus:px-5 focus:py-3 focus:text-sm focus:font-bold focus:text-cream"
      >
        Skip to product catalogue
      </a>
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <Categories />
        <Catalogue />
        <Featured />
        <WhyUs />
        <StoreVisit />
        <LocalTrust />
        <Testimonials />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <MobileDock />
    </EnquiryProvider>
  );
}
