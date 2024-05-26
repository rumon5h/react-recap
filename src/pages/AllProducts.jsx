import React, { useEffect, useState } from 'react';
import DashProductCard from '../components/dashboard/DashProductCard';

const AllProducts = () => {

    const [products, setProducts] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3000/shoes")
        .then(res => res.json())
        .then(data => {
            setProducts(data)
        })
    },[])
    return (
        <div>
            <h1 className='text-3xl text-center mt-4'>All Products</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10 justify-items-center'>
                {
                    products?.map(product => <DashProductCard key={product.id} product={product}/>)
                }
            </div>
        </div>
    );
};

export default AllProducts;