import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "@reach/router";

import DeleteButton from "../components/DeleteButton";

import axios from "axios";

export default (props) => {
  const navigate = useNavigate();
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/product/${props.id}`)
      .then((res) =>
        setProduct({
          ...res.data[0],
        })
      )
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container">
      <div className="card mt-4" style={{ width: "24rem" }}>
        <div className="card-body">
          <h3 className="card-title">
            {product.title ? product.title : "Loading Title"}
          </h3>

          <ul className="list-group-flush">
            <li className="list-group-item">
              <b>Price:</b>{" "}
              {product.price ? `$${product.price}` : "Loading Price"}{" "}
            </li>

            <li className="list-group-item">
              <b>Description:</b>
              {product.description
                ? product.description
                : "Loading Description"}
            </li>
          </ul>
          <div className="p-2">
            <Link to={`/product/${props.id}/edit`}>
              <button className="m-1 btn btn-sm btn-primary">Edit</button>
            </Link>
            <DeleteButton
              productId={props.id}
              successCallback={() => navigate("/")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
