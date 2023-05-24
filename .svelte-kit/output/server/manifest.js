export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.e27eed29.js","app":"_app/immutable/entry/app.fb109581.js","imports":["_app/immutable/entry/start.e27eed29.js","_app/immutable/chunks/index.a14f1cf4.js","_app/immutable/chunks/singletons.d7bd2132.js","_app/immutable/entry/app.fb109581.js","_app/immutable/chunks/index.a14f1cf4.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
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
		}
	}
};
