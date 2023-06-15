import videoBg from "../../assets/video/elemental.mp4";
import "./Upcoming.css";

function Upcoming() {
  return (
    <div className="main">
      <div className="content__title center">UPCOMING</div>
      <div className="upcoming__content">
        <video src={videoBg} autoPlay loop muted />
        <div className="upcoming__overlay"></div>
        <div className="upcoming__overview">
          Get ready to embark on a thrilling cinematic journey as you patiently
          await the release of these highly anticipated upcoming movies.
          <button>SUBSCRIBE</button>
        </div>
      </div>
    </div>
  );
}

export default Upcoming;
