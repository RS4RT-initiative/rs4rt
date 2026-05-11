import { Mail, Send, Code } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/rs4rt-logo.svg";

const SUBMIT_RESOURCE_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfPlaceholderSubmitResource/viewform";
const SUBMIT_OSS_PATH = "/submission-guidelines";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-border bg-secondary/40">
      {/* Contribute section */}
      <div className="border-b border-border bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-12">
          <div className="mx-auto max-w-4xl text-center">
            <h3 className="text-2xl font-bold md:text-3xl">
              Contribute to the platform
            </h3>
            <p className="mt-2 text-primary-foreground/80 md:text-lg">
              Help grow RS4RT — share initiatives or open-source software with the community.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-lg bg-background/10 p-6 text-left backdrop-blur-sm">
                <h4 className="flex items-center gap-2 text-lg font-semibold">
                  <Send className="h-5 w-5" /> Submit a resource
                </h4>
                <p className="mt-2 text-sm text-primary-foreground/80">
                  Suggest an initiative, dataset, or resource for the website.
                </p>
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="mt-4 w-full font-semibold"
                >
                  <a href={SUBMIT_RESOURCE_URL} target="_blank" rel="noopener noreferrer">
                    Submit a resource
                  </a>
                </Button>
              </div>

              <div className="rounded-lg bg-background/10 p-6 text-left backdrop-blur-sm">
                <h4 className="flex items-center gap-2 text-lg font-semibold">
                  <Code className="h-5 w-5" /> Submit an open-source software
                </h4>
                <p className="mt-2 text-sm text-primary-foreground/80">
                  Add a software to the registry.
                </p>
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="mt-4 w-full font-semibold"
                >
                  <Link to={SUBMIT_OSS_PATH}>Submit a software</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <img src={logo} alt="RS4RT" className="h-10 w-auto" />

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Mail className="h-4 w-4" />
            <a
              href="mailto:contact@rs4rt.org"
              className="transition-colors hover:text-primary"
            >
              contact@rs4rt.org
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
