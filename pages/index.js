import Head from 'next/head'
import Link from 'next/link'

import { getSortedPostsData } from '../lib/posts'
import { getPokemonData } from '../lib/pokemon'

// import { Pokemon } from '../components/Pokemon'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  const pokemonData = getPokemonData()
  return {
    props: {
      allPostsData,
      pokemonData
    }
  }
}

export default function Home({allPostsData, pokemonData}) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section>
<hr />                  
        {/* <Pokemon /> */}
<hr />        

          <h1 className="text-3xl font-bold underline">Pokemon</h1>
          <ul className="list-disc list-style-position: inside;">
            {allPostsData.map(({ id, date, title }) => (
              <li key={id}>
                {title}
                <br />
                {id}
                <br />
                {date}
              </li>
            ))}
          </ul>
        </section>


      </main>



    </div>
  )
}
