import { Card, CardBody } from "reactstrap";
import { AlertTriangle } from "react-feather";

import React from "react";

export default function BetaCard() {
  return (
    <Card>
      <CardBody className="stats-card-body d-flex flex-row align-items-center">
        <div className="icon-section mr-2">
          <AlertTriangle size={40} />
        </div>
        <div className="title-section">
          <h3 className="mb-20">We are in beta</h3>
          <small className="text-secondary">
            Keep in mind this website is beta, please report every bug you can
            find.
          </small>
        </div>
      </CardBody>
    </Card>
  );
}
