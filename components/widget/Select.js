import { useRouter } from "next/router";
import Router from "next/router";

function Page({ data, name }) {
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
	return (
		<>
			<div>
				<select onChange={pushQuery} name={name + "S"}>
					<option disabled selected>
						選択する
					</option>
					{data.map((e, i) => (
						<option
							value={e.slug}
							key={i}
							selected={router.query[name] == e.slug ? true : false}
						>
							{e.title}
						</option>
					))}
				</select>
			</div>
		</>
	);
}

export default Page;
