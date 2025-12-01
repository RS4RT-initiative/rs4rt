import CategoryCard from "@/components/CategoryCard";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Database, Package, GraduationCap, Code, Search, Sparkles } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

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
      title: "Commercial ecosystem and vendor initiatives",
      description: "Industry solutions and commercial offerings",
      icon: Package,
      items: [
        { name: "Varian ESAPI Projects", url: "https://medicalaffairs.varian.com/esapi-projects", description: "Software community platforms" },
        { name: "RaySearch Labs", url: "https://github.com/raysearchlabs", description: "GitHub repository" },
        { name: "MIM Software", url: "http://github.com/MIMSoftware/", description: "GitHub repository" },
        { name: "ImFusion GmbH", description: "Medical imaging software" },
        { name: "Ray GPT", url: "https://chatgpt.com/g/g-6879ef75d66081918ca416efc3dd9a45-ray-gpt", description: "LLM coding assistant" },
        { name: "ESAPI GPT", url: "https://chatgpt.com/g/g-686281cffe4c81919a158bcc26f032d2-esapi-gpt", description: "LLM coding assistant" },
        { name: "AI products registry", description: "Commercial AI solutions" },
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
      title: "Artificial Intelligence",
      description: "AI tools and registries for radiation therapy",
      icon: Sparkles,
      items: [
        { name: "DLinRT", url: "http://DLinRT.eu", description: "Deep Learning in Radiotherapy" },
        { name: "Health AI Register", url: "https://healthairegister.com/radiology/products", description: "Radiology AI products" },
      ],
    },
    {
      title: "Education",
      description: "Learning resources and training materials",
      icon: GraduationCap,
      items: [
        { name: "Video Tutorials", description: "YouTube channels and courses" },
        { name: "Workshops & Conferences", description: "Training events" },
        { name: "Challenges and competitions", url: "https://grand-challenge.org/", description: "Test your skills" },
      ],
    },
  ];

  const filteredCategories = categories.map(category => ({
    ...category,
    items: category.items.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description?.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.items.length > 0);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-accent/5 to-background py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-5xl font-bold leading-tight text-foreground md:text-6xl">
              RS4RT
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Resource-Sharing for Radiotherapy
              </span>
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              A comprehensive collection of open-source software, data, guidelines, and educational resources 
              for the radiation therapy community
            </p>
            <div className="mx-auto max-w-xl">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search resources..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12 text-base"
                />
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
            {(searchQuery ? filteredCategories : categories).map((category, index) => (
              <CategoryCard key={index} {...category} />
            ))}
          </div>
          {searchQuery && filteredCategories.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No resources found matching your search.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
