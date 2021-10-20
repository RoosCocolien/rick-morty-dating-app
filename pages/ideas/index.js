import { ApolloClient, InMemoryCache, inMemoryCache } from '@apollo/client'
import Link from 'next/link'
import EPISODE_QUERY from './EpisodeQuery.graphql'
import * as styles from '../../styles/styles.css'

export default function Ideas({ episodes }) {
  console.log(episodes)
  
  return(
    <div className={styles.themeClass}>
      <div className={styles.container}>
        <h1>Ideas</h1>
        <p>Check out some ideas for potential dates:</p>
        <div className={styles.grid}>
          {episodes.map((episode) => (
            <div className={styles.card} key={episode.name}>
              <h2>{episode.name}</h2>
              <ul>
                <li>Idea {episode.id} of {episodes.length}</li>
                <li>You have to travel back to: {episode.air_date}.</li>
              </ul>
              <h3>Synopsis</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at tincidunt elit, ac ornare ex. Donec lobortis sem sed mi imperdiet dapibus. In hac habitasse platea dictumst. Donec ut magna velit. Suspendisse auctor venenatis turpis quis condimentum. Sed eget condimentum ligula. Nam placerat libero felis. Integer venenatis vel felis quis ornare. Aenean rhoncus mollis semper. Sed eu eros rutrum, vulputate est vel, hendrerit mi. Suspendisse metus magna, posuere in tristique a, accumsan nec odio. Sed porttitor tristique odio vel fermentum. Nulla eget commodo elit. Nunc at dictum libero.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const client = new ApolloClient({
    uri: 'https://rickandmortyapi.com/graphql',
    cache: new InMemoryCache()
  })

  const { data } = await client.query({
    query: EPISODE_QUERY,
  })

  return {
    props: {
      episodes: data.episodes.results,
    }
  }
}