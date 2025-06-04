import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header';
import Loader from '../Components/Loader';
import Footer from '../Components/Footer';


const Homelayout = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000); // Simulate 1 second loading

        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
           
            <Header />
             
            {loading ? <Loader></Loader> : <Outlet />}
            <Footer/>
        </div>
    );
};

export default Homelayout;