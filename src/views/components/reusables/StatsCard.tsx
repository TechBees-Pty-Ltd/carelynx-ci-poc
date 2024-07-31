import React from 'react';
import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/20/solid';

interface Stat {
  name: string;
  stat: string;
  previousStat: string;
  change: string;
  changeType: 'increase' | 'decrease';
}

const stats: Stat[] = [
  {
    name: 'Improvements Implemented',
    stat: '56',
    previousStat: '52',
    change: '7.69%',
    changeType: 'increase'
  },
  {
    name: 'Resident Satisfaction',
    stat: '85%',
    previousStat: '82%',
    change: '3.66%',
    changeType: 'increase'
  },
  {
    name: 'Staff Training Sessions',
    stat: '12',
    previousStat: '15',
    change: '20%',
    changeType: 'decrease'
  }
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const StatsCard: React.FC = () => {
  return (
    <div>
      <h3 className='text-base font-semibold leading-6 text-gray-900'>Last 30 days</h3>
      <dl className='mt-5 grid grid-cols-1 divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow md:grid-cols-3 md:divide-x md:divide-y-0'>
        {stats.map((item) => (
          <div key={item.name} className='px-4 py-5 sm:p-6'>
            <dt className='text-base font-normal text-gray-900'>{item.name}</dt>
            <dd className='mt-1 flex items-baseline justify-between md:block lg:flex'>
              <div className='flex items-baseline text-2xl font-semibold text-indigo-600'>
                {item.stat}
                <span className='ml-2 text-sm font-medium text-gray-500'>
                  from {item.previousStat}
                </span>
              </div>
              <div
                className={classNames(
                  item.changeType === 'increase'
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800',
                  'inline-flex items-baseline rounded-full px-2.5 py-0.5 text-sm font-medium md:mt-2 lg:mt-0'
                )}
              >
                {item.changeType === 'increase' ? (
                  <ArrowUpIcon
                    aria-hidden='true'
                    className='-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-green-500'
                  />
                ) : (
                  <ArrowDownIcon
                    aria-hidden='true'
                    className='-ml-1 mr-0.5 h-5 w-5 flex-shrink-0 self-center text-red-500'
                  />
                )}
                <span className='sr-only'>
                  {item.changeType === 'increase' ? 'Increased' : 'Decreased'} by
                </span>
                {item.change}
              </div>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
};

export default StatsCard;
