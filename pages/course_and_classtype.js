import { useEffect } from "react";
import { useRouter } from "next/router";
import Router from "next/router";

import Layout from "components/layout";
import Head from "components/head";
import View from "components/widget/View";
import Select from "components/widget/Select";
import Contact from "components/widget/Contact"

import css from "styles/course_and_classtype.module.scss";
import css_contact from "styles/contact.module.scss";
export default function Page({ description, courseData, classtypeData }) {
	useEffect(() => {
		resize();
		window.addEventListener("resize", resize);
		function resize() {
			if (450 > window.innerWidth) {
				document.querySelector(".selectArea").style.transform =
					"scale(" + window.innerWidth / 450 + ")";
				document.querySelector(".selectArea").style.width =
					100 * (450 / window.innerWidth) + "vw";
			} else {
				document.querySelector(".selectArea").style.transform = "";
				document.querySelector(".selectArea").style.width = "";
			}
		}
	}, []);

	const router = useRouter();
	function pushQuery(query, slug) {
		Router.push("#" + query);
		Router.push(
			{
				query: { ...router.query, [query]: slug },
			},
			undefined,
			{ scroll: false, shallow: true }
		);
		Router.push("#" + query);
	}

	var selectTitle = "コースと授業形態";
	var breadcrumb = [["コースと授業形態", "/course_and_classtype"]];
	// var description = ""
	if (router.query) {

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

		selectTitle = "";
		let course = courseData.find(function (e) {
			return e.slug === router.query.course;
		});
		let classtype = classtypeData.find(function (e) {
			return e.slug === router.query.classtype;
		});
		if (router.query.course && router.query.classtype) {
			selectTitle = `${course.title}コースの${classtype.title}`;
			breadcrumb = [
				["コースと授業形態", "/course_and_classtype"],
				[selectTitle, router.asPath],
			];
		} else {
			if (router.query.course) {
				selectTitle = course.title + "コース";
				breadcrumb = [
					["コース", "/course_and_classtype"],
					[course.title, router.asPath],
				];
				// description = data.content.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, '');
			}
			if (router.query.classtype) {
				selectTitle = classtype.title;
				breadcrumb = [
					["授業形態", "/course_and_classtype"],
					[classtype.title, router.asPath]
				];
			}
		}
	}

	return (
		<>
			<Head
				title={selectTitle}
				breadcrumb={breadcrumb}
			/>
			<h1>コース と 授業形態</h1>
			<div dangerouslySetInnerHTML={{ __html: String(description) }} />
			<section className={css.slect + " selectArea"}>
				<div className={css.child}>
					<div className={css.main}>
						<h5>コース</h5>
						<Select data={courseData} name={"course"} />
					</div>
					<ul>
						{courseData.map((e, i) => (
							<li
								key={i}
								onClick={() => (pushQuery("course", e.slug))}
							>
								{e.title}
							</li>
						))}
					</ul>
				</div>
				<img alt="掛け算アイコン" src="x.svg" width={"26px"} height={"26px"} />
				<div className={css.child}>
					<div className={css.main}>
						<h5>授業形態</h5>
						<Select data={classtypeData} name={"classtype"} />
					</div>
					<ul>
						{classtypeData.map((e, i) => (
							<li
								key={i}
								onClick={() => (pushQuery("classtype", e.slug))}
							>
								{e.title}
							</li>
						))}
					</ul>
				</div>
			</section>
			<View data={courseData} name={"course"} />
			<View data={classtypeData} name={"classtype"} />
			<aside className={css_contact.contact}>
				<Contact short="true" />
			</aside>
		</>
	);
}

Page.getLayout = function getLayout(page) {
	return <Layout>{page}</Layout>;
};

export async function getStaticProps() {
	const description = await fetch(
		"https://yoshikitam.wpx.jp/akitani/wp-json/wp/v2/pages?slug=course_and_classtype"
	).then((res) => res.json());
	const courseData = await fetch(
		"https://yoshikitam.wpx.jp/akitani/wp-json/wp/v2/course?per_page=100"
	).then((res) => res.json());
	const classtypeData = await fetch(
		"https://yoshikitam.wpx.jp/akitani/wp-json/wp/v2/class_type?per_page=100&"
	).then((res) => res.json());

	return {
		props: {
			description: description[0].wp_body,
			courseData: courseData.reverse(),
			classtypeData: classtypeData.reverse(),
		},
	};
}
