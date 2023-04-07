import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

export const Auth0ProviderWithNavigate = ({ children }) => {
  const navigate = useNavigate();

  const domain = "dev-ktrpfv6xelqmuqtt.us.auth0.com";
  const clientId = "BCJtyJrKUSVCnUR1arnuf2IO2B29Ymei";
  const redirectUri = window.location.origin;
  //const audience = "https://promanitas-api.com";

  const onRedirectCallback = (appState) => {
    navigate(appState?.returnTo || window.location.origin);
  };

  if (!(domain && clientId && redirectUri)) {
    return null;
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        //audience: audience,
        redirect_uri: redirectUri,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};
