import React from "react";
import s from "./Navbar.module.css";



const Navbar: React.FunctionComponent = (props: any) => {
   return (
      <nav className={s.nav}>
         <div className={s.item}><a href="">Profile</a></div>
         <div className={s.item}><a href="">Messages</a></div>
         <div className={s.item}><a href="">News</a></div>
         <div className={s.item}><a href="">Music</a></div>
         <div className={s.item}><a href="">Setting</a></div>
      </nav>
   );
}

export default Navbar;