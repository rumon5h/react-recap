import React from 'react';
import { Link } from 'react-router-dom';

const DashProductCard = ({product}) => {
    const {id, title, description, img, price, brand} = product;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <p>${price}</p>
          <div className="flex gap-4 align-bottom ">
                <button className="btn  bg-red-500 text-white">Delete</button>
                <button className="btn  bg-yellow-400 text-white"><Link to={""}>Update</Link></button>
                <button className="btn  bg-blue-600 text-white"><Link to={""}>See Details</Link></button>
            </div>
        </div>
      </div>
    );
};

export default DashProductCard;