/* eslint-disable react/prop-types */
import './ArtistCard.css'

export default function ArtistCard({
  firstName,
  lastName,
  category,
  cardImage,
  artistPage,
}) {
  return (
    <div className="card">
      <div className="card-left">
        <a href={artistPage} category={category}>
          <h3>
            <div>{firstName}</div> {lastName}
          </h3>
        </a>
      </div>
      <div className="card-right shadow">
        <img src={cardImage} alt="" />
      </div>
    </div>
  )
}
