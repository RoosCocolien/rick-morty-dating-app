import Link from 'next/link'
import styles from '../../styles/Home.module.css'

export default function Ideas() {
    return(
        <container className={styles.container}>
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
        </container>
    )
}