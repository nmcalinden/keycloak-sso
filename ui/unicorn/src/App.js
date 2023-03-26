import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./modules/Nav/Nav";

import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "./services/keycloak/keycloak";

function App() {
  return (
    <div>
      <ReactKeycloakProvider authClient={keycloak}>
        <Nav />
        <BrowserRouter>
          <Routes>
          </Routes>
        </BrowserRouter>
      </ReactKeycloakProvider>
    </div>
  );
 }
 
 export default App;
