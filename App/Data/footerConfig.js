import DEA_Logo from '../images/DEA/environmental_affairs_logo_small.jpg'
import logoGis from '../Images/logo-giz.gif';
import logoCsir from '../Images/logo-csir.png';


export const footerContent = {
  sections: [
    {
      text: "Technology",
      links: [
        { text: "DEFF NCCIS uses open source, government funded facilities provided by SAEON. The DSI and NRF funds the SAEON Open Data Platform (ODP) and associated portals. Developed by SAEON on behalf of DSI, DEFF, DARDLR, and other stakeholders." },
      ]
    },
    {
      text: "Legal",
      links: [
        { text: "Disclaimer", link: "http://noframe.media.dirisa.org/wiki-1/disclaimer?searchterm=disclaimer" },
        { text: "Terms and Conditions", link: "http://noframe.media.dirisa.org/wiki-1/conditions-of-use?searchterm=conditions" }
      ]
    },
    {
      text: "SAEON ODP",
      links: [
        { text: "Open Data Platform", link: "https://docs.google.com/document/d/e/2PACX-1vQ7DWVfot6ZEuX22aciju9MW5PAZJoi6v_lFUFCiwVajRzG91YxjPaCj2NCsUV5WI8hlTdOfBrCxxc1/pub" },
        { text: "Contribute", link: "http://app01.saeon.ac.za/dev/UI_footside/page_contribute.html" },
        { text: "Contact Us", link: "http://app01.saeon.ac.za/dev/UI_footside/page_contact.html" }
      ]
    },
    {
      text: "Funding",
      links: [
        { src: DEA_Logo, width: "100%"/*, link: "http://www.example.com"*/ },
        { src: logoGis, width: "100%"/*, link: "http://www.example.com"*/ },
        { src: logoCsir, width: "100%"/*, link: "http://www.example.com"*/ }

      ]
    }
  ]
}