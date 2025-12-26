const _V = require("/components/_V.js");
import Script from "next/script";

import AddressForm from "components/AddressForm/AddressForm";

import LinkList from "components/widget/LinkList";

import css from "styles/contact.module.scss";

export default function Page({ short }) {
    short = JSON.parse(short);

    const TURNSTILE_SITEKEY = "0x4AAAAAACH_Ur3BCYRT3BmO";

    let actionKey = "mC0jMxjm5";
    return (
        <>
            <Script
                src="https://yubinbango.github.io/yubinbango/yubinbango.js"
                strategy="beforeInteractive"
            />

            <Script
                src="https://challenges.cloudflare.com/turnstile/v0/api.js"
                strategy="afterInteractive"
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

            <h2 id="contact">メールでのお問い合わせ</h2>
            <form
                action={"https://submit-form.com/" + actionKey}
                method="post"
                className={"h-adr " + css.contact}
            >
                <h6>
                    問い合わせ内容　<span>*必須</span>
                </h6>
                <div className={css.contactCheck}>
                    {(() => {
                        let items = [];
                        [
                            "面談・訪問の予約",
                            "資料請求",
                            "当アカデミーへのご質問",
                        ].map((e, i) => {
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
                        });
                        return <>{items}</>;
                    })()}
                </div>

                <h6>お名前　*必須</h6>
                <input
                    type="text"
                    name="name"
                    placeholder="田中 太郎"
                    required
                />
                {!short && (
                    <>
                        <h6>
                            ふりがな　<span>*必須</span>
                        </h6>
                        <input
                            type="text"
                            name="$ふりがな"
                            placeholder="たなか たろう"
                            required
                        />
                    </>
                )}

                <h6>
                    メールアドレス　<span>*必須</span>
                </h6>
                <input
                    type="text"
                    name="email"
                    placeholder="mail@example.com"
                    required
                />

                <h6>
                    お電話番号　<span>*必須</span>
                </h6>
                <input
                    type="text"
                    name="phone"
                    placeholder="01-2345-6789"
                    required
                />
                {!short && (
                    <>
                        <AddressForm />
                    </>
                )}

                <h6>
                    ご住所（番地）　<span>*必須</span>
                </h6>
                <input type="text" name="$番地" placeholder="1-1" required />

                <h6>
                    学年　
                    <span>
                        （学生ではない場合は「学生ではない」を選択してください。）
                    </span>
                </h6>
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
                                            <option
                                                value={e[0] + step + "年生"}
                                                key={i + "_" + step}
                                            >
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

                <textarea
                    name="$問い合わせ"
                    placeholder="その他、ご自由にご記入ください。"
                ></textarea>

                {/* <input type="text" name="honeypot" className="honeypot" />
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
				/> */}
                {/* <input type="submit" value="送信する" /> */}

                <div
                    className="cf-turnstile"
                    data-sitekey={TURNSTILE_SITEKEY}
                    data-theme="light"
                    data-callback="turnstileCallback"
                    data-expired-callback="turnstileExpired"
                    data-error-callback="turnstileError"
                />

                <input
                    type="hidden"
                    name="_redirect"
                    value="https://akitani-academy.jp/contact/done"
                />

                <input
                    id="submit-button"
                    type="submit"
                    value="送信する"
                    disabled
                />
            </form>
            <Script id="custom-script" strategy="afterInteractive">
                {`
					(function () {
					function setSubmitEnabled(enabled) {
						const submitButton = document.getElementById("submit-button");
						if (!submitButton) return;
						if (enabled) submitButton.removeAttribute("disabled");
						else submitButton.setAttribute("disabled", "disabled");
					}

					// Turnstile が呼ぶのは window 上の関数なので明示的に生やす
					window.turnstileCallback = function (token) {
						setSubmitEnabled(!!token);
					};

					window.turnstileExpired = function () {
						setSubmitEnabled(false);
					};

					window.turnstileError = function () {
						setSubmitEnabled(false);
					};

					// 初期状態は必ず無効
					setSubmitEnabled(false);
					})();
				`}
            </Script>

            <h2>電話でのお問い合わせ</h2>
            <ul>
                {_V.access.map((e, i) => (
                    <li key={i}>
                        <span>{e.name}</span>：
                        <a href={"tel:" + e.tel}>
                            <span>{e.tel}</span>（15:00-21:00）
                        </a>
                    </li>
                ))}
            </ul>

            {/* <h2>合格へのHowTo</h2>
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
			/> */}
        </>
    );
}
