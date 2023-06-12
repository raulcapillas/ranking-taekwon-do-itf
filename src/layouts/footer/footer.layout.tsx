import * as React from "react";
import Footer from "rc-footer";
import "rc-footer/assets/index.css";
import { Business, ContactMail, MailOutline, Web } from "@mui/icons-material";
import { Link } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const footer = {
  title: "TAEKWON-DO ITF ESPAÑA",
  address: "Partida Muixara S/N 03530 La Nucía Alicante",
  map: "https://goo.gl/maps/iMEXiNsp8gCeRnmc9",
  secretary_email: "secretario@taekwondoitf.es",
  website: "www.taekwondoitf.es",
  legal_warning: "Aviso Legal",
  legal_warning_web: "https://www.taekwondoitf.es/aviso-legal",
  RGDP_information: "Información RGDP",
  RGDP_information_web: "https://www.taekwondoitf.es/legal/informacion-rgpd/",
  privacy_policy: "Política de Privacidad",
  privacy_policy_web: "https://www.taekwondoitf.es/legal/politica-privacidad/",
  contact_email: "soporte@taekwondoitf.es",
  it_email: "it@taekwondoitf.es",
  socialNetwork: {
    facebookURL:
      "https://www.facebook.com/Taekwon-Do-ITF-Espa%C3%B1a-106341798234614",
    instagramURL: "https://www.instagram.com/taekwondo_itf_esp/",
  },
};

export const FooterLayout: React.FC = () => {
  return (
    <>
      <Footer
        columns={[
          {
            title: footer.title,
            items: [
              {
                icon: <Business />,
                title: (
                  <a href={footer.map} target="_blank">
                    {footer.address}
                  </a>
                ),
              },
              {
                icon: <MailOutline />,
                title: footer.secretary_email,
                url: `mailto: ${footer.secretary_email}`,
                openExternal: true,
              },
              {
                icon: <Web />,
                title: footer.website,
                url: `https://${footer.website}`,
                openExternal: true,
              },
            ],
          },
          {
            items: [
              {
                title: footer.legal_warning,
                url: footer.legal_warning_web,
                openExternal: true,
              },
              {
                title: footer.RGDP_information,
                url: footer.RGDP_information_web,
                openExternal: true,
              },
              {
                title: footer.privacy_policy,
                url: footer.privacy_policy_web,
                openExternal: true,
              },
            ],
          },
          {
            title: "Contacto",
            items: [
              {
                icon: <ContactMail />,
                title: footer.contact_email,
                url: `mailto: ${footer.contact_email}`,
                openExternal: true,
              },
              {
                icon: <ContactMail />,
                title: footer.it_email,
                url: `mailto: ${footer.it_email}`,
                openExternal: true,
              },
            ],
          },
          {
            title: "Redes sociales",
            items: [
              {
                title: (
                  <>
                    <Link
                      href={`${footer.socialNetwork.facebookURL}`}
                      target="_blank"
                      color="inherit"
                    >
                      <FacebookIcon fontSize="large" />
                    </Link>
                    <Link
                      href={`${footer.socialNetwork.instagramURL}`}
                      target="_blank"
                      color="inherit"
                    >
                      <InstagramIcon fontSize="large" />
                    </Link>
                  </>
                ),
              },
            ],
          },
        ]}
        bottom={`Copyright © ${new Date().getFullYear()} ${
          footer.title
        } - Made with ❤️ by Raúl Capillas`}
        theme="dark"
        columnLayout="space-between"
      />
    </>
  );
};
