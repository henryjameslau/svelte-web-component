

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.c4_VAKNc.js","_app/immutable/chunks/Component.PZvRIqhA.js","_app/immutable/chunks/index.3EbCJjBI.js"];
export const stylesheets = [];
export const fonts = [];
