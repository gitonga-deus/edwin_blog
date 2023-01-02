// Members
import henry from "../../assets/team/placeholder_male.jpg"
import esther from "../../assets/team/placeholder_female.jpg"
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

// Product Icons
import loan from "../../assets/product/loan.svg"
import mode from "../../assets/product/channel.svg"
import individual from "../../assets/product/individuals.svg"
import corporate from "../../assets/product/corporate.svg"
import minor from "../../assets/product/minor.svg"


const data = {
	homeData: [
		"St. John Evangelist Githiga Catholic Church Self-Help Group was established in 1993 in Githiga Parish of the Archdiocese of Nairobi.It is an inclusive group that does not discriminate against anyone due to age, religion, social status, or otherwise.It is among many others that operate within Parishes in the Archdiocese of Nairobi.",
		"Like the rest, it was established to economically empower individuals and communities through financial inclusion.Its most important activities include savings mobilization and accessing affordable credit for its members.To date, the group has a membership of 1006 members whose deposits have accumulated to Ksh 45m",
		"The management is committed to serving its members with diligence and utmost customer care services.Members are proud to save with convenience using modern computer technology to receive seamless services not necessarily involving physical human persons.They have access to credit daily whenever the need arises.",
		"Membership is drawn from all regions, including the Diaspora making the best use of technology."
	],
	personData: [
		{
			name: "Henry Kiritu",
			position: "Patron",
			image: henry,
			phoneNumber: "--",
			emailAddress: "--",
			bio: "Fr. Henry Kiritu is the patron of the Self Help Group as enshrined in the guideline, being the parish priest.The patron plays a crucial role in the management by	maintaining the Catholic faith tradition.In particular, he gives spiritual nourishment and guidance to ensure harmony in the entire governance ecosystem."

		},
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
			name: "Esther Njeri Kinyuru",
			position: "Secretary",
			phoneNumber: "--",
			emailAddress: "--",
			image: esther,
			bio: "As the secretary, Esther writes and documents all the group's deliberations and resolutions. She also chairs the Risk, Audit & Compliance. She holds a Diploma in Early Childhood Development. Currently a full-time ECD Teacher."
		},
		{
			name: "Samuel Kanini Kamau",
			position: "Accountant",
			phoneNumber: "0720996911",
			emailAddress: "--",
			image: kanini,
			bio: "Samuel manages the group operations, including but not limited to financial management, group promotion and marketing and customer care service. He is also the liaison between members and the management committee. He holds a CPA-K."

		},
		{
			name: "Peter Mbugua Matiru",
			position: "Member",
			phoneNumber: "0727525648",
			emailAddress: "petrinel2012@gmail.com",
			image: peter,
			bio: "He is the secretary of the Finance & Budget Committee as well as a member of the Risk, Audit & Compliance Committee. Peter holds a Bachelor's Degree in Philosophy and a Certificate in Teaching."
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
			description: "This is an all-purpose loan granted to all members individually or corporates to finance development projects"
		},
		{
			loanType: "Emergency Loan",
			icon: loan,
			description: "This is a loan that is granted to members to finance emergency needs e.g sickness, natural disasters, or accidents"
		},
		{
			loanType: "Education Loan",
			icon: loan,
			description: "This is a loan that is granted to members to finance education needs e.g tuition fees, books and related expenses"
		},
		{
			loanType: "Business Loan",
			icon: loan,
			description: "This loan product is designed to finance trading activities. The loan shall be advanced to ongoing businesses only"
		},
		{
			loanType: "Agribusiness Loan",
			icon: loan,
			description: "This is a loan that is granted for agricultural purposes aimed at promoting agriculture for food security, improved livelihoods."
		},
		{
			loanType: "Church Loan",
			icon: loan,
			description: "This loan is granted to Catholic Churches only through the Parish pastoral."
		},
	],

	membershipProducts: [
		{
			type: "Individuals Accounts",
			icon: individual,
			description: "This membership is granted to individuals who are 18 years and above and are willing to save and borrow from the self-help group."
		},
		{
			type: "Corporate Accounts",
			icon: corporate,
			description: "This membership is granted to organizations, companies, and institutions that are willing to save and borrow from the self-help group."
		},
		{
			type: "Minor Accounts",
			icon: minor,
			description: "This membership is granted to individuals who are below 18 years and are willing to save and borrow from the self-help group."
		}
	],

	paymentChannel: [
		{
			id: 1,
			name: "GDC",
			icon: mode,
			accountNumber: "120008000700"
		},
		{
			id: 2,
			name: "Caritas MFB",
			icon: mode,
			accountNumber: "1002025000057"
		},
		{
			id: 3,
			name: "KCB",
			icon: mode,
			accountNumber: "1101918799"
		}
	],

	emailAddress: "shg@githiga.caritasnairobishp.org",
	phoneNumber: "+254 710 273 227",
	address: "P.O. Box 1107 - 00900",
	location: "Kiambu",

	membershipRequirements: [
		"National I.D Card Copy",
		"A copy of KRA PIN",
		"A copy of Next of Kin National ID",
		"Birth Certificate / Baptism Card for Minor Accounts."
	]
}

export default data;