import Meta from './Meta'
import styles from '../styles/Layout.module.css'
import Nav from './Nav'
const Layout = ({ children }) => {
  return (
    <div>
    <Na
      <div className={styles.container}>
        <main className={styles.main}>
        {children}
        </main>
      </div>
    </div>
  )
}
export default Layout