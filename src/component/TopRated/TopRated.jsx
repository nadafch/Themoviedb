import "./TopRated.css";
import CardMovies from "../Card/CardMovies";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

function TopRated() {
  const poster_path = [
    "/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
    "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    "/lyQBXzOQSuE59IsHyhrp0qIiPAz.jpg",
  ];
  return (
    <div className="container" id="topRated">
      <div className="content__title center">TOP RATED</div>
      <div className="grid">
        <div className="grid__item center">
          <AnimatePresence>
            <motion.h1
              className="caption"
              initial={{ opacity: 0, x: "-50%" }}
              whileInView={{ opacity: 1, x: "0%" }}
              transition={{ delay: 0.2, type: "keyframes", stiffness: 20 }}
            >
              Immerse yourself in the world of top-rated films and experience
              the magic of captivating storytelling.
            </motion.h1>
          </AnimatePresence>
        </div>
        <div className="grid__item center">
          <div className="flex card__wrapper">
            <AnimatePresence>
              <motion.div
                className="rotate__left"
                initial={{ opacity: 0, y: "10%" }}
                whileInView={{ opacity: 1, y: "0%" }}
                exit={{ opacity: 0, y: "10%" }}
                transition={{ delay: 0.5 }}
              >
                <CardMovies poster={poster_path[0]} />
              </motion.div>
            </AnimatePresence>
            <AnimatePresence>
              <motion.div
                className="top__card"
                initial={{ opacity: 0, y: "10%" }}
                whileInView={{ opacity: 1, y: "0%" }}
                exit={{ opacity: 0, y: "10%" }}
                transition={{
                  delay: 0.8,
                  type: "spring",
                }}
              >
                <CardMovies poster={poster_path[1]} />
              </motion.div>
            </AnimatePresence>
            <AnimatePresence>
              <motion.div
                className="rotate__right"
                initial={{ opacity: 0, y: "10%" }}
                whileInView={{ opacity: 1, y: "0%" }}
                exit={{ opacity: 0, y: "10%" }}
                transition={{ delay: 0.6 }}
              >
                <CardMovies poster={poster_path[2]} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopRated;
