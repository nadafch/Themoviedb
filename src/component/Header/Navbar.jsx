import {
  LikeFilled,
  NotificationOutlined,
  StarFilled,
} from "@ant-design/icons";
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
      icon: <StarFilled />,
    },
    {
      label: "Top rated",
      key: "topRated",
      icon: <LikeFilled />,
    },
    {
      label: "Upcoming",
      key: "upcoming",
      icon: <NotificationOutlined />,
    },
  ];

  const onClickMenu = (e) => {
    currentSelect !== e.key ? setCurrentSelect(e.key) : setCurrentSelect("");
  };

  return (
    <Header className="app-header">
      <img src={Logo} />
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
