

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.RQiIx-AF.js","_app/immutable/chunks/Component.PZvRIqhA.js","_app/immutable/chunks/index.3EbCJjBI.js","_app/immutable/chunks/index.MbsJ55as.js"];
export const stylesheets = ["_app/immutable/assets/2.ZEzHC8mK.css"];
export const fonts = [];
