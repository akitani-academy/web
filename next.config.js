/** @type {import('next').NextConfig} */

module.exports = {
	swcMinify: true,
	reactStrictMode: true,
	images: {
		domains: ["yoshikitam.wpx.jp", "akitani-academy.vercel.app"],
		formats: ["image/avif", "image/webp"],
	},
	sassOptions: {
		prependData: '@import "styles/_V.scss";',
	},
	experimental: {
		// concurrentFeatures: true,
		// serverComponents: true,
		// urlImports: ["https://yubinbango.github.io"],
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			issuer: {
				and: [/\.(js|ts)x?$/],
			},
			use: ["@svgr/webpack"],
		});
		return config;
	},
	async redirects() {
		return [
			{
				source: "/about-us/",
				destination: "/",
				permanent: true,
			},
			{
				source: "/message/",
				destination: "/greeting",
				permanent: true,
			},
			{
				source: "/qanda/",
				destination: "/faq",
				permanent: true,
			},
			{
				source: "/course/",
				destination: "/course_and_classtype",
				permanent: true,
			},
			{
				source: "/environment/",
				destination: "/access",
				permanent: true,
			},
			{
				source: "/access_tunashima/",
				destination: "/access",
				permanent: true,
			},
			{
				source: "/access_tunashima/",
				destination: "/access",
				permanent: true,
			},
			{
				source: "/contact-confirm/",
				destination: "/contact",
				permanent: true,
			},
			{
				source: "/enrollment/",
				destination: "/contact",
				permanent: true,
			},
			{
				source: "/arch-eiken/",
				destination: "/experiences",
				permanent: true,
			},
			{
				source: "/arch-voice/",
				destination: "/experiences",
				permanent: true,
			},
			{
				source: "/arch-school/",
				destination: "/experiences",
				permanent: true,
			},
			{
				source: "/arch-toeic/",
				destination: "/experiences",
				permanent: true,
			},
			{
				source: "/arch-toefl/",
				destination: "/experiences",
				permanent: true,
			},
		];
	},
};
