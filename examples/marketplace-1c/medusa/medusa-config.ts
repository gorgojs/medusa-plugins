import { loadEnv, defineConfig } from '@medusajs/framework/utils'
import { gorgoPluginsInject } from '@gorgo/medusa-marketplace/exports'

loadEnv(process.env.NODE_ENV || 'development', process.cwd())

module.exports = defineConfig({
	projectConfig: {
		databaseUrl: process.env.DATABASE_URL,
		http: {
			storeCors: process.env.STORE_CORS!,
			adminCors: process.env.ADMIN_CORS!,
			authCors: process.env.AUTH_CORS!,
			jwtSecret: process.env.JWT_SECRET || "supersecret",
			cookieSecret: process.env.COOKIE_SECRET || "supersecret",
		},
	},
	admin: {
		vite: (config) => {
			return {
				...config,
				// Used only during testing, do not enable in production
				server: {
					allowedHosts: true,
				},
				plugins: [
					gorgoPluginsInject({
						sources: [
							"@gorgo/medusa-marketplace",
							"@gorgo/medusa-marketplace-1c",
						],
						pluginMode: true,
					}),
				],
				optimizeDeps: {
					exclude: [
						"@gorgo/medusa-marketplace",
					],
				},
				resolve: {
					alias: [
						{ find: /^react$/, replacement: require.resolve("react") },
						{ find: /^react-dom$/, replacement: require.resolve("react-dom") },
						{ find: /^@tanstack\/react-query$/, replacement: require.resolve("@tanstack/react-query") },
						{ find: /^react-router-dom$/, replacement: require.resolve("react-router-dom") },
					],
					dedupe: ["react", "react-dom", "@tanstack/react-query", "react-router-dom"],
					preserveSymlinks: false,
				},
			}
		},
	},
	plugins: [
		// Marketplace 1C provider plugin (new marketplace-based integration)
		{
			resolve: "@gorgo/medusa-marketplace-1c",
			options: {},
		},
		// Base marketplace module — registers the 1C provider
		{
			resolve: "@gorgo/medusa-marketplace",
			options: {
				providers: [
					{
						resolve: "@gorgo/medusa-marketplace-1c/providers/marketplace-1c",
						id: "main",
						options: {},
					},
				],
			},
		},
	],
});
