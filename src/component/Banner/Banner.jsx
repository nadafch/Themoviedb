import { Carousel } from "antd";
import Layout from "antd/es/layout/layout";
import BannerCard from "../BannerCard/BannerCard";
import { useEffect, useState } from "react";
import axios from "axios";

function Banner() {
  const [movies, setMovies] = useState([]);
  const baseURL = import.meta.env.VITE_BASE_URL;
  const baseImgURL = import.meta.env.VITE_BASE_IMG_URL;
  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    axios
      .get(`${baseURL}/movie/now_playing`, {
        params: {
          api_key: apiKey,
        },
      })
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, [apiKey, baseURL]);

  return (
    <Layout>
      <Carousel autoplay>
        {movies &&
          movies.map((item) => (
            <BannerCard
              key={item.id}
              title={item.title}
              image={`${baseImgURL}${item.backdrop_path}`}
              rate={item.vote_average}
              overview={item.overview}
            />
          ))}
      </Carousel>
    </Layout>
  );
}

export default Banner;
