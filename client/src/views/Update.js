import React, { useEffect, useState } from "react";

import DeleteButton from "../components/DeleteButton";
import ProductForm from "../components/ProductForm";

import axios from "axios";
import { useNavigate } from "@reach/router";

export default (props) => {
  const navigate = useNavigate();

  const [product, setProduct] = useState();
  const { id } = props;
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/product/${id}`)
      .then((res) => {
        console.log(res.data);
        setProduct(res.data[0]);
        setTitle(res.data[0].title);
        setPrice(`${res.data[0].price}`);
        setDescription(res.data[0].description);
        setLoaded(true);
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

  const updateHandler = ({ title, price, description }) => {
    axios
      .put(`http://localhost:8000/api/product/${id}`, {
        title,
        price,
        description,
      })
      .then((res) => {
        if (res.data.errors) {
          setErrors(res.data.errors);
          setTitle(product.title);
          setPrice(`${product.price}`);
          setDescription(product.description);
        } else {
          navigate(`/product/${product._id}`);
        }
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container w-50">
      <h1 className="mt-4">Update Product</h1>
      {loaded && (
        <ProductForm
          onSubmitProp={updateHandler}
          err={errors}
          initialTitle={product.title}
          initialPrice=""
          initialDescription={product.description}
        />
      )}
    </div>
  );
};
