/* eslint-disable react/prop-types */

export default function ArtistCard({
  firstName,
  lastName,
  category,
  cardImage,
  artistPage,
}) {
  return (
    <a href={artistPage} className="card" category={category}>
      <div className="card-left">
        <div>
          {firstName} <br /> {lastName}
        </div>
      </div>
      <div className="card-right shadow">
        <img src={cardImage} alt="" />
      </div>
    </a>
  );
}
