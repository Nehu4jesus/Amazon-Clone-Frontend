 import React from "react";
 import styles from "./header.module.css"; 
 import { FaSearch } from "react-icons/fa";
 import { CiLocationOn } from "react-icons/ci";
 import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
 import LowerHeader from "./LowerHeader";
 import { IoSearchSharp } from "react-icons/io5";
 import {Link} from 'react-router-dom'
 import usa_Logo from '../../assets/Images/headerImage/united-states.png'
 function Header() {
   return (
    <>
    <section className={styles.Header_container}>
      <div className={styles.header_left}>
         
      <Link to="/">
           
           <img
             src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
             alt="amazon-logo"
           /> 
           {/* <span>.in</span> */}
           </Link>
 
         <div className={styles.left_header_delivery}>
           <span className={styles.header_loactionIcon}>
             {/* locaion icoan her  */}
 
             <CiLocationOn size={16} />
           </span>
           <a href="">
           <div className={styles.delivery}>
 
             
             <span>Deliver to</span>
             <p>Poland</p>
           </div>
           </a>
         </div>
       </div>
       <div className={styles.header_serach}>
       <div className={styles.header_serach_select}> 
         <select name="" id="">
           <option value="">All</option>
 
           <option value="">Art& Crafts</option>
           <option value="">Automative</option>
         </select>
        </div>
         <input type="text" placeholder="Search here"/>
 
         {/* searchIcon  here*/}
    <div className={styles.header_search_icon
    }>
 
         <span className={styles.header_search_icon_wrapper}>
         <FaSearch size={22}/>
           
         </span>
 
         </div>
       </div>
       <div className={styles.header_right}>
       <Link to="/auth" className={styles.header_signIn}>
           <div>
           <img
                                       width={24}
                                     src={usa_Logo}
                                     alt="USA LOGO"
                                 />
             <select name="" id="">
               <option value="">EN</option>
               <option value="">FR</option>
               <option value="">Amharic</option>
             </select>
           </div>
           </Link>
 
         <Link to="/auth" className={styles.header_signIn}>
           <div>
             <p>Hello,signin</p>
             <span>Account & List</span>
           </div>
           </Link>
           <Link to="/orders" className={styles.header_order}>
           <div>
             <span>
               <p>Return</p>
             </span>
             <span>& Orders</span>
           </div>
           </Link>
 
           <Link to="/cart" className={styles.cart}>
           
         <ShoppingCartOutlinedIcon />
             <span>
               {/* cartInps */}
               <p>0</p>
               
             </span>
         
             </Link>
        </div>
       </section>
        <LowerHeader/>
     </>
   );
 }
 
 export default Header;