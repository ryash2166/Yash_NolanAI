import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Auth0Provider } from "@auth0/auth0-react";

createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-oeawj7o6lhq7owc6.us.auth0.com"
    clientId="hb6HD61klxavJJg54kwZDy6fN3j9ktVR"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <App />
  </Auth0Provider>
);
