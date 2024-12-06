import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Navigation() {
  return (
    <div className="flex justify-center h-full items-center">
      <nav className="p-2 grid grid-cols-3 rounded-md overflow-clip gap-2">
        <NavigationItem text="Type des images" href="/images-types" />
        <NavigationItem text="Optimisation HTML" href="/optimization-html" />
        <NavigationItem text="Picture Element" href="/picture-element" />
        <NavigationItem text="Utilisation SVG" href="/utilisation-svg" />
        <NavigationItem text="CDN vs Serveur" href="/cdn-vs-serveur" />
        <NavigationItem text="Algorithmes" href="#" />
        <NavigationItem text="Image NextJs" href="/next-image" />
      </nav>
    </div>
  );
}

type NavigationItemProps = {
  text: string;
  href: string;
};

function NavigationItem({ text, href }: NavigationItemProps) {
  return (
    <Button
      variant={"ghost"}
      asChild
      className="size-44 flex justify-center items-center ring-2 ring-zinc-900/30"
    >
      <Link href={href}>{text}</Link>
    </Button>
  );
}
