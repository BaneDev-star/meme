import React from 'react';
import cn from 'classnames';

import style from './Footer.module.scss';
import {Col, Divider, Row} from "antd";
import {Link} from "react-router-dom";

export default function Footer() {
  return (
    <footer className={cn(style.footerContainer)}>
      <div className={style.footerWrapper}>
        <Row type="flex" align="middle">
          <Col xs={24} sm={24} md={6} lg={6} className={style.logoContainer}>
            <a href="/">
              <img src={`${process.env.PUBLIC_URL}/img/memewars-logo.webp`} alt="logo" className="logo"/>
            </a>
          </Col>

          <Col xs={24} sm={24} md={12} lg={12} className={style.termContainer}>
            <Link to={'#'}>
              Terms of Service
            </Link>
            <Link to={'#'}>
              Privacy Policy
            </Link>
          </Col>

          <Col xs={24} sm={24} md={6} lg={6}>
            <div className={style.socialButtonLabel}>
              <p>Follow us on</p>
            </div>
            <div className={style.socialButton}>
              <a href="#" target={'_blank'} rel={'noreferrer'}>
                <img src={`${process.env.PUBLIC_URL}/img/social/tele.png`} alt="tele" className="social"/>
              </a>
              <a href="#" target={'_blank'} rel={'noreferrer'}>
                <img src={`${process.env.PUBLIC_URL}/img/social/twitter.png`} alt="twitter" className="social"/>
              </a>
              <a href="#" target={'_blank'} rel={'noreferrer'}>
                <img src={`${process.env.PUBLIC_URL}/img/social/uniswap.png`} alt="uniswap" className="social"/>
              </a>
              <a href="#" target={'_blank'} rel={'noreferrer'}>
                <img src={`${process.env.PUBLIC_URL}/img/social/pancake.png`} alt="pancake" className="social"/>
              </a>
            </div>
          </Col>
        </Row>
        <Divider style={{ margin: '30px 0', borderTopColor: '#d6dadd' }} />
      </div>
    </footer>
  )
}
