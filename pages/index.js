import Head from 'next/head'
import Image from 'next/image'


export default function Home() {
  return (
    <div className="homepage">
      <Head>
        <title>Spotify</title>
        <meta name="description" content="Spotify Layout Clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <div className="homepage__content">

          <h1>
            Listening is everything
          </h1>

          <p>
            Millions of songs and podcasts. No credit card needed.
          </p>

          <button className="button button--homepage">
            Get Spotify Free
          </button>
        </div>
      </div>

     
    </div>
  )
}
