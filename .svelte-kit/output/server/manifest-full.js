export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.zM4212Wt.js","app":"_app/immutable/entry/app.VI3ZyzFl.js","imports":["_app/immutable/entry/start.zM4212Wt.js","_app/immutable/chunks/entry.go2LL-fp.js","_app/immutable/chunks/Component.PZvRIqhA.js","_app/immutable/chunks/index.MbsJ55as.js","_app/immutable/entry/app.VI3ZyzFl.js","_app/immutable/chunks/Component.PZvRIqhA.js","_app/immutable/chunks/index.3EbCJjBI.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
