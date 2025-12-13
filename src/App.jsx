import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import PageNotFound from "./pages/PageNotFound";
import Loader from "./components/Loader";
import ProductsPage from "./pages/ProductsPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import IndividualPage from "./pages/IndividualPage";
import { Toaster } from "react-hot-toast";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Loader />}

      {!loading && (
        <>
          <Header />
          <Toaster position="top-right" reverseOrder={false}  />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/product/:id" element={<IndividualPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
