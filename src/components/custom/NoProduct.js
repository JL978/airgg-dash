import React from "react";
import { Button } from "reactstrap";

export default function NoProduct() {
  return (
    <div className="mt-5 pt-1 ml-5">
      <h1 className="text-bold-400">You have no products</h1>
      <p className="text-secondary font-medium-2 text-bold-300 mb-3">
        Start selling on Aired by upldoading your products.
      </p>
      <Button.Ripple color="dark" style={{ color: "#ffffff" }}>
        Add Product
      </Button.Ripple>
    </div>
  );
}
