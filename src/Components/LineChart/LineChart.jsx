import React from "react";
import {
  LineChart as LChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip as PieTooltip,
  Legend as PieLegend,
} from "recharts";

const LineChart = () => {
  const data = [
    { plan: "Basic", price: 1200 },
    { plan: "Standard", price: 1800 },
    { plan: "Premium", price: 2500 },
  ];
  const pieData = [
    { name: "Basic", value: 1200 },
    { name: "Standard", value: 1800 },
    { name: "Premium", value: 2500 },
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

  return (
    <>
      <div className="flex flex-row items-center justify-center gap-6 ">
        <div className="">
          <LChart width={500} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="plan" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="price"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LChart>
        </div>
        <div>
          <PieChart width={300} height={300}>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              label
            >
              {pieData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <PieTooltip />
            <PieLegend />
          </PieChart>
        </div>
      </div>
      {/* Title line with text */}
      <div className="flex items-center justify-center my-6">
        <div className="h-px bg-gray-200 flex-grow"></div>
        <span className="px-4 text-gray-200 font-medium text-lg">*</span>
        <div className="h-px bg-gray-200 flex-grow"></div>
      </div>
    </>
  );
};

export default LineChart;
