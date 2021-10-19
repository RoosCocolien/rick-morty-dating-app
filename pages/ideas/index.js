import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import AppHeader from '../../components/AppHeader'

export default function Ideas() {
    return(
        <div>
            <AppHeader />
                <div className={styles.container}>
                    <h1>Ideas</h1>
                    <p>Check out some ideas for potential dates:</p>
                <div className={styles.grid}>
                    <div>
                        <a className={styles.card}>
                            <Link href='/ideas/hike'>
                                Hike
                            </Link>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}