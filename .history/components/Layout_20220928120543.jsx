import Meta from './Meta'
import styles from '../styles/Layout.module.css'

const Layout = ({ children }) => {
  return (
    <div>
      <Meta />
      
      <div className={styles.container}>
        <main className={styles.main}>
          {children}
        </main>
      </div>
    </div>
  )
}

export default Layout