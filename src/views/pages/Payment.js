import React from "react";
import { Card, CardBody } from "reactstrap";
import DataTable from "react-data-table-component";

const columns = [
  {
    name: "Invoice ID",
    selector: "id",
    sortable: true,
  },
  {
    name: "Message",
    selector: "message",
    sortable: true,
  },
  {
    name: "Rating",
    selector: "rating",
    sortable: true,
  },
  {
    name: "Option",
    selector: "option",
    sortable: true,
  },
  {
    name: "Time posted",
    selector: "time_posted",
    sortable: true,
  },
];

const data = [
  {
    id: 1,
    message: "Something",
    rating: 2,
    option: "something",
    time_posted: "something",
  },
];

class Payment extends React.Component {
  render() {
    return (
      <>
        <h1>Payments</h1>
        <Card>
          <CardBody>
            <DataTable data={data} columns={columns} noHeader />
          </CardBody>
        </Card>
        ;
      </>
    );
  }
}

export default Payment;
