import React from 'react';

import style from './SectionThree.module.scss';
import {FEATURE_LIST} from "./constants";

export default function SectionThree() {
  return (
    <section className={style.sectionThree}>
      <h2 className={style.heading}>Wars Fueled by MWAR Token</h2>
      <ul className={style.list}>
        {FEATURE_LIST.map((item, i) => (
          <li className={style.item} key={i}>
            <img className={style.itemImage} src={item.image} alt=""/>
            <h3 className={style.itemHeading}>{item.heading}</h3>
            <p className={style.itemText}>{item.text}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
