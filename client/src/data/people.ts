import image from "@src/assets/images";

const people = [
	{
		name: "Moses Kemibaro",
		bio: [
			"Moses Kemibaro is the Founder & CEO of Dotsavvy, Kenya's first digital business agency which conceptualizes, develops, delivers, and manages high-performance business results for its clients via digital channels. Dotsavvy has been operational for 20+ years spearheading next practices across a broad spectrum of digital offerings.",
			"Previously, Moses was the Regional Manager for Opera Ads in East Africa, the Commercial Manager for East Africa at the Perform Group, now known as DAZN and Perform Content, as well as the Sales Director at InMobi for Africa where he led sales in Kenya, Egypt, Nigeria, and Ghana. He was also the Founding Regional Manager at Dealfish East Africa (formerly known as OLX Kenya), Kenya's leading digital classifieds platform, now known as Jiji Kenya.",
			"Moses is a multiple award-winning Technology, Digital Media, and Digital Marketing Blogger and Industry Analyst at mosesKemibaro.com where he rants and raves about all things digital in Kenya and Africa. He is also one of the region's leading digital marketing trainers and a regular speaker and panelist in industry events and also contributes commentaries to leading media. Lastly, Moses is an avid AI practitioner and enthusiast who developed the acronym 'FESSBeC' that captures the 6 key benefits of AI in work, life, and everything in between.",
		],
		occupation: { position: "CEO", pow: "Dotsavvy", image: image.companies.dotsavvy },
		image: image.people.moderators.mosesKimebaro,
		contact: {
			email: "moses@dotsavvyafrica.com",
			phone: ["+254722711907", "+254736796505"],
			socials: [
				{ label: "facebook", link: "https://www.facebook.com/dotsavvy" },
				{ label: "twitter", link: "https://twitter.com/dotsavvy" },
				{ label: "instagram", link: "https://www.instagram.com/dotsavvy" },
			],
		},
		category: ["moderator"],
	},
	{
		name: "Michael Zimba",
		bio: [
			"Michael Zimba is the Executive Dean of the Malawi Institute of Technology, Lead of the Center for Artificial Intelligence and STEAM (CAIST) and Associate Professor of Artificial Intelligence and Data Science at the Malawi University of Science and Technology.",
			"He is an Oxford University Press' Unit Editor for AI in Society Series. He is an EDSAFE AI Catalyst Fellow on Safe AI in Education under the USA's EDSAFE AI Alliance. He is an African Union Commission's Contributing Expert to STISA, and African Union High Level Panel on Emerging Technologies' (APET's) Contributing Expert on AI.",
			'Michael co-authored the AU Technical Report on AI titled "AI for Africa: Artificial Intelligence for Africa\'s Socioeconomic Development". He is also in the AU-AI-Strategy Team, developing the AU Continental AI Strategy.',
		],
		occupation: {
			position: "Executive Dean",
			pow: "Malawi Institute of Technology",
			image: image.companies.must,
		},
		image: image.people.speakers.michaelZimba,
		contact: {
			email: "mzimba@must.ac.mw",
			phone: ["+265888627267"],
			socials: [{ label: "linkedin", link: "https://www.linkedin.com/in/michael-zimba-611b02218" }],
		},
		category: ["speaker"],
	},
	{
		name: "George Ogada",
		bio: [
			"George Ogada specializes in Planning, Program Management, and Providing Crucial Support to startups and innovation initiatives. With a wealth of experience in the FMCG planning space, George has developed the skills needed to navigate the intricate landscape of program management. His skills extend beyond traditional planning, encompassing a keen focus on startup ecosystems and fostering innovation.",
			"George's expertise lies in developing and implementing strategies that drive both operational efficiency and creative problem-solving. His commitment to the realms of program management, coupled with a passion for people, supporting startups and fostering innovation, positions him as a valuable asset capable of steering projects toward success in dynamic and evolving environments.",
		],
		occupation: {
			position: "Programme Associate",
			pow: "HiiL Innovation Hub, EA",
			image: image.companies.hiil,
		},
		image: image.people.moderators.georgeOgada,
		contact: {
			email: "george.ogada@hill.org",
			phone: ["+254706298677"],
			socials: [{ label: "linkedin", link: "https://www.linkedin.com/in/georgeogada" }],
		},
		category: ["speaker", "moderator"],
	},
	{
		name: "Michael Michie",
		bio: [
			"Michael Michie is a thought leader in the technology industry with a decade of experience. The co-founder of Everse Technology Africa, an AI Start-up focused on AI, data protection and privacy. His professional experience includes serving as the CTO of bluBeetle AI. Prior to bluBeetle AI he served as CTO of Solv Kenya, a B2B marketplace owned by SC UK Holdings Ltd. Prior to Solv, Michael was the Head of Information Technology and Innovation at TripleOKLaw, where he successfully transformed the law firm through digitalization and implementation of innovative legal tools.",
			"Michael has an impressive track record in the industry, having risen from a management trainee at M Oriental Bank to become the Head of Information Technology and later, the Chief Information Security Officer. In 2019, he was awarded the Business Daily Top 40 under 40 Men award for his role in driving digital transformation within the legal industry, making him the youngest recipient of the award that year. A member of the Technical Working Group on Development of Media Guidelines on the Use of Artificial Intelligence and Social Media by the Media Council of Kenya and other working groups around AI focused on Africa.",
			"An advocate for dyslexic thinking and mental health in the workplace, Michael is also a published academic writer, host of the podcast Mind and Machine Africa, and commentator in the technology space. A Co-founder of the Non-Profit Nia za Akili Zetu Foundation, working on AI in Africa by Africa for Africa and preventing AI hegemony. He sits on several advisory boards, including the Advisory Council for FTLD registry services, the CIO East Africa Fintech Summit Advisory Board, and the CISO Alliances Nairobi Chapter Content Committee. Aside from his professional pursuits, Michael's passions include hyperrealism art, reading philosophy, training dogs, and game design and development.",
		],
		occupation: {
			position: "Co-founder",
			pow: "Everse Technology",
			image: image.companies.everseTech,
		},
		image: image.people.speakers.michaelMichie,
		contact: {
			email: "mmichie@eversetech.com",
			phone: ["+254706298677"],
			socials: [{ label: "linkedin", link: "https://www.linkedin.com/in/michael-michie-10a29664" }],
		},
		category: ["speaker"],
	},
	{
		name: "Joel Onditi",
		bio: [
			"Mr. Onditi is a Kenyan American and the CEO and President of Pathways Technologies LTD, a US and Africa innovation and technology company with offices in Denver, Colorado and Nairobi, Kenya. He is a professor of practice at The University of Denver, where he teaches Data Analytics and Emerging Trends in Technology. He also sits on the advisory board of the Analytics Department for the Daniels College of Business, University of Denver.",
			"He has a bachelor's degree in computer science from Jomo Kenyatta University of Agriculture and Technology, and a master's degree in data Analytics and AI from The University of Denver. He also has a post-graduate certificate in Corporate Innovation from Massachusetts Institute of Technology (MIT) as well as an executive certificate in Public Policy with a focus on Governance in Technology Innovation from Harvard Kennedy School.",
			"Mr. Onditi has over 15 years of experience delivering innovative technology and digital transformation solutions in Fintech, Manufacturing, Retail, E-commerce, Government and Not-For-Profit sectors. His experience spans the US, Africa, Canada, and Europe working with organizations in digital transformation initiatives. He has also been a contractor for the US government over the last 7 years, where his assignments include advising on emerging technology projects including open banking, data privacy and protection, as well as cloud use for government. He started his career building banking software solutions and later moved to work for one of the largest banks in the region.",
			"Beyond his passion for technology and innovation, he is dedicated to empowering youth with modern data and tech employable skills. His commitment has led him to forge partnerships and work closely with the Kenyan government and the US Embassy, which has been instrumental in actualizing the Silicon Savanna initiative.",
		],
		occupation: {
			position: "CEO",
			pow: "Pathways Technologies",
			image: image.companies.pathawaysTech,
		},
		image: image.people.speakers.joelOnditi,
		contact: {
			email: "joel.onditi@pathwaystechnologies.com",
			phone: ["+254722540328", "+17204688895"],
			socials: [
				{ label: "facebook", link: "https://www.facebook.com/PathwaysKe" },
				{ label: "twitter", link: "https://twitter.com/PathwaysInt" },
				{ label: "linkedin", link: "https://www.linkedin.com/company/pathwaystechnologies" },
			],
		},
		category: ["speaker"],
	},
	{
		name: "Laban Cliff Onserio",
		bio: [
			"Laban-Cliff Onserio is the First Chief of Staff in the Office of the Group CEO at Standard Media Group in Kenya. He previously worked at Kenya's Office of the President in the President's Delivery Unit; a government project execution arm supported by the Former British Prime Minister Tony Blair's Institute. His career highlights include working with General Electric (GE) Africa as a management trainee to help the conglomerate in setting up shop in Nairobi as its Africa headquarters.",
			"Laban Cliff is also a News Anchor on KTN News and KTN Home. He has previously interviewed Africa's business and government leaders on CNBC Africa and Nation Media Group, East Africa's Largest integrated media house. In 2012, He was named Africa's Best Newcomer in business journalism at the Diageo Africa Awards held in London.",
			"Out of work he enjoys motorsports and is a rally co-driver in the World Rally Championship and assists in handling communications for the East African Safari Classic Rally. He is the East Africa Regional Director of the Chief of Staff Association, UK the World's representative body of Chiefs of Staff in government, private sector, and military circles.",
		],
		occupation: {
			position: "Emcee",
			pow: "AI Platform",
			image: null,
		},
		image: image.people.moderators.labanCliff,
		contact: {
			email: "labancliff@gmail.com",
			phone: [],
			socials: [],
		},
		category: ["speaker"],
	},
	{
		name: "Benaiah Wepundi",
		bio: [
			"Benaiah Wepundi is a serial entreprenuer with a focus on fintech and AI. He is currently the Founder and Chief Maverick (CEO) at PaydHQ, building a virtual financial assistant for gig workers in Africa. He is also the Chief Operating Officer at CyphonAI, a US-based AI automation and consultancy agency and a subsidiary of Precision Consulting, a statistical consulting and academic research firm featured in inc 500 with over 16 years experience in the edtech space, where he serves as the Chief Technology Officer. Benaiah is passionate about building African solutions to perennial global problems.",
		],
		occupation: {
			position: "CEO",
			pow: "PaydHQ",
			image: null,
		},
		image: image.people.speakers.benaiahWepundi,
		contact: {
			email: "ben@paydhq.com",
			phone: [],
			socials: [],
		},
		category: ["speaker"],
	},
];

export default people;
