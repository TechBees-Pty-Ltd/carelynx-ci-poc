import React from 'react';

const CheckTable: React.FC = () => {
  const data = [
    { name: 'Marketplace', progress: '75.5%', quantity: 2458, date: 'Apr 26, 2022' },
    { name: 'Venus DB PRO', progress: '35.4%', quantity: 1485, date: 'Jul 20, 2022' },
    { name: 'Venus DS', progress: '25%', quantity: 1024, date: 'Sep 30, 2022' },
    { name: 'Venus 3D Asset', progress: '100%', quantity: 858, date: 'Oct 24, 2022' },
    { name: 'Marketplace', progress: '75.5%', quantity: 258, date: 'Nov 29, 2022' },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Check Table</h2>
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left">Name</th>
            <th className="text-left">Progress</th>
            <th className="text-left">Quantity</th>
            <th className="text-left">Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.progress}</td>
              <td>{item.quantity}</td>
              <td>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CheckTable;
