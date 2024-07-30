import React from 'react';
import Chart from 'react-apexcharts';

const PieChart: React.FC = () => {
  const options = {
    labels: ['Your Files', 'System'],
  };

  const series = [63, 25];

  return <Chart options={options} series={series} type="pie" width="100%" />;
};

export default PieChart;
