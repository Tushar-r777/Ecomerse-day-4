import React, { useEffect, useState } from 'react'
import SelectInput from '../components/UI/Selectinput'
import ProductCard from '../components/UI/ProductCard'
import { data, Link } from 'react-router'
const Shop = () => {
    const[productlist,Setproductlist]=useState([]);
    const { data, isLoading, error: apiError } = useGetProductsQuery();
    const[error,Seterror]=useState("");


  const sortoptions=[
    {
    value:"newest_items",
    label:"Newest Items",
  },
  {
    value:"oldest_items",
    label:"Oldest Items",
  }
]
 const Categories = [
    {
     title: "Men’s fashion",
    },
    {
     title: "Men’s Jacket",
    },
    {
     title: "Men's T-Shirts",
    },
    {
     title: "Casual Shirts",
    },
    {
     title: "Summer T-Shirts",
    },
  ]

  useEffect (()=>{
    fetch("https://dummyjson.com/products")
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data);
      Setproductlist(data.products);
      setTimeout(() => {
        Setloading(false);
      }, 1000);
    }).catch((err)=>{
        Seterror(err);
      
    })
  },[])



  return (
    <main className='py-12'>
      <div className="container grid grid-cols-12 gap-14">
        <div className="col-span-3 bg-white py-6 px-5 h-fit sticky top-0 left-0">
           <h3 className='text-lg font-medium text-primary'>Related Categories</h3>
           <div className='space-y-1.5 mt-1'>
            {
              Categories.map((item)=>(
                  <Link to="/shop" key={item.title} className='block text-base text-secondary'>
                    {item.title}
                  </Link>
              ))
            }
           </div>
           <div className='py-6 my-6 border-y-2 border-y-secondary/10'>
             <h3 className='text-lg font-medium text-primary'>Filter by Price</h3>
             <input type="range" name="" id="" className='w-full my-6'/>
             <p>Price: ৳1000 - ৳2500</p>
           </div>
        </div>
        <div className="col-span-9">
          <div className='flex items-center justify-between'>
            <p className='text-[#424241]/50 font-medium text-lg'>Showing  <span className='text-secondary'>20</span> of <span className='text-secondary'>160</span> product</p>
            <div className='w-fit flex items-center gap-7'>
              <p>Sort by:</p>
              <SelectInput className='max-w-44' options={sortoptions}/> 
            </div>
          </div>
          <div className='grid grid-cols-3 gap-6 mt-6'>
              { loading ?(
                <p>loading...</p>
              ):(
                productlist.map((item)=>(
        <ProductCard key={item.id} head="Headrest Executive Mesh Office Chairset" img={item.thumbnail} price="৳10500" />
        // <ProductCard key={item.id} data={item} head="Women fashion dress set" img="Features-2.png" price="৳1000" />
        // <ProductCard key={item.id} data={item} head="Headrest Executive Mesh Office Chairset" img="Features-3.png" price="৳5000" />
        // <ProductCard key={item.id} data={item} head="Headrest Executive Mesh Office Chairset" img="Features-4.png" price="৳1000" />
        // <ProductCard key={item.id} data={item} head="Headrest Executive Mesh Office Chairset" img="Features-5.png" price="৳10500" />
        // <ProductCard key={item.id} data={item} head="Women fashion dress set" img="Features-6.png" price="৳1000" />
        // <ProductCard key={item.id} data={item} head="Headrest Executive Mesh Office Chairset" img="Features-7.png" price="৳5000" />
        // <ProductCard key={item.id} data={item} head="Women black dress and red hat collectio0" img="Features-8.png" price="৳1000" />
        // <ProductCard key={item.id} data={item} head="Headrest Executive Mesh Office Chairset" img="Features-9.png" price="৳10500" />
        // <ProductCard key={item.id} data={item} head="Women fashion dress set" img="Features-10.png" price="৳1000" />
        // <ProductCard key={item.id} data={item} head="Headrest Executive Mesh Office Chairset" img="Features-11.png" price="৳5000" />
        // <ProductCard key={item.id} data={item} head="Women black dress and red hat collectio0" img="Features-12.png" price="৳1000" />
        // <ProductCard key={item.id} data={item} head="Headrest Executive Mesh Office Chairset" img="Features-13.png" price="৳10500" />
        // <ProductCard key={item.id} data={item} head="Women fashion dress set" img="Features-14.png" price="৳1000" />
        // <ProductCard key={item.id} data={item} head="Headrest Executive Mesh Office Chairset" img="Features-15.png" price="৳5000" />
                )
              )
                )
               }
          </div>
        </div>
      </div>
    </main>
  )
}

export default Shop
