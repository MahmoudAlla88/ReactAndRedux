import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/productSlice"; 
import { addToCart } from "../redux/cartSlice";

const ProductListing = () => {
  const dispatch = useDispatch();
  const { products, status } = useSelector((state) => state.products || { products: [], status: "idle" }); 

  useEffect(() => {
    dispatch(fetchProducts()); 
  }, [dispatch]);

  return (
    <div>
      <h2>Product Listing</h2>
      {status === "loading" ? ( 
        <p>Loading...</p>
      ) : status === "failed" ? (
        <p>Error loading products.</p>
      ) : (
        <div className="product-list">
          {products.map((product) => (
            <div key={product.id} className="product-item">
              <h3>{product.name}</h3>
              <p>Price: ${product.price}</p>
              <button onClick={() => dispatch(addToCart(product))}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductListing;
