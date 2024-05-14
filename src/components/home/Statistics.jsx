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
      color: '#006A40',
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
      color: '#006A40',
    },
    {
      label: 'Part de saisonniers',
      value: 898,
      color: '#00FF40',
    },
  ];

  return (
    <div className="my-10 px-4">
      <h1 className="text-center text-2xl font-black tracking-widest text-[#004D40]">
        BMO
      </h1>
      <p className="mt-6 text-justify text-xl font-medium text-[#004D40] ">
        Nombre de projets de recrutement en 2024 par Bassin d'emploi Région : 25
        320
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
            {/* <Legend
              iconType="circle"
              iconSize="10px"
              wrapperStyle={{
                top: '60%',
              }}
            /> */}
          </PieChart>
          <ul className="flex w-[250px] flex-wrap gap-2  text-center">
            <li className="text-[#318CE7]">• COLMAR</li>
            <li className="text-[#006A40]">• MULHOUSE</li>
            <li className="text-[#ED2939]">• GUEBWILLER</li>
            <li className="text-[#FF8C00]">• THANN-CERNAY</li>
            <li className="text-[#FFD700]">• SAINT-LOUIS</li>
            <li className="text-[#00FF40]">• ALTKIRCH</li>
            <li className="text-[#B57EDC]">• SELESTAT</li>
          </ul>
        </ResponsiveContainer>
        <ResponsiveContainer
          width="100%"
          height={250}
          className="relative mt-56"
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
            {/* <Legend
              iconType="circle"
              wrapperStyle={{ top: '90%' }}
              iconSize="10px"
            /> */}
          </PieChart>
        </ResponsiveContainer>
        <ResponsiveContainer
          width="100%"
          height={250}
          className="relative mt-12"
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
              {data.map((entry) => (
                <Cell fill={entry.color} stroke="#E0F2F1" key={entry.label} />
              ))}
            </Pie>
            <Tooltip />
            {/* <Legend
              iconSize="10px"
              iconType="circle"
              wrapperStyle={{ top: '90%' }}
            /> */}
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Statistics;
