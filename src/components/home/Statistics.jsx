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
      label: 'COLMAR 37%',
      value: 9450,
      color: '#318CE7',
    },
    {
      label: 'MULHOUSE 32%',
      value: 8020,
      color: '#004D40',
    },
    {
      label: 'GUEBWILLER 9%',
      value: 2350,
      color: '#ED2939',
    },
    {
      label: 'THANN-CERNAY 8%',
      value: 2270,
      color: '#FF8C00',
    },
    {
      label: 'SAINT-LOUIS 7%',
      value: 1930,
      color: '#FFD700',
    },
    {
      label: 'ALTKIRCH 5%',
      value: 1160,
      color: '#00FF40',
    },
    {
      label: 'SELESTAT 2%',
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
    <div className="my-10 xl:flex">
      <ResponsiveContainer width="100%" className="mt-20" height={320}>
        <PieChart>
          <Pie
            data={data}
            nameKey="label"
            dataKey="value"
            innerRadius={75}
            outerRadius={110}
            paddingAngle={2}
          >
            {data.map((entry, index) => (
              <Cell fill={entry.color} key={index} />
            ))}
          </Pie>
          <Tooltip />
          <Legend iconType="circle" wrapperStyle={{ top: '90%' }} />
        </PieChart>
      </ResponsiveContainer>
      <ResponsiveContainer width="100%" height={280} className="mt-20">
        <PieChart>
          <Pie
            data={difficultiesData}
            nameKey="label"
            dataKey="value"
            innerRadius={75}
            outerRadius={110}
            paddingAngle={2}
          >
            {difficultiesData.map((entry) => (
              <Cell fill={entry.color} stroke="#E0F2F1" key={entry.label} />
            ))}
          </Pie>
          <Tooltip />
          <Legend iconType="circle" wrapperStyle={{ top: '90%' }} />
        </PieChart>
      </ResponsiveContainer>
      <ResponsiveContainer width="100%" height={280} className="mt-20">
        <PieChart>
          <Pie
            data={seasonalData}
            nameKey="label"
            dataKey="value"
            innerRadius={75}
            outerRadius={110}
            paddingAngle={2}
          >
            {data.map((entry) => (
              <Cell fill={entry.color} stroke="#E0F2F1" key={entry.label} />
            ))}
          </Pie>
          <Tooltip />
          <Legend iconType="circle" wrapperStyle={{ top: '90%' }} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Statistics;
