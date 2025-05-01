// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightObsidian, { obsidianSidebarGroup } from "starlight-obsidian";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      plugins: [
        starlightObsidian({
          vault: "../../Preaching Resources",
          // Disable generation when deploying
          skipGeneration: !!process.env["NETLIFY"],
          output: "preaching",
          sidebar: {
            label: "Preaching",
          },
        }),
      ],
      title: "Preaching Resources",
      social: [
        {
          icon: "facebook",
          label: "GitHub",
          href: "https://github.com/withastro/starlight",
        },
      ],
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", slug: "guides/example" },
            { label: "Sermon Timing", slug: "guides/sermon-timing" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
        obsidianSidebarGroup,
      ],
    }),
  ],
});
