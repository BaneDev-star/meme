import React from 'react';

import style from './SectionTwo.module.scss';
import {Col, Row} from "antd";
import cn from "classnames";

export default function SectionTwo() {
  return (
    <section className={style.sectionTwo}>
      <Row type="flex" justify="center" align="middle" className={cn(style.item, style.itemOne)}>
        <Col xs={24} sm={24} md={14} lg={14} className={style.left}>
          <img src={`${process.env.PUBLIC_URL}/img/home/section2_1.webp`} alt="1" className={style.itemIcon} />
        </Col>

        <Col xs={24} sm={24} md={9} lg={9} className={style.right}>
          <strong className={style.title}>Choose & Stake<br />in your team</strong>
          <p className={style.info}>Stake MWAR tokens into a team and sub-pool to gain ownership and voting rights in that pool.You can stake in one of three teams, and one of three sub-pools in each team (attack, defense & production).</p>
        </Col>
      </Row>

      <Row type="flex" justify="center" align="middle" className={cn(style.item, style.itemTwo)}>
        <Col xs={24} sm={24} md={7} lg={7} className={style.left}>
          <strong className={style.title}>Vote & Wage War</strong>
          <p className={style.info}>If your team is chosen to declare war by the random on-chain lottery, you and your team members can vote on which of the other two nations to attack.</p>
        </Col>

        <Col xs={24} sm={24} md={14} lg={14} className={style.right}>
          <img src={`${process.env.PUBLIC_URL}/img/home/section2_2.webp`} alt="2" className={style.itemIconTwo} />
        </Col>
      </Row>

      <Row type="flex" justify="center" align="middle" className={cn(style.item, style.itemOne)}>
        <Col xs={24} sm={24} md={14} lg={14} className={style.left}>
          <img src={`${process.env.PUBLIC_URL}/img/home/section2_3.webp`} alt="3" className={style.itemIcon} />
        </Col>

        <Col xs={24} sm={24} md={9} lg={9} className={style.right}>
          <strong className={style.title}>Loot Enemy<br />Staking Rewards</strong>
          <p className={style.info}>After waging war, your team will take loot from the enemy team and distribute it amongst your stakers proportional to their ownership in your team’s pool.</p>
        </Col>
      </Row>
    </section>
  )
}
