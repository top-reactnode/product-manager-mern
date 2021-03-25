import React, { useEffect, useState } from "react";
import axios from "axios";

import { navigate } from "@reach/router";

import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";

export default (props) => {
  const [productList, setProductList] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    axios.get("http://localhost:8000/api/products").then((res) => {
      setProductList(res.data);
      console.log(res);
      setLoaded(true);
    });
  }, []);

  const createProduct = ({ title, price, description }) => {
    axios
      .post("http://localhost:8000/api/products/new", {
        title,
        price,
        description,
      })
      .then((res) => {
        if (res.data.errors) {
          setErrors(res.data.errors);
          console.log(errors);
        } else {
          navigate(`/product/${res.data._id}`);
        }
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col">
          <h1>Add a new Product</h1>
          <ProductForm
            onSubmitProp={createProduct}
            err={errors}
            initialTitle=""
            initialPrice=""
            initialDescription=""
          />
        </div>
        <div className="col">
          {loaded && <ProductList products={productList} />}
        </div>
      </div>
    </div>
  );
};
