import Link from "next/link";

import { Icons } from "@/components/icons";
import { siteConfig } from "@/config/site";

export function MainNav() {
	return (
		<div className="flex justify-between w-screen">
			<Link href="#" className="flex items-center">
				<Icons.logo className="h-6 w-6" />
				<span className="inline-block font-bold text-white">{siteConfig.name}</span>
			</Link>
		</div>
	);
}
