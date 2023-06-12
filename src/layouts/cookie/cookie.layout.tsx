import * as React from "react";
import CookieConsent from "react-cookie-consent";

//https://www.npmjs.com/package/react-cookie-consent
const cookie = {
  name: "TaekwondoCookieConsent",
  acceptButton: "Aceptar",
  otherButton: "Política de cookies",
  message: `Utilizamos cookies propias y de terceros para mejorar su experiencia de navegación. 
                  Si continua navegando, consideramos que acepta su uso. 
                  Puede cambiar la configuración u obtener más información`,
  ref: "https://www.taekwondoitf.es/legal/politica-de-cookies/",
};

export const CookieLayout: React.FunctionComponent = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText={cookie.acceptButton}
      cookieName={cookie.name}
      style={{ background: "#2B373B" }}
      buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
      expires={365}
      enableDeclineButton
      declineButtonText={cookie.otherButton}
      onDecline={() => {
        window.location.href = cookie.ref;
      }}
    >
      {cookie.message}
    </CookieConsent>
  );
};
