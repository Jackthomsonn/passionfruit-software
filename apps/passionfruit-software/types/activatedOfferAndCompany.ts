import { ActivatedOffer } from "@prisma/client";

export type ActivatedOfferAndCompany = ActivatedOffer & {
	Offer: {
		Company: {
			id: number;
			createdAt: Date;
			updatedAt: Date;
			name: string;
			description: string;
		} | null;
	} & {
		id: number;
		createdAt: Date;
		updatedAt: Date;
		threshold: number;
		title: string;
		description: string;
		pointsBack: number;
		companyId: number | null;
		expirationDate: Date | null;
	};
};
