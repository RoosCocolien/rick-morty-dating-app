import { useState, FunctionComponent } from 'react'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import QUERY_RICKMORTY from './RickMortyQuery.graphql'
import Image from 'next/image'
import * as styles from '../../styles/styles.css'

export default function MatchMaker({ dates }) {
  const [dateIndex, setDateIndex] = useState(0);
  const [date, setDate] = useState(dates[dateIndex]);
  const [adventureIndex, setAdventureIndex] = useState(0);
  const [adventure, setAdventure] = useState(date.episode[adventureIndex]);
  // console.log(dates);
  // console.log(dates[0].episode)
  // console.log(date.episode.length)

  const nextDate = () => {
    if (dateIndex >= dates.length - 1) {
      setDateIndex(0);
      setDate(dates[0])
      setAdventureIndex(0);
      setAdventure(dates[0].episode[0])
    } else {
      setDateIndex(dateIndex + 1);
      setDate(dates[dateIndex + 1])
      setAdventureIndex(0);
      setAdventure(dates[dateIndex + 1].episode[0])
    }
  }

  const nextAdventure = () => {
    if (adventureIndex >= date.episode.length - 1) {
      setAdventureIndex(0);
      setAdventure(date.episode[0])
    } else {
      setAdventureIndex(adventureIndex + 1)
      setAdventure(date.episode[adventureIndex + 1])
    }
  }

  return (
    <div>

      <div className={styles.themeClass}>
        <main className={styles.grid}>
          <h1>Matchmaker</h1>
          <div className={styles.card}>
            <h2>Choose your date:</h2>
            <div>
              <h3>{date.name}</h3>
              <Image
                src={date.image}
                alt='picture of a date'
                width={300}
                height={300} />
              <p>{dateIndex + 1} of {dates.length}</p>
              <p>
                <button onClick={nextDate}>
                  Next
                </button>
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <h2>Choose your adventure:</h2>
            <div>
              <h3>{adventure.name}</h3>
              <p>{adventureIndex + 1} of {date.episode.length}</p>
              <p>
                <button onClick={nextAdventure}>
                  Next
                </button>
              </p>
            </div>
          </div>
        </main>
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
    query: QUERY_RICKMORTY,
  })

  return {
    props: {
      dates: data.characters.results,
    },
  }
}