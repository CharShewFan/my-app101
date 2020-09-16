import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import {useAxiosGet} from '../Hooks/HttpRequests';

function Product(){
    const {id} = useParams()
    console.log(`${id}`)
    const url = `https://5f61d44d89dbd70016e18ebc.mockapi.io/product/${id}`
    let content = null

    let product = useAxiosGet(url)



    //  axios.get(url).then(Response=>{
    //    setProduct(Response.data)
    // })



    if(product.data){
        content = 
            <div>
                <h1>hey product page</h1>
                <h1 className="text-2xl font-bold mb-3">{product.data.name}</h1>
            </div>
    }

    return(
    <div>{content}</div>
    )

  
}


export default Product;