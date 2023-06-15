import { Layout, Rate } from "antd";
import "./BannerCard.css";

function BannerCard(props) {
  const { image, title, rate, overview } = props;

  return (
    <Layout>
      <img src={image} className="banner cover" />
      <div className="cover overlay"></div>
      <div className="content">
        <h1>{title}</h1>
        <div className="content__rate">
          <Rate disabled value={rate} count={10} allowHalf />
          <p>{rate}</p>
        </div>
        <div className="content__overview ">
          {overview.substring(0, 320)}...
        </div>
      </div>
    </Layout>
  );
}

export default BannerCard;
