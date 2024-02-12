export default function middlewarePipeline(context, middleware, index) {
	let nextMiddleware = middleware[index];
	if (nextMiddleware) {
		nextMiddleware(...context);
		return middlewarePipeline(context, middleware, index + 1);
	}
}