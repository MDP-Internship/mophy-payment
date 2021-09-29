import {
  AreaChart,
  Area,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  {
    data1: 45,
    data2: 50,
    data3: 70,
  },
  {
    data1: 50,
    data2: 55,
    data3: 60,
  },
  {
    data1: 45,
    data2: 50,
    data3: 65,
  },
  {
    data1: 40,
    data2: 55,
    data3: 70,
  },
  {
    data1: 45,
    data2: 50,
    data3: 60,
  },
];

const FluidBarChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient
            id="fluidBar"
            x1="12"
            y1="-41.1698"
            x2="144.679"
            y2="119.458"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#1EAAE7" />
            <stop offset="1" stopColor="#3A09FF" />
          </linearGradient>
        </defs>
        <CartesianGrid
          fill="#1EAAE7"
          fillOpacity={0.1}
          horizontal={false}
          vertical={false}
        />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="data1"
          stroke="#1EAAE7"
          fillOpacity={1}
          fill="url(#fluidBar)"
        />
        <Area
          type="monotone"
          dataKey="data2"
          stroke="#1EAAE7"
          fillOpacity={0.5}
          fill="#1EAAE7"
        />
        <Area
          type="monotone"
          dataKey="data3"
          stroke="#1EAAE7"
          fillOpacity={0.3}
          fill="#1EAAE7"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default FluidBarChart;
