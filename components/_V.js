module.exports.meta = {
	siteTitle: "英語専門塾 秋谷アカデミィ｜横浜・自由が丘",
	baseURL: "https://akitani-academy.jp",
};
module.exports.access = [
	{
		id: "tsunashima",
		name: "綱島本部校",
		address: "〒223-0053 横浜市港北区 綱島西2-1-7 マック綱島コート２Ｆ",
		tel: "045-544-6756",
		description: "東急東横線綱島駅西口より徒歩１分",
		Gmap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3246.7447071077345!2d139.6314469511101!3d35.535305980131554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60185f16c0014351%3A0xde8eb46e6d163758!2z56eL6LC35YWJ5a2Q44Ki44Kr44OH44Of44KjIOe2seWztuacrOmDqOagoQ!5e0!3m2!1sja!2sjp!4v1646297552069!5m2!1sja!2sjp",
	},
	{
		id: "denenchofu",
		name: "田園調布校",
		address: "〒145-0071 東京都大田区田園調布3-24-2",
		tel: "03-5483-5025",
		description: "田園調布駅より徒歩１分",
		Gmap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3244.254539715009!2d139.6642714799756!3d35.59678728031105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f516c42ab6df%3A0xfc211c6ee5dd3fb7!2z56eL6LC35YWJ5a2Q44Ki44Kr44OH44Of44KjIOeUsOWckuiqv-W4g-agoQ!5e0!3m2!1sja!2sjp!4v1646302277152!5m2!1sja!2sjp",
	},
];

module.exports.menu = [
	{
		class: "nav_main",
		content: [
			["トップページ", "/"],
			["塾長ご挨拶", "/greeting"],
			["コースと授業形態", "/course_and_classtype"],
			["講師紹介", "/teacher"],
			["実績 / 体験記", "/experiences"],
			["合格へのHow To", "/method"],
			["よくある質問", "/faq"],
			["アクセス", "/access"],
		],
	},
	{
		class: "nav_course",
		title: "コース",
		content: [
			["中学生", "/course_and_classtype?course=schoolup"],
			["高校生", "/course_and_classtype?course=college"],
			["大学受験", "/course_and_classtype?course=college"],
			["英検合格", "/course_and_classtype?course=eikenn-pass"],
			["TOEFL", "/course_and_classtype?course=toefl"],
			["IELTS", "/course_and_classtype?course=ielts"],
			["GTEC", "/course_and_classtype?course=gtec"],
			["TOEIC・ビジネス英語", "/course_and_classtype?course=toeic"],
			["帰国子女", "/course_and_classtype?course=returnee"],
		],
	},
	{
		class: "nav_features spOnly",
		title: "秋谷アカデミィの特徴",
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
