import React from "react";
import styles from './Sceleton.module.scss'
import Loader from "../loader/Loader";
const sceletonArray = new Array(10).fill("");

const Sceleton = () => (
  <div className={styles.sceletonWrapper}>
    {
        sceletonArray.map((_,item) => {
            return <Loader key={item}/>
        })
    }
  </div>
);

export default Sceleton;
