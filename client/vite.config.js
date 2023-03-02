import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode, ssrBuild }) => {
  const isDev = mode === "dev";

  if (command === "serve") {
    return {
      plugins: [vue()],
    };
  } else {
    // command === 'build'

    return {
      plugins: [vue()],
      build: {
        emptyOutDir: true,
        outDir: isDev ? "./../server/public" : "dist",
      },
    };
  }
});
