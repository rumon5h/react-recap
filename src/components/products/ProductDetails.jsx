import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ProductDetails = () => {
    const { id, title, description, brand, price, img } = useLoaderData();

    
    return (<div className="card lg:card-side bg-base-100 shadow-xl m-10">
        <figure><img src={img} alt="Album" /></figure>
        <div className="flex flex-col justify-evenly">
            <div>
            <h2 className="card-title">{title}</h2>
            <p className='mt-10'>{brand}</p>
            <p className='mt-10'>{price}</p>
            <p className='mt-10'>{description}</p>
            </div>
            <div className="flex gap-4 align-bottom ">
                <button className="btn  btn-primary">Listen</button>
                <button className="btn  btn-primary">Listen</button>
                <button className="btn  btn-primary">Listen</button>
            </div>
        </div>
    </div>
    );
};

export default ProductDetails;