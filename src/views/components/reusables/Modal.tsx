import React, { useState } from 'react';

interface ModalProps {
  content: React.ReactNode;
  heading: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
}

const Modal: React.FC<ModalProps> = ({ content, isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true" style={{ zIndex: 9999 }}>
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all w-full max-w-6xl sm:my-8 sm:mx-6 sm:px-6 sm:py-6">
              <div className="px-4 sm:px-6">
                <div className="mt-3 text-center sm:mt-5">
                  <div className="mt-2">
                    {content}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Modal;