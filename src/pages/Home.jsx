import React from 'react';
import Banner from '../components/Banner/Banner';
import Products from '../components/products/Products';
import { useLoaderData } from 'react-router-dom';


const Home = () => {
    const data = useLoaderData();
    return (
        <div className=''>
            <Banner/>

            <h2 className='text-3xl my-10 text-center'>Our Products</h2>
            <Products data={data}/>
        </div>
    );
};

export default Home;