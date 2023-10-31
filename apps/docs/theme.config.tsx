import React from "react";
import { useRouter } from "next/router";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>Emry UI</span>,
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s - Emry UI",
      };
    }
  },
  project: {
    link: "https://github.com/shuding/nextra-docs-template",
  },
  chat: {
    link: "https://discord.com",
  },
  docsRepositoryBase: "https://github.com/shuding/nextra-docs-template",
  footer: {
    text: "Nextra Docs Template",
  },
};

export default config;
