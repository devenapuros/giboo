import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import alias from "@rollup/plugin-alias";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), alias()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src/"),
        },
    },
});
