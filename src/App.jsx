import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import Home from '/src/pages/Home';
import Settings from './pages/Settings';
import Jobs from './pages/Jobs';
import PostJob from './pages/PostJob';
import Contact from './pages/Contact';
import About from './pages/About';
import PostedApplications from './pages/PostedApplications';
import Authentication from './pages/Authentication';
import Login from './features/authentication/Login';
import Signup from './features/authentication/Signup';
function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: '/Mulhouse-Travail/',
          element: <Home />,
        },
        {
          path: '/Mulhouse-Travail/jobs',
          element: <Jobs />,
        },
        {
          path: '/Mulhouse-Travail/postjob',
          element: <PostJob />,
        },
        {
          path: '/Mulhouse-Travail/your-applications',
          element: <PostedApplications />,
        },

        {
          path: '/Mulhouse-Travail/authentication/login',
          element: <Authentication />,
        },
        {
          path: '/Mulhouse-Travail/authentication/signup',
          element: <Authentication />,
        },

        {
          path: '/Mulhouse-Travail/settings',
          element: <Settings />,
        },

        {
          path: '/Mulhouse-Travail/contact',
          element: <Contact />,
        },
        {
          path: '/Mulhouse-Travail/about',
          element: <About />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
