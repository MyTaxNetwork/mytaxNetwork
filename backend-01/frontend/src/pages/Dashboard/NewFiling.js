import React, { useState } from "react";

import {
  Card,
  CardBody,
  Col,
  Form,
  Input,
  Label,
  Row,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from "reactstrap";
import classnames from "classnames";
import { Link } from "react-router-dom";

function NewFiling() {
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
    <div>
      <Row>
        <Col>
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
                        <span className="number ms-2">02</span> Company Document
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
                          <Col xs={12}>
                            <Card>
                              <CardBody>
                                <h4 className="card-title">Textual Inputs</h4>
                                <p className="card-title-desc">
                                  Here are examples of{" "}
                                  <code>.form-control</code> applied to each
                                  textual HTML5 <code>&lt;input&gt;</code>{" "}
                                  <code>type</code>.
                                </p>

                                <Row>
                                  <Col lg={6}>
                                    <div className="mb-3">
                                      <Label
                                        for="example-text-input"
                                        className="form-label"
                                      >
                                        Text
                                      </Label>
                                      <input
                                        className="form-control"
                                        type="text"
                                        defaultValue="Artisanal kale"
                                        id="example-text-input"
                                      />
                                    </div>
                                  </Col>
                                  <Col lg={6}>
                                    <div className="mb-3">
                                      <Label
                                        for="example-search-input"
                                        className="form-label"
                                      >
                                        Search
                                      </Label>
                                      <input
                                        className="form-control"
                                        type="search"
                                        defaultValue="How do I shoot web"
                                        id="example-search-input"
                                      />
                                    </div>
                                  </Col>
                                </Row>

                                <Row>
                                  <Col lg={6}>
                                    <div className="mb-3">
                                      <Label
                                        for="example-email-input"
                                        className="form-label"
                                      >
                                        Email
                                      </Label>
                                      <input
                                        className="form-control"
                                        type="email"
                                        defaultValue="bootstrap@example.com"
                                        placeholder="Enter Email"
                                        id="example-email-input"
                                      />
                                    </div>
                                  </Col>
                                  <Col lg={6}>
                                    <div className="mb-3">
                                      <Label
                                        for="example-url-input"
                                        className="form-label"
                                      >
                                        URL
                                      </Label>
                                      <input
                                        className="form-control"
                                        type="url"
                                        defaultValue="https://getbootstrap.com"
                                        placeholder="Enter URL"
                                        id="example-url-input"
                                      />
                                    </div>
                                  </Col>
                                </Row>

                                <Row>
                                  <Col lg={6}>
                                    <div className="mb-3">
                                      <Label
                                        for="example-tel-input"
                                        className="form-label"
                                      >
                                        Telephone
                                      </Label>
                                      <input
                                        className="form-control"
                                        type="tel"
                                        defaultValue="1-(555)-555-5555"
                                        placeholder="Enter Telephone"
                                        id="example-tel-input"
                                      />
                                    </div>
                                  </Col>
                                  <Col lg={6}>
                                    <div className="mb-3">
                                      <Label
                                        for="example-password-input"
                                        className="form-label"
                                      >
                                        Password
                                      </Label>
                                      <input
                                        className="form-control"
                                        type="password"
                                        defaultValue="hunter2"
                                        placeholder="Enter Password"
                                        id="example-password-input"
                                      />
                                    </div>
                                  </Col>
                                </Row>

                                <Row>
                                  <Col lg={6}>
                                    <div className="mb-3">
                                      <Label
                                        for="example-number-input"
                                        className="form-label"
                                      >
                                        Number
                                      </Label>
                                      <input
                                        className="form-control"
                                        type="number"
                                        defaultValue="42"
                                        placeholder="Enter Number"
                                        id="example-number-input"
                                      />
                                    </div>
                                  </Col>
                                  <Col lg={6}>
                                    <div className="mb-3">
                                      <Label
                                        for="example-datetime-local-input"
                                        className="form-label"
                                      >
                                        Date and Time
                                      </Label>
                                      <input
                                        className="form-control"
                                        type="datetime-local"
                                        defaultValue="2021-03-19T13:45:00"
                                        id="example-datetime-local-input"
                                      />
                                    </div>
                                  </Col>
                                </Row>

                                <Row>
                                  <Col lg={6}>
                                    <div className="mb-3">
                                      <Label
                                        for="example-date-input"
                                        className="form-label"
                                      >
                                        Date
                                      </Label>
                                      <input
                                        className="form-control"
                                        type="date"
                                        defaultValue="2021-03-19"
                                        id="example-date-input"
                                      />
                                    </div>
                                  </Col>
                                  <Col lg={6}>
                                    <div className="mb-3">
                                      <Label
                                        for="example-month-input"
                                        className="form-label"
                                      >
                                        Month
                                      </Label>
                                      <input
                                        className="form-control"
                                        type="month"
                                        defaultValue="2021-03"
                                        id="example-month-input"
                                      />
                                    </div>
                                  </Col>
                                </Row>

                                <Row>
                                  <Col lg={6}>
                                    <div className="mb-3">
                                      <Label
                                        for="example-week-input"
                                        className="form-label"
                                      >
                                        Week
                                      </Label>
                                      <input
                                        className="form-control"
                                        type="week"
                                        defaultValue="2021-W33"
                                        id="example-week-input"
                                      />
                                    </div>
                                  </Col>
                                  <Col lg={6}>
                                    <div className="mb-3">
                                      <Label
                                        for="example-time-input"
                                        className="form-label"
                                      >
                                        Time
                                      </Label>
                                      <input
                                        className="form-control"
                                        type="time"
                                        defaultValue="13:45:00"
                                        id="example-time-input"
                                      />
                                    </div>
                                  </Col>
                                </Row>
                                <br />
                                <h4 className="card-title">File Uploader</h4>
                                <br />
                                <div className="">
                                  <Row>
                                    <div className="col-sm-6">
                                      <div className="">
                                        <div>
                                          <Label className="form-label">
                                            Social Security Card
                                          </Label>
                                          <div className="input-group">
                                            <input
                                              type="file"
                                              className="form-control"
                                              id="inputGroupFile02"
                                            />
                                            <Label
                                              className="input-group-text"
                                              for="inputGroupFile02"
                                            >
                                              Upload
                                            </Label>
                                          </div>
                                        </div>
                                      </div>
                                      <br />
                                      <div className="">
                                        <div>
                                          <Label className="form-label">
                                            Govt. Photo Id Images
                                          </Label>
                                          <div className="input-group">
                                            <input
                                              type="file"
                                              className="form-control"
                                              id="inputGroupFile02"
                                            />
                                            <Label
                                              className="input-group-text"
                                              for="inputGroupFile02"
                                            >
                                              Upload
                                            </Label>
                                          </div>
                                        </div>
                                      </div>
                                      <br />
                                      <div className="">
                                        <div>
                                          <Label className="form-label">
                                            Profile Image
                                          </Label>
                                          <div className="input-group">
                                            <input
                                              type="file"
                                              className="form-control"
                                              id="inputGroupFile02"
                                            />
                                            <Label
                                              className="input-group-text"
                                              for="inputGroupFile02"
                                            >
                                              Upload
                                            </Label>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </Row>
                                  <Row>
                                    <Col lg={6}>
                                      <div className="mb-3">
                                        <Label className="form-label">
                                          Select
                                        </Label>
                                        <select className="form-select">
                                          <option>Select</option>
                                          <option>Large select</option>
                                          <option>Small select</option>
                                        </select>
                                      </div>
                                    </Col>
                                  </Row>
                                </div>
                              </CardBody>
                            </Card>
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
                                <Input type="text" className="form-control" />
                              </div>
                            </Col>
                          </Row>
                          <Row>
                            <Col lg="6">
                              <div className="mb-3">
                                <Label htmlFor="basicpill-cstno-input7">
                                  CST No.
                                </Label>
                                <Input type="text" className="form-control" />
                              </div>
                            </Col>

                            <Col lg="6">
                              <div className="mb-3">
                                <Label htmlFor="basicpill-servicetax-input8">
                                  Service Tax No.
                                </Label>
                                <Input type="text" className="form-control" />
                              </div>
                            </Col>
                          </Row>
                          <Row>
                            <Col lg="6">
                              <div className="mb-3">
                                <Label htmlFor="basicpill-companyuin-input9">
                                  Company UIN
                                </Label>
                                <Input type="text" className="form-control" />
                              </div>
                            </Col>

                            <Col lg="6">
                              <div className="mb-3">
                                <Label htmlFor="basicpill-declaration-input10">
                                  Declaration
                                </Label>
                                <Input type="text" className="form-control" />
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
                                <Input type="text" className="form-control" />
                              </div>
                            </Col>

                            <Col lg="6">
                              <div className="mb-3">
                                <Label>Credit Card Type</Label>
                                <select className="form-select">
                                  <option defaultValue>Select Card Type</option>
                                  <option value="AE">American Express</option>
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
                                <Input type="text" className="form-control" />
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
                                If several languages coalesce, the grammar of
                                the resulting
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
                    <li className={activeTab === 4 ? "next disabled" : "next"}>
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
      <br></br>
    </div>
  );
}

export default NewFiling;
