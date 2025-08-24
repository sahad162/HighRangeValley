import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Profile from "./pages/Profile";
import PageNotFound from "./pages/PageNotFound";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Just wait for 3 seconds
    const timer = setTimeout(() => setLoading(false), 3000);

    return () => clearTimeout(timer); // cleanup
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
