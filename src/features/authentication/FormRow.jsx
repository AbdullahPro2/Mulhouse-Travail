import React from 'react';

function FormRow({ label, error, children }) {
  return (
    <div>
      {label && <label htmlFor={children.props.id}>{label}</label>}
      {children}
      {error && <p>Error Component</p>}
    </div>
  );
}

export default FormRow;
