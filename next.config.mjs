/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/i,
			issuer: /\.[jt]sx?$/,
			use: ['@svgr/webpack'],
		});
		return config;
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'res.cloudinary.com',
				pathname: '**',
			},
			{
				protocol: 'https',
				hostname: 'raw.githubusercontent.com',
				pathname: '**',
			},
		],
	},
};

export default nextConfig;
