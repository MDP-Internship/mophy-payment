import { LineChart, Line, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  {
    Price: 2400,
    amt: 2400,
  },
  {
    Price: 1398,
    amt: 2210,
  },
  {
    Price: 9800,
    amt: 2290,
  },
  {
    Price: 3908,
    amt: 2000,
  },
  {
    Price: 4800,
    amt: 2181,
  },
  {
    Price: 3800,
    amt: 2500,
  },
  {
    Price: 4300,
    amt: 2100,
  },
];

const ChartLine = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <Line
          dot={false}
          type="monotone"
          dataKey="Price"
          stroke="#1EAAE7"
          activeDot={{ r: 7 }}
        />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ChartLine;
