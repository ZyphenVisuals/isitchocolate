export const POST = async ({ locals }) => {
	const res = await locals.pb.collection("apps").getFullList();
	res.forEach(async (app: any) => {
		let url = app.health_url;
		let id = app.id;

		let status;

		try {
			const response = await fetch(url);
			if (response.ok) {
				status = "STABLE";
			} else {
				status = "DOWN";
			}
		} catch (error) {
			console.error(error);
			status = "DOWN";
		}

		const data = {
			status: status,
			app: id,
		};

		return locals.pb.collection("status").create(data);
	});
	return new Response("ok.");
};

//sall cf?
//visez la un pui de somn
