import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-white shadow-sm dark:bg-gray-950/90">
      <div className="mx-auto w-full max-w-7xl px-4">
        <div className="flex h-14 items-center justify-between">
          <Link to="#" className="flex items-center">
            <div className="h-6">Logo Here</div>
            <span className="sr-only">Acme Inc</span>
          </Link>
          <nav className="hidden gap-4 md:flex">
            <Link
              to="#"
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
              Sign in
            </Button>
            <Button size="sm">Sign up</Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
