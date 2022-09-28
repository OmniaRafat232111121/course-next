import Meta from './Meta'
import styles from '../styles/Layout.module.css'
import Nav from './Nav'
im
const Layout = ({ children }) => {
  return (
    <div>
      <Meta />
      <Nav/>
      <div className={styles.container}>
        <main className={styles.main}>
          {children}
        </main>
      </div>
    </div>
  )
}
export default Layout