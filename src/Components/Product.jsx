import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductAPI } from "../Redux/Product/getProduct";

function Product() {
  const getAllProductSelector = useSelector((state) => state?.getProducts);
  const { result, loading } = getAllProductSelector; 
  console.log(getAllProductSelector,"res");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductAPI());
  }, []);

  if(loading){
    return <h1>Loading...</h1>
  }

  return (
    <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)"}}>
     {
      result.map((item)=>(
        <div >
          <img width={"300px"} height={"300px"} src={item.image} />
          <p>Price : {item.price} </p>
          <h3>Name: {item.title} </h3>
        </div>
      ))
     }
    </div>
  );
}

export default Product;
