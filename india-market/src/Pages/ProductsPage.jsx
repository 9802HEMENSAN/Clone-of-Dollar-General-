import { useEffect } from "react"
import axios from "axios";
import { useReducer } from "react";
import { Grid, GridItem } from '@chakra-ui/react'
import ProductCard from "../Component/ProductCard";

let initialState={
  products:[],
  isLoading:false,
  isErr:false
}

const reducer=(state,action)=>{
  console.log("state",state);
  console.log("action",action.type)
  switch(action.type){
    case "FETCH_LOADING":{
      return {
         ...state,
         isLoading:true
      }
    }
    case "FETCH_SUCCESS":{
      return {
         ...state,
         products:action.payload,
         isLoading:false,
         isErr: false,
      }
    }
    case "FETCH_FAILURE":{
      return {
         products:[],
         isLoading:false,
         isErr:  true,
      }
    }
    default : 
      throw new Error()
  }
}
  function Products(){
    const [state, dispatch] = useReducer(reducer,initialState);
    const {products,isLoading,isErr}=state;

    const getData=async function getUser(){
      dispatch({type : "FETCH_LOADING" })
      try {
        const response=await axios.get("https://fakestoreapi.com/products")
        dispatch({type : "FETCH_SUCCESS", payload : response.data})
        // console.log(response.data)
      } catch (error) {
        console.log("error !")
        dispatch({type : "FETCH_FAILURE", payload : []})
      }
    }

    useEffect(()=>{
      getData();
    },[])
  
  return  isLoading  ?  <h1>Loading...</h1> : 
          isErr ?   <h1>Something went Wrong ! </h1> :
      (
      <div>
           <h1>Products</h1>
        <Grid templateColumns='repeat(4, 1fr)' gap={6}>
          {
            products?.length>0 && products.map((e)=>{
              return  <GridItem key={e.id} w='100%'  >
                   <ProductCard
                   id={e.id}
                   category={e.category}
                   description={e.description}
                   image={e.image}
                   price={e.price}
                   title={e.title}
                   rating={e.rating.rate}
                   />
              </GridItem>
            })
          }
          </Grid>
      </div>
    )
  }
 
  export default Products;
 