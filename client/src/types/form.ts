export interface typeContact {
	fname: string;
	lname: string;
	email: string;
	subject: string;

	companyName: string;

	universityName: string;
	contactPerson: string;
	contactEmail: string;
	contactPhoneNumber: string;

	sponsorshipPackage: string;

	boothPackage: string;
	boothSize: string;

	websiteLink: string;
	teamMember1: string;
	teamMember2: string;
	teamMember3: string;
	teamMember4: string;

	message: string;
	// policy: boolean;
}

export interface typeSignup {
	email: string;
	password: string;
}

export interface typeLogin {
	email: string;
	password: string;
}

export interface typeVerify {
	email: string;
	otp: string;
}
