import React from 'react';

import Navber from '../Component/Navber';
import { Outlet } from 'react-router';
import Footer from '../Component/Footer';

const RootLayout = () => {
    return (
        <div>
          <nav>
            <Navber></Navber>
          </nav>
          
         <main>
           <Outlet></Outlet>
         </main>
          
          <footer>
            <Footer></Footer>
          </footer>
        </div>
    );
};

export default RootLayout;