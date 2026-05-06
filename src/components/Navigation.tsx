import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import logo from "@/assets/rs4rt-logo.svg";

const SUBMIT_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfPlaceholderSubmitResource/viewform";

const Navigation = () => {
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="RS4RT - Resource Sharing for Radiotherapy" className="h-10 w-auto" />
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
          <Button
            asChild
            className="font-semibold gap-2 bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 shadow-[var(--shadow-card)]"
          >
            <a href={SUBMIT_URL} target="_blank" rel="noopener noreferrer">
              <Send className="h-4 w-4" />
              <span className="hidden sm:inline">Submit a Resource</span>
              <span className="sm:hidden">Submit</span>
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
