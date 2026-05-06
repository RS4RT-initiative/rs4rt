import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, ExternalLink } from "lucide-react";

const DataResources = () => {
  const resources = [
    {
      category: "Databases",
      description: "Public datasets for research and development",
      items: [
        { name: "TCIA", url: "https://www.cancerimagingarchive.net/", description: "Cancer Imaging Archive" },
        { name: "EUCAIM", url: "https://cancerimage.eu/", description: "European Cancer Image Platform" },
        { name: "EUCanImage", url: "https://platform.eucanimage.eu/explore/", description: "Cancer imaging platform" },
        { name: "Medical Dataset Browser", url: "https://tchenglv520.github.io/medical-dataset-browser/", description: "Searchable medical dataset index" },
        { name: "Medical Decathlon", url: "http://medicaldecathlon.com/", description: "Benchmark datasets" },
        { name: "Zenodo", url: "https://zenodo.org/", description: "Open research data repository" },
        { name: "AIDA Data Hub", url: "https://datahub.aida.scilifelab.se/10.23698/aida/lund-probe", description: "AIDA datasets" },
      ],
    },
    {
      category: "Challenges and competitions",
      description: "Radiotherapy-related challenges and benchmarks",
      items: [
        { name: "Grand Challenge - Radiotherapy", url: "https://grand-challenge.org/challenges/?search=Radiotherapy&status=&submit=Apply+Filters", description: "Radiotherapy challenges" },
      ],
    },
    {
      category: "Data sharing best practices",
      description: "Guidance for responsible data sharing and management",
      items: [
        { name: "Maastricht University - Data practices and management", url: "https://www.maastrichtuniversity.nl/data-practices-and-data-management-0", description: "Institutional data practices and management" },
        { name: "NIH - Writing a Data Management & Sharing Plan", url: "https://grants.nih.gov/policy-and-compliance/policy-topics/sharing-policies/dms/writing-dms-plan", description: "NIH guidance on DMS plans" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12">
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent">
              <Database className="h-8 w-8 text-primary-foreground" />
            </div>
            <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
              Data Resources
            </h1>
            <p className="text-lg text-muted-foreground">
              Public datasets for research and development
            </p>
          </div>

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
                      <li key={itemIndex}>
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

export default DataResources;
