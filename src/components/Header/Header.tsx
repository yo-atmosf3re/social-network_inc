import React from "react";
import s from './Header.module.css';

type HeaderPropsType = {

}

const Header = (props: HeaderPropsType) => {
   return <header className={s.header}>
      <img src='https://svn.apache.org/repos/asf/openoffice/ooo-site/trunk/content/images/aoo-logo-100x100.png' />
   </header>;
}

export default Header;