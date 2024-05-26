import React from 'react'
import Product from './Product';

const Products = ({data}) => {

  

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10 justify-items-center'>
      {
        data?.map(product => <Product key={product.id} product={product}/>)
      }
    </div>
  )
}

export default Products;