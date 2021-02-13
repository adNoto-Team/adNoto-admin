import React, { useContext } from "react";

import Container from "../../components/Container";
// import Button from "../../components/Button";
import { Header } from "semantic-ui-react";
import Context from "../../context/context";

import "semantic-ui-css/semantic.min.css";

const General = () => {
  const { user } = useContext(Context);

  return (
    <div>
      <Container>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Header style={{ flex: 1 }} as={"h3"}>
              Username:
            </Header>
            <Header style={{ flex: 1 }} as={"h3"}>
              GSM Number:
            </Header>
            <Header style={{ flex: 1 }} as={"h3"}>
              Mail:
            </Header>
            <Header style={{ flex: 1 }} as={"h3"}>
              Full Name:
            </Header>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Header style={{ flex: 1 }} as={"h4"}>
              {user.username ? user.username : "unadded"}
            </Header>
            <Header style={{ flex: 1 }} as={"h4"}>
              {user.gsmNumber ? user.gsmNumber : "unadded"}
            </Header>
            <Header style={{ flex: 1 }} as={"h4"}>
              {user.mail ? user.mail : "unadded"}
            </Header>
            <Header style={{ flex: 1 }} as={"h4"}>
              {user.tcNo ? user.tcNo : "unadded"}
            </Header>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default General;
