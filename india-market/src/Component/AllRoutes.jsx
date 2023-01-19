import {
    Routes,
    Route,
  } from "react-router-dom";

  import Signup from "../Pages/Signup";
  import HomePage from "../Pages/Home";
  import Login from "../Pages/Login";
  import Products from "../Pages/ProductsPage";
  import ProductDetails from "../Pages/ProductDetails";
function AllRoutes(){
return (
    <div>
     <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/products" element={<Products/>}></Route>
      <Route path="/products/:id" element={<ProductDetails/>}></Route>
    </Routes>
    </div>
)
}
export default AllRoutes;