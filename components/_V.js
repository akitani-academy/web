module.exports.meta = {
	siteTitle: "英語専門予備校 秋谷光子アカデミィ｜横浜,綱島,自由が丘,田園調布",
	baseURL: "https://akitani-academy.jp",
};
module.exports.access = [
	{
		id: "tsunashima",
		name: "横浜・綱島本部校",
		address: "〒223-0053 横浜市港北区 綱島西2-1-7 マック綱島コート２Ｆ",
		tel: "045-544-6756",
		description: `
		<p>
		東急東横線 綱島駅西口より徒歩1分<br/>
		綱島駅西口を出て左折。右手に三井住友・りそな銀行を通り過ぎ、直進して横断歩道を渡り、左手の横浜銀行の先。
		</p>
		<p>
		東急新横浜線 新綱島駅より徒歩5分<br/>
		新綱島駅南口を出て綱島街道を渡る。直進して東急東横線の線路下を通り、横断歩道を左に渡る。左手の横浜銀行の先。
		</p>
		`,
		Gmap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3246.7447071077345!2d139.6314469511101!3d35.535305980131554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60185f16c0014351%3A0xde8eb46e6d163758!2z56eL6LC35YWJ5a2Q44Ki44Kr44OH44Of44KjIOe2seWztuacrOmDqOagoQ!5e0!3m2!1sja!2sjp!4v1646297552069!5m2!1sja!2sjp",
	},
	{
		id: "denenchofu",
		name: "自由が丘・田園調布校",
		address: "〒145-0071 東京都大田区田園調布3-24-2",
		tel: "03-5483-5025",
		description: `
		<p>
		東急東横線・目黒線 田園調布駅より徒歩1分<br/>
		田園調布駅改札を出て左手階段上がる。ロータリーからケンタッキーを過ぎ、三菱UFJ銀行の斜め向かいの建物。
		</p>
		`,
		Gmap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3244.254539715009!2d139.6642714799756!3d35.59678728031105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f516c42ab6df%3A0xfc211c6ee5dd3fb7!2z56eL6LC35YWJ5a2Q44Ki44Kr44OH44Of44KjIOeUsOWckuiqv-W4g-agoQ!5e0!3m2!1sja!2sjp!4v1646302277152!5m2!1sja!2sjp",
	},
];

module.exports.menu = [
	{
		class: "nav_main",
		content: [
			["トップページ", "/"],
			["塾長ご挨拶", "/greeting"],
			// ["当塾の特徴", "/course_and_classtype"],
			["講師紹介", "/teacher"],
			["合格への授業方針", "/method"],
		],
	},
	{
		class: "nav_course",
		title: "コース",
		content: [
			["中学生", "/course/junior-high"],
			["高校生", "/course/senior-high"],
			["大学受験", "/course/college"],
			["英検合格", "/course/eikenn-pass"],
			["TOEFL", "/course/toefl"],
			["IELTS", "/course/ielts"],
			["GTEC", "/course/gtec"],
			["TOEIC", "/course/toeic"],
			["帰国子女", "/course/returnee"],
		],
	},
	{
		class: "nav_main",
		content: [
			// ["実績と体験記", "/experiences"],
			["アクセス", "/access"],
			["よくある質問", "/faq"],
			["料金について", "/pricing"],
		],
	},
	{
		class: "nav_features spOnly",
		title: "秋谷光子アカデミィの特徴",
		content: [
			["英検1級合格累計168人<br/>全ての英語資格で圧倒的な実績", "/#0"],
			[
				"コースと授業形態を組み合わせて<br/>あなたに最適な授業をコーディネート",
				"/#1",
			],
			["試験に受かる学校英語と<br/>社会で使える実用英語をマスター", "/#2"],
			["6人までのグループ指導", "/#3"],
			["英検1級講師の個人指導", "/#4"],
			["最上級の学習空間", "/#5"],
		],
	},
];
