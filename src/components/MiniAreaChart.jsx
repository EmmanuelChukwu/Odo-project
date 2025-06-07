// src/components/MiniAreaChart.jsx
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';

export default function MiniAreaChart({ title, value, data }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm">
      {/* Title */}
      <p className="text-sm text-gray-500">{title}</p>

      {/* Value */}
      <p className="text-2xl font-semibold text-gray-900">{value}</p>

      {/* Chart */}
      <div className="h-20 mt-2">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            {/* Area shows the filled curve */}
            <Area
              type="monotone"
              dataKey="value"
              stroke="#86efac" // Tailwind green-300
              fill="#bbf7d0"   // Tailwind green-200
              strokeWidth={2}
              dot={{ fill: '#4ade80', r: 3 }}
            />
            <Tooltip
              contentStyle={{ backgroundColor: '#fff', borderRadius: '8px' }}
              labelStyle={{ display: 'none' }}
              formatter={(val) => [`₦${val}`, '']}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
