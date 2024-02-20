
import { useNavigate } from "react-router-dom"



const Logout=()=>{

const logoutin=useNavigate()


return(


<button onClick={logoutin('/Login')}>LOGOUT</button>



)



}
export default Logout