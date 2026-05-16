import CategoryCard from "@/components/CategoryCard";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Database, Package, GraduationCap, Code, Search, Sparkles, BookOpen } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import rs4rtLogo from "@/assets/rs4rt-logo.svg";

// Detail items for Commercial page (used for cross-page search)
const commercialDetailItems = [
  { name: "Varian ESAPI Projects", description: "Software community platforms" },
  { name: "RaySearch Labs", description: "GitHub repository" },
  { name: "MIM Software", description: "GitHub repository" },
  { name: "ImFusion GmbH", description: "Medical imaging software" },
  { name: "Ray GPT", description: "LLM coding assistant" },
  { name: "ESAPI GPT", description: "LLM coding assistant" },
];

// Detail items for Data Resources page (used for cross-page search)
const dataDetailItems = [
  { name: "TCIA", description: "Cancer Imaging Archive" },
  { name: "EUCAIM", description: "European Cancer Image Platform" },
  { name: "EUCanImage", description: "Cancer imaging platform" },
  { name: "Medical Dataset Browser", description: "Searchable medical dataset index" },
  { name: "Medical Decathlon", description: "Benchmark datasets" },
  { name: "Zenodo", description: "Open research data repository" },
  { name: "AIDA Data Hub", description: "AIDA datasets" },
  { name: "Grand Challenge - Radiotherapy", description: "Radiotherapy challenges" },
  { name: "Maastricht University - Data practices", description: "Data sharing best practices" },
  { name: "NIH DMS Plan", description: "Writing a Data Management & Sharing plan" },
];



const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    {
      title: "Open-Source Software",
      description: "Community-driven software solutions for radiation therapy",
      icon: Code,
      items: [
        { name: "Registry", url: "https://research-software-directory.org/communities/rs4rt/software", description: "Browse open-source projects" },
        { name: "Submission Guidelines", url: "/submission-guidelines", description: "How to add your software to the registry" },
        { name: "Best Practices", url: "/best-practices", description: "Guidelines and references for sharing software and data responsibly" },
      ],
      cta: { label: "Add a software to the registry", url: "https://forms.gle/x4vS5qYSBoKdrJrbA" },
    },
    {
      title: "Commercial ecosystem and vendor initiatives",
      description: "Industry solutions and commercial offerings",
      icon: Package,
      items: [
        { name: "Software community platforms and support", description: "Vendors Githubs and others" },
        { name: "LLM coding assistants", description: "AI-powered development tools" },
      ],
      detailsPath: "/commercial",
      detailItems: commercialDetailItems,
    },
    {
      title: "Data Resources",
      description: "Public datasets for research and development",
      icon: Database,
      items: [
        { name: "Databases", description: "TCIA, EUCAIM, Medical Decathlon, Zenodo, and more" },
        { name: "Challenges and competitions", description: "Radiotherapy challenges and benchmarks" },
        { name: "Data sharing best practices", description: "Maastricht and NIH DMS guidance" },
      ],
      detailsPath: "/data-resources",
      detailItems: dataDetailItems,
    },
    {
      title: "Artificial Intelligence",
      description: "AI tools and registries for radiation therapy",
      icon: Sparkles,
      items: [
        { name: "DLinRT", url: "http://DLinRT.eu", description: "Deep Learning in Radiotherapy" },
        { name: "Health AI Register", url: "https://healthairegister.com/radiology/products", description: "Radiology AI products" },
        { name: "AI Model Card", url: "https://rt-modelcard.streamlit.app/", description: "RT model card tool" },
      ],
    },
    {
      title: "Education",
      description: "Learning resources and training materials",
      icon: GraduationCap,
      items: [
        { name: "AAPM Education", url: "https://www.aapm.org/education/", description: "AAPM educational resources" },
        { name: "ESTRO Courses", url: "https://www.estro.org/courses", description: "ESTRO training courses" },
        { name: "e-LEMENT", url: "https://e-lement.efomp.org/", description: "EFOMP e-learning platform" },
        { name: "RSNA AI Deep Learning Lab", url: "https://github.com/RSNA/AI-Deep-Learning-Lab-2025", description: "Notebooks provided by RSNA" },
      ],
    },
    {
      title: "Standards, guidelines and consensus initiatives",
      description: "Consensus guidelines and ontologies",
      icon: BookOpen,
      items: [
        { name: "eContour", url: "https://econtour.org/", description: "Contouring guidelines" },
        { name: "RCR Auto-Contouring Guidance", url: "https://www.rcr.ac.uk/media/rqjlnlny/rcr-auto-contouring-in-radiotherapy-2024.pdf", description: "RCR 2024 guidance" },
        { name: "CancerData.org", url: "https://cancerdata.org/", description: "Cancer data sharing" },
        { name: "DICOM Reference", url: "https://dicom.innolitics.com/ciods", description: "DICOM documentation" },
      ],
    },
  ];

  const query = searchQuery.toLowerCase();
  const filteredCategories = categories.map(category => {
    const matchingItems = category.items.filter(item =>
      item.name.toLowerCase().includes(query) ||
      item.description?.toLowerCase().includes(query)
    );
    const detailMatch = category.detailItems?.some(item =>
      item.name.toLowerCase().includes(query) ||
      item.description?.toLowerCase().includes(query)
    );
    // Show category if main items match OR detail page items match
    if (matchingItems.length > 0 || detailMatch) {
      return { ...category, items: matchingItems.length > 0 ? matchingItems : category.items };
    }
    return null;
  }).filter(Boolean) as typeof categories;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-secondary/40 pt-12 pb-10">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-6 h-40 w-auto max-w-full overflow-hidden md:h-56">
              <img
                src={rs4rtLogo}
                alt="RS4RT - Resource Sharing for Radiotherapy"
                className="mx-auto block h-[160%] w-auto -translate-y-[19%]"
              />
            </div>
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
      <section className="pt-6 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-6 text-center">
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

      {/* News & Highlights Section */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="mb-8 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground">News & Highlights</h2>
            <p className="text-muted-foreground">
              Latest updates and announcements from the RS4RT community
            </p>
          </div>
          
          <div className="mx-auto max-w-4xl">
            <div className="rounded-lg border bg-card p-6 shadow-[var(--shadow-card)]">
              <p className="text-center text-muted-foreground">
                Coming soon - Stay tuned for the latest news and highlights from the radiation therapy community
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
