import React from 'react';
import Card from './reusables/Card';
import LineChart from './reusables/LineChart';
import BarChart from './reusables/BarChart';
import PieChart from './reusables/PieChart';
import GanttChart from './reusables/GanttChart';
import ScatteredGraph from './reusables/ScatteredGraph';
import StatsCard from './reusables/StatsCard';
import DashboardMiniCards from './reusables/DashboardMiniCards';
import CheckTable from './reusables/CheckTable';

const Dashboard: React.FC = () => {
  return (
    <div className='p-6 bg-gray-100 min-h-screen'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 mb-4'>
        <Card title=''>
          <StatsCard />
        </Card>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 mb-4'>
        <Card title=''>
          <DashboardMiniCards />
        </Card>
      </div>
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
        <Card title='Gantt Chart'>
          <GanttChart />
        </Card>
        <Card title='Scattered Chart'>
          <ScatteredGraph />
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
