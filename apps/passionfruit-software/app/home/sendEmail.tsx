"use server";

import { createTransport } from "nodemailer";
import { z } from "zod";
import { headers } from "next/headers";

export async function sendEmail(formData: FormData) {
	const email = formData.get("email") as string;

	// biome-ignore lint/complexity/noForEach: <explanation>
	headers().forEach((h) => {
		console.log(h);
	});

	const schema = z.object({
		email: z.string().email(),
	});

	schema.parse({ email });

	const transporter = createTransport({
		service: "gmail",
		host: "smtp.gmail.com",
		port: 587,
		secure: false,
		auth: {
			user: "hello@jackthomson.co.uk",
			pass: process.env.EMAIL_PASS,
		},
	});

	console.log(transporter);

	// await transporter.sendMail({
	// 	from: email,
	// 	to: "hello@jackthomson.co.uk",
	// 	subject: "PassionFruit Enquiry",
	// 	text: `Email: ${email} would like to get in touch regarding Passionfruit Software Services`,
	// });
}
