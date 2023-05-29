import { defineConfig } from 'astro/config';
import netlify from "@astrojs/netlify/functions";
//import netlify from '@astrojs/netlify/edge-functions';

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: netlify()
  //site: 'https://vypnico974.github.io',
  //base: '/Portfolio',
});

// import { defineConfig } from 'astro/config';

// // https://astro.build/config
// export default defineConfig({})