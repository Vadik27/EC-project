import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <header className={s.header}>
            <div className={s.innerHeader}>
                <h1>VK</h1>
                {/* <img src='https://www.dhresource.com/600x600/f2/albu/g9/M01/5E/F5/rBVaWF1KIO-AZ5I5AACNTNBXO1s102.jpg' /> */}
                <div className={s.loginBlock}>
                    {props.isAuth
                        ? <div>{props.login} - <button onClick={props.logout}>Log out</button> </div>
                        : <NavLink to={'/login'}>Login</NavLink>}
                </div>
            </div>
        </header>
    );
}

export default Header; 