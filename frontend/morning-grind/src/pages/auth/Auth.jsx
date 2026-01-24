import { useState } from "react";
import { useForm } from "react-hook-form";
import { registerUser } from "../../api/authApi";
import { useNavigate } from "react-router";
import { useAuth } from "../../context/useAuth";

export default function Auth() {
  const [mode, setMode] = useState("login");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    getValues,
    reset,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: { email: "", password: "", confirmPassword: "" },
  });

  const { login } = useAuth();

  async function onSubmit(data) {
    try {
      if (mode === "login") {
        await login(data.email, data.password);
        console.log("Login erfolgreich");
        navigate("/");
      } else {
        await registerUser(data.email, data.password);
        console.log("Registrierung erfolgreich");
        setMode("login");
        reset();
      }
    } catch (err) {
      if (err.response?.status === 401 || err.response?.status === 403) {
        setError("email", {
          type: "manual",
          message: "Invalid email or password",
        });
      } else {
        setError("email", {
          type: "manual",
          message: "Server error, please try again",
        });
      }
      console.error("Fehler beim Authentifizieren", err);
    }
  }

  function changeMode() {
    setMode((prev) => (prev === "login" ? "register" : "login"));
    reset();
  }

  return (
    <div className="font-display flex min-h-screen justify-center px-6 py-12 sm:px-4 sm:py-16 lg:py-20">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <p className="font-body text-sm text-gray-600 sm:text-base">
            {mode === "login" ? "Welcome back" : "Join our community"}
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm sm:p-8"
        >
          <h2 className="mb-8 text-center text-2xl font-semibold sm:text-3xl">
            {mode === "login" ? "Login" : "Register"}
          </h2>

          <div className="mb-5 sm:mb-6">
            <label
              htmlFor="email"
              className="font-body mb-2 block text-xs font-medium text-gray-700 sm:text-sm"
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
              className="font-body w-full rounded border border-gray-300 px-4 py-2 text-sm transition focus:border-transparent focus:ring-2 focus:ring-black focus:outline-none sm:py-3"
            />
            <p className="font-body mt-1 text-xs text-red-600 sm:text-sm">
              {errors.email?.message}
            </p>
          </div>

          <div className="mb-5 sm:mb-6">
            <label
              htmlFor="password"
              className="font-body mb-2 block text-xs font-medium text-gray-700 sm:text-sm"
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
              className="font-body w-full rounded border border-gray-300 px-4 py-2 text-sm transition focus:border-transparent focus:ring-2 focus:ring-black focus:outline-none sm:py-3"
            />
            <p className="font-body mt-1 text-xs text-red-600 sm:text-sm">
              {errors.password?.message}
            </p>
          </div>

          {mode === "register" && (
            <div className="mb-5 sm:mb-6">
              <label
                htmlFor="confirmPassword"
                className="font-body mb-2 block text-xs font-medium text-gray-700 sm:text-sm"
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
                className="font-body w-full rounded border border-gray-300 px-4 py-2 text-sm transition focus:border-transparent focus:ring-2 focus:ring-black focus:outline-none sm:py-3"
              />
              <p className="font-body mt-1 text-xs text-red-600 sm:text-sm">
                {errors.confirmPassword?.message}
              </p>
            </div>
          )}

          <button
            type="submit"
            className="font-body mb-6 w-full rounded bg-black py-2 font-semibold text-white uppercase transition hover:bg-gray-800 sm:py-3"
          >
            {mode === "login" ? "Login" : "Register"}
          </button>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="font-body bg-white px-2 text-xs text-gray-500 sm:text-sm">
                or
              </span>
            </div>
          </div>

          <p className="font-body text-center text-xs text-gray-600 sm:text-sm">
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
