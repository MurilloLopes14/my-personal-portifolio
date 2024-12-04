/*
 * @copyright 2024 Murillo Lopes
 * @license Apache-2.0
 */

/*
 * NodeModules
 */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

/*
 * Components
 */
import "lenis/dist/lenis.css";
import App from "./App.tsx";

/*
 * Styles
 */
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
