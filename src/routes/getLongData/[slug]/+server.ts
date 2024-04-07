import { json } from "@sveltejs/kit";

export const GET = async ({ locals, params }) => {
	const resultList = await locals.pb.collection("status").getList(1, 50, {
		filter: 'app = "' + params.slug + '"',
	});
	return json(resultList);
};
