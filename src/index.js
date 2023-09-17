import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { FormProvider } from "./FormContext";
import { Auth0Provider } from "@auth0/auth0-react";
import dotenv from 'dotenv'
dotenv.config()

const auth0Domain = process.env.REACT_APP_AUTH0_DOMAIN;
const auth0ClientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FormProvider>
      <BrowserRouter>
        <Auth0Provider
          domain={auth0Domain} 
          clientId={auth0ClientId}
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
