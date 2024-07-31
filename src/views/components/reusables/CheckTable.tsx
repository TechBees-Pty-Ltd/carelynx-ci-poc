import React, { Fragment } from 'react';
import {
  ArrowDownCircleIcon,
  ArrowPathIcon,
  ArrowUpCircleIcon,
  HeroIcon
} from '@heroicons/react/20/solid';

interface ImprovementItem {
  id: number;
  improvementNumber: string;
  href: string;
  status: keyof typeof statuses;
  title: string;
  description: string;
  icon: HeroIcon;
  createdAt: string;
  updatedAt: string;
}

interface Day {
  date: string;
  dateTime: string;
  items: ImprovementItem[];
}

const statuses = {
  Completed: 'text-green-700 bg-green-50 ring-green-600/20',
  InProgress: 'text-yellow-700 bg-yellow-50 ring-yellow-600/20',
  NotStarted: 'text-gray-700 bg-gray-50 ring-gray-600/20'
};

const days: Day[] = [
  {
    date: 'Today',
    dateTime: '2023-07-31',
    items: [
      {
        id: 1,
        improvementNumber: 'CI-0012',
        href: '#',
        status: 'Completed',
        title: 'Upgrade Resident Rooms',
        description: 'Complete room upgrades to improve comfort and accessibility.',
        icon: ArrowUpCircleIcon,
        createdAt: '2023-07-01',
        updatedAt: '2023-07-31'
      },
      {
        id: 2,
        improvementNumber: 'CI-0011',
        href: '#',
        status: 'InProgress',
        title: 'Enhance Nutrition Plans',
        description: 'Develop comprehensive nutrition plans for residents.',
        icon: ArrowPathIcon,
        createdAt: '2023-06-20',
        updatedAt: '2023-07-30'
      }
    ]
  },
  {
    date: 'Yesterday',
    dateTime: '2023-07-30',
    items: [
      {
        id: 4,
        improvementNumber: 'CI-0010',
        href: '#',
        status: 'Completed',
        title: 'Upgrade Emergency Alert System',
        description: 'Ensure the emergency alert system is up-to-date and functional.',
        icon: ArrowUpCircleIcon,
        createdAt: '2023-07-01',
        updatedAt: '2023-07-30'
      }
    ]
  }
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const ContinuousImprovement: React.FC = () => {
  return (
    <div>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <h2 className='mx-auto max-w-2xl text-base font-semibold leading-6 text-gray-900 lg:mx-0 lg:max-w-none'>
          Recent Continuous Improvement Activities
        </h2>
      </div>
      <div className='mt-6 overflow-hidden border-t border-gray-100'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl lg:mx-0 lg:max-w-none'>
            <table className='w-full text-left'>
              <thead className='sr-only'>
                <tr>
                  <th>Improvement</th>
                  <th className='hidden sm:table-cell'>Title</th>
                  <th>More details</th>
                </tr>
              </thead>
              <tbody>
                {days.map((day) => (
                  <Fragment key={day.dateTime}>
                    <tr className='text-sm leading-6 text-gray-900'>
                      <th
                        scope='colgroup'
                        colSpan={3}
                        className='relative isolate py-2 font-semibold'
                      >
                        <time dateTime={day.dateTime}>{day.date}</time>
                        <div className='absolute inset-y-0 right-full -z-10 w-screen border-b border-gray-200 bg-gray-50' />
                        <div className='absolute inset-y-0 left-0 -z-10 w-screen border-b border-gray-200 bg-gray-50' />
                      </th>
                    </tr>
                    {day.items.map((item) => (
                      <tr key={item.id}>
                        <td className='relative py-5 pr-6'>
                          <div className='flex gap-x-6'>
                            <item.icon
                              aria-hidden='true'
                              className='hidden h-6 w-5 flex-none text-gray-400 sm:block'
                            />
                            <div className='flex-auto'>
                              <div className='flex items-start gap-x-3'>
                                <div className='text-sm font-medium leading-6 text-gray-900'>
                                  {item.improvementNumber}
                                </div>
                                <div
                                  className={classNames(
                                    statuses[item.status],
                                    'rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset'
                                  )}
                                >
                                  {item.status}
                                </div>
                              </div>
                              <div className='mt-1 text-xs leading-5 text-gray-500'>
                                Created: {item.createdAt}
                              </div>
                              <div className='mt-1 text-xs leading-5 text-gray-500'>
                                Updated: {item.updatedAt}
                              </div>
                            </div>
                          </div>
                          <div className='absolute bottom-0 right-full h-px w-screen bg-gray-100' />
                          <div className='absolute bottom-0 left-0 h-px w-screen bg-gray-100' />
                        </td>
                        <td className='hidden py-5 pr-6 sm:table-cell'>
                          <div className='text-sm leading-6 text-gray-900'>{item.title}</div>
                          <div className='mt-1 text-xs leading-5 text-gray-500'>
                            {item.description}
                          </div>
                        </td>
                        <td className='py-5 text-right'>
                          <div className='flex justify-end'>
                            <a
                              href={item.href}
                              className='text-sm font-medium leading-6 text-indigo-600 hover:text-indigo-500'
                            >
                              View<span className='hidden sm:inline'> improvement</span>
                              <span className='sr-only'>
                                , improvement #{item.improvementNumber}, {item.title}
                              </span>
                            </a>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContinuousImprovement;
