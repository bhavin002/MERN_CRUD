import './Navbar.css';
import { Link,useLocation } from "react-router-dom";
import { useState,useEffect } from 'react';
import { IoAppsSharp } from "react-icons/io5";
const Navbar = () => {
    const [isMobile, setMobile] = useState(false);
    const [activeTab,setActiveTab] = useState("Users");
    const location = useLocation();
    useEffect(()=>{
        if(location.pathname === "/"){
            setActiveTab("Users");
        }else if(location.pathname === "/adduser")
        {
            setActiveTab("Adduser"); 
        }
    },[location])
    return (
        <>
            <nav className='navbar'>
                <h3 className='logo'>CRUD_Application</h3>
                <ul className={isMobile ? 'nav-links-mobile' : 'nav-links'} onClick={()=>{setMobile(false)}}>
                    <Link to="/" className='ancor'><li className={`${activeTab === "Users" ? "active" : ""}`} onClick={()=>setActiveTab("Users")}>Users</li></Link>
                    <Link to="/adduser" className='ancor'><li className={`${activeTab === "Adduser" ? "active" : ""}`} onClick={()=>setActiveTab("Adduser")}>Adduser</li></Link>
                </ul>
                <button className='mobile-menu-icon' onClick={()=>setMobile(!isMobile)} >
                    {isMobile ? (<IoAppsSharp/>) : (<IoAppsSharp/>)}
                </button>
            </nav>
        </>
    )
}
export default Navbar;