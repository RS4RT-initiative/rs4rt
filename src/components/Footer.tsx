import { Mail, Radiation, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-border bg-secondary/30">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
              <Radiation className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-sm font-semibold text-foreground">RS4RT</span>
          </div>
          
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Mail className="h-4 w-4" />
              <a 
                href="mailto:contact@radtherapy.org" 
                className="transition-colors hover:text-primary"
              >
                contact@radtherapy.org
              </a>
            </div>
            
            <Button 
              variant="outline" 
              size="sm"
              className="gap-2"
              asChild
            >
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Send className="h-4 w-4" />
                Submit a Resource
              </a>
            </Button>
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
