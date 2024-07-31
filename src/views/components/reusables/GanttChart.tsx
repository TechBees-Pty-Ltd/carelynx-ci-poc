import React from 'react';
import Chart from 'react-apexcharts';

const GanttChart: React.FC = () => {
  const series = [
    {
      name: 'Fall Prevention Program',
      data: [
        {
          x: 'Task 1',
          y: [new Date('2023-01-01').getTime(), new Date('2023-01-10').getTime()]
        }
      ]
    },
    {
      name: 'Nutrition Enhancement',
      data: [
        {
          x: 'Task 2',
          y: [new Date('2023-01-05').getTime(), new Date('2023-01-15').getTime()]
        }
      ]
    },
    {
      name: 'Resident Engagement',
      data: [
        {
          x: 'Task 3',
          y: [new Date('2023-01-10').getTime(), new Date('2023-01-20').getTime()]
        }
      ]
    }
  ];

  const options = {
    chart: {
      type: 'rangeBar',
      height: 350
    },
    plotOptions: {
      bar: {
        horizontal: true,
        distributed: true
      }
    },
    xaxis: {
      type: 'datetime'
    },
    yaxis: {
      show: true
    },
    tooltip: {
      x: {
        format: 'dd MMM yyyy'
      }
    },
    title: {
      text: 'CI Activities Timeline',
      align: 'left'
    }
  };

  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
      <div className='bg-white p-4 rounded-lg shadow-lg'>
        <h2 className='text-xl font-semibold leading-7 text-gray-900 mb-4'>
          CI Activities Gantt Chart
        </h2>
        <Chart options={options} series={series} type='rangeBar' height={350} />
      </div>
    </div>
  );
};

export default GanttChart;
