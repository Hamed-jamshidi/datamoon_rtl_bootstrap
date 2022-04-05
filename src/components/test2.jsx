import React, { Component} from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
export default class Test2 extends Component {
 data = [
  {
    name: 'یک هفته ای ',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'دو هفته ای ',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

render() {
    return (
     
        <BarChart
          width={500}
          height={300}
          data={this.data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill='#00C49F' />
          <Bar dataKey="uv" fill='#FFBB28' />
          <Bar dataKey="uv" fill='#FF8042' />
          
        </BarChart>
       
    );
  }
}
