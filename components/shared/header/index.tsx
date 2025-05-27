import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import Menu from "./menu";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";
import { data } from "@/lib/data";
import Search from "./search";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="md:hidden">
            <MenuIcon className="h-5 w-5" />
          </Button>
          <Search />
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          {data.headerMenus.map((menu) => (
            <a
              key={menu.href}
              href={menu.href}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {menu.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
