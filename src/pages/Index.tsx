import CategoryCard from "@/components/CategoryCard";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Database, Package, FileText, Brain, GraduationCap, Code } from "lucide-react";

const Index = () => {
  const categories = [
    {
      title: "Open-Source Software",
      description: "Community-driven software solutions for radiation therapy",
      icon: Code,
      items: [
        { name: "Registry", description: "Browse open-source projects" },
        { name: "Submit Your Project", description: "Share your contribution (Google Form)" },
        { name: "Best Practices", url: "https://opensource.guide/", description: "Learn how to contribute effectively" },
      ],
    },
    {
      title: "Vendors & Commercial Products",
      description: "Industry solutions and commercial offerings",
      icon: Package,
      items: [
        { name: "Varian Medical Systems", url: "https://www.varian.com/" },
        { name: "ProKnow Systems", url: "https://proknowsystems.com/" },
        { name: "Other Commercial Solutions", description: "Explore more vendors" },
      ],
    },
    {
      title: "Data Resources",
      description: "Public datasets for research and development",
      icon: Database,
      items: [
        { name: "TCIA", url: "https://www.cancerimagingarchive.net/", description: "Cancer Imaging Archive" },
        { name: "EUCAIM", url: "https://cancerimage.eu/", description: "European Cancer Image Platform" },
        { name: "Medical Decathlon", description: "Benchmark datasets" },
        { name: "CancerData.org", url: "https://cancerdata.org/" },
      ],
    },
    {
      title: "Clinical Guidelines",
      description: "Evidence-based protocols and standards",
      icon: FileText,
      items: [
        { name: "ESTRO Contour", url: "https://econtour.org/", description: "Delineation guidelines" },
        { name: "Treatment Protocols", description: "Standard care protocols" },
        { name: "Quality Assurance", description: "QA guidelines and tools" },
      ],
    },
    {
      title: "Artificial Intelligence",
      description: "AI models and platforms for radiation therapy",
      icon: Brain,
      items: [
        { name: "DLinRT", description: "Deep Learning in Radiation Therapy" },
        { name: "Grand Challenge", url: "https://grand-challenge.org/", description: "AI challenges and datasets" },
        { name: "AI Models Registry", description: "Pre-trained models" },
      ],
    },
    {
      title: "Education",
      description: "Learning resources and training materials",
      icon: GraduationCap,
      items: [
        { name: "Video Tutorials", description: "YouTube channels and courses" },
        { name: "Workshops & Conferences", description: "Training events" },
        { name: "DICOM Documentation", url: "https://dicom.innolitics.com/ciods", description: "Technical references" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-accent/5 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-5xl font-bold leading-tight text-foreground md:text-6xl">
              Radiation Therapy
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Resource Hub
              </span>
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              A comprehensive collection of open-source software, data, guidelines, and educational resources 
              for the radiation therapy community
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="rounded-lg bg-card px-6 py-3 shadow-[var(--shadow-card)]">
                <div className="text-2xl font-bold text-primary">6</div>
                <div className="text-sm text-muted-foreground">Categories</div>
              </div>
              <div className="rounded-lg bg-card px-6 py-3 shadow-[var(--shadow-card)]">
                <div className="text-2xl font-bold text-primary">20+</div>
                <div className="text-sm text-muted-foreground">Resources</div>
              </div>
              <div className="rounded-lg bg-card px-6 py-3 shadow-[var(--shadow-card)]">
                <div className="text-2xl font-bold text-primary">Open</div>
                <div className="text-sm text-muted-foreground">Access</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground">Explore Resources</h2>
            <p className="text-muted-foreground">
              Browse our curated collection of tools, data, and knowledge
            </p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, index) => (
              <CategoryCard key={index} {...category} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
