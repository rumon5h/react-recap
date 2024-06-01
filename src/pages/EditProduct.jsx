import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const EditProduct = () => {

    const {id: oldId, title: oldTitle, description: oldDescription, img: oldImg, price: oldPrice, brand: oldBrand} = useLoaderData();

    const [title, setTitle] = useState(oldTitle);
    const [description, setDescription] = useState(oldDescription);
    const [price, setPrice] = useState(oldPrice);
    const [brand, setBrand] = useState(oldBrand);
    const [img, setImg] = useState(oldImg);




    const handleUpdateProduct = async(e) => {
        e.preventDefault();

        const form = e.target;
        const title = form.title.value;
        const description = form.description.value;
        const price = form.price.value;
        const brand = form.brand.value;
        const img = form.img.value;

        const newProduct = {title, description, price, brand, img};

        const shouldUpdate = window.confirm(`Are you sure you want to update?`);
        if(!shouldUpdate) return;

        await fetch(`http://localhost:5000/shoes/${oldId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        }).then(res => res.json())
        .then(data => {
            console.log(data);

            if(data){
                toast.success('Product updated successfully');
            }
        })

    }   
    
    return (
        <form
        className=''
        onSubmit={handleUpdateProduct}
        >
            <h1 className='text-3xl text-center mt-10'>Update Product</h1>
            <div className='grid gap-5 justify-center mt-10'>
            <input required type="text" placeholder="Enter title" 
            name='title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="input input-bordered md:w-[350px] lg:w-[400px]" />
             <input required type="text" placeholder="Enter description" 
            name='description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="input input-bordered md:w-[350px] lg:w-[400px]" />
             <input required type="number" placeholder="Enter price" 
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            name='price'
            className="input input-bordered md:w-[350px] lg:w-[400px]" />
             <input required type="text" placeholder="Enter brand name" 
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            name='brand'
            className="input input-bordered md:w-[350px] lg:w-[400px]" />
             <input required type="text" placeholder="Enter image link" 
            value={img}
            onChange={(e) => setImg(e.target.value)}
            name='img'
            className="input input-bordered md:w-[350px] lg:w-[400px]" />
             <input required type="text" placeholder="Enter id" 
             value={id}
            onChange={(e) => setId(e.target.value)}
            name='id'
            className="input input-bordered md:w-[350px] lg:w-[400px]" />

            <button type='submit' className='btn btn-success text-white'>Submit</button>
            </div>
        </form>
    );
};

export default EditProduct;