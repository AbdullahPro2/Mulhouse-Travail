import React, { useEffect } from 'react';
import { getJobs } from '../features/jobs/apiJobs';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../layout/Spinner';
import JobItem from '../features/jobs/JobItem';

function Jobs() {
  const {
    isLoading,
    data: jobs,
    error,
  } = useQuery({
    queryKey: ['job'],
    queryFn: getJobs,
  });

  if (isLoading) return <Spinner />;

  return (
    <div className="grid grid-cols-2 gap-5">
      {jobs.map((job) => (
        <JobItem
          jobTitle={job.jobTitle}
          compnayName={job.companyName}
          location={job.jobLocation}
          salary={job.Salary}
          time={job.jobWorkTime}
          description={job.jobDescription}
        />
      ))}
    </div>
  );
}

export default Jobs;
