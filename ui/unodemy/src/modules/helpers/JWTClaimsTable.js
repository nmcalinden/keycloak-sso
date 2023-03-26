import React from "react";

function JWTClaimsTable({ claims }) {
    const claimRows =
        claims &&
        Object.keys(claims).map((key) => {
          const value = claims[key] instanceof Object ? JSON.stringify(claims[key]) : claims[key].toString();
            return (
                <tr key={key}>
                    <td>{key}</td>
                    <td>{value}</td>
                </tr>
            );
        });

    return (
        <table>
            <thead>
                <tr>
                    <th>Claim</th>
                    <th>Value</th>
                </tr>
            </thead>
            <tbody>{claimRows}</tbody>
        </table>
    );
}

export default JWTClaimsTable;
