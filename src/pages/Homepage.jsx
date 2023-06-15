import Navbar from "../component/Header/Navbar";
import Banner from "../component/Banner/Banner";
import Popular from "../component/Popular/Popular";
import "../index.css";
import TopRated from "../component/TopRated/TopRated";
import Upcoming from "../component/Upcoming/Upcoming";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Popular />
      <TopRated />
      <Upcoming />
    </>
  );
};

export default Homepage;
