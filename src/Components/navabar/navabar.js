import React from "react";
import { Link } from "react-router-dom";
import photo from './download.png'



const NavaaBar = () => {
  const StyleUl = {
    listStyleType: "none",
    display: 'flex',
    margin: 0

  }
  const Liststyle = {
    display: 'inline',
    marginRight: '240px',
    fontSize: '40px'

  }

  return (
    <>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={photo} alt="" style={{ width: '200px',height:'90px', marginRight: '90px'}} className="rounded-pill" />
          </a>
          <h2>KAFENE</h2>

        </div>
      </nav>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <ul style={StyleUl}>
                <li style={Liststyle}>
                  <Link to='/' style={{ textDecoration: 'none', color: 'green' }}>Home</Link>
                </li>

                <li style={Liststyle}>
                  <Link to='/orders' style={{ textDecoration: 'none', color: 'green' }} >Orders</Link>
                </li>
                <li style={Liststyle}>
                  <Link to='/products' style={{ textDecoration: 'none', color: 'green' }}>Products</Link>
                </li>
                <li style={Liststyle}>
                  <Link to='/users' style={{ textDecoration: 'none', color: 'green' }}>Users</Link>
                </li>
              

              </ul>
            </div>
          </div>
        </div>
      </nav>
      <hr style={{ margin: '20px 0' }} /> {/* Horizontal line */}
    </>
  );
};

export default NavaaBar;
