import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Auth() {
  const [mode, setMode] = useState("login");

  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: { email: "", password: "", confirmPassword: "" },
  });

  function onSubmit(data) {
    console.log(data);
  }

  function changeMode() {
    setMode((prev) => (prev === "login" ? "register" : "login"));
    reset();
  }

  return (
    <div className="font-display flex min-h-screen justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <p className="font-body text-gray-600">
            {mode === "login" ? "Welcome back" : "Join our community"}
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="rounded-sm border border-gray-200 bg-white p-8 shadow-sm"
        >
          <h2 className="mb-8 text-center text-3xl font-semibold">
            {mode === "login" ? "Login" : "Register"}
          </h2>

          <div className="mb-6">
            <label
              htmlFor="email"
              className="font-body mb-2 block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              {...register("email", {
                required: "Email is required.",
                pattern: /^\S+@\S+$/i,
              })}
              id="email"
              type="email"
              placeholder="your@email.com"
              className="font-body w-full border border-gray-300 px-4 py-3 transition focus:border-transparent focus:ring-2 focus:ring-black focus:outline-none"
            />
            <p>{errors.email?.message}</p>
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="font-body mb-2 block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              {...register("password", {
                required: "Password is required.",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              id="password"
              type="password"
              placeholder="••••••••"
              className="font-body w-full border border-gray-300 px-4 py-3 transition focus:border-transparent focus:ring-2 focus:ring-black focus:outline-none"
            />
            <p>{errors.password?.message}</p>
          </div>

          {mode === "register" && (
            <div className="mb-6">
              <label
                htmlFor="confirmPassword"
                className="font-body mb-2 block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <input
                {...register("confirmPassword", {
                  required: "Password confirmation is required.",
                  validate: (value) =>
                    value === getValues("password") || "Passwords do not match",
                })}
                id="confirmPassword"
                type="password"
                placeholder="••••••••"
                className="font-body w-full border border-gray-300 px-4 py-3 transition focus:border-transparent focus:ring-2 focus:ring-black focus:outline-none"
              />
              <p>{errors.confirmPassword?.message}</p>
            </div>
          )}

          <button
            type="submit"
            className="font-body mb-6 w-full bg-black py-3 font-semibold text-white uppercase transition hover:bg-gray-800"
          >
            {mode === "login" ? "Login" : "Register"}
          </button>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="font-body bg-white px-2 text-gray-500">or</span>
            </div>
          </div>

          <p className="font-body text-center text-sm text-gray-600">
            {mode === "login"
              ? "Don't have an account? "
              : "Already have an account? "}
            <button
              type="button"
              onClick={changeMode}
              className="font-semibold text-black transition hover:underline"
            >
              {mode === "login" ? "Register" : "Login"}
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}
