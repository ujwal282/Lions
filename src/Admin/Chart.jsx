import { PieChart, Pie, Cell } from 'recharts';
import { useState } from 'react';

const data = [
  { name: 'Education', value: 144000 },
  { name: 'Health & Vision', value: 88100 },
  { name: 'Environment', value: 42300 },
];

const COLORS = ['#4C8DF1', '#213D8C', '#17B37F'];

const renderCustomizedLabel = ({ cx, cy, hoveredData }) => {
  return (
    <g>
      <text
        x={cx}
        y={cy - 10}
        fill="#999"
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={14}
        opacity={hoveredData ? 1 : 0}
      >
        {hoveredData?.name}
      </text>
      <text
        x={cx}
        y={cy + 10}
        fill="#000"
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={20}
        fontWeight="bold"
        opacity={hoveredData ? 1 : 0}
      >
        {hoveredData ? `NPR ${hoveredData.value.toLocaleString()}` : ''}
      </text>
      {!hoveredData && (
        <>
          <text
            x={cx}
            y={cy - 10}
            fill="#999"
            textAnchor="middle"
            dominantBaseline="central"
            fontSize={14}
          >
            TOTAL
          </text>
          <text
            x={cx}
            y={cy + 10}
            fill="#000"
            textAnchor="middle"
            dominantBaseline="central"
            fontSize={20}
            fontWeight="bold"
          >
            NPR 3.5L
          </text>
          <foreignObject x={cx - 30} y={cy + 25} width={60} height={30}>
            <div style={{ color: '#17B37F', fontSize: 12, textAlign: 'center', background: '#E9F9F4', borderRadius: 6, padding: '2px 6px' }}>+18%</div>
          </foreignObject>
        </>
      )}
    </g>
  );
};

export default function DonutChart() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const hoveredData = hoveredIndex !== null ? data[hoveredIndex] : null;

  return (
    <div className="relative flex items-center gap-6">
      <PieChart width={200} height={200}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          paddingAngle={5}
          dataKey="value"
          labelLine={false}
          label={(props) => renderCustomizedLabel({ ...props, hoveredData })}
          onMouseEnter={(_, index) => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>

      <div className="space-y-4">
        {data.map((item, index) => (
          <LegendItem
            key={item.name}
            color={COLORS[index]}
            label={item.name}
            amount={`NPR ${item.value.toLocaleString()}`}
            percent={
              ((item.value / data.reduce((a, b) => a + b.value, 0)) * 100).toFixed(0) + '%'
            }
            active={hoveredIndex === index}
          />
        ))}
      </div>
    </div>
  );
}

function LegendItem({ color, label, amount, percent, active }) {
  return (
    <div
      className={`flex items-center gap-2 transition-all ${
        active ? 'bg-gray-100 rounded px-2 py-1 font-semibold' : ''
      }`}
    >
      <div style={{ backgroundColor: color }} className="w-3 h-3 rounded" />
      <div className="text-sm text-gray-800 w-32 flex justify-between">
        <span>{label}</span>
        <span className="text-gray-400">{amount} ({percent})</span>
      </div>
    </div>
  );
}
