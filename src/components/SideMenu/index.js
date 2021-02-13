import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Dropdown, Icon, Menu } from "semantic-ui-react";

const MenuExampleSubMenu = () => {
  const [activeItem, setItem] = useState("");
  let history = useHistory();
  const handleItemClick = (e, { name }) => {
    setItem(name);
    history.push("/");
    history.push(name);
  };

  return (
    <Menu vertical style={{ width: "100%", paddingRight: "3vw" }}>
      <Menu.Item name="" active={activeItem === ""} onClick={handleItemClick}>
        Contents
      </Menu.Item>
      <Menu.Item>
        Users
        <Menu.Menu>
          <Menu.Item
            name="payment/history"
            active={activeItem === "payment/history"}
            onClick={handleItemClick}
          >
            Banned userlist
          </Menu.Item>
          <Menu.Item
            name="payment/add"
            active={activeItem === "payment/add"}
            onClick={handleItemClick}
          >
            User Authorization
          </Menu.Item>
          <Menu.Item
            name="payment/cards"
            active={activeItem === "payment/cards"}
            onClick={handleItemClick}
          >
            User photos
          </Menu.Item>
        </Menu.Menu>
      </Menu.Item>

      <Menu.Item
        name="ads"
        active={activeItem === "ads"}
        onClick={handleItemClick}
      >
        <Icon name="grid layout" />
        Tables
      </Menu.Item>
      <Menu.Item
        name="details"
        active={activeItem === "details"}
        onClick={handleItemClick}
      >
        My info
      </Menu.Item>

      <Dropdown item text="Other">
        <Dropdown.Menu>
          <Dropdown.Item icon="edit" text="Send notification" />

          <Dropdown.Item icon="settings" text="Settings" />
        </Dropdown.Menu>
      </Dropdown>
    </Menu>
  );
};
export default MenuExampleSubMenu;
