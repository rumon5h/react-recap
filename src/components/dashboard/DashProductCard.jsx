import React from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const DashProductCard = ({product,handleDeletedProduct}) => {
    const {id, title, description, img, price, brand} = product;


    const handleDeleteProduct = async() => {

        const res = await fetch(`http://localhost:3000/shoes/${id}`, {
            method: 'DELETE',
        });

        if(res.ok){
         
            toast.success("Product deleted successfully");
            handleDeletedProduct(id);
        }

        console.log(res);

    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <p>${price}</p>
          <div className="flex gap-4 align-bottom ">
                <button onClick={handleDeleteProduct} className="btn  bg-red-500 text-white">Delete</button>
                <button className="btn  bg-yellow-400 text-white"><Link to={""}>Update</Link></button>
                <button className="btn  bg-blue-600 text-white"><Link to={""}>See Details</Link></button>
            </div>
        </div>
      </div>
    );
};

export default DashProductCard;