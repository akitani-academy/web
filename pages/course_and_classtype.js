import { useRouter } from "next/router";
import Router from "next/router";
import Head from "components/head";

export default function Page() {
	// useEffect(() => {
	// 	resize();
	// 	window.addEventListener("resize", resize);
	// 	function resize() {
	// 		if (450 > window.innerWidth) {
	// 			document.querySelector(".selectArea").style.transform =
	// 				"scale(" + window.innerWidth / 450 + ")";
	// 			document.querySelector(".selectArea").style.width =
	// 				100 * (450 / window.innerWidth) + "vw";
	// 		} else {
	// 			document.querySelector(".selectArea").style.transform = "";
	// 			document.querySelector(".selectArea").style.width = "";
	// 		}
	// 	}
	// }, []);

	const router = useRouter();
	if (router.isReady) {

		// 過去のリダイレクト処理
		if (router.query.course == "schoolup") {
			Router.push(
				{
					query: { ...router.query, "course": "junior-high" },
				},
				undefined,
				{ scroll: false, shallow: true }
			);
		}
		if (router.query.course) {
			Router.replace(`/course/${router.query.course}`);
		} else {
			Router.replace(`/`);
		}

	}

	return (
		<>

			<Head
				url={router.query.course ? `/course/${router.query.course}` : `/`}
			/>
		</>
	);
}

// export async function getStaticProps() {
// 	const descriptionHTML = await fetch(
// 		"https://yoshikitam.wpx.jp/akitani/wp-json/wp/v2/pages?slug=course_and_classtype"
// 	).then((res) => res.json());
// 	const courseData = await fetch(
// 		"https://yoshikitam.wpx.jp/akitani/wp-json/wp/v2/course?per_page=100"
// 	).then((res) => res.json());
// 	const classtypeData = await fetch(
// 		"https://yoshikitam.wpx.jp/akitani/wp-json/wp/v2/class_type?per_page=100&"
// 	).then((res) => res.json());

// 	return {
// 		props: {
// 			descriptionHTML: descriptionHTML[0].wp_body,
// 			courseData: courseData.reverse(),
// 			classtypeData: classtypeData.reverse(),
// 		},
// 	};
// }
