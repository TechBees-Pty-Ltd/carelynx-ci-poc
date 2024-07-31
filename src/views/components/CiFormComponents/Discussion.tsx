import React, { useState } from 'react';

interface Comment {
  id: number;
  author: string;
  date: string;
  profileImg: string;
  text: string;
}

const comments: Comment[] = [
  {
    id: 1,
    author: 'Michael Gough',
    date: 'Feb. 8, 2022',
    profileImg: 'https://flowbite.com/docs/images/people/profile-picture-2.jpg',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. 🎉 Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 🌟 Ut enim ad nim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 🚀 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 🏖️  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 😄  Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. 🐱.'
  },
  {
    id: 2,
    author: 'Jese Leos',
    date: 'Feb. 12, 2022',
    profileImg: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
    text: 'Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. 🍕 Integer in mauris eu nibh uismod gravida. 🚴'
  },
  {
    id: 3,
    author: 'Bonnie Green',
    date: 'Mar. 12, 2022',
    profileImg: 'https://flowbite.com/docs/images/people/profile-picture-3.jpg',
    text: 'Phasellus libero mauris, aliquam eu, pulvinar vel, vulputate eu, tortor. 🐶 Praesent dapibus, neque id cursus faucibus, tortor neque egestas uguae, eu vulputate magna eros eu erat. 🎈  Aliquam erat volutpat. 🌺'
  },
  {
    id: 4,
    author: 'Helene Engels',
    date: 'Jun. 23, 2022',
    profileImg: 'https://flowbite.com/docs/images/people/profile-picture-4.jpg',
    text: 'TNam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus. 🐾 Phasellus ultrices nulla quis nibh. Quisque a lectus. 🍔 Donec onsectetuer ligula vulputate sem tristique cursus. 🌸 Na nulla quam, gravida non, commodo a, sodales sit amet, nisi. 👾'
  }
];

const Discussion: React.FC = ({ showNotificationHandler }) => {
  const [comment, setComment] = useState<string>('');
  const [dropdowns, setDropdowns] = useState<{ [key: number]: boolean }>({});

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle comment submission logic here
    setComment('');
    showNotificationHandler();
  };

  const toggleDropdown = (id: number) => {
    setDropdowns((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section className='bg-white dark:bg-gray-900 py-8 lg:py-10 antialiased'>
      <div className='max-w-l text-justify'>
        <div className='flex justify-between items-center mb-6'>
          <h2 className='text-lg lg:text-2xl font-bold text-gray-900 dark:text-white'>
            Discussion (20)
          </h2>
        </div>
        <form className='mb-6' onSubmit={handleCommentSubmit}>
          <div className='py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700'>
            <label htmlFor='comment' className='sr-only'>
              Your comment
            </label>
            <textarea
              id='comment'
              rows={6}
              className='px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800'
              placeholder='Write a comment...'
              value={comment}
              onChange={handleCommentChange}
              required
            />
          </div>
          <button
            type='submit'
            className='inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-purple-700 rounded-lg focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-900 hover:bg-purple-800'
          >
            Post comment
          </button>
        </form>
        {comments.map((comment) => (
          <article key={comment.id} className='p-6 mb-3 bg-white rounded-lg dark:bg-gray-900'>
            <footer className='flex justify-between items-center mb-2'>
              <div className='flex items-center'>
                <p className='inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold'>
                  <img
                    className='mr-2 w-6 h-6 rounded-full'
                    src={comment.profileImg}
                    alt={comment.author}
                  />
                  {comment.author}
                </p>
                <p className='text-sm text-gray-600 dark:text-gray-400'>
                  <time dateTime={comment.date} title={comment.date}>
                    {comment.date}
                  </time>
                </p>
              </div>
              <div className='relative'>
                <button
                  onClick={() => toggleDropdown(comment.id)}
                  className='inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
                  type='button'
                >
                  <svg
                    className='w-4 h-4'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='currentColor'
                    viewBox='0 0 16 3'
                  >
                    <path d='M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z' />
                  </svg>
                  <span className='sr-only'>Comment settings</span>
                </button>
                {dropdowns[comment.id] && (
                  <div className='absolute right-0 mt-2 z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600'>
                    <ul
                      className='py-1 text-sm text-gray-700 dark:text-gray-200'
                      aria-labelledby={`dropdownComment${comment.id}Button`}
                    >
                      <li>
                        <a className='block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
                          Edit
                        </a>
                      </li>
                      <li>
                        <a className='block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
                          Remove
                        </a>
                      </li>
                      <li>
                        <a className='block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
                          Report
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </footer>
            <p className='text-gray-500 dark:text-gray-400'>{comment.text}</p>
            <div className='flex items-center mt-4 space-x-4'>
              <button
                type='button'
                className='flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium'
              >
                <svg
                  className='mr-1.5 w-3.5 h-3.5'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 20 18'
                >
                  <path
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z'
                  />
                </svg>
                Reply
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Discussion;
