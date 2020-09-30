import React from "react";
import {
  Button,
  Card,
  CardBody,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import { Mail, Lock, Check, Facebook, Twitter, GitHub } from "react-feather";
import { history } from "../../../../history";
import Checkbox from "../../../../components/@vuexy/checkbox/CheckboxesVuexy";
import googleSvg from "../../../../assets/img/svg/google.svg";

import homeroute from "../../../../configs/homeroute";
import "../../../../assets/scss/pages/authentication.scss";

class Login extends React.Component {
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
                    <h2 className="text-center text-bold-700 mb-5">Sign In</h2>
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
                      <FormGroup className="form-label-group position-relative has-icon-left">
                        <Input
                          type="password"
                          placeholder="Password"
                          value={this.state.password}
                          onChange={(e) =>
                            this.setState({ password: e.target.value })
                          }
                        />
                        <div className="form-control-position">
                          <Lock size={15} />
                        </div>
                        <Label>Password</Label>
                      </FormGroup>

                      <FormGroup>
                        <Button
                          color="primary"
                          type="submit"
                          onClick={() => history.push(homeroute)}
                          className="btn-block"
                        >
                          Sign In
                        </Button>
                      </FormGroup>
                      <FormGroup className="d-flex justify-content-between align-items-center">
                        <Checkbox
                          color="primary"
                          icon={<Check className="vx-icon" size={16} />}
                          label="Remember me"
                        />

                        <div className="float-right">Forgot Password?</div>
                      </FormGroup>
                    </Form>
                  </CardBody>
                  <div className="auth-footer">
                    <div className="divider">
                      <div className="divider-text">OR</div>
                    </div>
                    <div className="footer-btn">
                      <Button.Ripple className="btn-facebook" color="">
                        <Facebook size={14} />
                      </Button.Ripple>
                      <Button.Ripple className="btn-twitter" color="">
                        <Twitter size={14} stroke="white" />
                      </Button.Ripple>
                      <Button.Ripple className="btn-google" color="">
                        <img
                          src={googleSvg}
                          alt="google"
                          height="15"
                          width="15"
                        />
                      </Button.Ripple>
                      <Button.Ripple className="btn-github" color="">
                        <GitHub size={14} stroke="white" />
                      </Button.Ripple>
                    </div>
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
export default Login;
