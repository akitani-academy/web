import Layout from "components/layout";
import Head from "components/head";
import Contact from "components/widget/Contact"
export default function Page() {
	return (
		<>
			<Head
				title="資料請求/お問い合わせ"
				breadcrumb={[["お問合せ", "/contact"]]}
			/>
			<h1>資料請求・お問い合わせ</h1>
			<Contact short="false" />
		</>
	);
}

Page.getLayout = function getLayout(page) {
	return <Layout>{page}</Layout>;
};
