import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Profile from "./pages/Profile";
import PageNotFound from "./pages/PageNotFound";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const images = Array.from(document.images); 
    let loadedCount = 0;

    if (images.length === 0) {
      const timer = setTimeout(() => setLoading(false), 2000);
      return () => clearTimeout(timer);
    }

    const handleLoad = () => {
      loadedCount += 1;
      if (loadedCount === images.length) {
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
      }
    };

    images.forEach((img) => {
      if (img.complete) {
        handleLoad(); 
      } else {
        img.addEventListener("load", handleLoad);
        img.addEventListener("error", handleLoad); 
      }
    });

    return () => {
      images.forEach((img) => {
        img.removeEventListener("load", handleLoad);
        img.removeEventListener("error", handleLoad);
      });
    };
  }, []);

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      )}
    </>
  );
}

export default App;
