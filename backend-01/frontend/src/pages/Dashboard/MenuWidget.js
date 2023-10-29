import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";

const widget = [
  {
    id: 1,
    title: "New Filing",
    count: "0",
    dollor: false,
    icon: "fas fa-file-alt text-primary",
    percentage: "14.33%",
    color: "success",
    upArrow: true,
  },
  {
    id: 2,
    title: "Refunds",
    count: "0",
    dollor: true,
    icon: "mdi mdi-cash-multiple text-success",
    percentage: "4.58%",
    color: "danger",
    upArrow: false,
  },
  {
    id: 3,
    title: " All Filings",
    count: "0",
    dollor: false,
    icon: "fas fa-archive text-primary",
    percentage: "2.65%",
    color: "success",
    upArrow: true,
  },
  {
    id: 4,
    title: "All Refunds",
    count: "0",
    dollor: true,
    icon: "mdi mdi-cash-multiple text-success",
    percentage: "0.55%",
    color: "warning",
    upArrow: true,
  },
];

const MenuWidget = (props) => {
  return (
    <React.Fragment>
      <Row>
        {widget.map((widget, key) => (
          <Col md={6} xl={3} key={key}>
            <Card>
              <CardBody>
                <div className="center">
                  <div className="avatar-sm mx-auto mb-4">
                    <span className="avatar-title rounded-circle bg-light font-size-75">
                      <i className={widget.icon}></i>
                    </span>
                  </div>
                </div>
                <div>
                  <p className="text-muted text-uppercase fw-semibold">
                    {widget.title}
                  </p>
                  <h4 className="mb-1 mt-1">
                    {widget.dollor === true ? "$" : ""}
                    <span className="counter-value" data-target="58425">
                      {widget.count}
                    </span>
                  </h4>
                </div>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </React.Fragment>
  );
};

export default MenuWidget;
