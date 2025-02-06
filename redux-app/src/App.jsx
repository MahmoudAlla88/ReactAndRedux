// import React from "react";
// import ProductList from "./ProductList";
// import ProductControls from "./ProductControls";

// function App() {
//   return (
//     <div style={{ textAlign: "center", padding: "20px" }}>
//       <h1>Redux Supermarket 🏪</h1>
//       <ProductList />
//       <ProductControls />
//     </div>
//   );
// }

// export default App;
import React from "react";
import ProductListing from "./components/ProductListing";
import Cart from "./components/Cart";


const App = () => {
  return (
    <div>
      <ProductListing />
      <Cart />
    </div>
  );
};

export default App;
