import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, ExternalLink } from "lucide-react";

const CommercialEcosystem = () => {
  const resources = [
    {
      category: "Software community platforms and support",
      description: "Vendors Githubs and others",
      items: [
        { name: "Varian ESAPI Projects", url: "https://medicalaffairs.varian.com/esapi-projects", description: "Software community platforms" },
        { name: "RaySearch Labs", url: "https://github.com/raysearchlabs", description: "GitHub repository" },
        { name: "MIM Software", url: "http://github.com/MIMSoftware/", description: "GitHub repository" },
        { name: "ImFusion GmbH", description: "Medical imaging software" },
      ]
    },
    {
      category: "LLM coding assistants",
      description: "AI-powered development tools",
      items: [
        { name: "Ray GPT", url: "https://chatgpt.com/g/g-6879ef75d66081918ca416efc3dd9a45-ray-gpt", description: "LLM coding assistant" },
        { name: "ESAPI GPT", url: "https://chatgpt.com/g/g-686281cffe4c81919a158bcc26f032d2-esapi-gpt", description: "LLM coding assistant" },
      ]
    },
    {
      category: "AI products registry",
      description: "Commercial AI solutions",
      items: [
        { name: "AI products registry", description: "Commercial AI solutions" },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-5xl">
          {/* Header */}
          <div className="mb-12">
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent">
              <Package className="h-8 w-8 text-primary-foreground" />
            </div>
            <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
              Commercial Ecosystem and Vendor Initiatives
            </h1>
            <p className="text-lg text-muted-foreground">
              Industry solutions and commercial offerings for radiation therapy
            </p>
          </div>

          {/* Resources */}
          <div className="space-y-8">
            {resources.map((section, index) => (
              <Card key={index} className="shadow-[var(--shadow-card)]">
                <CardHeader>
                  <CardTitle className="text-2xl">{section.category}</CardTitle>
                  <p className="text-sm text-muted-foreground">{section.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="group/item">
                        {item.url ? (
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
                              {item.description && (
                                <div className="mt-1 text-sm text-muted-foreground">{item.description}</div>
                              )}
                            </div>
                          </a>
                        ) : (
                          <div className="flex items-start gap-3 rounded-lg border border-border bg-secondary/20 p-4">
                            <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-primary/60" />
                            <div className="flex-1">
                              <div className="font-medium text-foreground">{item.name}</div>
                              {item.description && (
                                <div className="mt-1 text-sm text-muted-foreground">{item.description}</div>
                              )}
                            </div>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CommercialEcosystem;
