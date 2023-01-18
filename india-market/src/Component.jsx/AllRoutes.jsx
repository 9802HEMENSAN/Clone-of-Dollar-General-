import {
    Routes,
    Route,
  } from "react-router-dom";

  import Signup from "../Pages/Signup";
  import HomePage from "../Pages/Home";
  import Login from "../Pages/Login";
function AllRoutes(){
return (
    <div>
     <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/login" element={<Login />} />
    </Routes>
    </div>
)
}
export default AllRoutes;