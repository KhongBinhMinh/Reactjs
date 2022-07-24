import React from 'react'

import {Link} from 'react-router-dom' 
import { ProductType } from '../../types/Product'

type ProductProps = {
  products: ProductType[]
}

const Products = (props: ProductProps) => {
  
  return (
    <div>
  <link rel="stylesheet" href="https://cdn.tailgrids.com/tailgrids-fallback.css" />
  <div className="  bg-[#F3F4F6] ">
    <div className="container">
      <h3 className="text-gray-700 text-2xl font-medium">SẢN PHẨM IPHONE</h3><hr />
        <span className="mt-3 text-sm text-gray-500">Điện thoại</span>
      <div className="mx-auto ">
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
          {props.products?.map(item =>{
            return(
              
              <div className="bg-white rounded-lg overflow-hidden mb-10">
              <img src={item.img} alt="image" className="w-full max-auto  hover:scale-110 transition duration-300 ease-in-out
" />
              <div className=" text-center">
                <h3>
                  <Link to={`/products/${item._id}`} className="
                        font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block
                        hover:text-primary
                        ">
                    
                    {item.name} 
                  </Link>
                </h3>
                <p className="text-base text-body-color leading-relaxed mb-7">
                  {item.price}
                </p>
                <Link to={`/products/${item._id}`} className="
                     inline-block
                     py-2
                     px-7
                     border border-[#E5E7EB]
                     rounded-full
                     text-base text-body-color
                     font-medium
                     hover:border-primary hover:bg-primary hover:text-white
                     transition
                     ">
                  Xem chi tiết
                </Link>
              </div>
            </div>
            )
          })}
        </div>
      
        
      </div>
    </div>
  </div>
</div>


  )
}
export default Products;