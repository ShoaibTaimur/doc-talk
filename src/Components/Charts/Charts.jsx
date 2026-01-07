import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${
    x + width / 2
  },${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${
    y + height
  } ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return (
    <path
      d={getPath(Number(x), Number(y), Number(width), Number(height))}
      stroke="none"
      fill={fill}
    />
  );
};

const Charts = ({ bookedDocs = [] }) => {
  const data = bookedDocs.map((doc) => ({
    name: doc?.name ?? "Unknown",
    payment: Number(doc?.fee ?? 0),
  }));

  if (!data.length) {
    return null;
  }

  return (
    <div className="mx-5 sm:mx-10 lg:mx-25 bg-white rounded-3xl p-4 sm:p-8">
      <h2 className="font-primary font-bold text-[16px] md:text-[22px] mb-4">
        Appointment Payments
      </h2>
      <div className="w-full h-80 md:h-105">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 20,
              right: 0,
              left: 0,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Bar dataKey="payment" shape={TriangleBar} label={{ position: "top" }}>
              {data.map((_entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Charts;
