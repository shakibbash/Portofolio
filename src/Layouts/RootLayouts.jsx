import React from 'react';
import Navbar from '../shared/Navbar';
import { Outlet, useNavigation } from 'react-router';


import Footer from '../shared/Footer';
import Loading from '../componets/Loading';

const RootLayouts = () => {
  const { state } = useNavigation();
    return (
        <div className='flex flex-col min-h-screen   '>
            <Navbar></Navbar>
           <main className='flex-grow  '>
        {state === 'loading' ? <Loading /> : <Outlet />}
      </main>
          <footer>
              <Footer></Footer>
          </footer>
        </div>
    );
};

export default RootLayouts;