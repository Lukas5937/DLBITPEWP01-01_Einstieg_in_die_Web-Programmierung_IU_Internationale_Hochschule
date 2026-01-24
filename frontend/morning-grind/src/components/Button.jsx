export default function Button({ children, onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`font-body flex-1 px-8 py-3 font-semibold uppercase transition sm:flex-none ${
        disabled
          ? "cursor-not-allowed bg-gray-600 text-gray-200"
          : "bg-black text-white hover:bg-gray-800"
      } `}
    >
      {children}
    </button>
  );
}
