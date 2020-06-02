import 'source-map-support/register';

async function hello(event, _context) {
	return {
		statusCode: 200,
		body: JSON.stringify(
			{
				message: 'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!',
				input: event,
			},
			null,
			2
		),
	};
}

export { hello };
