import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import AppHeader from '../components/AppHeader'

export default function Diary() {
    return(
        <container className={styles.container}>
            <AppHeader />
            <h1>Diary</h1>
            <p>Check out the stories:</p>
            <div className={styles.grid}>
                <div>
                    <a className={styles.card}>
                        <Link href='/diary/first-date'>
                                Story 1
                        </Link>
                    </a>
                </div>
            </div>
        </container>
    )
}