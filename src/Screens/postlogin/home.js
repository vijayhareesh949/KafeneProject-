
import NavaaBar from "../../Components/navabar/navabar"
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './home.css'
import { Carousel } from "react-bootstrap"
import ExampleCarouselImage from "./Carousel"
import photo from './download.png'




const homeScreen = () => {










  return (
    <>
      <NavaaBar/>
     
    
        <h2 style={{ display: 'inline',color:'green' ,marginLeft:'500px'}}> Welcome to Kafene Pharmance Store Management.</h2>
      <Carousel>
        <Carousel.Item interval={1000}>
          <ExampleCarouselImage image="https://assets-global.website-files.com/60edc0a8835d5b38bf11f03f/61cf084d7d74a70d628f44ee_Pharmacy-Inventory-Management-Software.jpeg" text="First slide" />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <ExampleCarouselImage image="https://www.newsviewsnetwork.com/wp-content/uploads/MBA-in-Pharmaceutical-Management.jpeg" text="Second slide" />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <ExampleCarouselImage image="https://img.freepik.com/free-vector/hand-drawn-transport-truck-with-phone_23-2149158550.jpg?t=st=1711171732~exp=1711175332~hmac=462885a3e07d7e3e5ebdd4af77dbff154b00c3d3952ac4486c134e05f2207b3f&w=996" text="third slide" />
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <ExampleCarouselImage image="https://img.freepik.com/premium-vector/pharmacist-doctor-with-client-drugstore-counter_189557-383.jpg?w=1060" text="fouth slide" />
        </Carousel.Item>

      </Carousel>
      <br />

      <div className="total" style={{ marginLeft: '450px', width: '900px', top: '400px',backgroundColor:'lemonchiffon'}}>


        <div className="row" >
          <div className="col-sm-4">
            <div className="card mb-3" style={{ height: '400px' }}>

              <img src="https://img.freepik.com/free-vector/file-synchronization-concept-illustration_114360-3063.jpg?size=626&ext=jpg&ga=GA1.1.214940754.1710744990&semt=ais" className="card-img-top" alt="img1" style={{ width: '210px', height: '110px' }} />
              <div className="card-body">
                <h2>Accumulative Solutions</h2>
                <p className="card-text">A user will get all essential services needed to manage a pharmancy store,including inventory managment . purchase order dirction, seller report & time-management program </p>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card mb-3" style={{ height: '400px' }}>

              <img src="https://img.freepik.com/free-vector/vector-illustration-retro-style-hand-giving-money-other-hand_1284-42589.jpg?size=626&ext=jpg&ga=GA1.1.214940754.1710744990&semt=sph" className="card-img-top" alt="img1" style={{ width: '210px', alignSelf: 'center' }} />
              <div className="card-body">
                <h2>Refund Policy</h2>
                <p className="card-text">A Refund policy follows a 30 days refund policy.To be acceptable For the refund policy.</p>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card mb-3" style={{ height: '400px' }}>
              <img src="https://img.freepik.com/free-vector/discount-medicines-cartoon-poster-with-magnet-attract-drugs-syringe-medical-pills-bottles_107791-3974.jpg?t=st=1710765388~exp=1710768988~hmac=42738091e6c662e0061037b4d227317abd742bb41912047790a982fdd2bb3179&w=740" className="card-img-top" alt="img1" style={{ width: '210px', alignSelf: 'center' }} />
              <div className="card-body">
                <h2>Discounts</h2>
                <p className="card-text">We offer our valued customers a discount of upto 20% on prescribed medicines and other items sold at our stores.</p>
              </div>
            </div>
          </div>
        </div>


        <div className="row" >
          <div className="col-sm-4">
            <div className="card mb-3" style={{ height: '400px' }}>
              <br />
              <img src="https://img.freepik.com/free-vector/medical-background-design_1294-64.jpg?t=st=1710765501~exp=1710769101~hmac=af85385d1c577f3ba85250f74e7569f9a0113c812ac3b6dca5d5c5907cf9c404&w=740" className="card-img-top" alt="im3" style={{ width: '210px', alignSelf: 'center', height: '140px' }} />
              <div className="card-body">
                <h2>On-Demand Customizable</h2>
                <p className="card-text">This website is 100% Customizable Pharmancare is very much ready to customize based on users requirements.</p>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card mb-3" style={{ height: '400px' }} >
              <img src="https://img.freepik.com/premium-vector/secure-payment-with-mobile-banking-application_258153-435.jpg" className="card-img-top" alt="img1" style={{ width: '210px', alignSelf: 'center' }} />
              <div className="card-body">
                <h2>Secure Payments</h2>
                <p className="card-text">Secure payments we accepts online paymnets like UPI,debit/credit Cards. </p>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card mb-3" style={{ height: '400px' }}>
              <img src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?t=st=1710765852~exp=1710769452~hmac=fe560b182be6a621c95f5083eddf5bdeda4284689c834e1c4c6b85514db31caf&w=740" className="card-img-top" alt="im" style={{ width: '280px', alignSelf: 'center', height: '150px' }} />
              <div className="card-body">
                <h2>Customer Suppoort</h2>
                <p className="card-text">Customer support is the process of solving any customer challenges and pain points immediately via phone, email, live chat, tickets, or social media</p>
              </div>
            </div>
          </div>
        </div>

      </div>













      <div className="footer-container" style={{backgroundColor:"dimgray", marginTop:'250px'}} >
  <footer className="footer" >
    <div className="col-2">
   <img src={photo} alt="icon" style={{width:'200px',mixBlendMode:'multiply'}}/>
      <ul className="nav flex-column" >
        <li className="nav-item mb-2" ><a href="#home" className="nav-link p-0 text-muted" style={{float:"right",marginRight:'-200px',fontSize:'1.5rem'}}>Home</a></li>
        <li className="nav-item mb-2"><a href="#orders" className="nav-link p-0 text-muted" style={{float:"right",marginRight:'-200px',fontSize:'1.5rem'}}>Orders</a></li>
        <li className="nav-item mb-2"><a href="#products" className="nav-link p-0 text-muted" style={{float:"right",marginRight:'-200px',fontSize:'1.5rem'}}>Products</a></li>
        <li className="nav-item mb-2"><a href="#users" className="nav-link p-0 text-muted" style={{float:"right",marginRight:'-200px',fontSize:'1.5rem'}}>Users</a></li>
      </ul>
      <div style={{position:'absolute',right:'250px',marginTop:"-130px"}}>
<ul style={{listStyleType:'none'}}>

<h2>Contact  Us</h2>
  <li>
Ph:9493831845
  </li>
  <li>Emailid:vijayhareesh300@gmail.com</li>
</ul>

      </div>

    </div>


    <div className="d-flex justify-content-between py-4 my-4 border-top" >
      <p style={{marginLeft:'320px' ,fontSize:'1.5rem'}}>&copy; 2024 Company, Inc. All rights reserved.</p>
    </div>
  </footer>
</div>




    </>




  )



}
export default homeScreen