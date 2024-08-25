import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	render() {
		return (
			<Html lang="ja">
				<Head>
					<link rel="icon" type="image/x-icon" href="/favicon.ico" />
					<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
					<link
						rel="preconnect"
						href="https://fonts.gstatic.com"
						crossOrigin="true"
					/>
					{/* TASK: font-optimization実装 */}
					<link
						href="https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@600;800&display=swap"
						rel="stylesheet"
					></link>
					{/* GTM:Head ----------------------- */}
					<script dangerouslySetInnerHTML={{
						__html:`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-MHD4ZGNK');`,
					}}/>
					{/* -------------------------------- */}
				</Head>
				<body>
					{/* GTM:Body ----------------------- */}
					<noscript dangerouslySetInnerHTML={{
						__html:`<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MHD4ZGNK" height="0" width="0" style="display:none;visibility:hidden"></iframe>`
					}}/>
					{/* -------------------------------- */}
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
