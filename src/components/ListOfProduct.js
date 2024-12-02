import React, { useEffect, useState } from "react";
import axios from "axios";
import { instance } from "../axios";

function ListOfProduct() {
  const [state, setState] = useState([]);

  const token = "auth_token";

  //promise using then function
//   useEffect(() => {
//       axios
//           .get('https://dummyjson.com/products', {headers: {
//             Authorization: `Bearer ${token}`,
//         },
//       })
//           .then((response) => setState(response.data.products))
//           .catch((err) => console.log(err));
//   }, [] );

  //promise using async function

  useEffect(() => {
    const getproducts = async () => {
      try {
        const response = await instance.get("/products", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.status === 200) {
          setState(response.data.products);
        } else if (response.status === 404) {
          console.log("Page not Found");
        }
        
      } catch (e) {
        console.log(e);
      }
    };
     getproducts();
  },[]);
   
  return (
    <>
      <div>List of Product</div>
      {state.map((product) => (
        <>
          <div>{product.title}</div>
          <div>{product.price}</div>
        </>
      ))}
    </>
  );
}

export default ListOfProduct;
