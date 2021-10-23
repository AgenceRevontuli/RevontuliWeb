const settings = {
  "name": "revontuli",
  "state": {
    "frontity": {
      "url": "https://www.revontuli.fr/",
      "title": "Agence Marketing Digital - Caen - Revontuli",
      "description": "Agence de Marketing Digital sur Caen. Développement de site internet, Référencement naturel et payant (SEO/SEA). Accompagnement gratuit"
    }
  },
  "packages": [
    {
      "name": "revontuli-theme",
      "state": {
        "theme": {
          "menu": [],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://www.wordpress.agence-communication-caen.fr/",
          "postTypes" : [{
            type: "prestations",
            endpoint: "prestations"
          }],
          "homepage" : "/accueil",
          "postsPage" : "/blog"
        }
      }
    },
    {
      name: "@frontity/google-tag-manager-analytics",
      state: {
        googleTagManagerAnalytics: {
          containerId: "GTM-MSTQ25F",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "@aamodtgroup/frontity-contact-form-7",
    "react-lineicons",
    "@frontity/head-tags",
    "@frontity/yoast"
  ]
};

export default settings;
