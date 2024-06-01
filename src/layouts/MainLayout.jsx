import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {
    return (
        <>
            <Navbar/>
            <Outlet/>
            <Footer/>   
            <Toaster/>
        </>
    );
};

export default MainLayout;