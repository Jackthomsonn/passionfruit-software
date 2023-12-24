"use server";

import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { headers } from "next/headers";
import { createTransport } from "nodemailer";
import { z } from "zod";

export async function sendEmail(formData: FormData) {
	const ratelimit = new Ratelimit({
		redis: Redis.fromEnv(),
		limiter: Ratelimit.slidingWindow(1, "60 s"),
		analytics: true,
		prefix: "@upstash/ratelimit",
	});

	const identifier = headers().get("x-real-ip") as string;

	const { success } = await ratelimit.limit(identifier);

	if (!success) return;

	const email = formData.get("email") as string;

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

	await transporter.sendMail({
		from: email,
		to: "hello@jackthomson.co.uk",
		subject: "PassionFruit Enquiry",
		text: `Email: ${email} would like to get in touch regarding Passionfruit Software Services`,
	});
}
