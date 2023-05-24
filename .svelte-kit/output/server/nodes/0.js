import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
export const component = async () => (await import('../entries/fallbacks/layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.1889c6c7.js","_app/immutable/chunks/index.a14f1cf4.js"];
export const stylesheets = [];
export const fonts = [];
