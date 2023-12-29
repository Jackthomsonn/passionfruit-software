import { Icons } from "@/components/icons";
import { siteConfig } from "@/config/site";

export function MainNav() {
	return (
		<div className="flex justify-between w-screen">
			<Icons.logo className="h-6 w-6" />
			<span className="inline-block font-bold text-white">{siteConfig.name}</span>
		</div>
	);
}
