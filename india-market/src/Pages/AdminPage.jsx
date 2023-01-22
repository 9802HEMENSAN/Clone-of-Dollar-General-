//  https://mock-api-server-2399.onrender.com/Products

import Pagination from "../Component/Pagination";
 import ProductForm from "../Component/ProductForm";
 import ProductItem from "../Component/ProductItem";
import { useState, useEffect } from "react";
import { Heading } from "@chakra-ui/layout";
 

const getData = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return {
      totalCount: +res.headers.get(`X-Total-Count`),
      data,
    }
  } catch (error) {
    console.log("error by me");
  }
}

function Admin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  const fetchAndUpdateData = async (page) => {
    setLoading(true);
    try {
      let res = await getData(`https://mock-api-server-2399.onrender.com/Products?_page=${page}&_limit=3`);
      const { totalCount, data } = res;
      setProducts(data);
      setTotalCount(totalCount);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  const handlePageChange = (val) => {
    const changeBy = page + val;
    setPage(changeBy);
  };
  
  useEffect(() => {
    //during mount phase
    fetchAndUpdateData(page);
  }, [page]);

  const handleFormSubmit = (formData) => {
    setLoading(true);
    fetch(`https://mock-api-server-2399.onrender.com/Products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then(() => {
        setLoading(false);
        fetchAndUpdateData(page);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
      });
  }

  const handledelete= async(id)=>{
    try {
          const deletData=  await fetch(`https://mock-api-server-2399.onrender.com/Products/${id}`,{
            method:"DELETE",
            headers:{
              "Content-Type":'application/json',
            }
          });
          if(deletData.ok){
            const data1=await deletData.json();
            fetchAndUpdateData(page);
            console.log(data1)
          }
        } catch (err) {
          setError(true)
        }
};
  

  return loading ? (<h1>loading...</h1>) : error ?
    (<h1>Something went wrong .. please refresh</h1>)
    :
    (<div className="App">
      <ProductForm handleFormSubmit={handleFormSubmit} />
      <hr />
      <br />
      <br />
      <div id="products-display">
      <Heading marginLeft="45%"> Products</Heading> 
        <div
           style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            margin: "25px",
            gap: "20px",
          }}
        >
          {products.map((prod) => (
            <ProductItem key={prod.title}
              {...prod} handledelete={handledelete} />
          ))}
        </div>
      </div>
      <Pagination
        page={page}
        handlePageChange={handlePageChange}
        totalCount={totalCount}
      />

    </div>
    );
}

export default Admin;
