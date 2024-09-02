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

interface MobileNavProps {
  isSignedIn: boolean;
  userEmail: string | null;
  onSignOut: () => void;
}

export default function MobileNav({
  isSignedIn,
  userEmail,
  onSignOut,
}: MobileNavProps) {
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
                <DrawerTitle>Menu</DrawerTitle>
                <DrawerDescription>Navigate through our site</DrawerDescription>
              </DrawerHeader>
              <DrawerFooter>
                {navLinks.map((link, idx) => (
                  <Button
                    key={idx}
                    variant="outline"
                    className="flex items-center text-sm font-medium transition-colors hover:underline"
                  >
                    <Link to={link.href}>{link.name}</Link>
                  </Button>
                ))}
                {isSignedIn ? (
                  <>
                    <span className="text-sm font-medium">{userEmail}</span>
                    <Button
                      className="flex items-center text-sm font-medium transition-colors hover:underline"
                      onClick={onSignOut}
                    >
                      Sign Out
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      className="flex items-center text-sm font-medium transition-colors hover:underline"
                      onClick={() => (window.location.href = "/sign-in")}
                    >
                      Sign In
                    </Button>
                    <Button
                      className="flex items-center text-sm font-medium transition-colors hover:underline"
                      onClick={() => (window.location.href = "/sign-up")}
                    >
                      Sign Up
                    </Button>
                  </>
                )}
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </nav>
  );
}
