import sanityClient from "@sanity/client";

export default sanityClient({
	projectId: "q04r70xj",
	dataset: "production",
	useCdn: true,
	apiVersion: "2022-02-01",
});