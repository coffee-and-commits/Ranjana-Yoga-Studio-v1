import React from "react";
import ReactDOM from "react-dom/client";
import "@/index.css";
import { i18nReady } from "@/i18n/i18n";
import App from "@/App";

const root = ReactDOM.createRoot(document.getElementById("root"));

// Wait for site copy to be fetched from the backend before the first render,
// so the app never flashes raw translation keys. Renders either way (even
// if the fetch fails) so the site isn't stuck on a blank page.
i18nReady.finally(() => {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
});
