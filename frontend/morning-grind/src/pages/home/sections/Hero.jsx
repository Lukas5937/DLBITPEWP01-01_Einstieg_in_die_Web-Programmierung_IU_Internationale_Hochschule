import { Link } from "react-router";
import HeroImage from "../../../assets/images/hero.jpg";

export default function Hero() {
  return (
    <section className="px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex-1 text-center lg:text-left">
          <h2 className="mb-6 text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Discover your perfect
            <br />
            cup of coffee
          </h2>
          <p className="font-body mb-8 text-base text-gray-500 sm:text-lg">
            Premium specialty coffee to start your day right.
          </p>
          <Link
            to="/catalogue"
            className="font-body inline-block w-full max-w-xs bg-black px-8 py-3 text-center text-white uppercase transition hover:bg-gray-800 sm:w-auto"
          >
            Explore
          </Link>
        </div>
        <div className="w-full max-w-sm lg:max-w-md">
          <img
            src={HeroImage}
            alt="Abstract image in coffee-inspired warm brown tones"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
