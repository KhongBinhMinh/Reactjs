import React from 'react'
import { Link } from 'react-router-dom'
import { ProductType } from '../../types/Product';

type ProductManagerRemove = {
    products: ProductType[];
    onRemove: (id: number) => void
}

const List = (props: ProductManagerRemove) => {

    return (
        <div>
            
           
            
      <h1 className="text-center text-2xl font-bold text-gray-500 mb-10">DANH SÁCH SẢN PHẨM</h1>
            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                        <button className='pl-3'><a href="/add">Thêm mới</a></button>
                            <table className="min-w-full text-center table table-bordered">  
                                <thead className="border-b">
                                    <tr>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 border">
                                            STT
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 border" >
                                            Name
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 border">
                                            Ảnh sản phẩm
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 border">
                                            Price
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 border">
                                            Mô tả
                                        </th>
                                        <th scope="col-2" className="text-sm font-medium text-gray-900 px-6 py-4 border">
                                            Chức năng
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {props.products.map((item, index) => {
                                        return <tr>
                                            <td className='border text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap'>{index + 1}</td>
                                            <td className='border text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap'>{item.name}</td>
                                            <td className='border text-sm text-gray-900'><img className='mx-auto' src={item.img} alt="" width="150px"/></td>
                                            <td className='border text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap'>{item.price}</td>
                                            <td className='border text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap'>{item.decs}</td>

                                            <button className='p-5 py-4' onClick={() => props.onRemove(item._id)}><i className="fa-solid fa-trash-can py-2"></i></button>
                                            <Link to={`/products/${item._id}/edit`}><i className="fa-solid fa-pen-to-square py-10"></i></Link>
                                        </tr>
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default List;