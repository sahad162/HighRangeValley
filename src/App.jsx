import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import PageNotFound from "./pages/PageNotFound";
import Loader from "./components/Loader";
import ProductsPage from "./pages/ProductsPage";
import IndividualPage from "./pages/IndividualPage";
import { Toaster } from "react-hot-toast";

import MainLayout from "./layouts/MainLayout";
import ErrorLayout from "./layouts/ErrorLayout";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />

      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/product/:id" element={<IndividualPage />} />
        </Route>

        <Route element={<ErrorLayout />}>
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
