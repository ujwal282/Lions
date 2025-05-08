import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    LabelList,
  } from 'recharts';
  import { useState } from 'react';
  
  const sampleData = [
    { name: 'Jan', value: 450 },
    { name: 'Feb', value: 320 },
    { name: 'Mar', value: 260 },
    { name: 'Apr', value: 210 },
    { name: 'May', value: 90 },
    { name: 'Jun', value: 50 },
    { name: 'Jul', value: 70 },
    { name: 'Aug', value: 100 },
    { name: 'Sep', value: 130 },
    { name: 'Oct', value: 160 },
    { name: 'Nov', value: 90 },
    { name: 'Dec', value: 30 },
  ];
  
  const periods = ['7 days', '30 days', '90 days'];
  
  export default function LineChartComponent() {
    const [activePeriod, setActivePeriod] = useState('7 days');
  
    return (
      <div className="p-6 rounded-xl shadow border bg-white w-full max-w-3xl">
        <div className="flex justify-between items-center mb-4">
          <div>
            <div className="text-lg font-semibold">1330 total growth</div>
            <div className="text-sm text-red-500">
              <span className="font-semibold">73% less</span> actions since last week
            </div>
          </div>
  
          <div className="flex gap-2">
            {periods.map((p) => (
              <button
                key={p}
                onClick={() => setActivePeriod(p)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-all ${
                  activePeriod === p ? 'bg-indigo-500 text-white' : 'bg-indigo-100 text-indigo-700'
                }`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>
  
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={sampleData}
            margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip cursor={{ stroke: 'blue', strokeWidth: 2 }} />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#6366f1"
              strokeWidth={3}
              dot={{ r: 5, fill: '#6366f1' }}
            >
              <LabelList
                dataKey="value"
                position="top"
                content={({ x, y, value }) => (
                  <text
                    x={x}
                    y={y - 10}
                    fill="white"
                    fontSize={12}
                    textAnchor="middle"
                    dominantBaseline="middle"
                  >
                    <tspan
                      x={x}
                      dy={0}
                      style={{ background: '#6366f1', padding: '4px 8px', borderRadius: '4px' }}
                    >
                      {value}
                    </tspan>
                  </text>
                )}
              />
            </Line>
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
  