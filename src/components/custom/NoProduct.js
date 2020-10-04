import React from "react";
import { Button } from "reactstrap";

export default function NoProduct({ title, body, cta }) {
  return (
    <div className="mt-5 pt-1 ml-5">
      <h1 className="text-bold-400">{title}</h1>
      <p className="text-secondary font-medium-2 text-bold-300 mb-3">{body}</p>
      <Button.Ripple color="dark" style={{ color: "#ffffff" }}>
        {cta}
      </Button.Ripple>
    </div>
  );
}
