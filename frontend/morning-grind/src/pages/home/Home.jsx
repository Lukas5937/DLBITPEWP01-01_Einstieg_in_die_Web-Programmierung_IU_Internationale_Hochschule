import Categories from "./sections/Categories";
import Hero from "./sections/Hero";
import Message from "./sections/Message";
import Offers from "./sections/Offers";

export default function Home() {
  return (
    <div className="font-display min-h-screen">
      <Hero />
      <Categories />
      <Message />
      <Offers />
    </div>
  );
}
