import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
              About Our Initiative
            </h1>
            <p className="text-lg text-muted-foreground">
              Building a collaborative ecosystem for radiation therapy resources
            </p>
          </div>

          {/* Mission */}
          <Card className="mb-8 shadow-[var(--shadow-card)]">
            <CardHeader>
              <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent">
                <Target className="h-6 w-6 text-primary-foreground" />
              </div>
              <CardTitle className="text-2xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                RadTherapy Resources is an initiative dedicated to centralizing and sharing 
                high-quality resources within the radiation therapy community. Our platform serves 
                as a comprehensive hub where clinicians, researchers, physicists, and developers 
                can discover, contribute to, and collaborate on tools, data, and knowledge.
              </p>
              <p>
                We believe in the power of open collaboration and knowledge sharing to advance 
                radiation therapy practices worldwide. By bringing together open-source software, 
                clinical guidelines, educational materials, and AI innovations, we aim to accelerate 
                progress and improve patient outcomes.
              </p>
            </CardContent>
          </Card>

          {/* Values */}
          <Card className="mb-8 shadow-[var(--shadow-card)]">
            <CardHeader>
              <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent">
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

          {/* Contributors */}
          <Card className="shadow-[var(--shadow-card)]">
            <CardHeader>
              <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent">
                <Users className="h-6 w-6 text-primary-foreground" />
              </div>
              <CardTitle className="text-2xl">Contributors</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                This initiative is made possible by the dedication and expertise of professionals 
                from leading medical physics departments, research institutions, and healthcare 
                organizations worldwide.
              </p>
              <div className="rounded-lg bg-secondary/50 p-6">
                <h3 className="mb-3 font-semibold text-foreground">Core Team</h3>
                <p className="mb-4 text-sm">
                  Our core team consists of medical physicists, radiation oncologists, software 
                  engineers, and data scientists passionate about improving radiation therapy through 
                  technology and collaboration.
                </p>
                <p className="text-sm italic">
                  Interested in contributing? Reach out to us at{" "}
                  <a href="mailto:contact@radtherapy.org" className="text-primary hover:underline">
                    contact@radtherapy.org
                  </a>
                </p>
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
