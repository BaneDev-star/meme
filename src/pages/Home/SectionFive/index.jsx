import React from 'react';

import style from './SectionFive.module.scss';
import {Col, Row} from "antd";

export default function SectionFive() {
  return (
    <section className={style.sectionFive}>
      <Row type="flex" align="middle" className={style.wrapper}>
        <Col xs={24} sm={24} md={14} lg={16} className={style.information}>
          <section className={style.content}>
            <strong className={style.heading}>Are you Ready for Battle?</strong>

            <div className={style.buttonContainer}>
              <a className={style.btnJoin} href="#" target="_blank" rel="noreferrer">
                <div className={style.btnWrapper}>
                  <img src={`${process.env.PUBLIC_URL}/img/home/telegram.svg`} alt="telegram" className={style.telegramIcon} />
                  <span className={style.label}>Join Chat</span>
                </div>
              </a>

              <a className={style.btnContact} href="#" target="_blank" rel="noreferrer">
                <div className={style.btnWrapper}>
                  <img src={`${process.env.PUBLIC_URL}/img/home/pancake.png`} alt="pancake" className={style.pancakeIcon} />
                  <span className={style.label}>Coming Soon</span>
                </div>
              </a>
            </div>
          </section>
        </Col>

        <Col xs={0} sm={0} md={10} lg={8} className="elip-container">
          {/*<div className="overlap">*/}
          {/*  <Lottie {...lottieOptions}/>*/}
          {/*</div>*/}
          {/*<img src={`${process.env.PUBLIC_URL}/images/elip.png`} alt="logo" className="logo" />*/}
        </Col>
      </Row>
    </section>
  )
}
