const Footer = () => {
	return (
		<footer className="text-center py-4 text-white mt-4 footer" style={{
			backgroundColor: "#661111",
			fontSize: "15px",
			height: "80px",
			alignItems: "center",
		}}>
			<p style={{
				verticalAlign: "middle",
			}}>
				&copy; {new Date().getFullYear()} -
				Githiga Self Help Group
			</p>
		</footer>
	)
}

export default Footer;

