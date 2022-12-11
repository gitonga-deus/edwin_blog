export const handleTimeStamp = (timestamp) => {
	const date = new Date(timestamp);

	return date.toLocaleDateString('en-GB', {
		day: "numeric",
		month: "long",
		year: "numeric"
	});
};