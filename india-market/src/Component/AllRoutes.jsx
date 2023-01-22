import {
    Routes,
    Route,
  } from "react-router-dom";

  import HomePage from "../Pages/Home";
  import Login from "../Pages/Login";
  import Products from "../Pages/ProductsPage";
  import ProductDetails from "../Pages/ProductDetails";
  import PaymentPage from "../Pages/PaymentPage";
  import Admin from "../Pages/AdminPage";
  // import PrivateRoute from "./PrivateRoute";
function AllRoutes(){
return (
    <div>
     <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/products" element={<Products/>}></Route>
      <Route path="/admin" element={<Admin/>}></Route>
      <Route path="/products/:id" element={
        // <PrivateRoute> 
          <ProductDetails/>
        // </PrivateRoute>
      }></Route>
       
      <Route path="/payment" element={
        // <PrivateRoute> 
          <PaymentPage/>
      // </PrivateRoute>
      }></Route>
    </Routes>
    </div>
)
}
export default AllRoutes;