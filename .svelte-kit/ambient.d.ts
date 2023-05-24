
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const MANPATH: string;
	export const npm_package_publishConfig_registry: string;
	export const TERM_PROGRAM: string;
	export const NODE: string;
	export const FNM_LOGLEVEL: string;
	export const INIT_CWD: string;
	export const npm_package_devDependencies_typescript: string;
	export const npm_package_devDependencies_vite: string;
	export const SHELL: string;
	export const TERM: string;
	export const FNM_NODE_DIST_MIRROR: string;
	export const CLICOLOR: string;
	export const TMPDIR: string;
	export const HOMEBREW_REPOSITORY: string;
	export const npm_config_metrics_registry: string;
	export const npm_config_global_prefix: string;
	export const TERM_PROGRAM_VERSION: string;
	export const npm_package_scripts_dev: string;
	export const npm_package_scripts_prepublishOnly: string;
	export const TERM_SESSION_ID: string;
	export const COLOR: string;
	export const npm_config_registry: string;
	export const npm_package_devDependencies__sveltejs_kit: string;
	export const npm_package_exports___svelte: string;
	export const npm_config_noproxy: string;
	export const npm_package_repository_url: string;
	export const PNPM_HOME: string;
	export const npm_config_local_prefix: string;
	export const npm_package_description: string;
	export const USER: string;
	export const npm_package_license: string;
	export const npm_package_scripts_check_watch: string;
	export const COMMAND_MODE: string;
	export const PNPM_SCRIPT_SRC_DIR: string;
	export const npm_config_globalconfig: string;
	export const SSH_AUTH_SOCK: string;
	export const __CF_USER_TEXT_ENCODING: string;
	export const npm_execpath: string;
	export const npm_package_devDependencies_tslib: string;
	export const npm_package_devDependencies_svelte: string;
	export const FNM_VERSION_FILE_STRATEGY: string;
	export const LSCOLORS: string;
	export const npm_package_devDependencies_svelte_highlight: string;
	export const FNM_ARCH: string;
	export const npm_config_access: string;
	export const PATH: string;
	export const npm_config_engine_strict: string;
	export const npm_package_json: string;
	export const npm_config_auto_install_peers: string;
	export const __CFBundleIdentifier: string;
	export const npm_config_init_module: string;
	export const npm_config_userconfig: string;
	export const npm_command: string;
	export const PWD: string;
	export const npm_package_devDependencies_publint: string;
	export const npm_package_devDependencies__sveltejs_package: string;
	export const npm_package_scripts_preview: string;
	export const npm_lifecycle_event: string;
	export const EDITOR: string;
	export const npm_package_types: string;
	export const npm_package_svelte: string;
	export const npm_package_repository_type: string;
	export const npm_package_keywords_0: string;
	export const npm_package_name: string;
	export const LANG: string;
	export const npm_package_keywords_1: string;
	export const ITERM_PROFILE: string;
	export const npm_package_devDependencies_sass: string;
	export const npm_package_exports___types: string;
	export const npm_package_scripts_build: string;
	export const NODE_PATH: string;
	export const XPC_FLAGS: string;
	export const FNM_MULTISHELL_PATH: string;
	export const npm_config_node_gyp: string;
	export const npm_config_depth: string;
	export const npm_package_main: string;
	export const npm_package_devDependencies__sveltejs_adapter_auto: string;
	export const npm_package_version: string;
	export const XPC_SERVICE_NAME: string;
	export const npm_package_devDependencies_svelte_check: string;
	export const npm_package_type: string;
	export const COLORFGBG: string;
	export const HOME: string;
	export const SHLVL: string;
	export const npm_config_strict_ssl: string;
	export const LC_TERMINAL_VERSION: string;
	export const HOMEBREW_PREFIX: string;
	export const FNM_DIR: string;
	export const npm_config_store_dir: string;
	export const npm_package_devDependencies_highlight_js: string;
	export const ITERM_SESSION_ID: string;
	export const LOGNAME: string;
	export const PYTHONPATH: string;
	export const npm_config_cache: string;
	export const npm_lifecycle_script: string;
	export const npm_package_peerDependencies_svelte: string;
	export const npm_package_scripts_package: string;
	export const npm_config_user_agent: string;
	export const HOMEBREW_CELLAR: string;
	export const INFOPATH: string;
	export const LC_TERMINAL: string;
	export const npm_package_files_0: string;
	export const npm_package_scripts_check: string;
	export const npm_node_execpath: string;
	export const COLORTERM: string;
	export const npm_config_prefix: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		MANPATH: string;
		npm_package_publishConfig_registry: string;
		TERM_PROGRAM: string;
		NODE: string;
		FNM_LOGLEVEL: string;
		INIT_CWD: string;
		npm_package_devDependencies_typescript: string;
		npm_package_devDependencies_vite: string;
		SHELL: string;
		TERM: string;
		FNM_NODE_DIST_MIRROR: string;
		CLICOLOR: string;
		TMPDIR: string;
		HOMEBREW_REPOSITORY: string;
		npm_config_metrics_registry: string;
		npm_config_global_prefix: string;
		TERM_PROGRAM_VERSION: string;
		npm_package_scripts_dev: string;
		npm_package_scripts_prepublishOnly: string;
		TERM_SESSION_ID: string;
		COLOR: string;
		npm_config_registry: string;
		npm_package_devDependencies__sveltejs_kit: string;
		npm_package_exports___svelte: string;
		npm_config_noproxy: string;
		npm_package_repository_url: string;
		PNPM_HOME: string;
		npm_config_local_prefix: string;
		npm_package_description: string;
		USER: string;
		npm_package_license: string;
		npm_package_scripts_check_watch: string;
		COMMAND_MODE: string;
		PNPM_SCRIPT_SRC_DIR: string;
		npm_config_globalconfig: string;
		SSH_AUTH_SOCK: string;
		__CF_USER_TEXT_ENCODING: string;
		npm_execpath: string;
		npm_package_devDependencies_tslib: string;
		npm_package_devDependencies_svelte: string;
		FNM_VERSION_FILE_STRATEGY: string;
		LSCOLORS: string;
		npm_package_devDependencies_svelte_highlight: string;
		FNM_ARCH: string;
		npm_config_access: string;
		PATH: string;
		npm_config_engine_strict: string;
		npm_package_json: string;
		npm_config_auto_install_peers: string;
		__CFBundleIdentifier: string;
		npm_config_init_module: string;
		npm_config_userconfig: string;
		npm_command: string;
		PWD: string;
		npm_package_devDependencies_publint: string;
		npm_package_devDependencies__sveltejs_package: string;
		npm_package_scripts_preview: string;
		npm_lifecycle_event: string;
		EDITOR: string;
		npm_package_types: string;
		npm_package_svelte: string;
		npm_package_repository_type: string;
		npm_package_keywords_0: string;
		npm_package_name: string;
		LANG: string;
		npm_package_keywords_1: string;
		ITERM_PROFILE: string;
		npm_package_devDependencies_sass: string;
		npm_package_exports___types: string;
		npm_package_scripts_build: string;
		NODE_PATH: string;
		XPC_FLAGS: string;
		FNM_MULTISHELL_PATH: string;
		npm_config_node_gyp: string;
		npm_config_depth: string;
		npm_package_main: string;
		npm_package_devDependencies__sveltejs_adapter_auto: string;
		npm_package_version: string;
		XPC_SERVICE_NAME: string;
		npm_package_devDependencies_svelte_check: string;
		npm_package_type: string;
		COLORFGBG: string;
		HOME: string;
		SHLVL: string;
		npm_config_strict_ssl: string;
		LC_TERMINAL_VERSION: string;
		HOMEBREW_PREFIX: string;
		FNM_DIR: string;
		npm_config_store_dir: string;
		npm_package_devDependencies_highlight_js: string;
		ITERM_SESSION_ID: string;
		LOGNAME: string;
		PYTHONPATH: string;
		npm_config_cache: string;
		npm_lifecycle_script: string;
		npm_package_peerDependencies_svelte: string;
		npm_package_scripts_package: string;
		npm_config_user_agent: string;
		HOMEBREW_CELLAR: string;
		INFOPATH: string;
		LC_TERMINAL: string;
		npm_package_files_0: string;
		npm_package_scripts_check: string;
		npm_node_execpath: string;
		COLORTERM: string;
		npm_config_prefix: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: string]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
