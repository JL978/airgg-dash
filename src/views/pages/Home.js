import React from "react";
import { Row, Col } from "reactstrap";
import BetaCard from "../../components/custom/BetaCard";
import StatsCard from "../../components/custom/StatsCard";
import StatsGraph from "../../components/custom/StatsGraph";

class Home extends React.Component {
  render() {
    return (
      <>
        <h1 className="mb-2">Dashboard</h1>
        <Row>
          <Col xl="6" lg="8" sm="12">
            <BetaCard />
          </Col>
        </Row>
        <Row>
          <Col xl="3" md="4" sm="12">
            <StatsCard title="Balance" unit="$" stat={0.0} updated={2} />
          </Col>
          <Col xl="3" md="4" sm="12">
            <StatsCard title="Orders" stat={0} updated={2} />
          </Col>
          <Col xl="3" md="4" sm="12">
            <StatsCard title="Ticket" stat={0} updated={2} />
          </Col>
        </Row>
        <Row>
          <Col sm="12">
            <StatsGraph title="Revenue" updated={2} height={300} />
          </Col>
        </Row>
      </>
    );
  }
}

export default Home;
