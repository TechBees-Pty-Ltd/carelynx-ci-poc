import React, { useState } from 'react';
import Modal from './reusables/Modal';
import CiForm from './CiForm';

const Kanban: React.FC = () => {
  const [heading, setHeading] = useState('New CI');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCiId, setSelectedCiId] = useState(null);

  const onClose = () => setIsOpen(false);

  const onSave = (ciData) => {

  }

  const onSelectCard = (ciId) => {
    setHeading('CI Details');
    setSelectedCiId(ciId);
  }

  return ( 
    <>
      <button onClick={() => setIsOpen(true)} type="button" className="inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
        <svg className="-ml-0.5 h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
        </svg>
        New CI
      </button>
      <Modal content={<CiForm ciId={selectedCiId} heading={heading} onClose={onClose} onSave={onSave} />} isOpen={isOpen} />
    </>
  )
}

export default Kanban;