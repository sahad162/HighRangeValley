import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Profile from "./pages/Profile";
import PageNotFound from "./pages/PageNotFound";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const images = document.images;
    let loadedCount = 0;
    const startTime = Date.now(); 

    if (images.length === 0) {
      finishLoading();
      return;
    }

    const onImageLoad = () => {
      loadedCount++;
      if (loadedCount === images.length) {
        finishLoading();
      }
    };

    const finishLoading = () => {
      const elapsed = Date.now() - startTime;
      const remaining = 3000 - elapsed; 
      setTimeout(() => setLoading(false), remaining > 0 ? remaining : 0);
    };

    for (let i = 0; i < images.length; i++) {
      if (images[i].complete) {
        onImageLoad();
      } else {
        images[i].addEventListener("load", onImageLoad);
        images[i].addEventListener("error", onImageLoad);
      }
    }

    return () => {
      for (let i = 0; i < images.length; i++) {
        images[i].removeEventListener("load", onImageLoad);
        images[i].removeEventListener("error", onImageLoad);
      }
    };
  }, []);

  return (
    <>
      {loading && <Loader />}

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
