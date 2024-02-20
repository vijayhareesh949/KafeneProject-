import { BrowserRouter, Routes ,Route} from "react-router-dom"

import Orders from "../../Screens/postlogin/orders"
import Users from "../../Screens/postlogin/users"

import Products from "../../Screens/postlogin/products"
import RegistrationForm from "../../Screens/prelogin/Registration"
import LoginForm from "../../Screens/prelogin/login"
import Logout from "../../Screens/postlogin/logout"

const Navagtion=()=>{

return(

<>
<BrowserRouter>
<Routes>
    
<Route path="/" Component={RegistrationForm}/>
<Route  path="/Login" Component={LoginForm} />


<Route  path="orders" Component={Orders} />
<Route  path="users" Component={Users} />
<Route  path="products" Component={Products} />
<Route path="logut" Component={Logout}/>

</Routes>




</BrowserRouter>

</>


)



}
export default Navagtion