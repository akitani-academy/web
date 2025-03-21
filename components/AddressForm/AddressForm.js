import { useState } from "react";
import css from "styles/contact.module.scss";

export default function AddressForm() {
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // 住所を取得
  const fetchAddress = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${zipcode}`);
      const data = await res.json();

      if (data.status === 200 && data.results) {
        const result = data.results[0];
        setAddress(`${result.address1} ${result.address2} ${result.address3}`);
      } else {
        alert("住所が見つかりませんでした");
      }
    } catch (error) {
      console.error("エラー:", error);
      alert("住所検索に失敗しました");
    }
    setIsLoading(false);
  };

  return (
    <div className={css.getAddress}>
        <h6>郵便番号　<span>*必須</span></h6>
        <input
            type="text"
            name="$郵便番号"
            className="p-postal-code"
            maxLength="9"
            value={zipcode}
            onChange={(e) => setZipcode(e.target.value)}
            placeholder="100-8111"
            required
        />
        <div className={css.setAddress}><button type="button" onClick={fetchAddress} disabled={isLoading}>郵便番号から住所自動入力</button></div>
        <h6>ご住所　<span>*必須</span></h6>
        <span className="p-country-name">Japan</span>
        <input
            type="text"
            name="$住所"
            className="p-region p-locality p-street-address p-extended-address"
            value={address}
            placeholder="東京都千代田区千代田"
            required
        />
    </div>
  );
}
