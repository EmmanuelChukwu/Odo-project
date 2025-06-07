import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

export default function SalesReportChart() {
  // Sample sales data
  const salesData = [
    { month: "Jan", totalSales: 4000, netProfit: 2400 },
    { month: "Feb", totalSales: 4500, netProfit: 2600 },
    { month: "Mar", totalSales: 4700, netProfit: 2800 },
    { month: "Apr", totalSales: 5200, netProfit: 3000 },
    { month: "May", totalSales: 6000, netProfit: 3500 },
    { month: "Jun", totalSales: 6500, netProfit: 4000 },
    { month: "Jul", totalSales: 7000, netProfit: 4200 },
    { month: "Aug", totalSales: 6800, netProfit: 4100 },
    { month: "Sep", totalSales: 7200, netProfit: 4300 },
    { month: "Oct", totalSales: 7500, netProfit: 4500 },
    { month: "Nov", totalSales: 7800, netProfit: 4600 },
    { month: "Dec", totalSales: 8000, netProfit: 4800 },
  ];

  return (
    <div className="bg-white p-6 rounded-xl col-span-2 shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Sales report</h2>
        <button className="text-sm px-3 py-1 border rounded-md text-gray-600 hover:bg-gray-100">
          View report
        </button>
      </div>

      <div className="flex space-x-3 mb-6">
        {["12 months", "3 months", "30 days", "7 days", "24 hours"].map(
          (range, i) => (
            <button
              key={i}
              className={`px-3 py-1 rounded-md text-sm font-medium ${
                range === "12 months"
                  ? "bg-blue-100 text-blue-700"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {range}
            </button>
          )
        )}
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={salesData}>
          <CartesianGrid stroke="#f1f5f9" vertical={false} />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="totalSales"
            stroke="#1e3a8a"
            strokeWidth={2}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="netProfit"
            stroke="#3b82f6"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
