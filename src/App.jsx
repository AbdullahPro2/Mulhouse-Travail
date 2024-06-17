import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

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
import { Provider } from 'react-redux';
import store from './store';
import Job from './features/jobs/Job';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

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
          path: 'jobs',
          element: <Jobs />,
          children: [{ path: ':id', element: <Job /> }],
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
          path: '/mercipourcontactez',
          element: <Thankyou />,
        },
      ],
    },
  ]);
  router.subscribe((location) => {
    window.scrollTo(0, 0);
  });
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={true} />
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
