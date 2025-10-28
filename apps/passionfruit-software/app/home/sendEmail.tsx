"use server";

import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { headers } from "next/headers";
import { createTransport } from "nodemailer";
import { z } from "zod";

export async function sendEmail(formData: FormData) {
	const website = formData.get("website");
	if (website) return;

	const ratelimit = new Ratelimit({
		redis: Redis.fromEnv(),
		limiter: Ratelimit.slidingWindow(1, "60 s"),
	});

	const identifier = headers().get("x-real-ip") || "unknown";
	const { success } = await ratelimit.limit(identifier);
	if (!success) return;

	const token = formData.get("cf-turnstile-response");
	if (!token) return;

	const verify = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
		method: "POST",
		body: new URLSearchParams({
			secret: process.env.TURNSTILE_SECRET_KEY!,
			response: token.toString(),
			remoteip: identifier,
		}),
	});
	const turnstile = await verify.json();
	if (!turnstile.success) return;

	const email = formData.get("email") as string;

	try {
		z.string().email().parse(email);
		const transporter = createTransport({
			service: "gmail",
			auth: {
				user: "hello@jackthomson.co.uk",
				pass: process.env.EMAIL_PASS,
			},
		});

		await transporter.sendMail({
			from: email,
			to: "hello@jackthomson.co.uk",
			subject: "PassionFruit Enquiry",
			text: `Email: ${email} wants to get in touch.`,
		});
	} catch {
		return;
	}
}
