import React from 'react';
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';

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
      color: '#006A40',
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
      color: '#50C878',
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
      color: '#50C878',
    },
    {
      label: 'Part de saisonniers',
      value: 898,
      color: '#318CE7',
    },
  ];

  return (
    <div className="my-10 px-4">
      <h1 className="text-center text-2xl font-black tracking-widest text-[#004D40]">
        BMO
      </h1>
      <p className="mt-6 text-justify text-xl font-medium text-[#004D40] ">
        Nombre de projets de recrutement en 2024 par Bassin d'emploi Région
        Grand Est, Département : Haut-Rhin 68: 25 320
      </p>
      <div className="my-10 xl:flex ">
        <ResponsiveContainer
          width="100%"
          height={250}
          className="relative mb-36"
        >
          <h2 className=" text-center text-lg font-black tracking-widest text-[#004D40]">
            Nombre de project par ville
          </h2>
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
          </PieChart>
          <ul className="flex flex-wrap items-center justify-center gap-2  text-center">
            <ListItem text="COLMAR" color="text-[#318CE7]" />
            <ListItem text="MULHOUSE" color="text-[#006A40]" />
            <ListItem text="GUEBWILLER" color="text-[#ED2939]" />
            <ListItem text="THANN-CERNAY" color="text-[#FF8C00]" />
            <ListItem text="SAINT-LOUIS" color="text-[#FFD700]" />
            <ListItem text="ALTKIRCH" color="text-[#00FF40]" />
            <ListItem text="SELESTAT" color="text-[#B57EDC]" />
          </ul>
        </ResponsiveContainer>
        <ResponsiveContainer
          width="100%"
          height={250}
          className="relative mt-72 xs:mt-20   lg:mt-0"
        >
          <h2 className=" text-center text-lg font-black tracking-widest text-[#004D40]">
            Difficultés à Recruter
          </h2>
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
          </PieChart>{' '}
          <ul className="flex flex-wrap items-center justify-center gap-2  text-center">
            <ListItem text="MULHOUSE 59,4 %" color="text-[#ED2939]" />
          </ul>
        </ResponsiveContainer>
        <ResponsiveContainer
          width="100%"
          height={250}
          className="relative mt-20 lg:mt-0"
        >
          <h2 className="text-center text-lg font-black tracking-widest text-[#004D40]">
            Emplois Saisonniers
          </h2>
          <PieChart>
            <Pie
              data={seasonalData}
              nameKey="label"
              dataKey="value"
              innerRadius={75}
              outerRadius={110}
              paddingAngle={2}
            >
              {seasonalData.map((entry) => (
                <Cell fill={entry.color} stroke="#E0F2F1" key={entry.label} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
          <ul className="flex flex-wrap items-center justify-center gap-2  text-center">
            <ListItem text=" MULHOUSE 11,2 %" color="text-[#318CE7]" />
          </ul>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Statistics;
