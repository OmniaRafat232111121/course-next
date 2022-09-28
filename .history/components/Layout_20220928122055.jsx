import Meta from './Meta'
import styles from '../styles/Layout.module.css'
import Nav from './Nav'
const Layout = ({ children }) => {
  return (
    <di>
    <Nav/>
      <div className={styles.container}>
        <main className={styles.main}>
        {children}
        </main>
      </div>
    </di>
  )
}
export default Layout