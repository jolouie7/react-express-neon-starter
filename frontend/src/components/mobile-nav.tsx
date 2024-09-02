import { LuAlignJustify } from "react-icons/lu";
import { Link } from "react-router-dom";

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "./ui/button";

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "#",
  },
  {
    name: "Services",
    href: "#",
  },
  {
    name: "Contact",
    href: "#",
  },
];

export default function MobileNav() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-white shadow-sm dark:bg-gray-950/90">
      <div className="mx-auto w-full max-w-7xl px-4">
        <div className="flex h-14 items-center justify-between">
          <Link to="/" className="flex items-center">
            <div className="h-6">Logo Here</div>
          </Link>

          <Drawer>
            <DrawerTrigger asChild className="hover:cursor-pointer">
              <LuAlignJustify />
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                <DrawerDescription>
                  This action cannot be undone.
                </DrawerDescription>
              </DrawerHeader>
              <DrawerFooter>
                {navLinks.map((link, idx) => (
                  <Button
                    key={idx}
                    variant="outline"
                    className="flex items-center text-sm font-medium transition-colors hover:underline"
                  >
                    {link.name}
                  </Button>
                ))}
                <Button
                  className="flex items-center text-sm font-medium transition-colors hover:underline"
                  onClick={() => (window.location.href = "/sign-in")}
                >
                  Sign In
                </Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </nav>
  );
}
