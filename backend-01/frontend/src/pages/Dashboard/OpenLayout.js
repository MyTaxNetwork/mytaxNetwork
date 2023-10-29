import React from "react";
import { Card, CardBody } from "reactstrap";
import MenuWidget from "./MenuWidget";

function OpenLayout() {
  return (
    <Card>
      <CardBody>
        <h1>Select Your Starting Point</h1>
        <MenuWidget />
      </CardBody>
    </Card>
  );
}

export default OpenLayout;
