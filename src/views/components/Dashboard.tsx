import React from 'react';
import Card from './reusables/Card';
import LineChart from './reusables/LineChart';
import BarChart from './reusables/BarChart';
import PieChart from './reusables/PieChart';
import StatsCard from './reusables/StatsCard';
import CheckTable from './reusables/CheckTable';

const Dashboard: React.FC = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <StatsCard title="Earnings" value="$340.5" />
        <StatsCard title="Spend this month" value="$642.39" />
        <StatsCard title="Sales" value="$574.34" />
        <StatsCard title="Your Balance" value="$1,000" />
        <StatsCard title="New Tasks" value="145" />
        <StatsCard title="Total Projects" value="$2433" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card title="Total Spent">
          <LineChart />
        </Card>
        <Card title="Weekly Revenue">
          <BarChart />
        </Card>
        <Card title="Check Table">
          <CheckTable />
        </Card>
        <Card title="Daily Traffic">
          <BarChart />
        </Card>
        <Card title="Your Pie Chart">
          <PieChart />
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
