import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
	base: "/",

	lang: "en-US",
	title: "MEP",
	description: "MathScript Enhancement Proposal",

	head: [
		['link', { rel: 'icon', href: 'https://avatars.githubusercontent.com/u/180905240' }],
	],

	theme,

	// Enable it with pwa
	// shouldPrefetch: false,
});
