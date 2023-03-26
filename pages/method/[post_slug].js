import Head from "components/head";
import Image from "next/image";
import Link from "next/link";

import List from "components/widget/LinkList";

let _V = require("/components/_V.js");

import css from "styles/contact.module.scss";

import { useRouter } from "next/router";

export default function Page({ post }) {
	const router = useRouter();
	return (
		<>
			<Head
				title={"横浜・自由が丘 英語専門塾 秋谷アカデミィの" + post.title}
				breadcrumb={[
					["合格へのHowTo", "/method"],
					[post.title, router.asPath],
				]}
			/>
			<h1 data-subTitle="秋谷光子アカデミィの">{post.title}</h1>
			<List data={[["その他の合格対策", "/method"]]} />

			<article dangerouslySetInnerHTML={{ __html: post.content }}></article>
			<aside className={css.contact}>
				<h4>秋谷光子アカデミィへのお問い合わせ</h4>
				<h5>電話での問い合わせ</h5>
				<ul>
					{_V.access.map((e, i) => (
						<li key={i}>
							<a href={"tel:" + e.tel}>
								<span>{e.name}</span>：<span>{e.tel}</span>（15:00-21:00）
							</a>
						</li>
					))}
				</ul>
				<h5>資料請求 / お問い合わせ</h5>
				<form
					action="https://api.staticforms.xyz/submit"
					method="post"
					className="h-adr"
				>
					<input
						type="hidden"
						name="accessKey"
						value="6LeRFNkfAAAAABuAD9cwj08_XwWcOWn6HqO3NN-D"
					/>
					<h6>お名前</h6>
					<input type="text" name="name" placeholder="田中 太郎" required />
					{/* <h6>ふりがな</h6>
          <input
            type="text"
            name="$ふりがな"
            placeholder="たなか たろう"
            required
          /> */}
					<h6>メールアドレス</h6>
					<input
						type="text"
						name="email"
						placeholder="mail@example.com"
						required
					/>
					<h6>お電話番号</h6>
					<input type="text" name="phone" placeholder="01-2345-6789" required />
					{/* <h6>郵便番号</h6>
          <input
            type="text"
            name="$郵便番号"
            className="p-postal-code"
            maxLength="9"
            placeholder="100-8111"
            required
          />
          <h6>ご住所</h6>
          <span className="p-country-name">Japan</span>
          <input
            type="text"
            name="$住所"
            className="p-region p-locality p-street-address p-extended-address"
            placeholder="東京都千代田区千代田1-1"
            required
          /> */}
					<h6>学年</h6>
					<div className={css.select}>
						<select name="$学年">
							<option disabled selected>
								選択する
							</option>
							{(() => {
								let items = [];
								[
									["学生ではない"],
									["小学", 6],
									["中学", 3],
									["高校", 3],
									["大学受験生"],
									["専門学校生"],
									["大学生"],
									["大学院生"],
								].map((e, i) => {
									if (e[1]) {
										for (let step = 1; step <= e[1]; step++) {
											items.push(
												<option value={e[0]} key={i + "_" + step}>
													{e[0]}
													{step}年生
												</option>
											);
										}
									} else {
										items.push(
											<option value={e[0]} key={i}>
												{e[0]}
											</option>
										);
									}
								});
								return <>{items}</>;
							})()}
						</select>
					</div>
					<h6>問い合わせ</h6>
					<div className={css.contactCheck}>
						{(() => {
							let items = [];
							["面談・訪問の予約", "資料請求", "当アカデミーへのご質問"].map(
								(e, i) => {
									items.push(
										<>
											<input type="checkbox" id={e} name={"$" + e} key={i} />
											<label htmlFor={e}>{e}</label>
										</>
									);
								}
							);
							return <>{items}</>;
						})()}
					</div>
					<textarea
						name="$問い合わせ"
						placeholder="ご自由にご記入ください。"
					></textarea>
					<input type="text" name="honeypot" className="honeypot" />
					<input type="hidden" name="replyTo" value="@" />
					<input
						type="hidden"
						name="redirectTo"
						value="https://akitani-academy.jp/contact/done"
					/>
					<input type="submit" value="送信" />
				</form>
			</aside>
		</>
	);
}

import Layout from "/components/layout";
Page.getLayout = function getLayout(page) {
	return <Layout>{page}</Layout>;
};

// この関数はビルド時に呼び出されます。
export async function getStaticPaths() {
	// 外部APIエンドポイントを呼び出して記事を取得します。
	const res = await fetch(
		"https://yoshikitam.wpx.jp/akitani/wp-json/wp/v2/posts?per_page=100"
	);
	const posts = await res.json();

	// 記事に基づいてプリレンダリングしたいパスを取得します
	const paths = posts.map((post) => ({
		params: { post_slug: post.slug },
	}));
	// console.log(paths);

	// ビルド時にこれらのパスだけをプリレンダリングします。
	// { fallback: false } は他のルートが404になることを意味します。
	return { paths, fallback: false };
}

// ビルド時にも呼び出されます。
export async function getStaticProps({ params }) {
	// paramsは記事の`id`を含みます。
	// ルートが/posts/1のような時、params.id は1です。
	const post = await fetch(
		"https://yoshikitam.wpx.jp/akitani/wp-json/wp/v2/posts?slug=" +
		params.post_slug
	).then((res) => res.json());

	// 記事データをprops経由でページに渡します。
	return { props: { post: post[0] } };
}
