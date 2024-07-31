import React from 'react';
import Chart from 'react-apexcharts';

const ScatteredGraph: React.FC = () => {
  const series = [
    {
      name: 'Fall Prevention Program',
      data: [
        [new Date('2023-01-01').getTime(), 5],
        [new Date('2023-01-05').getTime(), 7],
        [new Date('2023-01-10').getTime(), 3],
        [new Date('2023-01-15').getTime(), 4],
        [new Date('2023-01-20').getTime(), 8]
      ]
    },
    {
      name: 'Nutrition Enhancement',
      data: [
        [new Date('2023-01-02').getTime(), 6],
        [new Date('2023-01-06').getTime(), 8],
        [new Date('2023-01-11').getTime(), 2],
        [new Date('2023-01-16').getTime(), 7],
        [new Date('2023-01-21').getTime(), 5]
      ]
    },
    {
      name: 'Resident Engagement',
      data: [
        [new Date('2023-01-03').getTime(), 4],
        [new Date('2023-01-07').getTime(), 6],
        [new Date('2023-01-12').getTime(), 5],
        [new Date('2023-01-17').getTime(), 3],
        [new Date('2023-01-22').getTime(), 9]
      ]
    }
  ];

  const options = {
    chart: {
      type: 'scatter',
      height: 350,
      zoom: {
        type: 'xy'
      }
    },
    xaxis: {
      type: 'datetime',
      title: {
        text: 'Date'
      }
    },
    yaxis: {
      title: {
        text: 'Activity Score'
      }
    },
    markers: {
      size: 5
    },
    tooltip: {
      x: {
        format: 'dd MMM yyyy'
      }
    },
    title: {
      text: 'CI Activities Scatter Plot',
      align: 'left'
    }
  };

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='bg-white p-4 rounded-lg shadow-lg'>
        <h2 className='text-xl font-semibold leading-7 text-gray-900 mb-4'>
          CI Activities Scatter Plot
        </h2>
        <Chart options={options} series={series} type='scatter' height={350} />
      </div>
    </div>
  );
};

export default ScatteredGraph;
