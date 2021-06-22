import React from 'react';

import style from './SectionFour.module.scss';
import {Col, Row} from "antd";

export default function SectionFour() {
  return (
    <section className={style.sectionFour}>
      <Row type="flex" align="middle" className={style.sectionFourContainer}>
        <Col xs={24} sm={24} md={12} lg={12} className={style.left}>
          <img src={`${process.env.PUBLIC_URL}/img/home/iphone.png`} alt="iphone" className={style.image} />
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} className={style.right}>
          <strong className={style.title}>Mobile Friendly Gameplay for all Devices.</strong>
          <p className={style.info}>The MemeWars web app is available on both desktop and mobile devices, optimized for all screen sizes and compatible with the leading crypto wallets like TrustWallet, Metamask, Coinbase Wallet and more.</p>
          <div className={style.iconGroup}>
            <img src={`${process.env.PUBLIC_URL}/img/home/mac.svg`} alt="mac" className={style.icon} />
            <img src={`${process.env.PUBLIC_URL}/img/home/android.svg`} alt="android" className={style.icon} />
            <img src={`${process.env.PUBLIC_URL}/img/home/web.png`} alt="web" className={style.icon} />
            <img src={`${process.env.PUBLIC_URL}/img/home/windows.svg`} alt="windows" className={style.icon} />
            <img src={`${process.env.PUBLIC_URL}/img/home/huawei.png`} alt="huawei" className={style.icon} />
          </div>
        </Col>
      </Row>
    </section>
  )
}
