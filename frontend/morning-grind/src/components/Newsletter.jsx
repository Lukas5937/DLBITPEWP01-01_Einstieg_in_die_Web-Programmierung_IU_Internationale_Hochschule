import Button from "./Button";

export default function Newsletter() {
  return (
    <section className="px-6 py-20 text-center sm:px-8 lg:py-28">
      <div className="mx-auto max-w-3xl">
        <h3 className="font-display mb-3 text-2xl sm:text-3xl">
          Get 15% off your next order
        </h3>
        <p className="mb-10 text-base text-gray-500 sm:text-lg">
          Subscribe to our Newsletter
        </p>
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-2">
          <input
            type="email"
            placeholder="Enter your email here"
            className="w-full max-w-md rounded-md bg-gray-200 px-5 py-3 text-sm sm:text-base"
          />
          <Button className="w-full max-w-[160px] sm:w-auto">Subscribe</Button>
        </div>
      </div>
    </section>
  );
}
