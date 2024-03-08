import "the-new-css-reset/css/reset.css";
import "../styles/globals.scss";

import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function MyApp({ Component, pageProps }) {
	const getLayout = Component.getLayout || ((page) => page);

	return getLayout(
		<>
			<Script
				src="https://www.googletagmanager.com/gtag/js?id=G-NWLCNYE48X&id=UA-222170888-1"
				strategy="afterInteractive"
			/>
			<Script id="google-analytics" strategy="afterInteractive">
				{`
				window.dataLayer = window.dataLayer || [];
				function gtag(){window.dataLayer.push(arguments);}
				gtag('js', new Date());
				gtag('config', 'G-NWLCNYE48X');
				gtag('config', 'UA-222170888-1');

				(function(c,l,a,r,i,t,y){
					c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
					t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
					y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
				})(window, document, "clarity", "script", "gukjpuvvus");
				`}
			</Script>

			<Component {...pageProps} />
		</>
	);
}
