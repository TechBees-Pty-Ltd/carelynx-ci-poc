import React, { useState } from 'react';
import Details from './CiFormComponents/Details';
import Discussion from './CiFormComponents/Discussion';
import Activity from './CiFormComponents/Activity';
import { TbListDetails } from 'react-icons/tb';
import { IoChatbubblesOutline } from 'react-icons/io5';
import { MdHistory } from 'react-icons/md';

interface CiProps {
  ciData: object;
  heading: string;
  onClose: () => void;
  onSave: () => void;
}

const standards = [
  { name: 'Standard 1' },
  { name: 'Standard 2' },
  { name: 'Standard 3' },
  { name: 'Standard 4' }
];

const policies = [
  { name: 'Policy 1' },
  { name: 'Policy 2' },
  { name: 'Policy 3' },
  { name: 'Policy 4' }
];

const assignee = [
  {
    name: 'John Doe',
    image:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    name: 'Leila Dunksky',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    name: 'George Smith',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
    name: 'Kurt Davis',
    image:
      'https://images.unsplash.com/photo-1513910367299-bce8d8a0ebf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  }
];

const CiForm: React.FC<CiProps> = ({
  ciData,
  heading,
  onClose,
  onSave,
  showNotificationHandler
}) => {
  const [section, setSection] = useState('Details');

  return (
    <div>
      <div className='space-y-12 sm:space-y-16'>
        <div>
          <h1 className='text-2xl font-semibold leading-7 text-teal-500'>{heading}</h1>

          <div>
            <div className='sm:hidden'>
              <label htmlFor='tabs' className='sr-only'>
                Select a tab
              </label>
              <select
                id='tabs'
                name='tabs'
                className='block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500'
              >
                <option>My Account</option>
                <option>Company</option>
                <option selected>Team Members</option>
                <option>Billing</option>
              </select>
            </div>
            <div className='hidden sm:block'>
              <div className='border-b border-gray-200'>
                <nav className='-mb-px flex space-x-8' aria-label='Tabs'>
                  <a
                    onClick={() => setSection('Details')}
                    className={`cursor-pointer group inline-flex items-center border-b-2 px-1 py-4 text-sm font-medium ${
                      section === 'Details'
                        ? 'border-indigo-500 text-indigo-600'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                    }`}
                  >
                    <TbListDetails
                      className={`-ml-0.5 mr-2 h-5 w-5 ${
                        section === 'Details'
                          ? 'text-indigo-500'
                          : 'text-gray-400 group-hover:text-gray-500'
                      }`}
                    />

                    <span>Details</span>
                  </a>
                  <a
                    onClick={() => setSection('Comments')}
                    className={`cursor-pointer group inline-flex items-center border-b-2 px-1 py-4 text-sm font-medium ${
                      section === 'Comments'
                        ? 'border-indigo-500 text-indigo-600'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                    }`}
                  >
                    <IoChatbubblesOutline
                      className={`-ml-0.5 mr-2 h-5 w-5 ${
                        section === 'Comments'
                          ? 'text-indigo-500'
                          : 'text-gray-400 group-hover:text-gray-500'
                      }`}
                    />
                    <span>Discussion</span>
                  </a>
                  <a
                    onClick={() => setSection('Audits')}
                    className={`cursor-pointer group inline-flex items-center border-b-2 px-1 py-4 text-sm font-medium ${
                      section === 'Audits'
                        ? 'border-indigo-500 text-indigo-600'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                    }`}
                    aria-current='page'
                  >
                    <MdHistory
                      className={`-ml-0.5 mr-2 h-5 w-5 ${
                        section === 'Audits'
                          ? 'text-indigo-500'
                          : 'text-gray-400 group-hover:text-gray-500'
                      }`}
                    />
                    <span>Activity</span>
                  </a>
                </nav>
              </div>
            </div>
          </div>
          {section === 'Details' && (
            <Details policies={policies} standards={standards} assignee={assignee} />
          )}
          {section === 'Comments' && (
            <Discussion showNotificationHandler={showNotificationHandler} />
          )}
          {section === 'Audits' && <Activity showNotificationHandler={showNotificationHandler} />}
        </div>
      </div>

      {section === 'Details' && (
        <div className='mt-6 flex items-center justify-end gap-x-6'>
          <button onClick={onClose} type='button' className='font-semibold leading-6 text-gray-900'>
            Cancel
          </button>
          <button
            onClick={onSave}
            type='button'
            className='inline-flex justify-center rounded-md bg-indigo-600 px-3 py-2 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
          >
            Save
          </button>
        </div>
      )}
    </div>
  );
};

export default CiForm;
