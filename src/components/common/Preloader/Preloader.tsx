import * as React from 'react';
import preloader from '../../../assets/image/preloader.svg';
import s from './Preloader.module.css'

export const Preloader = () => <img alt={'Preloader'} className={s.preloaderBlock} src={preloader} />
