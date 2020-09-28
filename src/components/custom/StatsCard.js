import React from "react";
import { Card, CardBody, CardHeader, CardTitle } from "reactstrap";
import homeroute from "../../configs/homeroute";

export default function StatsCard({ title, unit, stat, updated, view }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {view !== "simplified" && (
          <a href={homeroute + "/analytics"}>
            <small className="text-secondary">All Time</small>
          </a>
        )}
      </CardHeader>
      <CardBody className="pt-50">
        <h2 className="text-bold-600">
          {unit === "$" && "$"}
          {stat.toString()}
          {unit === "%" && "%"}
        </h2>

        {view !== "simplified" && (
          <small className="text-secondary">
            Updated {updated} seconds ago
          </small>
        )}
      </CardBody>
    </Card>
  );
}
