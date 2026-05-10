import React from 'react';
import { useState, useEffect, useRef } from 'react';

const ModalPopUp = () => {
  const [open, setOpen] = useState(false);
  const modalRef = useRef();

  useEffect(() => {
    const handleClose = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    const handleKeyClose = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClose);
    document.addEventListener('keydown', handleKeyClose);

    return () => {
      document.removeEventListener('mousedown', handleClose);
      document.removeEventListener('keydown', handleKeyClose);
    };
  });
  return (
    <div>
      <button onClick={() => setOpen(true)}>Open</button>
      <div
        ref={modalRef}
        style={{
          display: open ? 'block' : 'none',
          position: 'absolute',
          zIndex: '99',
          top: '35%',
          width: '50%',
          left: '30%',
          backgroundColor: 'grey',
          padding: '10px',
        }}
      >
        <h6>This is a modal pop</h6>
      </div>
    </div>
  );
};
export default ModalPopUp;
