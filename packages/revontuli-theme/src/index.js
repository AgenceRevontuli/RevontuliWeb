import Theme from "./components"
import menuHandler from "./components/handlers/menu-handlers";
import link from "@frontity/html2react/processors/link";
import image from "@frontity/html2react/processors/image";
import iframe from "@frontity/html2react/processors/iframe";

const acfOptionsHandler = {
  pattern: "acf-options-page",
  func: async ({ route, state, libraries }) => {
    // 1. Get ACF option page from REST API.
    const response = await libraries.source.api.get({
      endpoint: `/acf/v3/options/options`
    });
    const option = await response.json();

    // 2. Add data to `source`.
    const data = state.source.get(route);
    Object.assign(data, { ...option, isAcfOptionsPage: true });
  }
};

const revontuliTheme = {
  name: "revontuliTheme",
  roots: {
    theme: Theme,
  },
  state: {
    theme: {
      autoPrefetch: "in-view",
      menu: [],
      menuUrl: "primarymenu",
      isMobileMenuOpen: false,
      featured: {
        showOnList: false,
        showOnPost: false,
      },
    },
  },
  actions: {
    theme: {
      toggleMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = !state.theme.isMobileMenuOpen;
      },
      closeMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = false;
      },
      beforeSSR: async ({ state, actions }) => {
        await actions.source.fetch("acf-options-page");
        await actions.source.fetch(`/menu/${state.theme.menuUrl}/`);
      },
    },
  },
  libraries: {
    html2react: {
      /**
       * Add a processor to `html2react` so it processes the `<img>` tags
       * and internal link inside the content HTML.
       * You can add your own processors too.
       */
      processors: [image, iframe, link],
    },
    source: {
      handlers: [menuHandler, acfOptionsHandler],
    },
  },
}

export default revontuliTheme
