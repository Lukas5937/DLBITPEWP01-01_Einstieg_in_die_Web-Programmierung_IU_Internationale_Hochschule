export default function FlavourBadge({ flavourNote }) {
  return (
    <span className="font-body rounded-full bg-pink-50 px-4 py-2 text-sm text-pink-900 capitalize">
      {flavourNote}
    </span>
  );
}
