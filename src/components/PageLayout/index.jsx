import React, {useState} from 'react';
import Footer from "./Footer";
import {HeaderContainer} from "./Header";
import cn from 'classnames';

import style from './Layout.module.scss';

export default function PageLayout(props) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={cn(style.container)}>
            <div className={cn(style.fade, {[style.fadeActive]: isOpen})} onClick={() => setIsOpen(false)}/>
            <HeaderContainer
                menuOpen={isOpen}
                onHamburgerClick={() => setIsOpen(!isOpen)}
            />
            <main className={style.main}>{props.children}</main>
            <Footer/>
        </div>
    )
};