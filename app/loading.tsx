import React from 'react'
import styles from '../styles/loadingpage.module.css'


function LoadingPage() {
  return (
    <div className={styles.loading}>
      <div className={styles.progressindicator} />
    </div>
  )
}

export default LoadingPage
