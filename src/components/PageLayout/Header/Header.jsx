import React, { useCallback, useEffect, useState } from 'react';
import cn from 'classnames';
import { HEADER_NAVIGATION_ITEMS } from './constants';
import Button from '../../Button';
import { PAGE_HOME_PATH } from '../../../router/constants';
import { Link } from 'react-router-dom';
// import logo from '../../../assets/img/logo.png';
import Wallet from "./Wallet";
import Hamburger from "./Hamburger";

import style from './Header.module.scss';

export default function Header(props) {
    const {
        wrapperClass,
        fullWidth,
        isMobile,
        isTablet,
        isConnected,
        address,
        balance,
        chainId,
        symbol,
        onConnectClick,
        onWalletClick,
        menuOpen,
        onHamburgerClick,

    } = props;
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = useCallback((e) => {
        if (!scrolled && window.scrollY > 1) {
            setScrolled(true);
        } else if (scrolled && window.scrollY < 1) {
            setScrolled(false);
        }
    }, [scrolled]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    return (
        <header className={cn(style.container, wrapperClass, {
            [style.containerScrolled]: scrolled,
            [style.open]: menuOpen
        })}>
            <div className={style.fade}/>
            <div className={cn(style.content, 'content', {[style.fullWidth]: fullWidth})}>
                <div className={style.left}>
                    <Link className={style.logoLink} to={PAGE_HOME_PATH}>
                        <img src={`${process.env.PUBLIC_URL}/img/memewars-logo.webp`} alt="logo" className="logo" />
                    </Link>
                    {/*<nav*/}
                    {/*    id={'headerNav'}*/}
                    {/*    className={style.menuWrapper}*/}
                    {/*>*/}
                    {/*    <ul className={style.menu}>*/}
                    {/*        {HEADER_NAVIGATION_ITEMS.map((item, i) => (*/}
                    {/*            <li*/}
                    {/*                className={style.menuItem}*/}
                    {/*                key={i}*/}
                    {/*            >*/}
                    {/*                <Link className={style.menuLink} to={item.path}>*/}
                    {/*                    {item.name}*/}
                    {/*                </Link>*/}
                    {/*            </li>*/}
                    {/*        ))}*/}
                    {/*    </ul>*/}
                    {/*</nav>*/}
                </div>
                <div className={style.right}>
                    <Button compact wrapperClass={style.joinBtn}
                            onClick={() => {}} >
                        <img src={`${process.env.PUBLIC_URL}/img/social/telegram.svg`} alt="telegram" className={style.telegramIcon} />
                        <p>Join Chat</p>
                    </Button>
                    {/*{isConnected ? (*/}
                    {/*    <div className={style.dropdownWrapper}>*/}
                    {/*        <Wallet onClick={onWalletClick} {...{address, chainId, balance, symbol}}/>*/}
                    {/*    </div>*/}
                    {/*) : (*/}
                    {/*    <Button*/}
                    {/*        wrapperClass={style.button}*/}
                    {/*        text={'Connect Wallet'}*/}
                    {/*        small*/}
                    {/*        outline*/}
                    {/*        gradient*/}
                    {/*        onClick={onConnectClick}*/}
                    {/*    />*/}
                    {/*)}*/}
                    {/*{(isMobile || isTablet) && (*/}
                    {/*    <Hamburger*/}
                    {/*        isOpen={menuOpen}*/}
                    {/*        wrapperClass={style.hamburger}*/}
                    {/*        onClick={onHamburgerClick}*/}
                    {/*        color={'rgb(155,152,172)'}*/}
                    {/*    />*/}
                    {/*)}*/}
                </div>
            </div>
        </header>
    );
};
