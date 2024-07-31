import React from 'react';
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react';
import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline';

interface Activity {
  id: number;
  title: string;
  imageUrl: string;
  lastUpdate: {
    date: string;
    dateTime: string;
    status: string;
    description: string;
  };
}

const activities: Activity[] = [
  {
    id: 1,
    title: 'Fall Prevention Program',
    imageUrl: 'https://tailwindui.com/img/logos/48x48/tuple.svg',
    lastUpdate: {
      date: 'December 13, 2022',
      dateTime: '2022-12-13',
      status: 'In Progress',
      description: 'Review and update fall prevention strategies.'
    }
  },
  {
    id: 2,
    title: 'Nutrition Enhancement',
    imageUrl: 'https://tailwindui.com/img/logos/48x48/savvycal.svg',
    lastUpdate: {
      date: 'January 22, 2023',
      dateTime: '2023-01-22',
      status: 'Completed',
      description: 'Implemented new meal plans for better nutrition.'
    }
  },
  {
    id: 3,
    title: 'Resident Engagement',
    imageUrl: 'https://tailwindui.com/img/logos/48x48/reform.svg',
    lastUpdate: {
      date: 'January 23, 2023',
      dateTime: '2023-01-23',
      status: 'In Progress',
      description: 'Increased social activities for residents.'
    }
  }
];

const statuses = {
  'In Progress': 'text-yellow-700 bg-yellow-50 ring-yellow-600/10',
  Completed: 'text-green-700 bg-green-50 ring-green-600/20'
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const DashboardMiniCards: React.FC = () => {
  return (
    <div className='mx-auto max-w-l'>
      <div className='mx-auto max-w-2xl lg:mx-0 lg:max-w-none'>
        <div className='flex items-center justify-between'>
          <h2 className='text-base font-semibold leading-7 text-gray-900'>Recent CI Activities</h2>
          <a className='text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500'>
            View all<span className='sr-only'>, activities</span>
          </a>
        </div>
        <ul role='list' className='mt-6 grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8'>
          {activities.map((activity) => (
            <li key={activity.id} className='overflow-hidden rounded-xl border border-gray-200'>
              <div className='flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6'>
                <img
                  alt={activity.title}
                  src={activity.imageUrl}
                  className='h-12 w-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10'
                />
                <div className='text-sm font-medium leading-6 text-gray-900'>{activity.title}</div>
                <Menu as='div' className='relative ml-auto'>
                  <MenuButton className='-m-2.5 block p-2.5 text-gray-400 hover:text-gray-500'>
                    <span className='sr-only'>Open options</span>
                    <EllipsisHorizontalIcon aria-hidden='true' className='h-5 w-5' />
                  </MenuButton>
                  <MenuItems className='absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none'>
                    <MenuItem>
                      {({ active }) => (
                        <a
                          className={classNames(
                            active ? 'bg-gray-50' : '',
                            'block px-3 py-1 text-sm leading-6 text-gray-900'
                          )}
                        >
                          View<span className='sr-only'>, {activity.title}</span>
                        </a>
                      )}
                    </MenuItem>
                    <MenuItem>
                      {({ active }) => (
                        <a
                          className={classNames(
                            active ? 'bg-gray-50' : '',
                            'block px-3 py-1 text-sm leading-6 text-gray-900'
                          )}
                        >
                          Edit<span className='sr-only'>, {activity.title}</span>
                        </a>
                      )}
                    </MenuItem>
                  </MenuItems>
                </Menu>
              </div>
              <dl className='-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6'>
                <div className='flex justify-between gap-x-4 py-3'>
                  <dt className='text-gray-500'>Last update</dt>
                  <dd className='text-gray-700'>
                    <time dateTime={activity.lastUpdate.dateTime}>{activity.lastUpdate.date}</time>
                  </dd>
                </div>
                <div className='flex justify-between gap-x-4 py-3'>
                  <dt className='text-gray-500'>Status</dt>
                  <dd className='flex items-start gap-x-2'>
                    <div className='font-medium text-gray-900'>
                      {activity.lastUpdate.description}
                    </div>
                    <div
                      className={classNames(
                        statuses[activity.lastUpdate.status],
                        'rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset'
                      )}
                    >
                      {activity.lastUpdate.status}
                    </div>
                  </dd>
                </div>
              </dl>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DashboardMiniCards;
