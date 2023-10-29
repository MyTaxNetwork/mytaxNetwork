import React, { useState } from "react";
import MetaTags from "react-meta-tags";
import Widget from "../Dashboard/Widget";
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import {
  Card,
  CardBody,
  Col,
  Container,
  Form,
  Input,
  Label,
  Row,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from "reactstrap";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "@vtaits/react-color-picker/dist/index.css";
import "react-datepicker/dist/react-datepicker.css";
import classnames from "classnames";
//Import Flatepicker
import "flatpickr/dist/themes/material_blue.css";

import { Link } from "react-router-dom";

const Client_DB = () => {
  const [activeTab, setactiveTab] = useState(1);
  const [passedSteps, setPassedSteps] = useState([1]);

  function toggleTab(tab) {
    if (activeTab !== tab) {
      if (tab >= 1 && tab <= 4) {
        var modifiedSteps = [...passedSteps, tab];
        setactiveTab(tab);
        setPassedSteps(modifiedSteps);
      }
    }
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <MetaTags>
          <title>
            Starter Page | Samply - React Admin & Dashboard Template
          </title>
        </MetaTags>
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Utility" breadcrumbItem="Starter Page" />
          <Widget />

          <Row>
            <Col lg="12">
              <Card>
                <CardBody>
                  <h4 className="card-title mb-4">Basic Wizard</h4>
                  <div className="wizard clearfix">
                    <div className="steps clearfix">
                      <ul>
                        <NavItem
                          className={classnames({ current: activeTab === 1 })}
                        >
                          <NavLink
                            className={classnames({ current: activeTab === 1 })}
                            onClick={() => {
                              setactiveTab(1);
                            }}
                          >
                            <span className="number">1.</span> Seller Details
                          </NavLink>
                        </NavItem>
                        <NavItem
                          className={classnames({ current: activeTab === 2 })}
                        >
                          <NavLink
                            disabled={!(passedSteps || []).includes(2)}
                            className={classnames({ active: activeTab === 2 })}
                            onClick={() => {
                              setactiveTab(2);
                            }}
                          >
                            <span className="number ms-2">02</span> Company
                            Document
                          </NavLink>
                        </NavItem>
                        <NavItem
                          className={classnames({ current: activeTab === 3 })}
                        >
                          <NavLink
                            disabled={!(passedSteps || []).includes(3)}
                            className={classnames({ active: activeTab === 3 })}
                            onClick={() => {
                              setactiveTab(3);
                            }}
                          >
                            <span className="number">03</span> Bank Details
                          </NavLink>
                        </NavItem>
                        <NavItem
                          className={classnames({ current: activeTab === 4 })}
                        >
                          <NavLink
                            disabled={!(passedSteps || []).includes(4)}
                            className={classnames({ active: activeTab === 4 })}
                            onClick={() => {
                              setactiveTab(4);
                            }}
                          >
                            <span className="number">04</span> Confirm Detail
                          </NavLink>
                        </NavItem>
                      </ul>
                    </div>
                    <div className="content clearfix mt-4">
                      <TabContent activeTab={activeTab}>
                        <TabPane tabId={1}>
                          <Form>
                            <Row>
                              <Col lg="6">
                                <div className="mb-3">
                                  <Label htmlFor="basicpill-firstname-input1">
                                    First name
                                  </Label>
                                  <Input type="text" className="form-control" />
                                </div>
                              </Col>
                              <Col lg="6">
                                <div className="mb-3">
                                  <Label htmlFor="basicpill-lastname-input2">
                                    Last name
                                  </Label>
                                  <Input type="text" className="form-control" />
                                </div>
                              </Col>
                            </Row>

                            <Row>
                              <Col lg="6">
                                <div className="mb-3">
                                  <Label htmlFor="basicpill-phoneno-input3">
                                    Phone
                                  </Label>
                                  <Input type="text" className="form-control" />
                                </div>
                              </Col>
                              <Col lg="6">
                                <div className="mb-3">
                                  <Label htmlFor="basicpill-email-input4">
                                    Email
                                  </Label>
                                  <Input
                                    type="email"
                                    className="form-control"
                                    id="basicpill-email-input4"
                                  />
                                </div>
                              </Col>
                            </Row>
                            <Row>
                              <Col lg="12">
                                <div className="mb-3">
                                  <Label htmlFor="basicpill-address-input1">
                                    Address
                                  </Label>
                                  <textarea
                                    id="basicpill-address-input1"
                                    className="form-control"
                                    rows="2"
                                  />
                                </div>
                              </Col>
                            </Row>
                          </Form>
                        </TabPane>
                        <TabPane tabId={2}>
                          <div>
                            <Form>
                              <Row>
                                <Col lg="6">
                                  <div className="mb-3">
                                    <Label htmlFor="basicpill-pancard-input5">
                                      PAN Card
                                    </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id="basicpill-pancard-input5"
                                    />
                                  </div>
                                </Col>

                                <Col lg="6">
                                  <div className="mb-3">
                                    <Label htmlFor="basicpill-vatno-input6">
                                      VAT/TIN No.
                                    </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                    />
                                  </div>
                                </Col>
                              </Row>
                              <Row>
                                <Col lg="6">
                                  <div className="mb-3">
                                    <Label htmlFor="basicpill-cstno-input7">
                                      CST No.
                                    </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                    />
                                  </div>
                                </Col>

                                <Col lg="6">
                                  <div className="mb-3">
                                    <Label htmlFor="basicpill-servicetax-input8">
                                      Service Tax No.
                                    </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                    />
                                  </div>
                                </Col>
                              </Row>
                              <Row>
                                <Col lg="6">
                                  <div className="mb-3">
                                    <Label htmlFor="basicpill-companyuin-input9">
                                      Company UIN
                                    </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                    />
                                  </div>
                                </Col>

                                <Col lg="6">
                                  <div className="mb-3">
                                    <Label htmlFor="basicpill-declaration-input10">
                                      Declaration
                                    </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                    />
                                  </div>
                                </Col>
                              </Row>
                            </Form>
                          </div>
                        </TabPane>
                        <TabPane tabId={3}>
                          <div>
                            <Form>
                              <Row>
                                <Col lg="6">
                                  <div className="mb-3">
                                    <Label htmlFor="basicpill-namecard-input11">
                                      Name on Card
                                    </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                    />
                                  </div>
                                </Col>

                                <Col lg="6">
                                  <div className="mb-3">
                                    <Label>Credit Card Type</Label>
                                    <select className="form-select">
                                      <option defaultValue>
                                        Select Card Type
                                      </option>
                                      <option value="AE">
                                        American Express
                                      </option>
                                      <option value="VI">Visa</option>
                                      <option value="MC">MasterCard</option>
                                      <option value="DI">Discover</option>
                                    </select>
                                  </div>
                                </Col>
                              </Row>
                              <Row>
                                <Col lg="6">
                                  <div className="mb-3">
                                    <Label htmlFor="basicpill-cardno-input12">
                                      Credit Card Number
                                    </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                    />
                                  </div>
                                </Col>

                                <Col lg="6">
                                  <div className="mb-3">
                                    <Label htmlFor="basicpill-card-verification-input">
                                      Card Verification Number
                                    </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id="basicpill-card-verification-input"
                                    />
                                  </div>
                                </Col>
                              </Row>
                              <Row>
                                <Col lg="6">
                                  <div className="mb-3">
                                    <Label htmlFor="basicpill-expiration-input13">
                                      Expiration Date
                                    </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id="basicpill-expiration-input13"
                                    />
                                  </div>
                                </Col>
                              </Row>
                            </Form>
                          </div>
                        </TabPane>
                        <TabPane tabId={4}>
                          <div className="row justify-content-center">
                            <Col lg="6">
                              <div className="text-center">
                                <div className="mb-4">
                                  <i className="mdi mdi-check-circle-outline text-success display-4" />
                                </div>
                                <div>
                                  <h5>Confirm Detail</h5>
                                  <p className="text-muted">
                                    If several languages coalesce, the grammar
                                    of the resulting
                                  </p>
                                </div>
                              </div>
                            </Col>
                          </div>
                        </TabPane>
                      </TabContent>
                    </div>
                    <div className="actions clearfix">
                      <ul>
                        <li
                          className={
                            activeTab === 1 ? "previous disabled" : "previous"
                          }
                        >
                          <Link
                            to="#"
                            onClick={() => {
                              toggleTab(activeTab - 1);
                            }}
                          >
                            Previous
                          </Link>
                        </li>
                        <li
                          className={activeTab === 4 ? "next disabled" : "next"}
                        >
                          <Link
                            to="#"
                            onClick={() => {
                              toggleTab(activeTab + 1);
                            }}
                          >
                            Next
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Client_DB;
