// import React from 'react'

import { Link } from "react-router-dom"

import "../Style/Navbar.css"

const Navbar = () => {
  function cancel() {
    document.getElementById("asidediv").style.display="none";
  }
  function menu() {
    document.getElementById("asidediv").style.display="block";
  }

  return (
    <div>
<div id="asidediv" onClick={()=>cancel()}>
<div className="asidediv1">    <aside id="aside">



    <button id="loginbtn">Login</button>
   <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" defaultChecked />
</div>
<hr style={{color:"lightgray",width:"75%",margin:"auto"}}/>
<ul id="ulli">
<li><Link id="asidelink"><img id="asideimg" src="https://www.kfcpakistan.com/static/media/Store-Locator.f6a5770e5b27f36c215d.jpg"/><h5>Store Locator</h5></Link></li>
<li><Link id="asidelink"><img id="asideimg" src="https://www.kfcpakistan.com/static/media/Tracking-order.4b97000517b60dac1935.jpg"/><h5>Track Order</h5></Link></li>
<li><Link id="asidelink"><img id="asideimg" src="https://www.kfcpakistan.com/static/media/Explore-menu.5a4a8ea8405b961694cb.jpg"/><h5>Explore Menu</h5></Link></li>
</ul>
<hr style={{color:"lightgray",width:"75%",margin:"auto"}}/>
<ul id="ulli">
<li><Link id="asidelink"><h6>About Us</h6></Link></li>
<li><Link id="asidelink"><h6>FeedBack</h6></Link></li>
<li><Link id="asidelink"><h6>Term & Condition</h6></Link></li>
<li><Link id="asidelink"><h6>Privacy Policy</h6></Link></li>
<li><Link id="asidelink"><h6>Contact us</h6></Link></li>
<li><Link id="asidelink"><h6>Mitao Bhook</h6></Link></li>
<li><Link id="asidelink"><h6>Mitao Bhook-ScholarShip</h6></Link></li>
<li><Link id="asidelink"><h6>Careers</h6></Link></li>
</ul>

    </aside></div>
<div className="asidediv2" ></div>
</div>



      <div className="navbar">
      <div className="navbar1">
      <ul>
      <li><Link><i id="icon" onClick={()=>menu()} className="fa-solid fa-bars " style={{color: '#ffffff',marginTop:"10px"}} />
</Link></li>
      <li><Link id="logotext">KFC</Link></li>
      <li><Link id="linkbtn">
      <button  id="btnimg"><img src="https://www.kfcpakistan.com/static/media/Delivery.793adbaa710baf75ba78.png"/><h3 id="btnh3">DELIVERY</h3></button>
     <br/> <button id="btnimg2"><img src="https://www.kfcpakistan.com/static/media/pickup.47bb874f83ea6acb5a47.png"/><h3 id="btnh3">PICKUP</h3></button>
      </Link></li>
      </ul>
      </div>
      <div className="navbar2">
      <button id="loginbtn">Login</button>
      </div>
      </div>
      
    </div>
  )
}

export default Navbar
