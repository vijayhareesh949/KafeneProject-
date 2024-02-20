import { Route, Routes } from "react-router-dom"
import Home from "../../Screens/postlogin/home"
import Orders from "../../Screens/postlogin/orders"
import Products from "../../Screens/postlogin/products"
import Users from "../../Screens/postlogin/users"





const Postlogin=()=>{

return(

<Routes>

<Route path="/home" Component={Home}/>

<Route path="/orders" Component={Orders}/>

<Route path="/products" Component={Products}/>

<Route path="/users" Component={Users}/>
</Routes>



)


}

export default Postlogin