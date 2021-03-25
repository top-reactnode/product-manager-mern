import React from "react";
import axios from "axios";

export default (props) => {
  const { productId, successCallback } = props;

  const deletePerson = (e) => {
    axios
      .delete(`http://localhost:8000/api/product/${productId}`)
      .then(successCallback())
      .catch((err) => console.log("Error deleting product", err));
  };

  return (
    <button className="btn btn-danger btn-sm ml-4" onClick={deletePerson}>
      Delete
    </button>
  );
};
