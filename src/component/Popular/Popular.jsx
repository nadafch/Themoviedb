import "./Popular.css";
import CardMovies from "../Card/CardMovies";
import { useEffect, useState } from "react";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";

function Popular() {
  const [movies, setMovies] = useState([]);
  const baseURL = import.meta.env.VITE_BASE_URL;
  const baseImgURL = import.meta.env.VITE_BASE_IMG_URL;
  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    axios
      .get(`${baseURL}/movie/popular`, {
        params: {
          api_key: apiKey,
        },
      })
      .then((response) => {
        setMovies(response.data.results);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, [apiKey, baseURL]);

  return (
    <section className="container" id="popular">
      <div className="center content__title">POPULAR</div>
      <div className="content__list center">
        <AnimatePresence>
          {movies &&
            movies.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: "-10%" }}
                whileInView={{ opacity: 1, y: "0%" }}
                exit={{ opacity: 0, y: "-10%" }}
                transition={{ duration: 0.8 }}
              >
                <CardMovies poster={`${baseImgURL}${item.poster_path}`} />
              </motion.div>
            ))}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Popular;
