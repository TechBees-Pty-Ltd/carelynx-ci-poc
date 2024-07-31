import React, { useState } from 'react';
import Todo from '../reusables/ToDo';
import AutocompleteTags from '../reusables/AutocompleteTags';
import DatePicker from 'react-tailwindcss-datepicker';

interface DetailsProps {
  standards: any[]; // Replace `any` with the appropriate type
  policies: any[]; // Replace `any` with the appropriate type
  assignee: string; // Assuming assignee is a string
}

const Details: React.FC<DetailsProps> = ({ standards, policies, assignee }) => {
  const [dueDate, setDueDate] = useState(null);

  const handleDueDateChange = (newDate) => {
    setDueDate(newDate);
  };

  return (
    <div className='mt-10 space-y-4 border-b border-gray-900/10 pb-12 sm:space-y-0 sm:divide-y sm:divide-gray-900/10 sm:border-t sm:pb-0'>
      <div className='sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6'>
        <label
          htmlFor='type-of-feedback'
          className='block font-medium leading-6 text-gray-900 sm:pt-1.5 text-right'
        >
          Type of Feedback
        </label>
        <div className='mt-2 sm:col-span-2 sm:mt-0'>
          <select
            id='type-of-feedback'
            name='type-of-feedback'
            autoComplete='type-of-feedback'
            className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:leading-6'
          >
            <option>-- Select Feedback Type --</option>
            <option>Praise</option>
            <option>Complaint</option>
            <option>Improvement</option>
          </select>
        </div>
      </div>

      <div className='sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6'>
        <label
          htmlFor='title'
          className='block font-medium leading-6 text-gray-900 sm:pt-1.5 text-right'
        >
          Title
        </label>
        <div className='mt-2 sm:col-span-2 sm:mt-0'>
          <textarea
            placeholder='Enter the Title of the Event'
            id='title'
            name='title'
            rows={1}
            className='block w-full max-w-2xl rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6'
          ></textarea>
        </div>
      </div>

      <div className='sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6'>
        <label
          htmlFor='description'
          className='block font-medium leading-6 text-gray-900 sm:pt-1.5 text-right'
        >
          Description
        </label>
        <div className='mt-2 sm:col-span-2 sm:mt-0'>
          <textarea
            placeholder='Enter the Description of the Event'
            id='description'
            name='description'
            rows={3}
            className='block w-full max-w-2xl rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6'
          ></textarea>
        </div>
      </div>

      <div className='sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6'>
        <label
          htmlFor='root-cause'
          className='block font-medium leading-6 text-gray-900 sm:pt-1.5 text-right'
        >
          What is the root cause of the issue reported?
        </label>
        <div className='mt-2 sm:col-span-2 sm:mt-0'>
          <textarea
            placeholder='Describe the root cause of the issue'
            id='root-cause'
            name='root-cause'
            rows={3}
            className='block w-full max-w-2xl rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6'
          ></textarea>
        </div>
      </div>

      <div className='sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6'>
        <label
          htmlFor='severity'
          className='block font-medium leading-6 text-gray-900 sm:pt-1.5 text-right'
        >
          Severity
        </label>
        <div className='mt-2 sm:col-span-2 sm:mt-0'>
          <select
            id='severity'
            name='severity'
            autoComplete='severity'
            className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:leading-6'
          >
            <option>-- Select Severity Type --</option>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </div>
      </div>

      <div className='sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6'>
        <label
          htmlFor='risk-level'
          className='block font-medium leading-6 text-gray-900 sm:pt-1.5 text-right'
        >
          Risk Level
        </label>
        <div className='mt-2 sm:col-span-2 sm:mt-0'>
          <select
            id='risk-level'
            name='risk-level'
            autoComplete='risk-level'
            className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:leading-6'
          >
            <option>-- Select Risk Level --</option>
            <option>Extreme</option>
            <option>Very High</option>
            <option>High</option>
          </select>
        </div>
      </div>

      <div className='sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6'>
        <label
          htmlFor='priority-level'
          className='block font-medium leading-6 text-gray-900 sm:pt-1.5 text-right'
        >
          Priority Level
        </label>
        <div className='mt-2 sm:col-span-2 sm:mt-0'>
          <select
            id='priority-level'
            name='priority-level'
            autoComplete='priority-level'
            className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:leading-6'
          >
            <option>-- Select Priority Level --</option>
            <option>Critical</option>
            <option>Very High</option>
            <option>High</option>
          </select>
        </div>
      </div>

      <div className='sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6'>
        <label
          htmlFor='status'
          className='block font-medium leading-6 text-gray-900 sm:pt-1.5 text-right'
        >
          Status
        </label>
        <div className='mt-2 sm:col-span-2 sm:mt-0'>
          <select
            id='status'
            name='status'
            autoComplete='status'
            className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:leading-6'
          >
            <option>-- Select Status --</option>
            <option>Open</option>
            <option>In Progress</option>
            <option>Reviewed</option>
          </select>
        </div>
      </div>

      <div className='sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6'>
        <label
          htmlFor='action-plan'
          className='block font-medium leading-6 text-gray-900 sm:pt-1.5 text-right'
        >
          Action Plan
        </label>
        <div className='mt-2 sm:col-span-2 sm:mt-0'>
          <Todo initialItems={[]} />
        </div>
      </div>

      <div className='sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6'>
        <label
          htmlFor='standards'
          className='block font-medium leading-6 text-gray-900 sm:pt-1.5 text-right'
        >
          Standards
        </label>
        <div className='mt-2 sm:col-span-2 sm:mt-0'>
          <AutocompleteTags suggestions={standards} />
        </div>
      </div>

      <div className='sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6'>
        <label
          htmlFor='policy-level'
          className='block font-medium leading-6 text-gray-900 sm:pt-1.5 text-right'
        >
          Policy Level
        </label>
        <div className='mt-2 sm:col-span-2 sm:mt-0'>
          <AutocompleteTags suggestions={policies} />
        </div>
      </div>

      <div className='sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6'>
        <label
          htmlFor='assignee'
          className='block font-medium leading-6 text-gray-900 sm:pt-1.5 text-right'
        >
          Assignees
        </label>
        <div className='mt-2 sm:col-span-2 sm:mt-0'>
          <AutocompleteTags suggestions={assignee} />
        </div>
      </div>

      <div className='sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6'>
        <label
          htmlFor='due-date'
          className='block font-medium leading-6 text-gray-900 sm:pt-1.5 text-right'
        >
          Due Date
        </label>
        <div className='mt-2 sm:col-span-2 sm:mt-0'>
          <div className='w-1/2'>
            <DatePicker
              theme='light'
              primaryColor={'purple'}
              useRange={false}
              value={dueDate}
              onChange={handleDueDateChange}
              displayFormat={'DD/MM/YYYY'}
              asSingle={true}
            />
          </div>
        </div>
      </div>

      <div className='sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6'>
        <label
          htmlFor='attachments'
          className='block font-medium leading-6 text-gray-900 sm:pt-1.5 text-right'
        >
          Upload attachments
        </label>
        <div className='mt-2 sm:col-span-2 sm:mt-0'>
          <div className='flex max-w-2xl justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10'>
            <div className='text-center'>
              <svg
                className='mx-auto h-12 w-12 text-gray-300'
                viewBox='0 0 24 24'
                fill='currentColor'
                aria-hidden='true'
              >
                <path
                  fillRule='evenodd'
                  d='M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z'
                  clipRule='evenodd'
                />
              </svg>
              <div className='mt-4 flex leading-6 text-gray-600'>
                <label
                  htmlFor='file-upload'
                  className='relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500'
                >
                  <span>Upload a file</span>
                  <input id='file-upload' name='file-upload' type='file' className='sr-only' />
                </label>
                <p className='pl-1'>or drag and drop</p>
              </div>
              <p className='text-xs leading-5 text-gray-600'>PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
        </div>
      </div>

      <div className='sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:py-6'>
        <label
          htmlFor='comments'
          className='block font-medium leading-6 text-gray-900 sm:pt-1.5 text-right'
        >
          Comments
        </label>
        <div className='mt-2 sm:col-span-2 sm:mt-0'>
          <textarea
            placeholder='Enter comments'
            id='comments'
            name='comments'
            rows={3}
            className='block w-full max-w-2xl rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6'
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default Details;
