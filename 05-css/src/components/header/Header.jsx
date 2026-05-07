import React from 'react'
import styles from './header.module.css'

const header = () => {
  return (
    <div className={styles.header}>
        <h1>Sheryians</h1>
        <button className={styles.btn}>Login</button>
    </div>
  )
}

export default header
