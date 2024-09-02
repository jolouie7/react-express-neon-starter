import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useMediaQuery } from "@/hooks/use-media-query";
import MobileNav from "./mobile-nav";

export default function Navbar() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <>
      {isMobile ? (
        <MobileNav />
      ) : (
        <nav className="fixed inset-x-0 top-0 z-50 bg-white shadow-sm dark:bg-gray-950/90">
          <div className="mx-auto w-full max-w-7xl px-4">
            <div className="flex h-14 items-center justify-between">
              <Link to="/" className="flex items-center">
                <div className="h-6">Logo Here</div>
              </Link>
              <nav className="hidden gap-4 md:flex">
                <Link
                  to="/home"
                  className="flex items-center text-sm font-medium transition-colors hover:underline"
                >
                  Home
                </Link>
                <Link
                  to="#"
                  className="flex items-center text-sm font-medium transition-colors hover:underline"
                >
                  About
                </Link>
                <Link
                  to="#"
                  className="flex items-center text-sm font-medium transition-colors hover:underline"
                >
                  Services
                </Link>
                <Link
                  to="#"
                  className="flex items-center text-sm font-medium transition-colors hover:underline"
                >
                  Contact
                </Link>
              </nav>
              <div className="flex items-center gap-4">
                <Button variant="outline" size="sm">
                  <Link to="/sign-in">Sign in</Link>
                </Button>
                <Button size="sm">
                  <Link to="/sign-up">Sign up</Link>
                </Button>
              </div>
            </div>
          </div>
        </nav>
      )}
    </>
  );
}
