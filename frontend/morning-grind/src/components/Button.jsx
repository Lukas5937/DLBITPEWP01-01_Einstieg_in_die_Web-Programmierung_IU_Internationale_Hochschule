export default function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="font-body flex-1 bg-black px-8 py-3 font-semibold text-white uppercase transition hover:bg-gray-800 sm:flex-none"
    >
      {children}
    </button>
  );
}
