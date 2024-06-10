import React from 'react';
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import PageHeading from '../../layout/PageHeading';

function SpanDot() {
  return <span className="text-3xl font-black">•</span>;
}
function ListItem({ color, text }) {
  return (
    <li className={`${color} flex items-center justify-center gap-2`}>
      <SpanDot /> {text}
    </li>
  );
}

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
      color: '#89abdc',
    },
    {
      label: 'GUEBWILLER 9%',
      value: 2350,
      color: '#b71c1c',
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
      color: '#B57EDC',
    },
    {
      label: 'SELESTAT 2%',
      value: 160,
      color: '#00356B',
    },
  ];
  const difficultiesData = [
    {
      label: 'Nombre de projets',
      value: 8020,
      color: '#318CE7',
    },
    {
      label: 'Part de difficiles',
      value: 4763,
      color: '#FF8C00',
    },
  ];
  const seasonalData = [
    {
      label: 'Nombre de projets',
      value: 8020,
      color: '#318CE7',
    },
    {
      label: 'Part de saisonniers',
      value: 898,
      color: '#81c784',
    },
  ];

  return (
    <div className="my-10 px-4">
      <PageHeading text="BMO" />

      <div className="my-10 xl:flex ">
        <ResponsiveContainer
          width="100%"
          height={250}
          className="relative mb-36"
        >
          <h2 className="text-center text-lg font-black tracking-widest text-blue-900 ">
            Nombre de project par ville
          </h2>
          <PieChart>
            <Pie
              data={data}
              nameKey="label"
              dataKey="value"
              innerRadius={55}
              outerRadius={80}
              paddingAngle={2}
            >
              {data.map((entry, index) => (
                <Cell fill={entry.color} key={index} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
          <ul className="flex flex-wrap items-center justify-center gap-2  text-center">
            <ListItem text=" Haut-Rhin 68: 25 320" color="text-[#AB274F]" />
            <ListItem text="COLMAR" color="text-[#318CE7]" />
            <ListItem text="MULHOUSE" color="text-[#89abdc]" />
            <ListItem text="GUEBWILLER" color="text-[#ED2939]" />
            <ListItem text="THANN-CERNAY" color="text-[#FF8C00]" />
            <ListItem text="SAINT-LOUIS" color="text-[#FFD700]" />
            <ListItem text="ALTKIRCH" color="text-[#B57EDC]" />
            <ListItem text="SELESTAT" color="text-[#00356B]" />
          </ul>
        </ResponsiveContainer>
        <ResponsiveContainer
          width="100%"
          height={250}
          className="relative mt-80  xs:mt-52   lg:mt-0"
        >
          <h2 className=" text-center text-lg font-black tracking-widest text-blue-900">
            Difficultés à Recruter
          </h2>
          <PieChart>
            <Pie
              data={difficultiesData}
              nameKey="label"
              dataKey="value"
              innerRadius={55}
              outerRadius={80}
              paddingAngle={2}
            >
              {difficultiesData.map((entry) => (
                <Cell fill={entry.color} stroke="#E0F2F1" key={entry.label} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>{' '}
          <ul className="flex flex-wrap items-center justify-center gap-2  text-center">
            <ListItem text="MULHOUSE 59,4 %" color="text-[#FF8C00]" />
          </ul>
        </ResponsiveContainer>
        <ResponsiveContainer
          width="100%"
          height={250}
          className="relative mt-20 lg:mt-0"
        >
          <h2 className="text-center text-lg font-black tracking-widest text-blue-900">
            Emplois Saisonniers
          </h2>
          <PieChart>
            <Pie
              data={seasonalData}
              nameKey="label"
              dataKey="value"
              innerRadius={55}
              outerRadius={80}
              paddingAngle={2}
            >
              {seasonalData.map((entry) => (
                <Cell fill={entry.color} stroke="#E0F2F1" key={entry.label} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
          <ul className="flex flex-wrap items-center justify-center gap-2  text-center">
            <ListItem text=" MULHOUSE 11,2 %" color="text-[#81c784]" />
          </ul>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Statistics;
