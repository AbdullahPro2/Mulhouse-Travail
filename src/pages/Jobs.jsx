import React, { useEffect, useState } from 'react';
import { getJobs } from '../features/jobs/apiJobs';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../layout/Spinner';
import JobItem from '../features/jobs/JobItem';
import PageHeading from '../layout/PageHeading';
import { Outlet, useLocation } from 'react-router-dom';

function Jobs() {
  const [selectedJob, setSelectedJob] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const location = useLocation();

  const {
    isLoading,
    data: jobs,
    error,
  } = useQuery({
    queryKey: ['jobs'],
    queryFn: getJobs,
  });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!location.pathname.includes('/job/')) {
      setSelectedJob(false);
    }
  }, [location.pathname]);

  if (isLoading) return <Spinner />;

  return (
    <div className="p-5">
      <PageHeading text="Offres D'emploi " />
      <div className="gap-10 md:flex md:justify-between">
        <div>
          {(!selectedJob || !isMobile) &&
            jobs.map((job) => (
              <JobItem
                key={job.id}
                id={job.id}
                jobTitle={job.jobTitle}
                companyName={job.companyName}
                location={job.jobLocation}
                salary={job.jobSalary}
                workTime={job.jobWorkTime}
                description={job.jobDescription}
                candidateProfile={job.jobCandidateProfile}
                candidateQualities={job.jobCandidateQualities}
                contractType={job.jobContractType}
                companyDescription={job.companyDescription}
                strong={job.strong}
                created_at={job.created_at}
                onSetSelectedJob={setSelectedJob}
              />
            ))}
        </div>
        <Outlet context={[setSelectedJob]} />
      </div>
    </div>
  );
}

export default Jobs;
