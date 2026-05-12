import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Code,
  ExternalLink,
  FileText,
  GitBranch,
  ListChecks,
  Send,
  Copy,
  Check,
  BookOpen,
} from "lucide-react";

const SUBMIT_FORM_URL = "https://forms.gle/x4vS5qYSBoKdrJrbA";

const README_TEMPLATE = `# 🩺 Project Title
> **INCLUDE HERE Short description (max 300 characters):**
Provide a concise summary of the software, its clinical/research use, and its purpose in radiotherapy.
---
## 🎯 Purpose in Radiotherapy
Describe the role of this software in the radiotherapy workflow:
CHANGE HERE:
- **Clinical / Research context:** (e.g., treatment planning, adaptive radiotherapy, dose verification, imaging analysis)
- **Target users:** (e.g., medical physicists, radiation oncologists, researchers)
- **Problem addressed:** (What limitation or need does this software solve?)
---
## ⚙️ Installation
### Prerequisites
- Operating system: (e.g., Linux, Windows)
- Dependencies: (e.g., Python, MATLAB, specific libraries)
- Optional: Access to DICOM-compatible systems, PACS, or treatment planning systems
### Steps
\`\`\`bash
git clone https://github.com/your-org/project-name.git
cd project-name
pip install -r requirements.txt
python main.py
\`\`\`

---

## 🚀 Getting Started

### Basic Usage Example
\`\`\`bash
python process_rt.py --input /path/to/dicom --output results/
\`\`\`

### Example Workflow
1. Import patient or phantom data (e.g., DICOM RTSTRUCT, RTDOSE, CT)
2. Configure parameters (e.g., dose grid, segmentation, QA thresholds)
3. Run analysis or processing
4. Review outputs (e.g., dose maps, DVHs, metrics)

### Expected Outputs
- Dose distributions / recalculations
- DVH (Dose-Volume Histogram) data
- QA reports or visualizations

---

## 📖 User Guide

- Extended documentation: [Add link]
- Clinical validation or methodology: [Add link]
- Example datasets (if allowed): [Add link]

---

## 🤝 Contributing (Optional)

1. Fork the repository
2. Create a branch (feature/your-feature)
3. Commit changes
4. Open a pull request

---

## 📬 Contact

- Name: Full Name
- Email: email@example.com
- Institution: Hospital / University / Research Institute

---

## 📄 License

Specify the license (e.g., MIT, Apache 2.0, GPL)

---

## 🧾 Citation

\`\`\`bibtex
@software{radiotherapy_tool,
  author = {Author Name},
  title = {Project Title},
  year = {2026},
  institution = {Institution Name},
  url = {https://github.com/your-org/project-name}
}
\`\`\`
`;

const codeTypes = [
  {
    name: "Library / Toolkit",
    short: "Building blocks for developers — functions, algorithms, classes used to build new applications.",
    detail:
      "Not an executable program; no user interface. Designed to be integrated by programmers into other software (e.g., dose calculation, DICOM image handling).",
  },
  {
    name: "Application",
    short: "A complete, ready-to-use program with its own user interface (GUI or CLI).",
    detail:
      "Installed/run by the end-user. Includes stand-alone software, web applications, and self-contained toolboxes running within MATLAB or Python with a defined interface.",
  },
  {
    name: "Script / Plugin",
    short: "An add-on for an existing host application (commercial or open-source).",
    detail:
      "Examples: scripts for RayStation or Eclipse, plugins for 3D Slicer or ImageJ; a script that converts file formats, computes ROI volumes from RTSTRUCT, or extracts DICOM data.",
  },
];

const keywordGroups: { title: string; items: string[] }[] = [
  {
    title: "Treatment Planning & Dosimetry",
    items: [
      "Dose Calculation Algorithms",
      "Monte Carlo Simulations",
      "Plan Optimization",
      "Beam Modeling",
      "Radiobiological Modeling",
      "Plan complexity",
      "Plan evaluation",
    ],
  },
  {
    title: "Imaging & Image Processing",
    items: [
      "Image Registration",
      "Image Reconstruction",
      "Segmentation",
      "Synthetic CT",
      "Motion Management",
      "Radiomics",
    ],
  },
  {
    title: "Software Engineering & Data Infrastructure",
    items: [
      "DICOM-RT Tools (read/export DICOM)",
      "PACS Integration",
      "Interoperability",
      "Workflow Automation",
      "Rendering and visualization",
    ],
  },
  {
    title: "Clinical Workflow & Applications",
    items: [
      "Stereotactic Radiosurgery (SRS/SBRT)",
      "Adaptive Radiation Therapy",
      "Image-Guided Radiation Therapy (IGRT)",
      "Intraoperative Radiation Therapy (IORT)",
      "Automated treatment planning",
      "Knowledge-based treatment planning",
    ],
  },
  {
    title: "Quality Assurance (QA)",
    items: [
      "Machine QA Tools",
      "Patient-Specific QA",
      "In Vivo Dosimetry",
      "Log File Analysis",
      "EPID/Film Dosimetry",
      "QA Phantoms & Simulations",
    ],
  },
  {
    title: "Artificial Intelligence",
    items: [
      "Auto-Segmentation",
      "Outcome prediction (toxicity, outcomes)",
      "Radiomics",
      "Automatic Planning",
      "Digital Twin / Virtual Patient Modeling",
      "Uncertainty quantification",
    ],
  },
];

const SubmissionGuidelines = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(README_TEMPLATE);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      /* ignore */
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="border-b border-border bg-secondary/40">
        <div className="container mx-auto px-4 py-12">
          <div className="mx-auto max-w-5xl">
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-primary">
              <Code className="h-8 w-8 text-primary-foreground" />
            </div>
            <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
              Open-Source Software Registry — Submission Guidelines
            </h1>
            <p className="text-lg text-muted-foreground">
              How to submit your software to the RS4RT registry, hosted in the{" "}
              <a
                href="https://research-software-directory.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline-offset-4 hover:underline"
              >
                Research Software Directory (RSD)
              </a>
              .
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild size="lg" className="font-semibold">
                <a href={SUBMIT_FORM_URL} target="_blank" rel="noopener noreferrer">
                  <Send className="mr-2 h-4 w-4" /> Open submission form
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="#how-to-submit">
                  <ListChecks className="mr-2 h-4 w-4" /> See required info
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[260px_1fr]">
          {/* Sidebar Table of contents */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-lg border border-primary/20 bg-secondary/30 p-5 shadow-[var(--shadow-card)]">
              <div className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary">
                <ListChecks className="h-4 w-4" /> Contents
              </div>
              <nav className="flex flex-col gap-1">
                {[
                  { href: "#introduction", label: "1. Introduction" },
                  { href: "#before-you-submit", label: "2. Before you submit" },
                  { href: "#how-to-submit", label: "3. How to submit" },
                  { href: "#final-remarks", label: "4. Final remarks" },
                  { href: "#appendix-a1", label: "Appendix A.1 — Code types" },
                  { href: "#appendix-a2", label: "Appendix A.2 — Keywords" },
                  { href: "#appendix-a3", label: "Appendix A.3 — README template" },
                ].map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="rounded-md px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <div className="min-w-0 space-y-10">
          {/* 1. Introduction */}
          <Card id="introduction" className="shadow-[var(--shadow-card)]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <BookOpen className="h-5 w-5 text-primary" /> 1. Introduction
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                The RS4RT registry is intended as a comprehensive collection of open-source software for the
                radiation therapy community.
              </p>
              <p>
                RS4RT is hosted as a community in the Research Software Directory (RSD), a free online platform
                that showcases the impact of research software on research and society.
              </p>
              <p>
                Please follow the guidelines below to ensure a smooth submission process. They also serve as good
                practice for standardizing software and making it more accessible to the radiotherapy community.
              </p>
            </CardContent>
          </Card>

          {/* 2. Before You Submit */}
          <Card id="before-you-submit" className="shadow-[var(--shadow-card)]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <GitBranch className="h-5 w-5 text-primary" /> 2. Before You Submit
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-muted-foreground">
              <p>
                RSD will harvest and update information automatically if your software is hosted on a Git
                repository and has a{" "}
                <a
                  href="https://research-software.dev/documentation/users/adding-software/#software-doi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline-offset-4 hover:underline"
                >
                  software DOI
                </a>
                . Neither is compulsory, but both are highly recommended:
              </p>
              <ul className="ml-5 list-disc space-y-1">
                <li>
                  <span className="font-semibold text-foreground">Git repository:</span> automatic update of
                  licence, programming language, description, and commit history.
                </li>
                <li>
                  <span className="font-semibold text-foreground">Software DOI:</span> automatic update of
                  versioning and contributors.
                </li>
              </ul>

              <div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">2.1 Git repository available</h3>
                <p className="mb-3">
                  <span className="font-semibold text-foreground">Repository setup:</span> the project must be
                  hosted on a public platform (GitHub, GitLab, or Bitbucket) and publicly accessible. If not
                  possible, at least an executable must be available.
                </p>
                <p className="font-semibold text-foreground">Required files and content</p>
                <ul className="ml-5 mt-2 list-disc space-y-2">
                  <li>
                    <span className="font-semibold text-foreground">License:</span> include a recognized
                    open-source license (
                    <a
                      href="https://spdx.org/licenses/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary underline-offset-4 hover:underline"
                    >
                      SPDX list
                    </a>
                    ) in the root directory.
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">README:</span> project title, short
                    description, installation, getting started, usage examples, optional extended user-guide
                    link, contribution guidelines, and a contact person. Use the README template below.
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Versioning:</span> use a clear versioning
                    scheme.
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Project description:</span> a concise
                    summary of what the software does, the problem it solves, and its target audience.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">2.2 Git repository not available</h3>
                <p>
                  Use the <span className="font-semibold text-foreground">custom software description</span> in
                  the form to link to an external page where the software can be downloaded.{" "}
                  <a
                    href="https://primoproject.net/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline-offset-4 hover:underline"
                  >
                    PRIMO
                  </a>{" "}
                  is an example. Include in this description any information not retrievable from a Git
                  repository (versioning, contributors, detailed documentation).
                </p>
              </div>
            </CardContent>
          </Card>

          {/* 3. How to Submit */}
          <Card id="how-to-submit" className="shadow-[var(--shadow-card)]">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <ListChecks className="h-5 w-5 text-primary" /> 3. How to Submit
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-muted-foreground">
              <p>
                Fill out the{" "}
                <a
                  href={SUBMIT_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-primary underline-offset-4 hover:underline"
                >
                  submission Google Form
                </a>{" "}
                with the information below. It is used to create the software entry in RSD and make it
                discoverable. More info in the{" "}
                <a
                  href="https://research-software-directory.org/documentation/users/adding-software/#software-entry"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline-offset-4 hover:underline"
                >
                  RSD documentation
                </a>
                .
              </p>

              <div className="rounded-lg border-l-4 border-primary bg-secondary/30 p-5">
                <p className="font-semibold text-foreground">Common fields</p>
                <ul className="ml-5 mt-2 list-disc space-y-1">
                  <li><span className="font-semibold text-foreground">Software name</span></li>
                  <li><span className="font-semibold text-foreground">Short description</span> (max 300 characters)</li>
                  <li>
                    <span className="font-semibold text-foreground">Code type</span> — Application, Library /
                    Toolkit, or Script / Plugin (see Appendix A.1)
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Keywords</span> (max 3, see Appendix A.2)
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Field</span> — Protons / Ions, Photons,
                    Brachytherapy, or Multiple purpose
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">License</span> (SPDX, "Other", or "None")
                  </li>
                </ul>

                <p className="mt-5 font-semibold text-foreground">
                  If the software is on GitHub / GitLab / Bitbucket
                </p>
                <ul className="ml-5 mt-2 list-disc space-y-1">
                  <li>
                    <span className="font-semibold text-foreground">Source code link:</span> repository URL.
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Raw README URL:</span> link to the raw
                    README file (on GitHub, click "Raw" then copy the URL). Used as the software description in
                    RSD.
                  </li>
                </ul>

                <p className="mt-5 font-semibold text-foreground">If the software is NOT on a Git platform</p>
                <ul className="ml-5 mt-2 list-disc space-y-1">
                  <li>
                    <span className="font-semibold text-foreground">Custom description</span> (max 10,000
                    characters): include all information that cannot be retrieved from a Git repository
                    (versioning, contributors, contact, documentation, programming language). The README
                    template below can be reused.
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Programming language</span> — internal use
                    only; include in custom description if relevant.
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Latest commit</span> — internal use only;
                    include in custom description if relevant.
                  </li>
                </ul>

                <p className="mt-5 font-semibold text-foreground">Optional information</p>
                <ul className="ml-5 mt-2 list-disc space-y-1">
                  <li>
                    <span className="font-semibold text-foreground">Websites</span> — internal use only.
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Software DOI</span> — e.g. via Zenodo.
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Reference paper</span> — DOI of a paper
                    primarily describing the software.
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Related output</span> — DOI(s) of related
                    papers (comma-separated).
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Contact person / ORCID</span> — name or
                    ORCID; otherwise add to custom description.
                  </li>
                  <li>
                    <span className="font-semibold text-foreground">Logo</span> — raw URL to a logo image.
                  </li>
                </ul>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <Button asChild size="lg" className="font-semibold">
                  <a href={SUBMIT_FORM_URL} target="_blank" rel="noopener noreferrer">
                    <Send className="mr-2 h-4 w-4" /> Open submission form
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* 4. Final remarks */}
          <Card id="final-remarks" className="shadow-[var(--shadow-card)]">
            <CardHeader>
              <CardTitle className="text-2xl">4. Final remarks</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-muted-foreground">
              <p>
                The submission form is used for the first submission. If the software is correctly stored on a
                public Git repository, RSD will update the information automatically.
              </p>
              <p>Submissions that do not meet the minimum requirements may be rejected.</p>
            </CardContent>
          </Card>

          {/* Appendices divider */}
          <div className="flex items-center gap-3 pt-4">
            <div className="h-px flex-1 bg-border" />
            <span className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-bold uppercase tracking-widest text-primary">
              Appendices
            </span>
            <div className="h-px flex-1 bg-border" />
          </div>

          {/* A.1 Code types */}
          <Card id="appendix-a1" className="shadow-[var(--shadow-card)]">
            <CardHeader>
              <CardTitle className="text-2xl">Appendix A.1 — Code types</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[180px]">Code type</TableHead>
                    <TableHead>Short description</TableHead>
                    <TableHead>Detailed description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {codeTypes.map((c) => (
                    <TableRow key={c.name}>
                      <TableCell className="font-semibold text-foreground">{c.name}</TableCell>
                      <TableCell className="text-muted-foreground">{c.short}</TableCell>
                      <TableCell className="text-muted-foreground">{c.detail}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* A.2 Keywords */}
          <Card id="appendix-a2" className="shadow-[var(--shadow-card)]">
            <CardHeader>
              <CardTitle className="text-2xl">Appendix A.2 — Keywords</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-6 text-muted-foreground">
                Below each keyword category is a list of sub-categories appropriate for the given keyword.
              </p>
              <div className="grid gap-6 md:grid-cols-2">
                {keywordGroups.map((g) => (
                  <div
                    key={g.title}
                    className="rounded-lg border border-border bg-secondary/20 p-5"
                  >
                    <h3 className="mb-3 text-lg font-semibold text-foreground">{g.title}</h3>
                    <ul className="ml-5 list-disc space-y-1 text-sm text-muted-foreground">
                      {g.items.map((it) => (
                        <li key={it}>{it}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* A.3 README template */}
          <Card id="appendix-a3" className="shadow-[var(--shadow-card)]">
            <CardHeader>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <FileText className="h-5 w-5 text-primary" /> Appendix A.3 — README template
                </CardTitle>
                <Button onClick={handleCopy} variant="outline" size="sm">
                  {copied ? (
                    <>
                      <Check className="mr-2 h-4 w-4" /> Copied
                    </>
                  ) : (
                    <>
                      <Copy className="mr-2 h-4 w-4" /> Copy template
                    </>
                  )}
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <pre className="max-h-[500px] overflow-auto rounded-lg bg-foreground p-5 text-xs leading-relaxed text-background">
                <code>{README_TEMPLATE}</code>
              </pre>
            </CardContent>
          </Card>

          {/* Final CTA */}
          <Card className="border-primary/30 bg-primary text-primary-foreground shadow-[var(--shadow-card)]">
            <CardContent className="flex flex-col items-center gap-4 p-8 text-center md:flex-row md:justify-between md:text-left">
              <div>
                <h3 className="text-xl font-bold md:text-2xl">Ready to add your software?</h3>
                <p className="mt-1 text-primary-foreground/80">
                  Submit your project to the RS4RT open-source registry.
                </p>
              </div>
              <Button asChild size="lg" variant="secondary" className="font-semibold">
                <a href={SUBMIT_FORM_URL} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" /> Open submission form
                </a>
              </Button>
            </CardContent>
          </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SubmissionGuidelines;
