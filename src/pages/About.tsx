import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Heart } from "lucide-react";
import estroWorkshopImage from "@/assets/estro-workshop.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
              About RS4RT
            </h1>
            <p className="text-lg text-muted-foreground">
              Resource-Sharing for Radiotherapy
            </p>
          </div>

          {/* Workshop Image */}
          <div className="mb-8 overflow-hidden rounded-lg shadow-[var(--shadow-card)]">
            <img 
              src={estroWorkshopImage}
              alt="ESTRO 2024 Physics Workshop on Resource Sharing" 
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Origin Story */}
          <Card className="mb-8 shadow-[var(--shadow-card)]">
            <CardHeader>
              <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary">
                <Target className="h-6 w-6 text-primary-foreground" />
              </div>
              <CardTitle className="text-2xl">Our Initiative</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                The RS4RT initiative was born during the 2024 ESTRO Physics Workshop on "Resource Sharing: open-source software & development in radiotherapy" <a href="https://www.estro.org/About/Newsroom/Newsletter/Physics/Resource-sharing-open-source-software-and-developm" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">[1]</a><a href="https://www.estro.org/Workshops/ESTRO-Physics-Workshop-2024/Resource-sharing-open-source-software-development" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">[2]</a>. The workshop brought together software developers, researchers, and clinicians to identify needs and best practices around resource sharing in radiotherapy.
              </p>
              <p>
                A clear message emerged: although software plays an increasingly central role in both research and clinical workflows, the RT community still faces major challenges in sharing tools and connecting initiatives. Many groups continue to develop in-house solutions in isolation, often duplicating efforts, operating without long-term support, and struggling to make their work visible.
              </p>
              <p>
                RS4RT.org was created as a response to these challenges, aiming to improve the visibility, discoverability, and reuse of existing resources.
              </p>
              <p>
                A central element of the website is its software registry, built on the Research Software Directory platform <a href="https://research-software-directory.org/communities/rs4rt/software" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">[research-software-directory.org]</a>, which offers a structured way to catalogue open and shareable software related to radiotherapy. Beyond the registry, the platform also integrates vendor initiatives, AI-specific developments, data sources, and educational resources to provide a broader view of the resource-sharing landscape.
              </p>
              <p>
                By consolidating scattered efforts and encouraging a culture of openness and collaboration, RS4RT.org seeks to accelerate innovation, strengthen the collective impact of the RT community, and ultimately enhance patient care.
              </p>
            </CardContent>
          </Card>

          {/* Values */}
          <Card className="mb-8 shadow-[var(--shadow-card)]">
            <CardHeader>
              <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary">
                <Heart className="h-6 w-6 text-primary-foreground" />
              </div>
              <CardTitle className="text-2xl">Our Values</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                  <div>
                    <strong className="text-foreground">Open Access:</strong> Making knowledge and tools 
                    freely available to the global community
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                  <div>
                    <strong className="text-foreground">Collaboration:</strong> Fostering partnerships 
                    across institutions, disciplines, and borders
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                  <div>
                    <strong className="text-foreground">Quality:</strong> Curating reliable, validated 
                    resources that meet professional standards
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                  <div>
                    <strong className="text-foreground">Innovation:</strong> Embracing new technologies 
                    and methodologies to advance the field
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* People Involved */}
          <Card className="shadow-[var(--shadow-card)]">
            <CardHeader>
              <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary">
                <Users className="h-6 w-6 text-primary-foreground" />
              </div>
              <CardTitle className="text-2xl">People Involved in RS4RT</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                The RS4RT initiative brings together contributors from research institutes, universities, hospitals, and clinical centres across Europe, USA, and beyond. Below is the list of members who are actively supporting the development of the platform and contributing to the registry, infrastructure, and resource-sharing initiatives.
              </p>
              <div className="grid gap-3 text-sm">
                <div className="rounded-lg border bg-secondary/20 p-3">
                  <p className="font-medium text-foreground">Samuel Ingram</p>
                  <p className="text-xs text-muted-foreground">The Christie NHS Foundation Trust; The University of Manchester, United Kingdom</p>
                </div>
                <div className="rounded-lg border bg-secondary/20 p-3">
                  <p className="font-medium text-foreground">Lorenzo Brualla</p>
                  <p className="text-xs text-muted-foreground">Westdeutsches Protonentherapiezentrum Essen, Germany; Instituto de Física Corpuscular (IFIC), CSIC-UV, Valencia, Spain</p>
                </div>
                <div className="rounded-lg border bg-secondary/20 p-3">
                  <p className="font-medium text-foreground">Alexia Delbaere</p>
                  <p className="text-xs text-muted-foreground">University of Toulouse, IUCT-Oncopole, Inserm, CNRS, CRCT, France</p>
                </div>
                <div className="rounded-lg border bg-secondary/20 p-3">
                  <p className="font-medium text-foreground">Masoud Zarepisheh</p>
                  <p className="text-xs text-muted-foreground">Department of Medical Physics, Memorial Sloan Kettering Cancer Center, New York, USA</p>
                </div>
                <div className="rounded-lg border bg-secondary/20 p-3">
                  <p className="font-medium text-foreground">Hendrik Piersma</p>
                  <p className="text-xs text-muted-foreground">Radiotherapeutisch Instituut Friesland, Leeuwarden, The Netherlands</p>
                </div>
                <div className="rounded-lg border bg-secondary/20 p-3">
                  <p className="font-medium text-foreground">Aditya Apte</p>
                  <p className="text-xs text-muted-foreground">Department of Medical Physics, Memorial Sloan Kettering Cancer Center, New York, USA</p>
                </div>
                <div className="rounded-lg border bg-secondary/20 p-3">
                  <p className="font-medium text-foreground">Roman Ludwig</p>
                  <p className="text-xs text-muted-foreground">Department of Radiation Oncology, University Hospital Zurich, Switzerland</p>
                </div>
                <div className="rounded-lg border bg-secondary/20 p-3">
                  <p className="font-medium text-foreground">Erik Roelofs</p>
                  <p className="text-xs text-muted-foreground">Department of Radiation Oncology (Maastro), GROW School for Oncology and Reproduction, Maastricht UMC+, The Netherlands</p>
                </div>
                <div className="rounded-lg border bg-secondary/20 p-3">
                  <p className="font-medium text-foreground">Marcel Nachbar</p>
                  <p className="text-xs text-muted-foreground">Section for Biomedical Physics, Department of Radiation Oncology, University Hospital & Medical Faculty, University of Tübingen, Germany</p>
                </div>
                <div className="rounded-lg border bg-secondary/20 p-3">
                  <p className="font-medium text-foreground">Ali Zaila</p>
                  <p className="text-xs text-muted-foreground">King Faisal Specialist Hospital & Research Center, Biomedical Physics Department, Riyadh, Saudi Arabia</p>
                </div>
                <div className="rounded-lg border bg-secondary/20 p-3">
                  <p className="font-medium text-foreground">Krzysztof Domański</p>
                  <p className="text-xs text-muted-foreground">Maria Skłodowska-Curie National Research Institute of Oncology, Poland</p>
                </div>
                <div className="rounded-lg border bg-secondary/20 p-3">
                  <p className="font-medium text-foreground">Josh Kirby</p>
                  <p className="text-xs text-muted-foreground">The Newcastle Hospitals NHS Foundation Trust, United Kingdom</p>
                </div>
                <div className="rounded-lg border bg-secondary/20 p-3">
                  <p className="font-medium text-foreground">Giorgio Cartechini</p>
                  <p className="text-xs text-muted-foreground">Maastricht UMC+, Department of Radiation Oncology (Maastro), GROW School for Oncology and Reproduction, The Netherlands</p>
                </div>
                <div className="rounded-lg border bg-secondary/20 p-3">
                  <p className="font-medium text-foreground">Tobias Becher</p>
                  <p className="text-xs text-muted-foreground">German Cancer Research Center (DKFZ); Heidelberg Institute of Radiation Oncology (HIRO) / NCRO; Heidelberg University, Germany</p>
                </div>
                <div className="rounded-lg border bg-secondary/20 p-3">
                  <p className="font-medium text-foreground">Samuele Cavinato</p>
                  <p className="text-xs text-muted-foreground">Medical Physics Department, Veneto Institute of Oncology IOV-IRCCS, Padua, Italy</p>
                </div>
                <div className="rounded-lg border bg-secondary/20 p-3">
                  <p className="font-medium text-foreground">Goran Stanic</p>
                  <p className="text-xs text-muted-foreground">German Cancer Research Center (DKFZ); Heidelberg Institute of Radiation Oncology (HIRO) / NCRO; Heidelberg University, Germany</p>
                </div>
                <div className="rounded-lg border bg-secondary/20 p-3">
                  <p className="font-medium text-foreground">Valentine Dormal</p>
                  <p className="text-xs text-muted-foreground">UCLouvain, MIRO, Brussels, Belgium</p>
                </div>
                <div className="rounded-lg border bg-secondary/20 p-3">
                  <p className="font-medium text-foreground">Stine Korreman</p>
                  <p className="text-xs text-muted-foreground">Danish Center for Particle Therapy, Department of Clinical Medicine, Aarhus University, Aarhus, Denmark</p>
                </div>
                <div className="rounded-lg border bg-secondary/20 p-3">
                  <p className="font-medium text-foreground">Niklas Wahl</p>
                  <p className="text-xs text-muted-foreground">German Cancer Research Center (DKFZ); Heidelberg Institute of Radiation Oncology (HIRO) / NCRO; Heidelberg University, Germany</p>
                </div>
                <div className="rounded-lg border bg-secondary/20 p-3">
                  <p className="font-medium text-foreground">Josh Mason</p>
                  <p className="text-xs text-muted-foreground">Imperial College Healthcare NHS Trust, London, United Kingdom</p>
                </div>
                <div className="rounded-lg border bg-secondary/20 p-3">
                  <p className="font-medium text-foreground">Ana M. Barragán-Montero</p>
                  <p className="text-xs text-muted-foreground">UCLouvain, MIRO, Brussels, Belgium</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
