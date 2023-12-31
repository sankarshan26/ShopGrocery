import React, { useEffect, useState } from "react";
import "./Navbar.css";
import {Link} from "react-router-dom"
import logo from "../../ASSETS/logo.png";
import Dropdown from "react-bootstrap/Dropdown"
function Navbar({reloadnavbar}) {
  const [cartquantity, setcartquantity] = useState(0)
  const getcarttotalitems = ()=>{
    let cart = JSON.parse(localStorage.getItem('cart'))
    if(cart){
      let total = 0
      cart.forEach(item => {
        total+=item.quantity
      });
      setcartquantity(total);
    }
    else{
      setcartquantity(0)
    }
  }
  useEffect(()=>{
    getcarttotalitems()
  },[reloadnavbar])
  
  const [shows3, setshows3] = useState(false)
  return (
    <nav>
      <div className="s1">
        <img src={logo} alt="logo" className="logo" />

        <div className="searchbar">
          <input type="text" placeholder="Search for products and categories" />
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </div>
        <div className="right">
          <div className="cart">
          <span className="qty">{cartquantity}</span>
          <Link to="/cart" className="stylenone">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
</svg></Link> </div>
<Dropdown>
<Dropdown.Toggle variant="" id="dropdown-basic">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
</Dropdown.Toggle>
<Dropdown.Menu>
  <Dropdown.Item ><Link to="/login" className="stylenone">Login</Link></Dropdown.Item>
  <Dropdown.Item ><Link to="/signup" className="stylenone">Signup</Link></Dropdown.Item>
  <Dropdown.Item ><Link to="/user/accountsettings" className="stylenone">Profile</Link></Dropdown.Item>
  <Dropdown.Item ><Link to="/" className="stylenone">Logout</Link></Dropdown.Item>
  {/* <Dropdown.Item href="#"></Dropdown.Item>
  <Dropdown.Item href="#"></Dropdown.Item> */}
 </Dropdown.Menu></Dropdown>
 
</div>
      </div>
      <div className="s2">
    <Link to="/">Home</Link>
      <Dropdown>
      <Dropdown.Toggle variant="" id="dropdown-basic">
       Categories
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Vegetables</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Fresh Fruits</Dropdown.Item>
        <Dropdown.Item href="#/action-3">House Cleaning</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <Link to="/about">About Us</Link>
    <Link to="/contact">Contact Us</Link>
    <Dropdown>
      <Dropdown.Toggle variant="" id="dropdown-basic">
       More
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">FAQ</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Privacy Policy</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Terms & Conditions</Dropdown.Item>
      </Dropdown.Menu>
      
    </Dropdown>
      </div>
      {
                shows3 ?
                    <div className='s3'>
                        <div className='s31'>
                            <img src={logo} alt='logo' className='logo' />
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" onClick={() => setshows3(!shows3)}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>

                        <div className='searchbar'>
                            <input typ="text" placeholder="Search for products and categries" className='search' />

                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                </svg>

                            </button>
                        </div>

                        <ul className='s32'>
                            <li>
                                <Link to='/'
                                    className='stylenone'
                                >
                                    Home
                                </Link>
                            </li>

                            <li><Dropdown>
                                <Dropdown.Toggle variant="" id="dropdown-basic">
                                    Categories
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Fresh Vegetables</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Fresh Fruits</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">House Cleaning</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown></li>

                            <li> <Link to='/about' className='stylenone'>
                                About Us
                            </Link></li>

                            <li> <Link to='/contact' className='stylenone'>
                                Contact Us
                            </Link></li>

                            <li>
                                <div className='cart'>

                                    <span className='qty'>{cartquantity}</span>
                                    <Link to='/cart'
                                        className='stylenone'
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                        </svg>
                                    </Link>

                                </div>
                                <Dropdown>
                                    <Dropdown.Toggle variant="" id="dropdown-basic">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                        </svg>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="/login">Login</Dropdown.Item>
                                        <Dropdown.Item href="/signup">Signup</Dropdown.Item>
                                        <Dropdown.Item href="/user/accountsettings">Profile</Dropdown.Item>
                                        <Dropdown.Item href="#">Logout</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </li>

                            <li>
                                <Dropdown>
                                    <Dropdown.Toggle variant="" id="dropdown-basic">
                                        More
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="/FAQ">FAQ</Dropdown.Item>
                                        <Dropdown.Item href="/privacypolicy">Privacy Policy</Dropdown.Item>
                                        <Dropdown.Item href="/termsandconditions">
                                            Terms & Conditions
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </li>
                        </ul>
                    </div>
                    :
                    <div className='s3'>
                        <div className='s31'>
                            <img src={logo} alt='logo' className='logo' />
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"
                                onClick={() => setshows3(!shows3)}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>

                        </div>
                    </div>
            }
        </nav>
    )
}

export default Navbar
