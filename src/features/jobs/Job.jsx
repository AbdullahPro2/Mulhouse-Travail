import React from 'react';
import { useOutletContext, useParams } from 'react-router-dom';

function Job() {
  const { id } = useParams();
  const setSelectedJob = useOutletContext();
  return (
    <div>
      Specific Job for job id: {id}
      <button className="md:hidden" onClick={() => setSelectedJob(false)}>
        Back &larr;
      </button>
    </div>
  );
}

export default Job;
