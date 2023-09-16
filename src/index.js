import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { FormProvider } from "./FormContext";
import { Auth0Provider } from "@auth0/auth0-react";

const domain= process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FormProvider>
      <BrowserRouter>
        <Auth0Provider
          domain="dev-6pbsx6k82demurnt.us.auth0.com" 
          clientId="0IYYAFeJsMsInUAl2ax20rKqZ4BQxUSZ"
          authorizationParams={{
            redirect_uri: window.location.origin
          }}
        >
          <App />
        </Auth0Provider>
        ,
      </BrowserRouter>
    </FormProvider>
  </React.StrictMode>
);

reportWebVitals();
