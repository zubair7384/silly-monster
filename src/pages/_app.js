import React, { useState, useEffect } from "react";
import Loader from "@/components/Loader";
import AnimatedCursor from "react-animated-cursor";
import "../styles/globals.css";
import { primary_color } from "@/constants";

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
      <AnimatedCursor
        innerSize={10}
        outerSize={10}
        outerAlpha={3}
        innerScale={3}
        outerScale={5}
        hasBlendMode={true}
        showSystemCursor={true}
        color="12, 239, 232"
        outerStyle={{
          mixBlendMode: "exclusion",
        }}
        innerStyle={{
          backgroundColor: "var(--cursor-color)",
          mixBlendMode: "exclusion",
        }}
        // clickables={[
        //   "a",
        //   'input[type="text"]',
        //   'input[type="email"]',
        //   'input[type="number"]',
        //   'input[type="submit"]',
        //   'input[type="image"]',
        //   "label[for]",
        //   "select",
        //   "textarea",
        //   "button",
        //   ".link",
        // ]}
      />
      {/* <AnimatedCursor
        color="12, 239, 232"
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={1}
        hasBlendMode={true}
        outerStyle={{
          mixBlendMode: "exclusion",
        }}
        innerStyle={{
          backgroundColor: "var(--cursor-color)",
          mixBlendMode: "exclusion",
        }}
      /> */}

      {loading ? <Loader /> : <Component {...pageProps} />}
    </React.Fragment>
  );
}
