export default function PayoutCard() {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm">
      {/* Title */}
      <p className="text-sm text-gray-500">{title}</p>

      {/* Value */}
      <p className="text-2xl font-semibold text-gray-900">{value}</p>

      <div className="h-20 mt-2"></div>
    </div>
  );
}
