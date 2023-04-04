import Script from "next/script";
let _V = require("/components/_V.js");
import LinkList from "components/widget/LinkList";
import css from "styles/contact.module.scss";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

export default function Page({ short }) {
	short = JSON.parse(short)
	return (
		<>
			<Script
				src="https://yubinbango.github.io/yubinbango/yubinbango.js"
				strategy="beforeInteractive"
			/>

			{/* {!short && (<>
				<h2>合格へのHow To</h2>
				<p>
					秋谷光子アカデミィの各対策と勉強方法を公開していますので、ご活用ください。
				</p>
				<LinkList
					data={[
						["英検", "/method"],
						["大学受験", "/method"],
						["TOEIC", "/method"],
						["TOEFL", "/method"],
						["その他", "/method"],
					]}
				/>

				<h2>電話でのお問い合わせ</h2>
				<ul>
					{_V.access.map((e, i) => (
						<li key={i}>
							<span>{e.name}</span>：<a href={"tel:" + e.tel}>
								<span>{e.tel}</span>（15:00-21:00）
							</a>
						</li>
					))}
				</ul>
			</>
			)} */}

			{/* <h2 data-subTitle="秋谷光子アカデミィへの">資料請求 / お問い合わせ</h2> */}

			<h2>電話でのお問い合わせ</h2>
			<ul>
				{_V.access.map((e, i) => (
					<li key={i}>
						<span>{e.name}</span>：<a href={"tel:" + e.tel}>
							<span>{e.tel}</span>（15:00-21:00）
						</a>
					</li>
				))}
			</ul>

			<h2>メールでのお問い合わせ</h2>
			<form
				action="https://api.staticforms.xyz/submit"
				method="post"
				className={"h-adr " + css.contact}
			>
				<h6>お名前</h6>
				<input type="text" name="name" placeholder="田中 太郎" required />
				{!short && (<>
					<h6>ふりがな</h6>
					<input
						type="text"
						name="$ふりがな"
						placeholder="たなか たろう"
						required
					/>
				</>)}

				<h6>メールアドレス</h6>
				<input
					type="text"
					name="email"
					placeholder="mail@example.com"
					required
				/>

				<h6>お電話番号</h6>
				<input type="text" name="phone" placeholder="01-2345-6789" required />
				{!short && (<>
					<h6>郵便番号</h6>
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
					/>
				</>)}

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
											<option value={e[0] + step + "年生"} key={i + "_" + step}>
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
										<input
											type="checkbox"
											id={e}
											name={"$" + e}
											key={i}
											value={"問い合わせ項目：" + e}
										/>
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
					placeholder="その他、ご自由にご記入ください。"
				></textarea>

				<GoogleReCaptchaProvider
					// ref={recaptchaRef}
					size="invisible"
					sitekey="6LeRFNkfAAAAABuAD9cwj08_XwWcOWn6HqO3NN-D"
				// onChange={onReCAPTCHAChange}
				/>
				<input type="text" name="honeypot" className="honeypot" />
				<input type="hidden" name="replyTo" value="@" />
				<input
					type="hidden"
					name="redirectTo"
					value="https://akitani-academy.jp/contact/done"
				/>
				<input
					type="hidden"
					name="accessKey"
					value="8a391357-1cc5-48c1-a8d0-0771ffb6732a"
				/>
				<input type="submit" value="送信" />
			</form>

			<h2>合格へのHowTo</h2>
			<p>
				秋谷光子アカデミィの各対策と勉強方法を公開していますので、ご活用ください。
			</p>
			<LinkList
				data={[
					["英検", "/method"],
					["大学受験", "/method"],
					["TOEIC", "/method"],
					["TOEFL", "/method"],
					["その他", "/method"],
				]}
			/>
		</>
	);
}