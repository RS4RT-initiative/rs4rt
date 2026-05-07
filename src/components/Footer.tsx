import { Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/rs4rt-logo.svg";

const SUBMIT_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfPlaceholderSubmitResource/viewform";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-border bg-secondary/30">
      {/* Submit a Resource highlight band */}
      <div className="border-b border-border bg-secondary">
        <div className="container mx-auto px-4 py-10">
          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
            <div>
              <h3 className="text-xl font-bold text-foreground md:text-2xl">
                Are we missing something?
              </h3>
              <p className="text-sm text-muted-foreground md:text-base">
                Suggest an initiative, dataset, or resource — help grow RS4RT.
              </p>
            </div>
            <Button
              size="lg"
              asChild
              className="gap-2 bg-primary text-primary-foreground hover:opacity-90 shadow-[var(--shadow-hover)]"
            >
              <a href={SUBMIT_URL} target="_blank" rel="noopener noreferrer">
                <Send className="h-5 w-5" />
                Submit a Resource
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <img src={logo} alt="RS4RT" className="h-8 w-auto" />

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Mail className="h-4 w-4" />
            <a
              href="mailto:contact@radtherapy.org"
              className="transition-colors hover:text-primary"
            >
              contact@radtherapy.org
            </a>
          </div>

          <p className="text-sm text-muted-foreground">
            © 2025 RS4RT. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
