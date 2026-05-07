import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, ExternalLink } from "lucide-react";

const BestPractices = () => {
  const items = [
    {
      name: "Open Source Guide",
      url: "https://opensource.guide/",
      description: "How to launch and grow open-source projects",
    },
    {
      name: "UK Goldacre Report",
      url: "https://assets.publishing.service.gov.uk/media/624ea0ade90e072a014d508a/goldacre-review-using-health-data-for-research-and-analysis.pdf",
      description: "Using health data for research and analysis (also informs AAPM TG-53 / TG-201 practices)",
    },
    {
      name: "IPEM Guidelines",
      url: "https://www.ipem.ac.uk/media/vp0ewy01/ipembe-1.pdf",
      description: "Institute of Physics and Engineering in Medicine guidelines",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12">
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-primary">
              <BookOpen className="h-8 w-8 text-primary-foreground" />
            </div>
            <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
              Best Practices
            </h1>
            <p className="text-lg text-muted-foreground">
              Guidelines and references for sharing software and data responsibly
            </p>
          </div>

          <Card className="shadow-[var(--shadow-card)]">
            <CardHeader>
              <CardTitle className="text-2xl">Resources</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {items.map((item, i) => (
                  <li key={i}>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 rounded-lg border border-border bg-secondary/20 p-4 transition-all hover:bg-secondary/40 hover:shadow-md"
                    >
                      <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 font-medium text-foreground">
                          {item.name}
                          <ExternalLink className="h-4 w-4 text-muted-foreground" />
                        </div>
                        <div className="mt-1 text-sm text-muted-foreground">{item.description}</div>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BestPractices;
