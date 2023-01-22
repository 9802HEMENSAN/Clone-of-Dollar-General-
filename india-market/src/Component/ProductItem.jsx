import { Button } from "@chakra-ui/react";
import React from "react";

const ProductItem = ({id,title,imageUrl,price,handledelete})=>{
    return (
    <div id={id} style={{border:"1px solid gray"}}>
            <img src={imageUrl} alt={title} 
            width="350px" height="350px" />
            <h6  >Title : {title} </h6>
            <h6  >Price : {price} </h6>
        <Button onClick={()=>{ handledelete(id)}}>Delete</Button>
        </div>
    )
}

export default ProductItem;