const Footer = () => {
	return (
		<footer className="text-center py-4 text-white" style={{
			backgroundColor: "#661111",
			fontSize: "15px",
			alignItems: "center"
		}}>
			<p style={{
				margin: "0"
			}}>
				&copy; {new Date().getFullYear()} -
				Githiga Self Help Group
			</p>
		</footer>
	)
}

export default Footer;

