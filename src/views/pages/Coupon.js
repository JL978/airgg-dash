import React from "react";
import NoProduct from "../../components/custom/NoProduct";

export default function Coupon() {
  return (
    <NoProduct
      title="You have no coupons"
      body="Create a coupon for your products and share it with your customers."
      cta="Create Coupon"
    />
  );
}
