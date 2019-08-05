import React from "react";

// reactstrap components
import {
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Container,
  Row,
  Col
} from "reactstrap";

// core components

function Ecommerce() {
  // states for collapses

  return (
    <>
        {/* section */}
        <div className="section section-blog">
          <Container>
            <Row>
              <Col md="4">
                <Card className="card-blog">
                  <div className="card-image">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised"
                        src={require("assets/img/sections/miguel-perales.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <h6 className="card-category text-info">Enterprise</h6>
                    <CardTitle tag="h5">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        LinkedIn’s new desktop app arrives
                      </a>
                    </CardTitle>
                    <p className="card-description">
                      LinkedIn is today launching its official desktop
                      application for Windows 10, allowing the professional
                      social networking service to... <br />
                    </p>
                    <hr />
                    <CardFooter>
                      <div className="author">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="avatar img-raised mr-2"
                            src={require("assets/img/faces/ayo-ogunseinde-2.jpg")}
                          />
                          <span>Mike John</span>
                        </a>
                      </div>
                      <div className="stats">
                        <i className="fa fa-clock-o mr-1" />5 min read
                      </div>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-blog">
                  <div className="card-image">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised"
                        src={require("assets/img/sections/roger-keller.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <h6 className="card-category text-success">Startups</h6>
                    <CardTitle tag="h5">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        MIT’s Cheetah 3 robot is built to save lives
                      </a>
                    </CardTitle>
                    <p className="card-description">
                      The latest version of MIT’s Cheetah robot made its stage
                      debut today at TC Sessions: Robotics in Cambridge, Mass.
                      It’s a familiar project... <br />
                    </p>
                    <hr />
                    <CardFooter>
                      <div className="author">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="avatar img-raised mr-2"
                            src={require("assets/img/faces/kaci-baum-2.jpg")}
                          />
                          <span>Nickie Kelly</span>
                        </a>
                      </div>
                      <div className="stats">
                        <i className="fa fa-clock-o mr-1" />5 min read
                      </div>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-blog">
                  <div className="card-image">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img img-raised"
                        src={require("assets/img/sections/joshua-earlesz.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <h6 className="card-category text-danger">
                      <i className="fa fa-free-code-camp mr-1" />
                      Enterprise
                    </h6>
                    <CardTitle tag="h5">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        Lionel Richie says “Hello” to startup investors
                      </a>
                    </CardTitle>
                    <p className="card-description">
                      Because developing a doctor-on-demand service that would
                      allow personalized medical visits, booked through an app
                      on a user’s phone is... <br />
                    </p>
                    <hr />
                    <CardFooter>
                      <div className="author">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="avatar img-raised mr-2"
                            src={require("assets/img/faces/erik-lucatero-2.jpg")}
                          />
                          <span>Mike John</span>
                        </a>
                      </div>
                      <div className="stats">
                        <i className="fa fa-clock-o mr-1" />5 min read
                      </div>
                    </CardFooter>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        {/* section */}

    </>
  );
}

export default Ecommerce;
