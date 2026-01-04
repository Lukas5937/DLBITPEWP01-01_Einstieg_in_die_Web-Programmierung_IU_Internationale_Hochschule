import { useNavigate } from "react-router";

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="font-body mb-12 flex cursor-pointer items-center gap-2 text-sm text-gray-600 transition hover:text-black"
    >
      <span>←</span>
      <span>Back</span>
    </button>
  );
}
