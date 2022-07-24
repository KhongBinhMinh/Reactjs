import React,{useEffect} from 'react'
import {useForm,SubmitHandler}  from 'react-hook-form'
import { useNavigate, useParams } from "react-router-dom";
import { read } from '../../api/product';

type Input = {
  name:string,
  price:number,
  decs:string,
  img:string
}

type EditProps = {
  onUpdate:(products:Input)=>void
}

const Edit = (props: EditProps) => {
  
  const {register,handleSubmit,formState:{errors},reset} = useForm<Input>();
  const {id} = useParams();
  const navigate = useNavigate()

  useEffect(()=>{
      const getProducts= async()=>{
          const{data}= await read(id);
          reset(data)
      }
      getProducts();
  },[])
  const onSubmit :SubmitHandler<Input> = data =>{
    props.onUpdate(data)
    navigate('/list')

  }
  // Call API
  return (
    <div>

     <h1 className="text-center text-2xl font-bold text-gray-800 mb-10">SỬA SẢN PHẨM</h1>


      <div className="block p-6 rounded-lg shadow-lg bg-white max-w-md mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group mb-6">
            <input type="text" {...register('name')} className="form-control block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7"
              placeholder="Name" />
          </div>
          <div className="form-group mb-6">
            <input type="text" {...register('img')} className="form-control block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7"
              placeholder="ảnh" />
          </div>
          <div className="form-group mb-6">
            <input type="text"  {...register('price')} className="form-control block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Price" />
          </div>
          <div className="form-group mb-6">
            <textarea
              className="
          form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
        "

              placeholder="Message" {...register('decs')}
            ></textarea>
          </div>

          <button type="submit" className="
        w-full
        px-6
        py-2.5
        bg-blue-600
        text-white
        font-medium
        text-xs
        leading-tight
        uppercase
        rounded
        shadow-md
        hover:bg-blue-700 hover:shadow-lg
        focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
        active:bg-blue-800 active:shadow-lg
        transition
        duration-150
        ease-in-out">Send</button>
        </form>
      </div>
    </div>
  )
}

export default Edit