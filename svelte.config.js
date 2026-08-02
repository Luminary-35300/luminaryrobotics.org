import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '404.html'
		}),
		prerender: {
			// Team media (photos, robot shots, sponsor logos) is added incrementally.
			// Don't fail the build on a not-yet-uploaded image under /images/ — the UI
			// falls back to a branded placeholder. Still throw on any other broken link.
			handleHttpError: ({ path, message }) => {
				if (path.startsWith('/images/')) {
					console.warn(`[prerender] missing image (using placeholder): ${path}`);
					return;
				}
				throw new Error(message);
			}
		}
	}
};

export default config;
