import React from 'react';
import styles from "./style.module.css";

export default function Button({ children }) {
 return (
   <a href="#" className={styles.button}>
       {children}
   </a>
 );
}
