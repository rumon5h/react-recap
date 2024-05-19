import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const {error, status}= useRouteError();

    return (
        <div className='flex flex-col justify-center items-center h-screen text-center py-32'>
            <h1 className='text-6xl text-red-500 mb-8'>Error 404</h1>
            <h1 className='text-red-400 text-3xl'>{error?.message}</h1>
            <button className='custom-btn mt-8 text-blue-700 font-bold text-xl'><Link to="/">Go Back</Link></button>
        </div>
    );
};

export default ErrorPage;