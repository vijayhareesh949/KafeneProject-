import { BrowserRouter, Routes, Route } from "react-router-dom"

import Orders from "../../Screens/postlogin/orders"
import Users from "../../Screens/postlogin/users"

import Products from "../../Screens/postlogin/products"
import homeScreen from "../../Screens/postlogin/home"




const Navagtion = () => {

    return (

        <>
            <BrowserRouter>
                <Routes>

                    {/* <Route path="/" Component={RegistrationForm}/>
                   <Route  path="/Login" Component={LoginForm} /> */}

                    <Route path="/" Component={homeScreen}/>
                    <Route path="/orders" Component={Orders} />
                    <Route path="/users" Component={Users} />
                    <Route path="/products" Component={Products} />
            


                </Routes>




            </BrowserRouter>

        </>


    )



}
export default Navagtion