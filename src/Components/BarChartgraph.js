import { Circle } from 'rc-progress';
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const BarChartgraph = () => {

  const data = [
    {
      name: '5',
      value: 4000,
    },
    {
      name: '9',
      value: 3000,
    },
    {
      name: '11',
      value: 2000,
    },{
      name: '13',
      value: 4000,
    },
    {
      name: '15',
      value: 3000,
    },
    {
      name: '17',
      value: 2000,
    },{
      name: '19',
      value: 4000,
    },
    {
      name: '21',
      value: 3000,
    },
    {
      name: '23',
      value: 2000,
    },
    {
      name: '25',
      value: 3000,
    },
    {
      name: '27',
      value: 2000,
    },
  ];

  return (
    <div style={{ width: '70%', height: 300 }}> 
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          fill='white'
        >
          <CartesianGrid strokeDasharray="1 1" />
          <XAxis dataKey="name" fill='white' />
          <YAxis />
          <Bar dataKey="value" fill="#7193fe" /> {<Circle fill="pink" stroke="blue" />}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BarChartgraph;
