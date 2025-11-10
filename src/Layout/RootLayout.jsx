import React from 'react';

import Navber from '../Component/Navber';
import { Outlet } from 'react-router';

const RootLayout = () => {
    return (
        <div>
          <Navber></Navber>
          <Outlet></Outlet>
          <footer></footer>
        </div>
    );
};

export default RootLayout;