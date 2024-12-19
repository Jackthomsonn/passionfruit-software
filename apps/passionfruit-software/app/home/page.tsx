"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Toaster } from "@/components/ui/sonner";
import { Label } from "@radix-ui/react-label";
import { MonitorSmartphoneIcon, PackageCheckIcon, WebhookIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useFormStatus } from "react-dom";
import { TbBrandNextjs, TbLambda } from "react-icons/tb";
import { FaCcStripe } from "react-icons/fa";
import { SiApachekafka, SiGooglesheets, SiRedis, SiTailwindcss } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { IoLogoVercel } from "react-icons/io5";
import { RiOpenaiFill } from "react-icons/ri";
import { toast } from "sonner";
import { sendEmail } from "./sendEmail";

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
			className="inline-flex h-9 items-center justify-center rounded-md bg-violet-900 px-4 py-2 text-sm text-gray-50 shadow transition-colors hover:bg-violet-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 font-bold"
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
							<div className="flex flex-col justify-end items-start mt-16 md:mt-8">
								<h1 className="bg-white p-8 text-slate-900 lg:leading-tighter text-left text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
									Your Success, Our Mission
								</h1>
								<p className="bg-white p-8 text-slate-900 max-w-[700px] text-left md:text-xl font-bold">
									We build software that drives your business forward. Custom solutions tailored to your needs.
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
								<p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
									We provide a range of software development services to help
									your business succeed.
								</p>
							</div>
						</div>
						<div className="mx-auto grid gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3 items-stretch">
							<div className="grid gap-1 bg-blue-50 p-4 rounded-lg shadow-sm border-blue-100 border-2">
								<h3 className="text-lg font-bold text-blue-800"><WebhookIcon />API Development</h3>
								<p className="text-sm text-blue-800">
									We specialize in creating robust and scalable APIs tailored to
									your business needs. Our services include RESTful API design,
									GraphQL API implementation, and secure integration with
									existing systems. Elevate your applications with seamless data
									exchange and custom functionalities.
								</p>
							</div>
							<div className="grid gap-1 bg-yellow-50 p-4 rounded-lg shadow-sm border-yellow-100 border-2">
								<h3 className="text-lg font-bold text-yellow-800">
									<PackageCheckIcon />Infrastructure Management
								</h3>
								<p className="text-sm text-yellow-800">
									Ensure the reliability and efficiency of your digital
									infrastructure with our expert management services. We provide
									cloud infrastructure setup, ongoing maintenance, performance
									monitoring, and security enhancements. Trust us to keep your
									systems optimized and secure.
								</p>
							</div>
							<div className="grid gap-1 bg-purple-50 p-4 rounded-lg shadow-sm border-purple-100 border-2">
								<h3 className="text-lg font-bold text-purple-800">
									<MonitorSmartphoneIcon />Frontend Development
								</h3>
								<p className="text-sm text-purple-800">
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

				<section className="bg-violet-500 w-full py-12 md:py-24 lg:py-32" id="work">
					<div className="container grid items-center justify-center gap-4 px-4 md:px-6">
						<div>
							<div className="inline-block rounded-lg bg-yellow-200 text-yellow-900 font-bold px-3 py-1 text-sm mb-4">
								Our work
							</div>
							<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
								Some examples of our work
							</h2>
						</div>
						<p className="text-white md:text-xl/relaxed xl:text-xl/relaxed">
							We've worked with a range of clients to deliver custom software
							solutions. Here are some examples of our work.
						</p>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div className="space-y-4 bg-violet-600 p-4 rounded-lg">
								<Image alt="" src={"/im1.png"} width={700} height={700} className="rounded-lg bg-white" />
								<div className="space-y-4">
									<p className="max-w-[600px] text-white md:text-sm/relaxed xl:text-md/relaxed font-bold">
										GlyphGenie
									</p>
									<p className="max-w-[600px] text-white md:text-md/relaxed xl:text-md/relaxed">
										We worked with GlyphGenie to build a web application that creates images using AI. They wanted something clean and simple that provided their users an easy way to create content that would apply for their brand.
									</p>
									<div className="flex gap-4 items-center">
										<Link
											className="inline-flex h-9 items-center justify-center rounded-md bg-violet-900 px-4 py-2 text-sm text-gray-50 shadow transition-colors hover:bg-violet-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 font-bold"
											target="_blank"
											href={"https://glyphgenie.app"}
										>Visit site</Link>
										<TbBrandNextjs size={24} color="white" />
										<FaCcStripe size={24} color="white" />
										<SiTailwindcss size={24} color="white" />
										<BiLogoPostgresql size={24} color="white" />
										<RiOpenaiFill size={24} color="white" />
									</div>
								</div>
							</div>
							<div className="space-y-4 bg-violet-600 p-4 rounded-lg">
								<Image alt="" src={"/im2.png"} width={700} height={700} className="rounded-lg bg-white" />
								<div className="space-y-4">
									<p className="max-w-[600px] text-white md:text-sm/relaxed xl:text-md/relaxed font-bold">
										FoodForEveryoneUk
									</p>
									<p className="max-w-[600px] text-white md:text-md/relaxed xl:text-md/relaxed">
										FoodForEveryoneUk is a charity in the UK that helps feed the homeless. We built a website for them to help raise money, raise awareness of their cause and give them a way to tell their story.
									</p>
									<div className="flex gap-4 items-center">
										<Link
											className="inline-flex h-9 items-center justify-center rounded-md bg-violet-900 px-4 py-2 text-sm text-gray-50 shadow transition-colors hover:bg-violet-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 font-bold"
											target="_blank"
											href={"https://foodforeveryoneuk.org"}
										>Visit site</Link>
										<TbBrandNextjs size={24} color="white" />
										<SiTailwindcss size={24} color="white" />
										<SiGooglesheets size={24} color="white" />
										<IoLogoVercel size={24} color="white" />
									</div>
								</div>
							</div>
							<div className="space-y-4 bg-violet-600 p-4 rounded-lg">
								<Image alt="" src={"/requital.png"} width={700} height={700} className="rounded-lg bg-white" />
								<div className="space-y-4">
									<p className="max-w-[600px] text-white md:text-sm/relaxed xl:text-md/relaxed font-bold">
										Requital
									</p>
									<p className="max-w-[600px] text-white md:text-md/relaxed xl:text-md/relaxed">
										Requital rewards customers when shopping at their favourite stores. The service works off of open banking API's to allow customers to connect their bank accounts and match their transactions to rewards.
									</p>
									<div className="flex gap-4 items-center">
										<Link
											className="inline-flex h-9 items-center justify-center rounded-md bg-violet-900 px-4 py-2 text-sm text-gray-50 shadow transition-colors hover:bg-violet-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 font-bold"
											target="_blank"
											href={"https://requital-v10.vercel.app"}
										>Visit site</Link>
										<TbBrandNextjs size={24} color="white" />
										<SiTailwindcss size={24} color="white" />
										<SiApachekafka size={24} color="white" />
										<TbLambda size={24} color="white" />
										<SiRedis size={24} color="white" />
									</div>
								</div>
							</div>
							<div className="space-y-4 bg-violet-600 p-4 rounded-lg">
								<div className="space-y-4 flex flex-col justify-center items-center h-full text-center">
									<p className="max-w-[600px] text-white md:text-lg/relaxed xl:text-xl/relaxed font-bold">
										Your project here?
									</p>
									<p className="max-w-[600px] text-white md:text-lg/relaxed xl:text-xl/relaxed">
										If you are interested in working with PassionFruit Software to bring your idea to life, get in touch today.
									</p>
								</div>
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
								<p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
									We are a small team of passionate software engineers who love
									building great products. We believe in small iterative
									releases and continuous improvement to get you ahead of the
									competition.
								</p>
							</div>
						</div>
						<div className="mx-auto grid items-start gap-12 sm:max-w-4xl lg:max-w-5xl mt-16 grid-cols-1 md:grid-cols-3">
							<div className="grid gap-1">
								<Image
									alt="Jack Thomson"
									width={100}
									height={100}
									className="mx-auto aspect-[1/1] overflow-hidden rounded-full object-cover"
									src="/jack.jpg?height=100&width=100"
								/>

								<h3 className="text-lg font-bold text-center">Jack Thomson</h3>
								<p className="text-sm text-gray-500 text-center">
									Software Engineer
								</p>
							</div>
							<div className="grid gap-1">
								<Image
									alt="Katie Smaldon"
									width={100}
									height={100}
									className="mx-auto aspect-[1/1] overflow-hidden rounded-full object-cover"
									src="/katie.jpg?height=100&width=100"
								/>

								<h3 className="text-lg font-bold text-center">Katie Smaldon</h3>
								<p className="text-sm text-gray-500 text-center">
									Head of accounts
								</p>
							</div>
							<div className="grid gap-1">
								<Image
									alt="Bambi Thomson"
									width={100}
									height={100}
									className="mx-auto aspect-[1/1] overflow-hidden rounded-full object-cover"
									src="/bambi.jpeg?height=100&width=100"
								/>

								<h3 className="text-lg font-bold text-center">Bambi Thomson</h3>
								<p className="text-sm text-gray-500 text-center">
									Head of cuteness
								</p>
							</div>
						</div>
					</div>
				</section>

				<section className="w-full py-12 md:py-24 lg:py-32" id="contact">
					<div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
						<div className="space-y-2">
							<div className="inline-block rounded-lg bg-yellow-200 text-yellow-900 font-bold px-3 py-1 text-sm mb-4">
								Lets Talk
							</div>
							<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-violet-500">
								Get in touch
							</h2>
						</div>
						<p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed xl:text-xl/relaxed">
							Ready to get started? Get in touch today and let's create
							something great together.
						</p>
						<div className="mx-auto w-full max-w-sm space-y-2">
							<form className="flex space-x-2" method="POST" action={(formData: FormData) => sendEmail(formData)}>
								<Label htmlFor="email" />
								<Input
									name="email"
									id="email"
									className="max-w-lg flex-1"
									placeholder="Enter your email"
									type="email"
									required={true}
								/>
								<Submit />
							</form>
							<p className="text-xs text-gray-500">
								We respect your privacy and never share your details.
							</p>
						</div>
					</div>
				</section>

				<Toaster />
			</main>

			<footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
				<p className="text-xs text-gray-500">
					© {new Date().getFullYear()} PassionFruit Software. All rights reserved.
				</p>
				<nav className="sm:ml-auto flex gap-4 sm:gap-6"></nav>
			</footer>
		</div>
	);
}
