/** @type {import('next').NextConfig} 
const nextConfig = {};

module.exports = nextConfig;*/

module.exports = {
	webpack: (config) => {
		config.optimization.splitChunks = {
			chunks: 'all',
			minSize: 20000,
			maxSize: 70000, // Prevents oversized bundles
		};
		return config;
	},
	experimental: {
		workerThreads: false, // Reduce build memory usage
		cpus: 1, // Use a single CPU to lower memory consumption
	},
};
