import React from "react";
import NoProduct from "../../components/custom/NoProduct";

class Product extends React.Component {
  render() {
    return (
      <NoProduct
        title="You have no products"
        body="Start selling on Aired by uploading your products."
        cta="Add Product"
      />
    );
  }
}

export default Product;
