import Keycloak from "keycloak-js";
const keycloak = new Keycloak({
 url: "http://localhost:8085/",
 realm: "unosquare",
 clientId: "unicorn-cli",
});

export default keycloak;