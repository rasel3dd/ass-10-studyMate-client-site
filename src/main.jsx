import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from './Layout/RootLayout';
import Home from './Page/Home';
import Login from './Page/Login';
import Register from './Page/Register';
import StudyCard from './Component/StudyCard';
import Profile from './Page/MyProfile';
import AuthProvider from './Provider/AuthProvider';
import StudyList from './Page/StudyList';
import PartnerProfile from './Page/PartnerProfile';
import MyCollection from './Page/MyCollection';


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
        path: '/partner',
        Component: StudyCard,
      },
      {
        path: '/profile',
        Component: Profile,
      },
      {
        path: '/studyList',
        Component: StudyList,
      },
      {
        path: '/partner/:id',
        Component: PartnerProfile,
      },
      {
        path: '/connections',
        Component: MyCollection,
      }

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </StrictMode>,
)
