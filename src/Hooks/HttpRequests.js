import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';


export function useAxiosGet(url){
    const [request, setRequest] = useState({
        loading:false,
        data:null,
        error:false
    })

    useEffect(()=>{
        setRequest({
            loading:true,
            data:null,
            error:false
        })
        axios.get(url).then(Response=>{
            setRequest({
                loading:false,
                data:Response.data,
                error:false
            })
        }).catch(()=>{
            setRequest({
                loading:false,
                data:null,
                error:true
            })
        })


    },[url])

    return request



}

    
//     useEffect(()=>{
//         axios.get(url).then(Response=>{
//             setProduct(Response.data)
//         })
//     },[url])
// }
