import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { initAutomationBridge } from "@velork/browser-bridge";
import "./index.css";
import App from "./App.tsx";

/**
 * Initialize browser bridge for AI automation
 * This allows the parent window to control this iframe
 */
initAutomationBridge({
  allowedOrigins: ["*"], // Allow all origins for template flexibility
  maxConsoleBufferSize: 1000,
  enableConsoleCapture: true,
  enableNetworkCapture: true,
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
