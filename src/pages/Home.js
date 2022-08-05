import data from '../data/artistData'
import ArtistCard from '../components/ArtistCard'
import Header from '../components/Header'
import Search from '../components/Search.tsx'
import '../components/Search.css'

function Home() {
  return (
    <>
      <Search />
      <Header />
      <div className="cards">
        {data.map((artist) => (
          <ArtistCard
            key={artist.artistKey}
            artistId={artist.artistKey}
            firstName={artist.firstName}
            lastName={artist.lastName}
            cardImage={artist.cardImage}
            category={artist.category}
            artistPage={artist.artistPage}
            artistImages={artist.artistImages}
          />
        ))}
      </div>
    </>
  )
}

export default Home
