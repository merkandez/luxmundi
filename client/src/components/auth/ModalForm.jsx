import React from 'react';
import RegisterForm from './RegisterForm';

const Modal = ({ onClose }) => {
  return (
    <div style={overlayStyles}>
      <div style={modalStyles}>
        <button onClick={onClose} style={closeButtonStyles}>
          X
        </button>
        <RegisterForm onClose={onClose} />
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
};

const modalStyles = {
  backgroundColor: 'white',
  padding: '20px',
  borderRadius: '5px',
  width: '400px',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
};

const closeButtonStyles = {
  position: 'absolute',
  top: '10px',
  right: '10px',
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  fontSize: '16px',
};

export default Modal;
