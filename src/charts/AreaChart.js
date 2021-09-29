import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  {
    Price: 9800,
  },
  {
    Price: 1398,
  },
  {
    Price: 9800,
  },
  {
    Price: 3908,
  },
  {
    Price: 4800,
  },
  {
    Price: 1100,
  },
  {
    Price: 8500,
  },
];

const ChartArea = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="351.5"
            y1="-17.1283"
            x2="351.5"
            y2="113.872"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#1EAAE7" />
            <stop offset="1" stopColor="#1EAAE7" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        <Tooltip />
        <Area
          type="monotone"
          dataKey="Price"
          stroke="#1EAAE7"
          strokeLinejoin="round"
          strokeLinecap="round"
          fillOpacity={1}
          fill="url(#paint0_linear)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default ChartArea;
