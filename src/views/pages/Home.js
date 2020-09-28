import React from "react";
import { Row, Col } from "reactstrap";
import BetaCard from "../../components/custom/BetaCard";

class Home extends React.Component {
  render() {
    return (
      <>
        <h1>Dashboard</h1>
        <Row>
          <Col xl="6" lg="8" sm="12">
            <BetaCard />
          </Col>
        </Row>
      </>
    );
  }
}

export default Home;
