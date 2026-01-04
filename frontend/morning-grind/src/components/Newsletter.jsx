import Button from "./Button";

export default function Newsletter() {
  return (
    <section className="py-32 text-center">
      <h3 className="font-display mb-2 text-3xl">
        Get 15% off your next order
      </h3>
      <p className="mb-8 text-gray-500">Subscribe to our Newsletter</p>
      <div className="flex justify-center gap-2">
        <input
          type="email"
          placeholder="Enter your email here"
          className="bg-gray-200 px-6 py-3"
        />
        <Button>Subscribe</Button>
      </div>
    </section>
  );
}
