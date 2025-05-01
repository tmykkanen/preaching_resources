// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Preaching Resources",
      social: [
        {
          icon: "facebook",
          label: "GitHub",
          href: "https://github.com/withastro/starlight",
        },
      ],
      sidebar: [
        // {
        //   label: "Guides",
        //   items: [
        //     // Each item here is one entry in the navigation menu.
        //     { label: "Example Guide", slug: "guides/example" },
        //   ],
        // },
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
      ],
    }),
  ],
});
