import ListItem from './ListItem';
import homeIcon from '../../assets/navbar/dashboard.png';
import aboutUsIcon from '../../assets/navbar/aboutUs.png';
import contactUsIcon from '../../assets/navbar/contactUs.png';
import settingsIcon from '../../assets/navbar/recruiting.png';
import appliedJobsIcon from '../../assets/navbar/appliedApplication.png';
import jobsIcon from '../../assets/navbar/radar.png';
import postJobIcon from '../../assets/navbar/recruiting.png';

function List({ isOpen, setIsOpen }) {
  return (
    <div className="w-full ">
      <ul className="flex flex-col gap-10 ">
        <ListItem
          to="/"
          list="DashBoard"
          icon={homeIcon}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          delay="300"
        />
        <ListItem
          to="/jobs"
          list="Discover Jobs"
          icon={jobsIcon}
          isOpen={isOpen}
          delay="400"
          setIsOpen={setIsOpen}
        />
        <ListItem
          to="/postjob"
          list="Employer Portal"
          icon={postJobIcon}
          isOpen={isOpen}
          delay="500"
          setIsOpen={setIsOpen}
        />
        <ListItem
          to="/your-applications"
          list="Applied Jobs"
          icon={appliedJobsIcon}
          isOpen={isOpen}
          delay="600"
          setIsOpen={setIsOpen}
        />
        <ListItem
          to="/settings"
          list="Settings"
          icon={settingsIcon}
          isOpen={isOpen}
          delay="700"
          setIsOpen={setIsOpen}
        />
        <ListItem
          to="/contact"
          list="Contact us"
          icon={contactUsIcon}
          isOpen={isOpen}
          delay="800"
          setIsOpen={setIsOpen}
        />
        <ListItem
          to="/about"
          list="About us"
          icon={aboutUsIcon}
          isOpen={isOpen}
          delay="900"
          setIsOpen={setIsOpen}
        />
      </ul>
    </div>
  );
}

export default List;
