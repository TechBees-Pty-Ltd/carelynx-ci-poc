import React from 'react';
import Chart from 'react-apexcharts';

const LineChart: React.FC = () => {
  const options = {
    chart: {
      id: 'line-chart',
    },
    xaxis: {
      categories: ['Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb'],
    },
  };

  const series = [
    {
      name: 'Total Spent',
      data: [30000, 35000, 40000, 45000, 50000, 55000],
    },
  ];

  return <Chart options={options} series={series} type="line" width="100%" />;
};

export default LineChart;
