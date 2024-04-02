import React, { useState } from  'react';
import { FaTh, FaBars, FaUserAlt, FaMoneyBillWave, FaTv, FaRegChartBar, FaThList } from "react-icons/fa";
import { NavLink } from  'react-router-dom';

const Sidebar = ({children}) => {
    const [sidebarOpen, setSideBar] = useState(false);
    const toggle = () => setSideBar(!sidebarOpen);
    const menuItem = [
        {
            path:"/",
            name: "Dashboard",
            icon: <FaTh/>
        },
        {
            path: "/account",
            name: "Accounts",
            icon: <FaUserAlt/>
        },
        {
            path: "/transaction",
            name: "Transaction",
            icon: <FaMoneyBillWave/>
        },
        {
            path: "/display",
            name: "Display",
            icon: <FaTv/>
        },
        {
            path: "/report",
            name: "Report",
            icon: <FaRegChartBar/>
        },
        {
            path: "/utility",
            name: "Utility",
            icon: <FaThList/>
        }
    ]
    return (
        <div className="container">
           <div style={{width: sidebarOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: sidebarOpen ? "block" : "none"}} className="logo">Logo</h1>
                   <div style={{marginLeft: sidebarOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: sidebarOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
}

export default Sidebar;