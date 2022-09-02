import * as React from 'react';
import preloader from '../../../assets/image/preloader.svg';
import s from './Preloader.module.css'

function Preloader() {
   return (<img className={s.preloaderBlock} src={preloader} />);
}

export default Preloader;