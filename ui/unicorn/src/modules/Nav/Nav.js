import React from "react";
import { useKeycloak } from "@react-keycloak/web";
import JSONViewer from "../helpers/JSONViewer";

const Nav = () => {
    const { keycloak } = useKeycloak();

    return (
        <div className="p-2">
            <div className="d-flex flex-column">
                <h1 className="d-flex align-items-center justify-content-center">
                    Rent-A-Unicorn
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
                    <JSONViewer jwt={keycloak.tokenParsed} />
                </div>
            </div>
        </div>
    );
};

export default Nav;
