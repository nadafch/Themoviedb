import { Layout, Menu } from "antd";
import "./Navbar.css";
import Logo from "../../assets/imdb.svg";
import { useState } from "react";

const { Header } = Layout;

function Navbar() {
  const [currentSelect, setCurrentSelect] = useState("");

  const items = [
    {
      label: "Popular",
      key: "popular",
    },
    {
      label: "Top rated",
      key: "topRated",
    },
    {
      label: "Upcoming",
      key: "upcoming",
    },
  ];

  const onClickMenu = (e) => {
    const element = document.getElementById(e.key);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setCurrentSelect(e.key);
    }
  };

  return (
    <Header className="app-header">
      <a className="center" href="#">
        <img src={Logo} />
      </a>
      <Menu
        className="app-header__menu"
        mode="horizontal"
        theme="dark"
        items={items}
        selectedKeys={[currentSelect]}
        onClick={onClickMenu}
      />
    </Header>
  );
}

export default Navbar;
