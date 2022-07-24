import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { signup } from './api/user'
import Signup from './page/layout/Signup'
import { ProductType } from './types/Product'
import { Route, Routes } from 'react-router-dom'
import Signin from './page/layout/Signin'
import Websitelayout from './page/layout/WebsiteLayout'
import List from './page/layout/List'
import Add from './page/layout/Add'
import Edit from './page/layout/Edit'
import Products from './page/layout/Products'
import { create, list, remove, update } from './api/product'
import Dashboard from './page/layout/Dashboard'
import ProductDetail from './page/layout/ProductDetail'

function App() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [users, setUser] = useState<ProductType[]>([])

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await list();
      console.log(data)
      setProducts(data);
    }
    getProducts();
  }, []);
  // xóa
  const onHandleremove = async (id: number) => {
    remove(id)
    setProducts(products.filter(item => item._id !== id));
  }
  const onhandlerAdd = async(product:any)=>{
    const {data} = await create (product)
    setProducts([...products,data])
  }
 // siginup
 const onHandleSignup = async (user:any) =>{
  const {data} = await signup(user)
  setUser([...users, data]);
}
  const onhanderUpdate = async (product:ProductType)=>{
    try {
      const {data} = await update (product);
      setProducts(products.map(item => item._id === data._id ? product : item))
    } catch (error) {        
    }
}
  return (
    <div className="App">
      <Routes>
        <Route path ="/" element={<Websitelayout products={products} />} />
        <Route path ="/list" element={<List products={products} onRemove={onHandleremove}/>} />
        <Route path='/add' element={<Add name='' onAdd={onhandlerAdd}/>} />
        <Route path='/products/:id/edit' element={<Edit onUpdate={onhanderUpdate}/>} />
        <Route path='/dashboard' element={<Dashboard />}/>
        <Route path='/productDetail' element={<ProductDetail />}/>
        <Route path='/product' element={<Products products={products}/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path="/signin" element={<Signin />}/>
      </Routes>
    </div>
  )
}

export default App
