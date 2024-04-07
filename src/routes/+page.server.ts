export const load = async ({ locals }) => {
	const res = await locals.pb.collection("apps").getFullList();
	return { res };
};
