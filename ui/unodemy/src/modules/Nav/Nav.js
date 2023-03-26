import React from "react";
import { useKeycloak } from "@react-keycloak/web";
import JWTClaimsTable from "../helpers/JWTClaimsTable";

const Nav = () => {
    const { keycloak, initialized } = useKeycloak();
    console.log("Keycloak...", keycloak);

    return (
        <div className="p-2">
            <div className="d-flex flex-column">
                <h1 className="d-flex align-items-center justify-content-center">
                    Unodemy
                </h1>
                <div className="d-flex">
                    <div className="login-logout ms-auto">
                        {!keycloak.authenticated && (
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={() => keycloak.login()}
                            >
                                Login
                            </button>
                        )}

                        {!!keycloak.authenticated && (
                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={() => keycloak.logout()}
                            >
                                Logout (
                                {keycloak.tokenParsed.preferred_username})
                            </button>
                        )}
                    </div>
                </div>
                <div className="login-details">
                    {!!keycloak.authenticated ? (
                        <JWTClaimsTable claims={keycloak.tokenParsed} />
                    ) : (
                        <p>Please login.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Nav;
