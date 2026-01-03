import HeroImage from "../../../assets/images/hero.jpg";

export default function Hero() {
  return (
    <section className="flex items-center justify-between gap-12 px-8 py-20">
      <div className="flex-1">
        <h2 className="mb-6 text-6xl leading-tight">
          Discover your perfect
          <br />
          cup of coffee
        </h2>
        <p className="font-body mb-8 text-lg text-gray-700">
          Premium specialty coffee to start your day right.
        </p>
        <button className="font-body bg-black px-8 py-3 text-white uppercase transition hover:bg-gray-800">
          Explore
        </button>
      </div>
      <div className="w-1/3">
        <img
          src={HeroImage}
          alt="Abstract image in coffee-inspired warm brown tones"
          className="shadow-lg"
        />
      </div>
    </section>
  );
}
