import { Route, Routes, BrowserRouter } from "react-router-dom";
import Index from "./views/base/Index";
import Register from "./views/auth/Register";
import Product from "./views/base/Product/Product";
import ProductDetail from "./views/base/Product/ProductDetail";

function App() {
  return (
    <BrowserRouter>
      {/* <MainWrapper> */}
      <Routes>
        <Route path='/register' element={<Register />} />

        {/* base route */}
        <Route path='/' element={<Index />} />
        <Route path='/product' element={<Product />} />
        <Route path='/product/:id' element={<ProductDetail />} />
      </Routes>
      {/* </MainWrapper> */}
    </BrowserRouter>
  );
}

export default App;
