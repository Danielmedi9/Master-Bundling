import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import { Firstcomponents } from "./index";

const App = () => {
  console.log(`Api base: ${process.env.API_BASE}`);
  return (
    <>
      <Firstcomponents />
    </>
  );
};

const root = createRoot(document.getElementById("root")!);
root.render(<App />);
