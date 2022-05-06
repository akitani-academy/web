import "the-new-css-reset/css/reset.css";
import "../styles/globals.scss";

import Script from "next/script";

export default function MyApp({ Component, pageProps }) {
	const getLayout = Component.getLayout || ((page) => page);

	return getLayout(
		<>
			<Script
				src="https://www.googletagmanager.com/gtag/js?id=G-NWLCNYE48X"
				strategy="afterInteractive"
			/>
			<Script id="google-analytics" strategy="afterInteractive">
				{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-NWLCNYE48X');
        `}
			</Script>
			<Component {...pageProps} />
		</>
	);
}
