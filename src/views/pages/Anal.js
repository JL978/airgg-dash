import React from "react";
import { Row, Col } from "reactstrap";
import StatsCard from "../../components/custom/StatsCard";
import StatsGraph from "../../components/custom/StatsGraph";

class Analytic extends React.Component {
  render() {
    return (
      <>
        <h1>Analytics</h1>
        <Row>
          <Col lg={3} sm={6} xs={12}>
            <StatsCard title="Revenue" unit="$" stat={0} view="simplified" />
          </Col>
          <Col lg={3} sm={6} xs={12}>
            <StatsCard title="Orders" stat={0} view="simplified" />
          </Col>
          <Col lg={3} sm={6} xs={12}>
            <StatsCard title="Views" stat={0} view="simplified" />
          </Col>
          <Col lg={3} sm={6} xs={12}>
            <StatsCard title="Tickets" stat={0} view="simplified" />
          </Col>
        </Row>
        <Row>
          <Col lg={4} md={6} sm={12}>
            <StatsGraph title="Gross Volume" updated={2} height={225} />
          </Col>
          <Col lg={4} md={6} sm={12}>
            <StatsGraph title="Successful payments" updated={2} height={225} />
          </Col>
          <Col lg={4} md={6} sm={12}>
            <StatsGraph title="New Customers" updated={2} height={225} />
          </Col>
          <Col lg={4} md={6} sm={12}>
            <StatsGraph title="Dispute Activities" updated={2} height={225} />
          </Col>
          <Col lg={4} md={6} sm={12}>
            <StatsGraph title="High risk payments" updated={2} height={225} />
          </Col>
          <Col lg={4} md={6} sm={12}>
            <StatsGraph title="Tickets" updated={2} height={225} />
          </Col>
        </Row>
      </>
    );
  }
}

export default Analytic;
