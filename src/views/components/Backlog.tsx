import React from 'react';

interface BacklogItem {
  title: string;
  description: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

const backlogItems: BacklogItem[] = [
  {
    title: 'Update Resident Health Records',
    description: 'Ensure all resident health records are up-to-date with the latest information.',
    status: 'In Progress',
    createdAt: '2023-06-01',
    updatedAt: '2023-06-03'
  },
  {
    title: 'Improve Medication Tracking System',
    description: 'Enhance the system to better track medication schedules and dosages.',
    status: 'To Do',
    createdAt: '2023-06-10',
    updatedAt: '2023-06-12'
  },
  {
    title: 'Implement Resident Activity Log',
    description: 'Develop a feature to log daily activities of residents for better engagement.',
    status: 'Done',
    createdAt: '2023-05-20',
    updatedAt: '2023-06-01'
  },
  {
    title: 'Optimize Meal Planning System',
    description: 'Improve the meal planning system to cater to dietary needs and preferences.',
    status: 'In Progress',
    createdAt: '2023-06-05',
    updatedAt: '2023-06-07'
  },
  {
    title: 'Introduce Family Portal',
    description:
      'Create a portal for families to stay updated with resident activities and health.',
    status: 'To Do',
    createdAt: '2023-06-08',
    updatedAt: '2023-06-09'
  },
  {
    title: 'Fix Emergency Alert System',
    description: 'Resolve issues with the emergency alert system to ensure quick response times.',
    status: 'Done',
    createdAt: '2023-05-25',
    updatedAt: '2023-06-02'
  }
];

const Backlog: React.FC = () => {
  return (
    <div className='px-4 sm:px-6 lg:px-8'>
      <div className='sm:flex sm:items-center'>
        <div className='sm:flex-auto'>
          <h1 className='text-base font-semibold leading-6 text-gray-900'>Backlog Items</h1>
          <p className='mt-2 text-sm text-gray-700'>
            A list of all the backlog items including their status, short description, created date,
            and last updated date.
          </p>
        </div>
        <div className='mt-4 sm:ml-16 sm:mt-0 sm:flex-none'>
          <button
            type='button'
            className='block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
          >
            Add Item
          </button>
        </div>
      </div>
      <div className='mt-8 flow-root'>
        <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8'>
            <table className='min-w-full divide-y divide-gray-300'>
              <thead>
                <tr>
                  <th
                    scope='col'
                    className='py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0'
                  >
                    Title
                  </th>
                  <th
                    scope='col'
                    className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                  >
                    Description
                  </th>
                  <th
                    scope='col'
                    className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                  >
                    Status
                  </th>
                  <th
                    scope='col'
                    className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                  >
                    Created At
                  </th>
                  <th
                    scope='col'
                    className='px-3 py-3.5 text-left text-sm font-semibold text-gray-900'
                  >
                    Updated At
                  </th>
                  <th scope='col' className='relative py-3.5 pl-3 pr-4 sm:pr-0'>
                    <span className='sr-only'>Edit</span>
                  </th>
                  <th scope='col' className='relative py-3.5 pl-3 pr-4 sm:pr-0'>
                    <span className='sr-only'>Move to Board</span>
                  </th>
                </tr>
              </thead>
              <tbody className='divide-y divide-gray-200 bg-white'>
                {backlogItems.map((item) => (
                  <tr key={item.title}>
                    <td className='whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0'>
                      <div className='font-medium text-gray-900'>{item.title}</div>
                    </td>
                    <td className='whitespace-nowrap px-3 py-5 text-sm text-gray-500'>
                      <div className='text-gray-700'>{item.description}</div>
                    </td>
                    <td className='whitespace-nowrap px-3 py-5 text-sm text-gray-500'>
                      <span
                        className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${item.status === 'Done' ? 'bg-green-50 text-green-700 ring-1 ring-inset ring-green-600/20' : item.status === 'In Progress' ? 'bg-yellow-50 text-yellow-700 ring-1 ring-inset ring-yellow-600/20' : 'bg-gray-50 text-gray-700 ring-1 ring-inset ring-gray-600/20'}`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className='whitespace-nowrap px-3 py-5 text-sm text-gray-500'>
                      {item.createdAt}
                    </td>
                    <td className='whitespace-nowrap px-3 py-5 text-sm text-gray-500'>
                      {item.updatedAt}
                    </td>
                    <td className='relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0'>
                      <a href='#' className='text-indigo-600 hover:text-indigo-900'>
                        Edit<span className='sr-only'>, {item.title}</span>
                      </a>
                    </td>
                    <td className='relative whitespace-nowrap py-5 pl-3 pr-4 text-right text-sm font-medium sm:pr-0'>
                      <button
                        type='button'
                        className='inline-flex items-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
                      >
                        Move to Board<span className='sr-only'>, {item.title}</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backlog;
