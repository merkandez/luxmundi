import React from 'react';

const ModalForm = ({ children, onClose }) => {
  return (
    <div style={overlayStyles} onClick={onClose}>
      <div style={modalStyles} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

const overlayStyles = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
};

const modalStyles = {
  padding: '20px',
  borderRadius: '5px',
  width: '400px',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
  position: 'relative',
  zIndex: 1001,
};

export default ModalForm;
