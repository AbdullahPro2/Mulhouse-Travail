import React from 'react';

const CvItem = React.forwardRef(({ heading, children, nom }, ref) => {
  return (
    <div className="mt-8" id={nom} ref={ref}>
      <h1 className="mb-4 text-2xl font-semibold text-blue-900">{heading}</h1>
      <div className="text-gray-700">{children}</div>
    </div>
  );
});

export default CvItem;
