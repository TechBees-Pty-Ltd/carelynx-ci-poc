import React from 'react';
import Card from './reusables/Card';
import LineChart from './reusables/LineChart';
import BarChart from './reusables/BarChart';
import PieChart from './reusables/PieChart';
import StatsCard from './reusables/StatsCard';
import CheckTable from './reusables/CheckTable';

const Dashboard: React.FC = () => {
  return (
    <div className='p-6 bg-gray-100 min-h-screen'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        <Card title='Line chart'>
          <LineChart />
        </Card>
        <Card title='Bar Chart'>
          <BarChart />
        </Card>
        <Card title='Table'>
          <CheckTable />
        </Card>
        <Card title='Pie Chart'>
          <PieChart />
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
