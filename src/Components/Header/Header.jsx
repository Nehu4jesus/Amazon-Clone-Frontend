 import React from "react";
 import styles from "./header.module.css";
 // import { CiSe from "./header.module.css";
 // import { CiSearch } from "react-icons/ci";
 import { FaSearch } from "react-icons/fa";
 import { CiLocationOn } from "react-icons/ci";
 import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
 import { IoSearchSharp } from "react-icons/io5";
 function Header() {
   return (
     <section className={styles.Header_container}>
       <div className={styles.header_left}>
         
         <a href="">
           
           <img
             src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
             alt="amazon-logo"
           /> 
           {/* <span>.in</span> */}
         </a>
 
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
         <select name="" id="">
           <option value="">All</option>
 
           <option value="">Art& Crafts</option>
           <option value="">Automative</option>
         </select>
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
         <a href="" className={styles.language}>
           <div>
           <img
                                       width={24}
                                     src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png"
                                     alt=""
                                 />
             <select name="" id="">
               <option value="">EN</option>
               <option value="">FR</option>
               <option value="">Amharic</option>
             </select>
           </div>
         </a>
 
         <a href="" className={styles.header_signIn}>
           <div>
             <p>Hello,signin</p>
             <span>Account & List</span>
           </div>
         </a>
         <a href="" className={styles.header_order }>
           <div>
             <span>
               <p>Return</p>
             </span>
             <span>& Orders</span>
           </div>
         </a>
 
         <a href="" className={styles.cart}>
           
         <ShoppingCartOutlinedIcon />
             <span>
               {/* cartInps */}
               <p>0</p>
               
             </span>
         
         </a>
       </div>
     </section>
   );
 }
 
 export default Header;