import React, { useState } from "react";
import axios from "axios";

function AddProduct() {
  const [state, setState] = useState([]);
  const postProduct = () => {
    axios
      ({
        method: "post",
        url: "/products/add",
        data: { title: state },
      })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  //promise using async function

  return (
    <>
      <div>Add Product</div>
      <input
        type="text"
        value={state}
        onChange={(e) => setState(e.target.value)}
        placeholder="Enter title"
      />
      <button onClick={postProduct}>Add</button>
    </>
  );
}

export default AddProduct;


