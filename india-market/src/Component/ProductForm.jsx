import { Heading } from "@chakra-ui/layout";
import {useState} from "react";
 
const initState={
    title:"",
    price:"",
    imageUrl:"",
}

export default function ProductForm({handleFormSubmit}){
    const [formState,setFormState] = useState(initState);

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setFormState({
            ...formState,
            [name] : value,
        })
    }
  
    const handleSubmit=(e)=>{
        e.preventDefault();
     
        handleFormSubmit(formState)
        setFormState(initState);
    };
    //   console.log(formState);
    const {title,price,imageUrl} = formState;
    return (
        <div id="Product-creation-form"   style={{width:'350px',margin:'auto',height:'400px',padding:'1 30px',marginTop:'5px',boxShadow:'rgba(0, 0, 0, 0.35) 0px 5px 15px',borderRadius:"10px",marginTop:"50px"}} >
            <Heading  style={{marginLeft:"20px",marginTop:'15px'}}>Create Product</Heading> 
            <form onSubmit={handleSubmit} style={{marginLeft:"50px"}}>
                <label>
                   Title :  <br />
                   <input
                   name="title"
                   type="text"
                   placeholder="Enter Product Title"
                   value={title}
                   style={{border:"2px solid black",padding:"6px"}}
                   onChange={handleChange}
                   required
                   />
                </label>
                   <br /><br />
                <label>
                    Price :  <br />
                   <input
                   name="price"
                   type="number"
                   placeholder="Enter Price"
                   value={price}
                   style={{border:"2px solid black",padding:"6px"}}
                   onChange={handleChange}
                   required
                   />
                </label>
                <br /><br />
                <label>
                    Image URL: <br />
                   <input
                   name="imageUrl"
                   type="text"
                   placeholder="Enter Image URL"
                   value={imageUrl}
                   style={{border:"2px solid black",padding:"6px"}}
                   onChange={handleChange}
                   required
                   />
                </label>
                <br /><br />
                <input type="submit" value="CREATE PRODUCT" style={{border:'2px solid black',borderRadius:'20px',padding:'5px', backgroundColor:'black',color:"white",cursor:"pointer",
            margin:"10px"}}  />
            </form>
        </div>
    )
};

