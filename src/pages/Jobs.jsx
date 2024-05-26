import React, { useEffect } from 'react';
import { getJobs } from '../services/apiJobs';

function Jobs() {
  useEffect(function () {
    getJobs().then((data) => console.log(data));
  }, []);
  return <div>Jobs</div>;
}

export default Jobs;
