"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useFormStatus } from "react-dom";
import { sendEmail } from "./sendEmail";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { Label } from "@radix-ui/react-label";

const Submit = () => {
	const status = useFormStatus();

	if (!status.pending) {
		toast("Your email has been recieved", {
			description: "We'll be in touch within the next 24 hours",
			position: "bottom-center",
			action: {
				label: "Close",
				onClick: () => toast.dismiss(),
			},
			actionButtonStyle: {
				background: "#4C1D95",
			},
		});
	}

	return (
		<Button
			className="inline-flex h-9 items-center justify-center rounded-md bg-violet-900 px-4 py-2 text-sm text-gray-50 shadow transition-colors hover:bg-violet-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-violet-50 dark:text-gray-900 dark:hover:bg-violet-50/90 dark:focus-visible:ring-gray-300 font-bold"
			type="submit"
			disabled={status.pending}
		>
			{status.pending ? "Sending" : "Send"}
		</Button>
	);
};

export default function IndexPage() {
	return (
		<div className="flex flex-col min-h-screen">
			<main className="flex-1">
				<section className="w-full md:pt-24 lg:pt-32 bg-slate-900 bg-[url('/BG.svg')] bg-center bg-cover bg-no-repeat pb-24">
					<div className="px-4 md:px-6 space-y-10 xl:space-y-16">
						<div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
							<div className="flex flex-col justify-end items-start mt-8">
								<h1 className="bg-white p-8 text-slate-900 lg:leading-tighter text-left text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
									Passionate For Your Success
								</h1>
								<p className="bg-white p-8 text-slate-900 max-w-[700px] text-left md:text-xl font-bold">
									We build software that drives your business forward. Custom
									solutions tailored to your needs.
								</p>
							</div>
						</div>
					</div>
				</section>

				<section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
					<div className="container space-y-12 px-4 md:px-6">
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<div className="space-y-2">
								<div className="inline-block rounded-lg bg-yellow-200 text-yellow-900 font-bold px-3 py-1 text-sm mb-4">
									Our Services
								</div>
								<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-violet-500">
									What We Offer
								</h2>
								<p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 font-bold">
									We provide a range of software development services to help
									your business succeed.
								</p>
							</div>
						</div>
						<div className="mx-auto grid gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3 items-stretch">
							<div className="grid gap-1 bg-blue-50 p-4 rounded-lg shadow-sm border-blue-100 border-2">
								<h3 className="text-lg font-bold">Custom API Development</h3>
								<p className="text-sm text-gray-500 dark:text-gray-400">
									We specialize in creating robust and scalable APIs tailored to
									your business needs. Our services include RESTful API design,
									GraphQL API implementation, and secure integration with
									existing systems. Elevate your applications with seamless data
									exchange and custom functionalities.
								</p>
							</div>
							<div className="grid gap-1 bg-yellow-50 p-4 rounded-lg shadow-sm border-yellow-100 border-2">
								<h3 className="text-lg font-bold">
									Comprehensive Infrastructure Management
								</h3>
								<p className="text-sm text-gray-500 dark:text-gray-400">
									Ensure the reliability and efficiency of your digital
									infrastructure with our expert management services. We provide
									cloud infrastructure setup, ongoing maintenance, performance
									monitoring, and security enhancements. Trust us to keep your
									systems optimized and secure.
								</p>
							</div>
							<div className="grid gap-1 bg-purple-50 p-4 rounded-lg shadow-sm border-purple-100 border-2">
								<h3 className="text-lg font-bold">
									Innovative Frontend Development
								</h3>
								<p className="text-sm text-gray-500 dark:text-gray-400">
									Crafting visually appealing and user-friendly interfaces for
									web and mobile applications. Our expertise includes responsive
									web design, mobile app development for iOS and Android, and
									creating interactive user experiences with the latest frontend
									technologies.
								</p>
							</div>
						</div>
					</div>
				</section>

				<section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 border-y">
					<div className="container px-4 md:px-6">
						<div className="flex flex-col items-center justify-center space-y-4 text-center">
							<div className="space-y-2">
								<div className="inline-block rounded-lg bg-yellow-200 text-yellow-900 font-bold px-3 py-1 text-sm mb-4">
									The Team
								</div>
								<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-violet-500">
									Meet The PassionFruit Team
								</h2>
								<p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
									We are a small team of passionate software engineers who love
									building great products. We believe in small iterative
									releases and continuous improvement to get you ahead of the
									competition.
								</p>
							</div>
						</div>
						<div className="mx-auto grid items-start gap-8 sm:max-w-4xl md:gap-12 lg:max-w-5xl mt-16">
							<div className="grid gap-1">
								<Image
									alt="Jack Thomson"
									width={100}
									height={100}
									className="mx-auto aspect-[1/1] overflow-hidden rounded-full object-cover"
									src="/jack.jpg?height=100&width=100"
								/>

								<h3 className="text-lg font-bold text-center">Jack Thomson</h3>
								<p className="text-sm text-gray-500 dark:text-gray-400 text-center">
									CEO & Lead Engineer
								</p>
							</div>
						</div>
					</div>
				</section>

				<section className="w-full py-12 md:py-24 lg:py-32" id="contact">
					<div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
						<h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-violet-500">
							Get in touch
						</h2>
						<p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed xl:text-xl/relaxed dark:text-gray-400">
							Ready to get started? Get in touch today and let's create
							something great together.
						</p>
						<div className="mx-auto w-full max-w-sm space-y-2">
							<form className="flex space-x-2" method="POST" action={sendEmail}>
								<Label htmlFor="email" />
								<Input
									name="email"
									id="email"
									className="max-w-lg flex-1"
									placeholder="Enter your email"
									type="email"
								/>
								<Submit />
							</form>
							<p className="text-xs text-gray-500 dark:text-gray-400">
								We respect your privacy and never share your details.
							</p>
						</div>
					</div>
				</section>

				<Toaster />
			</main>

			<footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
				<p className="text-xs text-gray-500 dark:text-gray-400">
					© 2023 PassionFruit Software. All rights reserved.
				</p>
				<nav className="sm:ml-auto flex gap-4 sm:gap-6"></nav>
			</footer>
		</div>
	);
}
