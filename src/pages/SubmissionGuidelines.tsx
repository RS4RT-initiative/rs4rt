import { useEffect, useRef, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

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

const STYLES = `
.guidelines-doc { --purple:#5b2a86; --orange:#f39b2f; --bg-main:#ffffff; --bg-soft:#f7f8fc; --bg-subtle:#fafbff; --border-soft:#e6e8f0; --text-main:#1f2937; --text-muted:#6b7280;
  font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; line-height: 1.7; color: var(--text-main);
  background: linear-gradient(135deg,#f5f7fa 0%,#c3cfe2 100%);
}
.guidelines-doc .layout { display:grid; grid-template-columns:260px 1fr; max-width:1440px; margin:auto; }
@media (max-width: 900px){ .guidelines-doc .layout{ grid-template-columns:1fr; } }
.guidelines-doc aside { background: linear-gradient(180deg,var(--bg-subtle) 0%,#f5f7fa 100%); border-right:1px solid var(--border-soft); padding:2rem 1.75rem; position:sticky; top:5rem; align-self:start; max-height:calc(100vh - 5rem); overflow-y:auto; box-shadow:2px 0 15px rgba(0,0,0,0.05); }
@media (max-width: 900px){ .guidelines-doc aside{ position:static; max-height:none; } }
.guidelines-doc aside h3 { margin:0 0 1rem; font-size:0.9rem; letter-spacing:0.04em; color:var(--text-muted); text-transform:uppercase; }
.guidelines-doc aside ul { list-style:none; padding-left:0; margin:0; }
.guidelines-doc aside li { margin-bottom:0.4rem; }
.guidelines-doc aside a { text-decoration:none; color:var(--text-main); font-size:0.95rem; display:block; padding:0.35rem 0.75rem; border-radius:6px; transition:all 0.3s ease; border-left:3px solid transparent; }
.guidelines-doc aside a:hover { background:linear-gradient(90deg,rgba(243,155,47,0.1) 0%,transparent 100%); color:var(--orange); border-left-color:var(--orange); transform:translateX(4px); }
.guidelines-doc main { padding:3rem 4rem 6rem; background:rgba(255,255,255,0.95); border-radius:12px; margin:2rem; box-shadow:0 8px 32px rgba(0,0,0,0.08); }
@media (max-width: 900px){ .guidelines-doc main{ padding:2rem 1.5rem 4rem; margin:1rem; } }
.guidelines-doc section { max-width:75ch; margin-bottom:4rem; scroll-margin-top:6rem; }
.guidelines-doc h2 { font-size:1.6rem; margin-bottom:1.2rem; color:var(--purple); position:relative;
  background:linear-gradient(90deg,var(--purple) 0%,#8b4fab 100%); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
.guidelines-doc h2::after { content:""; position:absolute; left:0; bottom:-0.4rem; width:60px; height:3px; background:linear-gradient(90deg,var(--orange) 0%,#ffb84d 100%); border-radius:2px; }
.guidelines-doc h3 { font-size:1.25rem; margin-top:2.5rem; color:var(--purple); }
.guidelines-doc h4 { margin-top:1.75rem; font-size:1.05rem; color:var(--orange); }
.guidelines-doc ul { padding-left:1.4rem; }
.guidelines-doc ul ul { margin-top:0.4rem; }
.guidelines-doc a { color: var(--purple); }
.guidelines-doc .section-focus { background:linear-gradient(135deg,rgba(243,155,47,0.05) 0%,rgba(91,42,134,0.03) 100%); border-left:4px solid var(--orange); padding:1.5rem 1.75rem; border-radius:6px; margin:2rem 0; box-shadow:0 4px 12px rgba(243,155,47,0.1); }
.guidelines-doc pre { background:linear-gradient(135deg,#1a1f3a 0%,#0f172a 100%); color:#e5e7eb; padding:1.75rem; border-radius:10px; font-size:0.9rem; line-height:1.55; overflow-x:auto; box-shadow:0 8px 24px rgba(0,0,0,0.2); border:1px solid rgba(229,231,235,0.1); user-select:text; white-space:pre; }
.guidelines-doc table { width:100%; border-collapse:collapse; margin-top:1rem; }
.guidelines-doc th, .guidelines-doc td { border:1px solid var(--border-soft); padding:0.75rem 1rem; text-align:left; vertical-align:top; font-size:0.95rem; }
.guidelines-doc th { background:rgba(91,42,134,0.06); color:var(--purple); }
.guidelines-doc .template-tools { display:flex; align-items:center; gap:0.8rem; margin:0.4rem 0 1rem; }
.guidelines-doc .copy-template-btn { border:1px solid rgba(91,42,134,0.25); background:linear-gradient(180deg,#ffffff 0%,#f6f2fb 100%); color:var(--purple); font-size:0.9rem; font-weight:600; border-radius:8px; padding:0.5rem 0.9rem; cursor:pointer; transition:all 0.2s ease; }
.guidelines-doc .copy-template-btn:hover { border-color:rgba(91,42,134,0.55); transform:translateY(-1px); box-shadow:0 4px 10px rgba(91,42,134,0.14); }
.guidelines-doc .copy-template-status { font-size:0.88rem; color:var(--text-muted); min-height:1.2rem; }
.guidelines-doc .appendix-divider { margin:4.5rem 0 2.5rem; display:flex; align-items:center; gap:1rem; color:var(--purple); }
.guidelines-doc .appendix-divider::before, .guidelines-doc .appendix-divider::after { content:""; flex:1; height:1px; background:linear-gradient(90deg,transparent 0%,rgba(91,42,134,0.45) 50%,transparent 100%); }
.guidelines-doc .appendix-divider span { font-size:0.82rem; font-weight:700; letter-spacing:0.18em; text-transform:uppercase; padding:0.35rem 0.8rem; border-radius:999px; border:1px solid rgba(91,42,134,0.2); background:rgba(91,42,134,0.06); }
.guidelines-doc .appendix-section { background:linear-gradient(180deg,rgba(247,248,252,0.8) 0%,rgba(255,255,255,0.95) 100%); border:1px solid rgba(91,42,134,0.12); border-radius:12px; padding:1.75rem 2rem; }
.guidelines-doc .appendix-section + .appendix-section { margin-top:2rem; }
`;

const SubmissionGuidelines = () => {
  const [status, setStatus] = useState("");
  const preRef = useRef<HTMLPreElement>(null);

  const copyTemplate = async () => {
    try {
      await navigator.clipboard.writeText(README_TEMPLATE);
      setStatus("Template copied to clipboard.");
    } catch {
      setStatus("Copy failed. Select the template text and copy manually.");
    }
  };

  useEffect(() => {
    if (!status) return;
    const t = setTimeout(() => setStatus(""), 3500);
    return () => clearTimeout(t);
  }, [status]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <style>{STYLES}</style>
      <div className="guidelines-doc">
        <div className="layout">
          <aside>
            <h3>Contents</h3>
            <ul>
              <li><a href="#section-1">1. Introduction</a></li>
              <li><a href="#section-2">2. Before You Submit</a></li>
              <li><a href="#section-3">3. How to Submit</a></li>
              <li><a href="#section-4">4. Final remarks</a></li>
              <h3>Appendices</h3>
              <li><a href="#appendix-a1">A.1 – Code types</a></li>
              <li><a href="#appendix-a2">A.2 – Keywords</a></li>
              <li><a href="#appendix-a3">A.3 – README template</a></li>
            </ul>
          </aside>

          <main>
            <section id="section-1">
              <h2>1. Introduction</h2>
              <p>
                The RS4RT registry is intended as a comprehensive collection of open-source
                software for the radiation therapy community.
              </p>
              <p>
                RS4RT is hosted as a community in the{" "}
                <a href="https://research-software-directory.org/" target="_blank" rel="noopener noreferrer">
                  Research Software Directory (RSD)
                </a>
                , a free online platform that showcases the impact of research software on research and society.
              </p>
              <p>
                Please follow the guidelines below to ensure a smooth submission process.
                These guidelines also serve as good practice for standardizing the software
                and making it more accessible to the radiotherapy community.
              </p>
            </section>

            <section id="section-2">
              <h2>2. Before You Submit</h2>
              <p>
                RSD will harvest and update all information automatically if your software
                is hosted on a Git repository and it has a{" "}
                <a href="https://research-software.dev/documentation/users/adding-software/#software-doi" target="_blank" rel="noopener noreferrer">
                  software DOI
                </a>
                . Neither of them is compulsory, but they are highly recommended:
              </p>
              <ul>
                <li><strong>Git repository</strong>: automatic update of licence, programming language, description, and commit history.</li>
                <li><strong>Software DOI</strong>: automatic update of the versioning and contributors.</li>
              </ul>

              <h3>2.1 Git repository available</h3>

              <h4>Git Repository Setup</h4>
              <p>
                Your project must be hosted on a public platform (GitHub, GitLab, or Bitbucket).
                The repository should be publicly accessible without restrictions.
                If this is not possible, at least an executable must be available.
              </p>

              <h4>Required Files and Content</h4>

              <p><strong>License</strong></p>
              <p>
                Include a recognized open source license (
                <a href="https://spdx.org/licenses/" target="_blank" rel="noopener noreferrer">SPDX list</a>
                ). The license file must be present in the root directory.
              </p>

              <p><strong>README</strong></p>
              <ul>
                <li>Project title and short description</li>
                <li>Installation instructions</li>
                <li>Getting started and usage examples</li>
                <li>Link to extended user guide (if available)</li>
                <li>Contribution guidelines (optional)</li>
                <li>Contact person (name, email, institution)</li>
              </ul>

              <p>
                You can fill in the attached template, which will be displayed in the software
                description in RSD (<a href="#appendix-a3">Appendix A.3</a>).
              </p>

              <p><strong>Versioning</strong><br />Use a clear versioning scheme.</p>

              <p><strong>Project Description</strong><br />Provide a concise summary of what your software does, the problem it solves, and its target audience.</p>

              <h3>2.2 Git repository not available</h3>
              <p>
                If the Git repository is unavailable, please use the <strong>custom software description</strong> (see <a href="#section-3">Section 3</a>) to link to an external webpage where the software can be downloaded.{" "}
                <a href="https://primoproject.net/" target="_blank" rel="noopener noreferrer">PRIMO</a> is an example of software not available on GitHub. A comprehensive webpage with the software description and documentation is provided.
              </p>
              <p>
                The custom software description can be used to include all the information not accessible through the Git repository (e.g. versioning, contributors, detailed documentation).
              </p>
            </section>

            <section id="section-3">
              <h2>3. How to Submit</h2>
              <p><strong>Fill out the <a href="https://forms.gle/x4vS5qYSBoKdrJrbA" target="_blank" rel="noopener noreferrer">Google Form</a> with the following information.</strong></p>
              <p>
                The information required for the submission is listed below. This information is used to create the software entry in RSD and to make it discoverable by the community. If you want to know more about the software entry in RSD, please visit the{" "}
                <a href="https://research-software-directory.org/documentation/users/adding-software/#software-entry" target="_blank" rel="noopener noreferrer">RSD documentation</a>.
              </p>

              <div className="section-focus">
                <ul>
                  <li><strong>Software Name</strong></li>
                  <li><strong>Short description</strong> (max 300 characters)</li>
                  <li>
                    <strong>Code Type</strong> (see <em><a href="#appendix-a1">Appendix A.1</a></em>)
                    <ul>
                      <li>Application</li>
                      <li>Library / Toolkit</li>
                      <li>Script / Plugin</li>
                    </ul>
                  </li>
                  <li><strong>Keywords</strong> (max 3, see <em><a href="#appendix-a2">Appendix A.2</a></em>)</li>
                  <li>
                    <strong>Field</strong>
                    <ul>
                      <li>Protons / Ions</li>
                      <li>Photons</li>
                      <li>Brachytherapy</li>
                      <li>Multiple purpose</li>
                    </ul>
                  </li>
                  <li><strong>License</strong> (SPDX, "Other", or "None")</li>
                </ul>

                <h4>If the software is stored on GitHub/GitLab/Bitbucket</h4>
                <ul>
                  <li><strong>Source Code link:</strong> GitHub/GitLab/Bitbucket URL</li>
                  <li>
                    <strong>Raw README URL:</strong>
                    <ul>
                      <li>You need to link to the <strong>raw</strong> version of the readme file. For example on GitHub, you can click on the "Raw" button when viewing the README file. Then copy the URL from the browser's address bar.</li>
                      <li>It is used as software description. See the template in <a href="#appendix-a3">Appendix A.3</a> for reference.</li>
                    </ul>
                  </li>
                </ul>

                <h4>If the software is NOT stored on GitHub/GitLab/Bitbucket</h4>
                <ul>
                  <li>
                    <strong>Custom description</strong> (max 10000 characters)
                    <ul>
                      <li>If you don't have a GitHub/GitLab/Bitbucket repository, you can provide a custom description of your software.</li>
                      <li>You can make a Markdown file with the description and then copy its content in the form.</li>
                      <li>It is used as software description, therefore include all the relevant information of your software that cannot be retrieved from a Git repository (e.g., versioning, contributors, contact information, detailed documentation, programming language). See the template in <a href="#appendix-a3">Appendix A.3</a> for reference.</li>
                    </ul>
                  </li>
                  <li><strong>Programming Language:</strong> This information will not be displayed in RSD. It is used for internal purposes only. Include it in the custom description if relevant.</li>
                  <li><strong>Latest Commit:</strong> This information will not be displayed in RSD. It is used for internal purposes only. Include it in the custom description if relevant.</li>
                </ul>

                <h4><strong>Optional information</strong></h4>
                <ul>
                  <li><strong>Websites:</strong> This information will not be displayed in RSD. It is used for internal purposes only. Include it in the custom description if relevant.</li>
                  <li><strong>Software DOI:</strong> Software DOI obtained via Zenodo or other DOI providers. More information on the software DOI can be found <a href="https://research-software.dev/documentation/users/adding-software/#software-doi" target="_blank" rel="noopener noreferrer">here</a>.</li>
                  <li><strong>Reference paper:</strong> DOI of an article or artifact that primarily describes your software.</li>
                  <li><strong>Related output:</strong> DOI(s) of related papers to the software. If more than one, separate them with commas.</li>
                  <li><strong>Contact person / ORCID:</strong> RSD has access to the ORCID database. Write the name or the ORCID of the contact person. If the contact person does not have an ORCID, write the contact information in the custom description.</li>
                  <li><strong>Logo:</strong> Upload a logo image for your software as raw URL. This will be displayed in RSD. See the GEANT4 URL as an example: <a href="https://geant4.web.cern.ch/assets/logo/g4logo-web.png" target="_blank" rel="noopener noreferrer">https://geant4.web.cern.ch/assets/logo/g4logo-web.png</a></li>
                </ul>
              </div>
            </section>

            <section id="section-4">
              <h2>4. Final remarks</h2>
              <p>
                The submission form is used for the first submission.
                If the software is correctly stored on a public Git repository, RSD
                will update the information automatically.
              </p>
              <p>Submissions that do not meet the minimum requirements may be rejected.</p>
            </section>

            <div className="appendix-divider" id="appendices" aria-label="Appendices divider">
              <span>Appendices</span>
            </div>

            <section id="appendix-a1" className="appendix-section">
              <h2>Appendix A.1 – Code type description</h2>
              <table>
                <thead>
                  <tr>
                    <th>Code Type</th>
                    <th>Short Description</th>
                    <th>Detailed Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Library / Toolkit</strong></td>
                    <td>Building blocks for developers. A set of software components (functions, algorithms, classes) used to build new applications.</td>
                    <td>This is not an executable program and does not have its own user interface. It is designed to be integrated by programmers into other software to add specific functionalities (e.g., dose calculation, DICOM image handling, etc.).</td>
                  </tr>
                  <tr>
                    <td><strong>Application</strong></td>
                    <td>A complete, ready-to-use program. A self-contained program with its own user interface (GUI or command-line) to perform specific tasks. Although labelled ready-to-use, it is expected that all software should be tested and validated by the user prior to use.</td>
                    <td>It can be installed and/or run directly by the end-user. This category includes: Stand-alone software, Web applications (accessed via a browser), self-contained toolboxes that run within an environment like MATLAB or Python but have their own defined interface (either GUI or command-line).</td>
                  </tr>
                  <tr>
                    <td><strong>Script / Plugin</strong></td>
                    <td>An add-on for other software. A component that adds functionality to an existing host application (either commercial or open-source).</td>
                    <td>It can be either a plug-in software depending on other applications or it can run on its own but it is designed for a specific task. Examples: scripts for RayStation or Eclipse, plugins for 3D Slicer or ImageJ; a script that converts file formats, calculates an ROI volume from an RTSTRUCT file, or extracts specific data from a DICOM file.</td>
                  </tr>
                </tbody>
              </table>
            </section>

            <section id="appendix-a2" className="appendix-section">
              <h2>Appendix A.2 – Keywords description</h2>
              <p>Below each keyword category is an exhaustive list of sub-categories that would be appropriate for the given keyword.</p>

              <h3>Treatment Planning &amp; Dosimetry</h3>
              <ul>
                <li>Dose Calculation Algorithms</li>
                <li>Monte Carlo Simulations</li>
                <li>Plan Optimization</li>
                <li>Beam Modeling</li>
                <li>Radiobiological Modeling</li>
                <li>Plan complexity</li>
                <li>Plan evaluation</li>
              </ul>

              <h3>Imaging &amp; Image Processing</h3>
              <ul>
                <li>Image Registration</li>
                <li>Image Reconstruction</li>
                <li>Segmentation</li>
                <li>Synthetic CT</li>
                <li>Motion Management</li>
                <li>Radiomics</li>
              </ul>

              <h3>Software Engineering &amp; Data Infrastructure</h3>
              <ul>
                <li>DICOM-RT Tools (read/export dicom)</li>
                <li>PACS Integration</li>
                <li>Interoperability</li>
                <li>Workflow Automation</li>
                <li>Rendering and visualization</li>
              </ul>

              <h3>Clinical workflow and applications</h3>
              <ul>
                <li>Stereotactic Radiosurgery (SRS/SBRT)</li>
                <li>Adaptive Radiation Therapy</li>
                <li>Image-Guided Radiation Therapy (IGRT)</li>
                <li>Intraoperative Radiation Therapy (IORT)</li>
                <li>Automated treatment planning</li>
                <li>Knowledge-based treatment planning</li>
              </ul>

              <h3>Quality Assurance (QA)</h3>
              <ul>
                <li>Machine QA Tools</li>
                <li>Patient-Specific QA</li>
                <li>In Vivo Dosimetry</li>
                <li>Log File Analysis</li>
                <li>EPID/Film Dosimetry</li>
                <li>QA Phantoms &amp; Simulations</li>
              </ul>

              <h3>Artificial Intelligence</h3>
              <ul>
                <li>Auto-Segmentation</li>
                <li>Outcome prediction (toxicity, outcomes)</li>
                <li>Radiomics</li>
                <li>Automatic Planning</li>
                <li>Digital Twin / Virtual Patient Modeling</li>
                <li>Uncertainty quantification</li>
              </ul>
            </section>

            <section id="appendix-a3" className="appendix-section">
              <h2>Appendix A.3 – README markdown template</h2>
              <div className="template-tools">
                <button type="button" className="copy-template-btn" onClick={copyTemplate}>
                  Copy README template
                </button>
                <span className="copy-template-status" aria-live="polite">{status}</span>
              </div>
              <pre ref={preRef} tabIndex={0}>{README_TEMPLATE}</pre>
            </section>
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SubmissionGuidelines;
