import React from 'react'
import styles from './NotFoundBlock.module.scss'

const NotFoundBlock = () => {
  const classes = 'styles.root' + 'styles.text'
  return (
    <div className={styles.root}>
        <h1 className={styles.title}>Ничего не найдено :(</h1>
        <p className={`${styles.title} ${styles.text}`}>К сожалению данная страница отсутствует</p>
    </div>
  )
}
export default NotFoundBlock;
