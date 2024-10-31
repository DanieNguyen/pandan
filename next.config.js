// next.config.js
const withImages = require('next-images');

module.exports = withImages({
	reactStrictMode: true,
	images: {
		domains: ['pandan.studio', 'www.pandan.studio'], // Add any external domains if necessary
	},
});
