import { Route, Routes } from "react-router-dom"

import LoginForm from "../../Screens/prelogin/login"
import RegistrationForm from "../../Screens/prelogin/Registration"



const Prelogin=()=>{


return(

<Routes>

<Route path="/" Component={RegistrationForm}></Route>

<Route path="/login" Component={LoginForm}></Route>

</Routes>




)



}

export default Prelogin