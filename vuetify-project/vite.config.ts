// Plugins
import vue from '@vitejs/plugin-vue';
import vuetify from 'vite-plugin-vuetify';
import eslintPlugin from 'vite-plugin-eslint';

// Utilities
import { defineConfig } from 'vite';
// import { fileURLToPath, URL } from "node:url";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
		vuetify({
			autoImport: true
		}),
		eslintPlugin({
			include: ['src/**/*.js', 'src/**/*.vue', 'src/*.js', 'src/*.vue']
		})
	],
	define: { 'process.env': {} },
	resolve: {
		alias: {
			// "@": fileURLToPath(new URL("./src", import.meta.url))
			'@': '/src'
		},
		extensions: ['.js', '.json', '.jsx', '.mjs', '.ts', '.tsx', '.vue']
	},
	server: {
		host: '0.0.0.0',
		port: 3000
	}
});
