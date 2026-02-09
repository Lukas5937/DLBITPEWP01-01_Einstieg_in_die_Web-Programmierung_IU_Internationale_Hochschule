export default function Message() {
  return (
    <section className="px-6 py-24 text-center sm:px-8 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-4xl">
        <h3 className="text-3xl leading-tight font-semibold tracking-tight sm:text-4xl lg:text-5xl">
          <span className="text-slate-400">Wake up.</span>{" "}
          <span className="text-orange-900">Drink coffee.</span>
          <span className="mt-2 block text-indigo-900 sm:mt-0 sm:inline">
            {" "}
            Be awesome.
          </span>
        </h3>
      </div>
    </section>
  );
}
