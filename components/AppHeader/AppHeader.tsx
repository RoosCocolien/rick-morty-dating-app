import Link from 'next/link'
import * as styles from './AppHeader.css'

export default function AppHeader() {
  return (
    <header className={styles.header}>
      <Link href='/'>
        <a>Rick & Morty Dating App</a>
      </Link>
      <div className={styles.headerRight}>
        <Link href='/ideas'>
          <a className={styles.headerItem}>
            Ideas
          </a>
        </Link>
        <Link href='/matchmaker/find-love'>
          <a className={styles.headerItem}>
            Find Love
          </a>
        </Link>
        <Link href='/about/about'>
          <a className={styles.headerItem}>
            About
          </a>
        </Link>
      </div>
    </header>
  )
}