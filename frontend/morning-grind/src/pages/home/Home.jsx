import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Categories from "./sections/Categories";
import Hero from "./sections/Hero";
import Message from "./sections/Message";
import Newsletter from "./sections/Newsletter";
import Offers from "./sections/Offers";

export default function Home() {
  return (
    <div className="font-display min-h-screen">
      <Navbar />
      <Hero />
      <Categories />
      <Message />
      <Offers />
      <Newsletter />
      <Footer />
    </div>
  );
}
