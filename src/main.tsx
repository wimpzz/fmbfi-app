import { Provider } from "@/components/ui/provider";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Demo from "./Demo";
import LandingPage from "./LandingPage";
import Navbar from "./NavBar";
import Footer from "./Footer";
import SectionPage from "./SectionPage";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider>
      <Navbar />
      <SectionPage />
      <Footer />
    </Provider>
  </React.StrictMode>
);
