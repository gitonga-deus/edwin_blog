// Members
import james from "../../assets/team/James.jpg"
import kennedy from "../../assets/team/Kennedy.jpg"
import hannah from "../../assets/team/Hannah.jpg"
import kanini from "../../assets/team/Kanini.jpg"
import peter from "../../assets/team/Peter.jpg"
import ngure from "../../assets/team/Ngure.jpg"
import john from "../../assets/team/John.jpg"

// Home Icons
import mission from "../../assets/home/mission.svg";
import vision from "../../assets/home/vision.svg";
import value from "../../assets/home/value.svg";

// Hero Image
import churchImage from "../../assets/slider-img/hero-edited.png";

// Product Icons
import loan from "../../assets/product/loan.svg"
import mode from "../../assets/product/channel.svg"
import individual from "../../assets/product/individuals.svg"
import corporate from "../../assets/product/corporate.svg"
import minor from "../../assets/product/minor.svg"

// Membership Registration Forms
import minorForm from "../../assets/docs/Minor-Registration-Form.pdf"
import memberForm from "../../assets/docs/Member-Registration-Form.pdf"
import corporateForm from "../../assets/docs/Corporate-Registration-Form.pdf"

// Contact Icons
import phone from "../../assets/contact/phone.svg"
import chat from "../../assets/contact/chat.svg"
import location from "../../assets/contact/location_pin.svg"


const data = {
	homeData: [
		"St. John Evangelist Githiga Catholic Church Self-Help Group was established in 1993 in Githiga Parish of the Archdiocese of Nairobi.It is an inclusive group that does not discriminate against anyone due to age, religion, social status, or otherwise.It is among many others that operate within Parishes in the Archdiocese of Nairobi.",
		"Like the rest, it was established to economically empower individuals and communities through financial inclusion.Its most important activities include savings mobilization and accessing affordable credit for its members.To date, the group has a membership of 1006 members whose deposits have accumulated to Ksh 45m",
		"The management is committed to serving its members with diligence and utmost customer care services.Members are proud to save with convenience using modern computer technology to receive seamless services not necessarily involving physical human persons.They have access to credit daily whenever the need arises.",
		"Membership is drawn from all regions, including the Diaspora making the best use of technology."
	],
	personData: [
		// {
		// 	name: "Henry Kiritu",
		// 	position: "Patron",
		// 	image: henry,
		// 	phoneNumber: "--",
		// 	emailAddress: "--",
		// 	bio: "Fr. Henry Kiritu is the patron of the Self Help Group as enshrined in the guideline, being the parish priest.The patron plays a crucial role in the management by	maintaining the Catholic faith tradition.In particular, he gives spiritual nourishment and guidance to ensure harmony in the entire governance ecosystem."

		// },
		{
			name: "James Makena Wanyangi",
			position: "Chairman",
			phoneNumber: "0722252068",
			emailAddress: "makenaj2@gmail.com",
			image: james,
			bio: "James chairs all the group meetings and represents the self-help group in all stairs of the governance hierarchy.He is an expert in governance and leadership with extensive experience in financial institutions, especially SACCOs.He holds a Bachelor's Degree in Public Administration & Governance, a Diploma in Social Development, and a Certificate in Animal Health.He is also an Accredited Professional Mediator.He practices both court- annexed and private mediation."
		},
		{
			name: "Kennedy Ngoro Mutugi",
			position: "Vice Chairman",
			phoneNumber: "--",
			emailAddress: "--",
			image: kennedy,
			bio: "He chairs the Capacity Building Committee that deals with members’ education and business development. Kennedy holds a Diploma in Computer Management, Service & Repair and a Certificate in Electronics Science. He currently operates a	service business with an electronics workshop."
		},
		{
			name: "Hannah Wanjiru Ng'ang'a",
			position: "Treasurer",
			phoneNumber: "--",
			emailAddress: "wanjiruhannah665@gmail.com",
			image: hannah,
			bio: "As the treasurer, she is the custodian of all group's assets. She also chairs the Finance & Budget Committee. She holds a Diploma in Clearing & Forwarding and has also done 10 Computer Packages."
		},
		{
			name: "Peter Mbugua Matiru",
			position: "Secretary",
			phoneNumber: "0727525648",
			emailAddress: "petrinel2012@gmail.com",
			image: peter,
			bio: "He is the secretary of the group and the Finance & Budget Committee as well as a member of the Risk, Audit & Compliance Committee. As the secretary, he writes and documents all the group's deliberations and resolutions. Peter holds a Bachelor's Degree in Philosophy and a Certificate in Teaching."
		},
		// {
		// 	name: "Esther Njeri Kinyuru",
		// 	position: "Secretary",
		// 	phoneNumber: "--",
		// 	emailAddress: "--",
		// 	image: esther,
		// 	bio: "As the secretary, Esther writes and documents all the group's deliberations and resolutions. She also chairs the Risk, Audit & Compliance. She holds a Diploma in Early Childhood Development. Currently a full-time ECD Teacher."
		// },
		{
			name: "Samuel Kanini Kamau",
			position: "Accountant",
			phoneNumber: "0720996911",
			emailAddress: "--",
			image: kanini,
			bio: "Samuel manages the group operations, including but not limited to financial management, group promotion and marketing and customer care service. He is also the liaison between members and the management committee. He holds a CPA-K."

		},
		{
			name: "Samuel Ngure Mburu",
			position: "Member",
			phoneNumber: "0722876992",
			emailAddress: "samulenguremburu@gmail.com",
			image: ngure,
			bio: "He is a member of the Capacity Building Committee and Finance & Budget. Professionally, Samuel is a seasonal artisan in Building and Construction."
		},
		{
			name: "John Maingi Kimani",
			position: "Member",
			phoneNumber: "0727900354",
			emailAddress: "--",
			image: john,
			bio: "He is a Capacity Building and Risk, Audit & Compliance Committee member. He operates a tailoring business and has attended several marketing seminars and workshops."
		}
	],

	homeIcons: [
		{
			title: "Vision",
			icon: vision,
			description: "To be the preferred community-based financial service provider"
		},
		{
			title: "Mission",
			icon: mission,
			description: "To empower the members economically through saving mobilization, providing affordable credit, and prudent investment by applying transformative management styles."
		},
		{
			title: "Core Values",
			icon: value,
			description: "Accountability, Honesty, Integrity, Transparency, and Teamwork."
		}
	],

	loanProducts: [
		{
			loanType: "Development Loan",
			icon: loan,
			description: "This is an all-purpose loan granted to all members individually or corporates to finance development projects."
		},
		{
			loanType: "Emergency Loan",
			icon: loan,
			description: "This is a loan that is granted to members to finance emergency needs."
		},
		{
			loanType: "Education Loan",
			icon: loan,
			description: "This is a loan that is granted to members to finance education needs."
		},
		{
			loanType: "Business Loan",
			icon: loan,
			description: "This loan product is designed to finance trading activities."
		},
		{
			loanType: "Agribusiness Loan",
			icon: loan,
			description: "This is a loan that is granted for agricultural purposes aimed at promoting agriculture for food security and improved livelihoods."
		},
		{
			loanType: "Church Loan",
			icon: loan,
			description: "This loan is granted to churches."
		},
	],

	membershipProducts: [
		{
			type: "Individuals Accounts",
			icon: individual,
			form: memberForm,
			description: "This membership is granted to individuals who are 18 years and above and are willing to save and borrow from the self-help group.",
			requirements: [
				"18 years & above.",
				"Photocopy of National ID/ Passport.",
				"Copy of KRA Pin Certificate.",
				"2 copies of next of kins National ID/ Passport.",
				"Registration fees."
			]
		},
		{
			type: "Corporate Accounts",
			icon: corporate,
			form: corporateForm,
			description: "This membership is granted to organizations, companies, and institutions that are willing to save and borrow from the self-help group.",
			requirements: [
				"Passport-size photo of signatories.",
				"Photocopy of all signatories’ National ID/ Passport.",
				"List of all group members.",
				"Group by-laws/ constitution.",
				"Copy of renewed registration certificate.",
				"Minutes of the last meeting prior to registration."
			]
		},
		{
			type: "Minor Accounts",
			icon: minor,
			form: minorForm,
			description: "This membership is granted to individuals who are below 18 years and are willing to save and borrow from the self-help group.",
			requirements: [
				"Passport-size photo of the minor and parent/ guardian.",
				"Photocopy of parent/ guardian’s National ID/ Passport.",
				"Photocopy of birth certificate/ birth notification/ baptism card."
			]
		}
	],

	paymentChannel: [
		{
			name: "GDC",
			icon: mode,
			account: "GDC2433",
			paybill: "639498"
		},
		{
			name: "Caritas MFB",
			icon: mode,
			account: "1002025000057",
			paybill: "899790",
		},
		{
			name: "KCB Bank",
			icon: mode,
			account: "1101918799",
			paybill: "522522"
		}
	],

	contact: [
		{
			icon: chat,
			title: "Group Email",
			text: "shg@githiga.caritasnairobishp.org"
		},
		{
			icon: location,
			title: "Physical Location",
			text: "Githiga, Kiambu"
		},
		{
			icon: phone,
			title: "Office Phone Number",
			text: "+254 110 273 227"
		}
	],

	heroImg: churchImage,
}

export default data;