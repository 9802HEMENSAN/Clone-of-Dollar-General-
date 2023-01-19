 import Carousel from "../Component/Carousel"
 import Category from "../Component/category"
 import axios from "axios";
 import { useReducer} from "react";
 import { useEffect } from "react";
 import { Link as RouterLink } from "react-router-dom";
import { Grid, GridItem } from "@chakra-ui/react";
 export default function HomePage(){
    return (
       <div>  
        <Carousel/>
        <GridItems/>
       </div>
    )
 }
 

let initialState={
    products:[],
    isLoading:false,
    isErr:false
  }
  
  const reducer=(state,action)=>{
    console.log("state",state);
    console.log("action",action.type)
    switch(action.type){
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
           isErr: "Something went wrong",
        }
      }
      default : 
        throw new Error()
    }
  }

 export function GridItems(){
    const [state, dispatch] = useReducer(reducer,initialState);
    const {products,isLoading,isErr}=state;

    const getData=async function getUser(){
      try {
        const response=await axios.get("http://localhost:8080/Home-products")
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
    
    return  (
        <div>
          <Grid templateColumns='repeat(4, 1fr)' gap={6} margin={"auto"} justifyContent={"space-around"}
          width="80%" >
            {
              products?.length>0 && products.map((e)=>{
                return  <GridItem key={e.id} w='100%'  >
                     <Category
                     id={`${e.cmp_image__title}`}
                     image={`${e.cmp_image__image_src}`}
                     title={`${e.cmp_image__title}`}
                     />
                </GridItem>
              })
            }
            </Grid>
        </div>
    )
 }