import React from 'react';

import style from './SectionOne.module.scss';
import {Col, Row} from "antd";
import Button from "../../../components/Button";
import cn from "classnames";

export default function SectionOne() {
  return (
    <section className={style.sectionOne}>
      <Row align="middle" className={style.headerContainer}>
        <Col xs={24} sm={24} md={12} lg={12} className={style.leftHeader}>
          <div className={style.title}>
            <h1 className={style.heading} style={{ marginBottom: 45 }}>Welcome to MemeWars</h1>
          </div>
          <p className={style.detail}>
            The first ever DeFi game that allows players to strategically, stake, defend and attack enemy staking pools.
          </p>
          <section className={style.buttonContainer}>
            <Button
              compact
              light
              wrapperClass={style.comingBtn}
              onClick={() => {}}
            >
              <img src={`${process.env.PUBLIC_URL}/img/home/pancake.png`} alt="pancake" className={style.pancakeIcon} />
              <span>PancakeSwap Coming Soon</span>
            </Button>
            <Button compact light wrapperClass={cn(style.comingBtn, style.game)} text={'Game Coming Soon'} onClick={() => {}}/>
          </section>
          <section className={style.binanceSmart}>
            <p className={style.text1}>Exclusively on</p>
            <img src={`${process.env.PUBLIC_URL}/img/home/bnb.png`} alt="bnb" className={style.bnbIcon} />
            <p className={style.text2}>Binance Smart Chain</p>
          </section>
        </Col>
        <div xs={24} sm={24} md={24} lg={24} className={style.rightHeader}>
          <img src={`${process.env.PUBLIC_URL}/img/home/illustration.webp`} alt="" className={style.baseImage} />
          <img src={`${process.env.PUBLIC_URL}/img/home/i-stack-1.svg`} alt="" className={style.iStack1} />
          <img src={`${process.env.PUBLIC_URL}/img/home/i-stack-2.svg`} alt="" className={style.iStack2} />
          <img src={`${process.env.PUBLIC_URL}/img/home/i-stack-3.svg`} alt="" className={style.iStack3} />
          <img src={`${process.env.PUBLIC_URL}/img/home/i-stack-4.svg`} alt="" className={style.iStack4} />
        </div>
      </Row>
    </section>
  )
}
