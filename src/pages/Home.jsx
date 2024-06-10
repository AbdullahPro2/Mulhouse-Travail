import React from 'react';
import HeroSection from '../components/home/HeroSection';
import Statistics from '../components/home/Statistics';
import CVSection from '../components/home/CVSection';
import RecentJobs from '../components/home/RecentJobs';

function Home() {
  return (
    <div className="">
      <HeroSection />
      <Statistics />
      <RecentJobs />
      <CVSection />
    </div>
  );
}

export default Home;
