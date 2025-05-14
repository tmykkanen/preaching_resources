// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightAutoSidebar from "starlight-auto-sidebar";


// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      plugins: [starlightAutoSidebar()],
      title: "Preaching Resources",
      social: [
        // {
        //   icon: "facebook",
        //   label: "GitHub",
        //   href: "https://github.com/withastro/starlight",
        // },
      ],
      sidebar: [
        {
          label: "General Tips",
          autogenerate: { directory: "general" },
        },
        {
          label: "Exegesis",
          autogenerate: { directory: "exegesis" },
        },
        {
          label: "On Arrangement",
          autogenerate: { directory: "arrangement" },
        },

        {
          label: "Exercises",
          autogenerate: { directory: "exercises" },
        },
        {
          label: "Annotated Bibliography",
          autogenerate: { directory: "books" },
        },
      ],
    }),
  ],
});
