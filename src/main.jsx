import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './Root/Root'
import Banner from './components/Banner/Banner'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import AuthProvider from './components/AuthProvider/AuthProvider'
import toast, { Toaster } from 'react-hot-toast';
import { HelmetProvider } from 'react-helmet-async';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import UpdateProfile from './components/UpdateProfile/UpdateProfile'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import ErrorPage from './components/ErrorPage/ErrorPage'
import Details from './components/details/details'
import SingleData from './components/Cards/SingleData'
// ..
AOS.init();


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Banner></Banner>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/details',
        element: <Details></Details>,
      },
      {
        path: '/singleData',
        element: (
          <PrivateRoute>
            <SingleData></SingleData>
          </PrivateRoute>
        ),
      },
      {
        path: '/updateProfile',
        element: (
          <PrivateRoute>
            <UpdateProfile></UpdateProfile>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <HelmetProvider>
       <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
    </HelmetProvider>
  </>
);
