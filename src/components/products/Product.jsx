import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({product}) => {
    const {id, title, description, img, price} = product;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <p>{price}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">
                <Link to={`/product/${id}`} >See Details</Link>
            </button>
          </div>
        </div>
      </div>
    );
};

export default Product;