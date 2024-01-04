import React from "react";
import ReactDOMClient from "react-dom/client";
import { MainEditionA } from "./screens/MainEditionA";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<MainEditionA />);
