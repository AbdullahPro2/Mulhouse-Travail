import React from 'react';

function FormRow({ label, error, children }) {
  return (
    <div className="mb-3">
      {label && (
        <label
          htmlFor={children.props.id}
          className="mb-1 block text-xs font-bold uppercase tracking-wide text-gray-700 md:text-sm"
        >
          {label}{' '}
        </label>
      )}
      {children}
      {error && <p>Error Component</p>}
    </div>
  );
}

export default FormRow;
