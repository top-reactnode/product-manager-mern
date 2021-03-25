import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";

import DeleteButton from "./DeleteButton";

import axios from "axios";

export default (props) => {
  const [productList, setProductList] = useState(props.products);

  console.log(props.products);
  return (
    <div>
      <h1>All Products: </h1>

      <ul className="list-group list-group-flush">
        {productList.map((product, index) => (
          <div key={index} className="list-group-item">
            <Link to={`/product/${product._id}`}>{product.title}</Link>
            <DeleteButton
              productId={product._id}
              successCallback={() =>
                setProductList(
                  productList.filter((filter) => filter._id != product._id)
                )
              }
            />
          </div>
        ))}
      </ul>
    </div>
  );
};
