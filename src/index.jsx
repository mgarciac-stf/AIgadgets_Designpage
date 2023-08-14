import React from "react";
import ReactDOMClient from "react-dom/client";
import { GadgetDesigner } from "./screens/GadgetDesigner";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<GadgetDesigner />);
