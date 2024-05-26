import React from 'react';
import toast from 'react-hot-toast';

const AddProduct = () => {

    const handleCreateNewProduct = async (e) => {
        e.preventDefault();

        const form = e.target;
        const title = form.title.value;
        const description = form.description.value;
        const price = form.price.value;
        const brand = form.brand.value;
        const img = form.img.value;
        const id = form.id.value;

        const newProduct = {title, description, price, brand, img, id};

        const shouldAdd = window.confirm(`Are you sure you want to add?`);
        if(!shouldAdd) return;
        
        await fetch('http://localhost:3000/shoes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        }).then(res => res.json())
        .then(data => {

            toast.success('Product added successfully');
            form.reset();
        })

    }
    return (
        <form
        className=''
        onSubmit={handleCreateNewProduct}
        >
            <h1 className='text-3xl text-center mt-10'>Add new Product</h1>
            <div className='grid gap-5 justify-center mt-10'>
            <input required type="text" placeholder="Enter title" 
            name='title'
            className="input input-bordered md:w-[350px] lg:w-[400px]" />
             <input required type="text" placeholder="Enter description" 
            name='description'
            className="input input-bordered md:w-[350px] lg:w-[400px]" />
             <input required type="number" placeholder="Enter price" 
            name='price'
            className="input input-bordered md:w-[350px] lg:w-[400px]" />
             <input required type="text" placeholder="Enter brand name" 
            name='brand'
            className="input input-bordered md:w-[350px] lg:w-[400px]" />
             <input required type="text" placeholder="Enter image link" 
            name='img'
            className="input input-bordered md:w-[350px] lg:w-[400px]" />
             <input required type="text" placeholder="Enter id" 
            name='id'
            className="input input-bordered md:w-[350px] lg:w-[400px]" />

            <button type='submit' className='btn btn-success text-white'>Submit</button>
            </div>
        </form>
    );
};

export default AddProduct;