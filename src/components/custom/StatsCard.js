import React from "react";
import { Card, CardBody, CardHeader, CardTitle } from "reactstrap";

export default function StatsCard({ title, unit, stat, updated }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <a href="/">
          <small className="text-secondary">All Time</small>
        </a>
      </CardHeader>
      <CardBody className="pt-50">
        <h2 className="text-bold-600">
          {unit === "$" && "$"}
          {stat.toString()}
          {unit === "%" && "%"}
        </h2>

        <small className="text-secondary">Updated {updated} seconds ago</small>
      </CardBody>
    </Card>
  );
}
