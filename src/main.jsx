import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from './Layout/RootLayout';
import Home from './Page/Home';
import Login from './Page/Login';
import Register from './Page/Register';
import AuthProvider from './Provider/AuthProvider';
import PartnerProfile from './Page/PartnerProfile';
import MyCollection from './Page/MyCollection';
import CreatePartnerProfile from './Page/CreatePartnerProfile';
import PrivateRoute from './Provider/PrivateRoute';
import MyProfile from './Page/MyProfile';
import FIndPartner from './Page/FIndPartner';


const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children:[
      {
        index: true,
        Component: Home,
      },
      {
        path: '/login',
        Component: Login,
      },
      {
        path: '/register',
        Component: Register,

      },
      
      {
        path: '/profile',
        element: <PrivateRoute>
          <MyProfile></MyProfile>
        </PrivateRoute>,
      },
     
      {
        path: '/partner/:id',
        element: <PrivateRoute>
          <PartnerProfile></PartnerProfile>
        </PrivateRoute>,
      },
      {
        path: '/connections',
        element: <PrivateRoute>
          <MyCollection></MyCollection>
        </PrivateRoute>,
      },
      {
        path: '/createProfile',
        element: <PrivateRoute> 
          <CreatePartnerProfile></CreatePartnerProfile>
        </PrivateRoute>,

      },
      {
        path: '/find-partner',
        element: <FIndPartner></FIndPartner>,
      }

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </StrictMode>,
)
