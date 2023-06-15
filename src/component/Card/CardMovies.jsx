import "./Card.css";

function CardMovies(props) {
  const { poster } = props;
  const baseImgURL = import.meta.env.VITE_BASE_IMG_URL;

  return (
    <div className="card scale-transition">
      <div className="card__overlay"></div>
      <img
        className="card"
        src={`${baseImgURL}/${poster}`}
        alt="image_poster"
      />
    </div>
  );
}

export default CardMovies;
