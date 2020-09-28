import React from "react";
import Loader from "../components/Loder";
import ProductCard from "../components/ProductCard";
import {useAxiosGet} from '../Hooks/HttpRequests' 

function Home(){

  const url = `https://5f61d44d89dbd70016e18ebc.mockapi.io/product?page=1&limit=10`
  let products = useAxiosGet(url)

  let content = null

  if(products.error){
      content = <div>
          <div className="bg-blue-300 mb-2 p-3">
              If you see this error. Please remember to create your own <a href="https://mockapi.io/">mock API</a>.
          </div>
          <div className="bg-red-300 p-3">
              There was an error please refresh or try again later.
          </div>
      </div>
  }

  if(products.loading){
      content = <Loader></Loader>
  }

  if(products.data){
      content = 
      products.data.map((product) => 
          <div key={product.id} className="flex-no-shrink w-full md:w-1/4 md:px-3">
              <ProductCard 
                  product={product}
              />
          </div>
      )
  }

  return (
      <div className="container mx-auto">
          <h1 className="font-bold text-2xl mb-3">
              Best Sellers
          </h1>
          <div className="md:flex flex-wrap md:-mx-3">
              { content } 
          </div>
      </div>
  )
}

export default Home