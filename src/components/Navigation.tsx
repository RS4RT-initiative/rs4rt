import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/rs4rt-logo.svg";

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link to="/" className="flex items-center">
          {/* Crop the empty top/bottom of the logo by using overflow-hidden on a sized box and scaling the image */}
          <div className="relative h-16 w-56 overflow-hidden">
            <img
              src={logo}
              alt="RS4RT - Resource Sharing for Radiotherapy"
              className="absolute left-1/2 top-1/2 h-[180%] w-auto max-w-none -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        </Link>

        <div className="flex items-center gap-2 sm:gap-4">
          <Link to="/">
            <Button
              variant={location.pathname === "/" ? "default" : "ghost"}
              className="font-medium"
            >
              Home
            </Button>
          </Link>
          <Link to="/about">
            <Button
              variant={location.pathname === "/about" ? "default" : "ghost"}
              className="font-medium"
            >
              About
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
