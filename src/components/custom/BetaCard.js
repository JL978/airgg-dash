import { Card, CardBody } from "reactstrap";
import { AlertTriangle, X } from "react-feather";
import classnames from "classnames";
import React, { useState } from "react";

export default function BetaCard() {
  const [isVisible, setVisible] = useState(true);

  return (
    <Card
      className={classnames({
        "d-none": isVisible === false,
      })}
    >
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

        <div className="flex-grow-1 d-flex justify-content-end align-self-start">
          <X size={20} onClick={() => setVisible(false)} />
        </div>
      </CardBody>
    </Card>
  );
}
