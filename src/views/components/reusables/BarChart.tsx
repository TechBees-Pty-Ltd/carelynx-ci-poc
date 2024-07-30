import React from 'react';
import Chart from 'react-apexcharts';

const BarChart: React.FC = () => {
  const options = {
    chart: {
      id: 'bar-chart',
    },
    xaxis: {
      categories: ['17', '18', '19', '20', '21', '22', '23'],
    },
  };

  const series = [
    {
      name: 'Weekly Revenue',
      data: [50, 75, 150, 100, 200, 175, 225],
    },
  ];

  return <Chart options={options} series={series} type="bar" width="100%" />;
};

export default BarChart;
