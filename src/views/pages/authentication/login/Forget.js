import React from "react";
import {
  Card,
  CardBody,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import { Mail } from "react-feather";
import { history } from "../../../../history";

import homeroute from "../../../../configs/homeroute";
import "../../../../assets/scss/pages/authentication.scss";

class Forget extends React.Component {
  state = {
    activeTab: "1",
    email: "",
    password: "",
  };
  toggle = (tab) => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  };

  responseGoogle = (response) => {
    console.log(response);
  };

  render() {
    return (
      <Row className="m-0 justify-content-center">
        <Col
          xs="11"
          sm="8"
          xl="4"
          l="5"
          md="6"
          className="d-flex justify-content-center"
        >
          <Card className="bg-authentication login-card mb-0 w-100">
            <Row className="m-0">
              <Col className="p-0">
                <Card className="rounded-0 mb-0 px-2">
                  <CardBody>
                    <h2 className="text-center text-bold-700 mb-3">
                      Reset Your Password
                    </h2>
                    <Form onSubmit={(e) => e.preventDefault()}>
                      <FormGroup className="form-label-group position-relative has-icon-left">
                        <Input
                          type="email"
                          placeholder="Email"
                          value={this.state.email}
                          onChange={(e) =>
                            this.setState({ email: e.target.value })
                          }
                        />
                        <div className="form-control-position">
                          <Mail size={15} />
                        </div>
                        <Label>Email</Label>
                      </FormGroup>

                      <FormGroup>
                        <button
                          type="submit"
                          onClick={() => history.push(homeroute)}
                          className="btn btn-block text-bold-700"
                          style={{
                            color: "#101010",
                            backgroundColor: "#ffffff",
                            opacity: 0.9,
                          }}
                        >
                          Send recovery email
                        </button>
                      </FormGroup>
                    </Form>
                  </CardBody>
                  <div className="auth-footer d-flex justify-content-center">
                    <p>
                      or go back to{" "}
                      <span className="text-bold-700">
                        <a href="/pages/login">Sign In</a>
                      </span>
                    </p>
                  </div>
                </Card>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    );
  }
}
export default Forget;
