import Head from "components/head";
import Image from "next/image";
import Link from "next/link";

import { useRouter } from "next/router";
import Router from "next/router";

import View from "components/widget/View";
import Select from "components/widget/Select";

import css from "styles/course_and_classtype.module.scss";

import { useEffect } from "react";

export default function Page({ courseData, classtypeData }) {
	useEffect(() => {
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
		document.addEventListener("DOMContentLoaded", resize);
	}, []);

	const router = useRouter();
	function pushQuery(e) {
		Router.push("#" + [name]);
		Router.push(
			{
				query: { ...router.query, [name]: e.target.value },
			},
			undefined,
			{ scroll: false, shallow: true }
		);
		Router.push("#" + [name]);
	}

	var selectTitle = "コースと授業形態";
	var breadcrumb = [["コースと授業形態", "/course_and_classtype"]];
	if (router.query) {
		selectTitle = "";
		let course = courseData.find(function (e) {
			return e.slug === router.query.course;
		});
		let classtype = classtypeData.find(function (e) {
			return e.slug === router.query.classtype;
		});
		if (router.query.course && router.query.classtype) {
			selectTitle = "[" + course.title + "] x" + " [" + classtype.title + "]";
			breadcrumb = [
				["コースと授業形態", "/course_and_classtype"],
				[selectTitle, router.asPath],
			];
		} else {
			if (router.query.course) {
				selectTitle = "コース [" + course.title + "]";
				breadcrumb = [
					["コース", "/course_and_classtype"],
					[course.title, router.asPath],
				];
			}
			if (router.query.classtype) {
				selectTitle = "授業形態 [" + classtype.title + "]";
				breadcrumb = [
					["授業形態", "/course_and_classtype"],
					[classtype.title, router.asPath],
				];
			}
		}
	}

	return (
		<>
			<Head title={selectTitle} breadcrumb={breadcrumb} />
			<h1>コース と 授業形態</h1>
			<p>
				万人に当てはまるカリキュラムはありません。秋谷アカデミィでは入塾の際、塾長が面談を行い、お一人お一人に合った最適な授業をコーディネート致します。
			</p>
			<section className={css.slect + " selectArea"}>
				<div className={css.child}>
					<div className={css.main}>
						<h5>コース</h5>
						<Select data={courseData} name={"course"} />
					</div>
					<ul>
						{courseData.map((e, i) => (
							<li key={i}>
								<input
									id={e.id}
									type="radio"
									name={"courseR"}
									value={e.slug}
									onChange={pushQuery}
								/>
								<label htmlFor={e.id}>{e.title}</label>
							</li>
						))}
					</ul>
				</div>
				<img src="x.svg" width={"26px"} height={"26px"} />
				<div className={css.child}>
					<div className={css.main}>
						<h5>授業形態</h5>
						<Select data={classtypeData} name={"classtype"} />
					</div>
					<ul>
						{classtypeData.map((e, i) => (
							<li key={i}>
								<input
									id={e.id}
									type="radio"
									name={"classtypeR"}
									value={e.slug}
									onChange={pushQuery}
								/>
								<label htmlFor={e.id}>{e.title}</label>
							</li>
						))}
					</ul>
				</div>
			</section>
			<View data={courseData} name={"course"} />
			<View data={classtypeData} name={"classtype"} />
		</>
	);
}

import Layout from "/components/layout";
Page.getLayout = function getLayout(page) {
	return <Layout>{page}</Layout>;
};

export async function getStaticProps() {
	const courseData = await fetch(
		"https://yoshikitam.wpx.jp/akitani/wp-json/wp/v2/course?per_page=100"
	).then((res) => res.json());
	const classtypeData = await fetch(
		"https://yoshikitam.wpx.jp/akitani/wp-json/wp/v2/class_type?per_page=100&"
	).then((res) => res.json());

	return {
		props: {
			courseData: courseData.reverse(),
			classtypeData: classtypeData.reverse(),
		},
	};
}
