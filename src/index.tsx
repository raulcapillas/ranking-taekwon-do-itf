import * as React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./app";
import i18n from "./i18n/i18n";
import { I18nextProvider } from "react-i18next";

const container = document.getElementById("app");
const root = createRoot(container!);
root.render(
  <>
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </I18nextProvider>
  </>
);
