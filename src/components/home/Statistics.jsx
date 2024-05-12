import React from 'react';
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';

function Statistics() {
  const data = [
    {
      label: 'MULHOUSE',
      value: 8020,
      color: '#004D40',
    },
    {
      label: 'COLMAR',
      value: 9450,
      color: '#318CE7',
    },
    {
      label: 'GUEBWILLER',
      value: 2350,
      color: '#ED2939',
    },
    {
      label: 'THANN-CERNAY',
      value: 2270,
      color: '#FF8C00',
    },
    {
      label: 'SAINT-LOUIS',
      value: 1930,
      color: '#FFD700',
    },
    {
      label: 'ALTKIRCH',
      value: 1160,
      color: '#00FF40',
    },
    {
      label: 'SELESTAT',
      value: 160,
      color: '#B57EDC',
    },
  ];
  const difficultiesData = [
    {
      label: 'Nombre de projets',
      value: 8020,
      color: '#004D40',
    },
    {
      label: 'Part de difficiles',
      value: 4763,
      color: '#ED2939',
    },
  ];
  const seasonalData = [
    {
      label: 'Nombre de projets',
      value: 8020,
      color: '#004D40',
    },
    {
      label: 'Part de saisonniers',
      value: 898,
      color: '#00FF40',
    },
  ];

  return (
    <ResponsiveContainer
      className="mt-12"
      width="95%"
      height={data.length * 33}
    >
      <PieChart>
        <Pie
          className="border-4 border-red-500"
          data={data}
          nameKey="label"
          dataKey="value"
          innerRadius={85}
          outerRadius={110}
          // cx={40}
          // cy={50}
          paddingAngle={3}
        >
          {data.map((entry) => (
            <Cell fill={entry.color} stroke="#E0F2F1" key={entry.label} />
          ))}
        </Pie>
        <Tooltip />
        <Legend
          verticalAlign="middle"
          align="right"
          width="30%"
          layout="vertical"
          iconSize={15}
          iconType="circle"
        />
      </PieChart>
      <PieChart>
        <Pie
          data={difficultiesData}
          nameKey="label"
          dataKey="value"
          innerRadius={85}
          outerRadius={110}
          // cx={40}
          // cy={50}
          paddingAngle={3}
        >
          {difficultiesData.map((entry) => (
            <Cell fill={entry.color} stroke="#E0F2F1" key={entry.label} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
      <PieChart>
        <Pie
          data={seasonalData}
          nameKey="label"
          dataKey="value"
          innerRadius={85}
          outerRadius={110}
          // cx={40}
          // cy={50}
          paddingAngle={3}
        >
          {data.map((entry) => (
            <Cell fill={entry.color} stroke="#E0F2F1" key={entry.label} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}

export default Statistics;
