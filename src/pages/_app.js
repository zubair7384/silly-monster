import React, { useState, useEffect } from "react";
import Loader from "@/components/Loader";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <React.Fragment>
      {loading ? <Loader /> : <Component {...pageProps} />}
    </React.Fragment>
  );
}
