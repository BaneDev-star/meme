import React, {useEffect} from 'react';
import style from './Loader.module.scss';
import lottie from 'lottie-web';
import loadingJson from './data';
import cn from 'classnames';

export default function Loader(props) {
    const {isVisible} = props;
    const id = 'loading-container';

    useEffect(() => {
        let animation = lottie.loadAnimation({
            container: document.getElementById(id),
            animationData: loadingJson,
            renderer: 'svg',
            loop: true,
            autoplay: false,
            name: 'animation',
        });

        setTimeout(() => {
            animation.play()
        }, 350);

        return () => {
            lottie.destroy('animation');
        }
    }, []);

    return (
        <div className={cn(style.container, {
            [style.containerVisible]: isVisible
        })}>
            <div className={style.bgMask}/>
            <div className={style.bg}>
                {/*<div id={id} className={style.loader}/>*/}
                <div className={style.logoContainer}>
                    <img src={`${process.env.PUBLIC_URL}/img/loading-logo.png`} alt="logo" className={style.logoIcon} />
                    <p className={style.poweredBy}>Powered by</p>
                    <img src={`${process.env.PUBLIC_URL}/img/game-shark-logo.png`} alt="logo" className={style.poweredByIcon} />
                </div>
            </div>
        </div>
    )
}
