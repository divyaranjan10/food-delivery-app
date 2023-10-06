import { useState, useContext } from "react";
import logo from '../../assets/app-logo.png';
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";
import { useSelector } from "react-redux";
import {GiHamburgerMenu} from 'react-icons/gi';
import {RxCross1} from 'react-icons/rx';

const Header = () => {
    const[loginStatus, setLoginStatus] = useState("Login");
    const onlineStatus = useOnlineStatus();
    const {loggedInUser} = useContext(UserContext);
    const cartItems = useSelector((store) => store.cart.items);
    
    const handleClick = () => {
        const hamburgerIcon = document.querySelector('.hamburger-icon');
        const crossIcon = document.querySelector('.cross-icon');
        const navItemDisplay = document.querySelector('.nav-items')
        hamburgerIcon.classList.toggle('hidden');
        crossIcon.classList.toggle('visible');
        navItemDisplay.classList.toggle('visible');
    }

    return (
        <div className='header relative flex justify-between items-center p-2 bg-orange-100 shadow-lg'>
            <div className='logo-container'>
                <img className='logo w-28' src={logo} alt='food-logo'/>
            </div>
            <div className='nav-items'>
                <ul className="nav-ul flex mx-4">
                    <li className="px-4">
                        Online status: {onlineStatus ?"✅":"🔴"}
                    </li>
                    <li className="px-4">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/cart">Cart - {cartItems.length}</Link>
                    </li>
                    <li className="px-4">
                        <Link to="/grocery">GroceryMart</Link>
                    </li>
                    <button 
                        onClick={()=>{
                            loginStatus === "Login"?
                            setLoginStatus("Logout"):
                            setLoginStatus("Login");
                        }}
                        className="login px-4">{loginStatus}
                    </button>
                    <li className="">
                        <Link to="https://github.com/divyaranjan10">{loggedInUser}</Link>
                    </li>
                </ul>
            </div>
            <div className="hamburger-menu mr-8 w-6 h-6 hidden" onClick={handleClick}>
                <GiHamburgerMenu className="hamburger-icon w-full h-full"/>
                <RxCross1 className="cross-icon w-full h-full hidden"/>
            </div>
        </div>
    )
}

export default Header;