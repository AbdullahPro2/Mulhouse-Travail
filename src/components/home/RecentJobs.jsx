import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { getJobs } from '../../features/jobs/apiJobs';
import { NavLink } from 'react-router-dom';
import PageHeading from '../../layout/PageHeading';

function RecentJobs() {
  const {
    isLoading,
    data: jobs = [],
    error,
  } = useQuery({
    queryKey: ['jobs'],
    queryFn: getJobs,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading jobs</div>;

  const recentJobs = jobs.slice(0, 4);

  function calculateDaysSinceCreated(createdAt) {
    const createdDate = new Date(createdAt);
    const currentDate = new Date();
    const timeDifference = currentDate - createdDate;
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    return daysDifference;
  }

  return (
    <div className="my-8 p-6">
      <PageHeading text="Emplois les plus récents" />
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        {recentJobs.map((job) => (
          <div
            key={job.id}
            className="w-full overflow-hidden rounded-lg bg-white shadow-2xl"
          >
            <div className="flex h-full flex-col justify-between p-6">
              <div>
                <h3 className="mb-2 text-xl font-semibold text-blue-900">
                  {job.jobTitle}
                </h3>
                <div className="mb-1 text-sm text-gray-600">
                  {job.companyName}
                </div>
                <div className="mb-4 text-sm text-gray-600">{job.location}</div>
                <span className="mb-4 inline-block rounded bg-blue-50 p-1 px-2 text-sm text-gray-600">
                  À partir de {job.jobSalary}€ par mois
                </span>
                <ul className="mb-4 list-inside list-disc text-gray-700">
                  {job.strong.split(',').map((point, index) => (
                    <li key={index} className="font-light italic">
                      {point.trim()}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-between">
                <p className="text-sm text-gray-600">Annonce</p>
                <p className="text-sm text-gray-600">
                  Offre publiée il y a{' '}
                  {calculateDaysSinceCreated(job.created_at) === 0
                    ? '1'
                    : calculateDaysSinceCreated(job.created_at)}{' '}
                  jour{calculateDaysSinceCreated(job.created_at) > 1 ? 's' : ''}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 text-center">
        <NavLink
          to="/jobs"
          className="mt-5 inline-block w-fit  bg-[#1b64ac] px-2 py-[5px] text-xs font-semibold  text-white sm:text-lg lg:px-4 lg:py-3 lg:text-xl xl:px-5  "
        >
          View All Jobs
        </NavLink>
      </div>
    </div>
  );
}

export default RecentJobs;
