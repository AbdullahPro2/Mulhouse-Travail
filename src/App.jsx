import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import AppLayout from './layout/AppLayout';
import Home from '/src/pages/Home';
import Settings from './pages/Settings';
import Jobs from './pages/Jobs';
import PostJob from './pages/PostJob';
import Contact from './pages/Contact';
import About from './pages/About';
import PostedApplications from './pages/PostedApplications';
import Login from './features/authentication/Login';
import Signup from './features/authentication/Signup';
import CV from './pages/CV';
import Thankyou from './components/contact/Thankyou';
function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/jobs',
          element: <Jobs />,
        },
        {
          path: '/postjob',
          element: <PostJob />,
        },
        {
          path: '/your-applications',
          element: <PostedApplications />,
        },

        {
          path: '/login',
          element: <Login />,
        },
        {
          path: '/signup',
          element: <Signup />,
        },

        {
          path: '/settings',
          element: <Settings />,
        },

        {
          path: '/contact',
          element: <Contact />,
        },
        {
          path: '/about',
          element: <About />,
        },
        {
          path: '/comment-rédiger-cv',
          element: <CV />,
        },
        {
          path: '/merci-pour-contactez',
          element: <Thankyou />,
        },
      ],
    },
  ]);
  router.subscribe((location) => {
    window.scrollTo(0, 0);
  });
  return <RouterProvider router={router} />;
}

export default App;
