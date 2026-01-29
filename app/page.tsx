"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const content = {
  de: {
    name: "Roman Sharov",
    role: "Product Designer",
    greeting: "Willkommen auf meinem Portfolio!",
    subGreeting: "Hier finden Sie Informationen über mich und meine aktuellen Projekte.",
    aboutTitle: "Über mich",
    aboutLines: [
      "30 Jahre alt",
      "Bachelor of Engineer OTH Amberg-Weiden",
      "Medientechnik und Medienproduktion mit dem Schwerpunkt UI/UX Design",
      "Seit 2022 beschäftige ich mich im Bereich UI/UX Design",
      "Enge Zusammenarbeit mit Ki-Tools im Prozess des UI/UX Design",
      "Ziel meiner Arbeit: Intuitive und attraktive Designgestaltung"
    ],
    experienceTitle: "Berufserfahrung",
    experience: [
      { 
        date: "04/2024 - heute", 
        company: "DEPRAG SCHULZ GMBH u. CO. KG",
        location: "Amberg, Bayern",
        tasks: [
          "Durchführung von Nutzerrecherchen und Anforderungsanalysen aus der Benutzerperspektive",
          "Ableitung und Erstellung von User Stories, Use Cases, Customer Journeys sowie Wireframes",
          "Konzeption und Ausarbeitung von UI/UX-Designs auf Basis von Nutzerbedürfnissen",
          "Gestaltung und Umsetzung intuitiver Benutzeroberflächen, z. B. für Tablet-Anwendungen",
          "Entwicklung interaktiver Prototypen zur Visualisierung und Validierung von Designideen",
          "Enge Zusammenarbeit mit Entwicklungsteams und Product Ownern",
          "Aktive Mitwirkung an Teammeetings zur Planung und Steuerung von Designprojekten",
          "Begleitung der Integrations- und Testphase in enger Zusammenarbeit mit der Entwicklung",
          "Unterstützung bei manuellen Tests in der Versuchsabteilung",
          "Erstellung von Benutzerhandbüchern und technischer Dokumentation",
          "Konzeption und Umsetzung von Marketingkampagnen (Social Media, Newsletter, Video-Content)"
        ]
      },
      { 
        date: "05/2024 - 07/2024", 
        company: "Start Up “DoTogether”",
        location: "Bayern",
        tasks: ["Gestaltung und Anpassung des Designs der Landingpage und Webplattform für die Anmeldung"]
      },
      { 
        date: "08/2022 - 04/2024", 
        company: "sepp.med GmbH",
        location: "Röttenbach, Bayern",
        tasks: ["Entwicklung und Prototyping eines digitalen Produkts", "Kreative Recherche und Analyse von Nutzerbedürfnissen", "Gestaltung benutzerfreundlicher Oberflächen"]
      }
    ],
    projectsTitle: "Projekte",
    projects: [
      { title: "Studienprojekt 'E-scooter'", cat: "Screen Design", img: "/E-scooter.jpg" },
      { title: "'MBTsuite Next' von sepp.med GmbH", cat: "UI/UX Design", img: "/mbt-suite.jpg" },
      { title: "Projekt der Bachelorarbeit 'ChargeEasy'", cat: "Screen Design", img: "/charge-easy.jpg" },
      { title: "Tierkommunikation & Katzenpsychologie", cat: "UI/UX Design", img: "/tierkommunikation.jpg" },
      { title: "Hello Moon - Mobile App", cat: "UI/UX Design", img: "/hello_moon.jpg" },
      { title: "Start-Up Projekt 'DoTogether'", cat: "UI/UX Design", img: "/do_together.jpg" }
    ],
    pricingTitle: "Leistungen & Preise",
    pricingSub: "Individuelle Lösungen für Ihr Business. Startpreise pro Projekt.",
    pricingData: [
      { id: 1, service: "Firmenlogo", price: "ab €250", comment: "Inkl. Styleguide & Konzepte." },
      { id: 2, service: "LinkedIn Banner", price: "ab €50", comment: "Professionelles Branding für Ihr Profil." },
      { id: 3, service: "Social Media Paket", price: "ab €200", comment: "10 Grafiken im einheitlichen Stil." },
      { id: 4, service: "UI/UX Design (Figma)", price: "ab €400", comment: "Interaktive Prototypen & Konzepte." },
      { id: 5, service: "Landing Page (Entwicklung)", price: "ab €300", comment: "Technische Umsetzung Ihres Designs." },
      { id: 6, service: "Landing Page (Full Service)", price: "ab €600", comment: "Design & Entwicklung aus einer Hand." },
      { id: 7, service: "App Design", price: "ab €1.500", comment: "Komplettes mobiles User Interface." }
    ],
    ctaButton: "Angebot anfordern",
    contactTitle: "Kontakt"
  },
  en: {
    name: "Roman Sharov",
    role: "Product Designer",
    greeting: "Welcome to my portfolio!",
    subGreeting: "Discover my background and latest design projects.",
    aboutTitle: "About Me",
    aboutLines: [
      "30 years old",
      "Bachelor of Engineering (OTH Amberg-Weiden)",
      "Media Technology & Production (UI/UX Focus)",
      "Working in UI/UX Design since 2022",
      "Optimized workflow using AI-driven design tools",
      "Goal: Creating intuitive and attractive digital experiences"
    ],
    experienceTitle: "Professional Experience",
    experience: [
      { 
        date: "04/2024 - present", 
        company: "DEPRAG SCHULZ GMBH u. CO. KG",
        location: "Amberg, Germany",
        tasks: [
          "Conducting user research and requirement analysis from a user-centric perspective",
          "Deriving and creating User Stories, Use Cases, Customer Journeys, and wireframes",
          "Designing and developing UI/UX solutions based on identified user needs",
          "Designing and implementing intuitive user interfaces (e.g., for tablet applications)",
          "Developing interactive prototypes to visualize and validate design concepts",
          "Close collaboration with development teams and Product Owners",
          "Active participation in team meetings for planning and managing design projects",
          "Supporting the integration and testing phase in close cooperation with engineering",
          "Assisting with manual testing in the experimental department",
          "Creating user manuals and technical documentation",
          "Concept and implementation of marketing campaigns (Social Media, Newsletter, Video-Content)"
        ]
      },
      { 
        date: "05/2024 - 07/2024", 
        company: "Start-Up 'DoTogether'",
        location: "Germany",
        tasks: ["Designing and adapting the landing page and web platform for registration"]
      },
      { 
        date: "08/2022 - 04/2024", 
        company: "sepp.med GmbH",
        location: "Germany",
        tasks: ["Digital product prototyping", "User need analysis", "User interface design"]
      }
    ],
    projectsTitle: "Projects",
    projects: [
      { title: "Study Project 'E-scooter'", cat: "Screen Design", img: "/E-scooter.jpg" },
      { title: "'MBTsuite Next' by sepp.med GmbH", cat: "UI/UX Design", img: "/mbt-suite.jpg" },
      { title: "Bachelor Thesis 'ChargeEasy'", cat: "Screen Design", img: "/charge-easy.jpg" },
      { title: "Animal Communication Project", cat: "UI/UX Design", img: "/tierkommunikation.jpg" },
      { title: "Hello Moon - Mobile App", cat: "UI/UX Design", img: "/hello_moon.jpg" },
      { title: "Start-Up Project 'DoTogether'", cat: "UI/UX Design", img: "/do_together.jpg" }
    ],
    pricingTitle: "Services & Pricing",
    pricingSub: "Custom solutions for your business. Starting prices per project.",
    pricingData: [
      { id: 1, service: "Company Logo", price: "from €250", comment: "Incl. style guide & concepts." },
      { id: 2, service: "LinkedIn Banner", price: "from €50", comment: "Professional branding for your profile." },
      { id: 3, service: "Social Media Package", price: "from €200", comment: "10 graphics in a unified style." },
      { id: 4, service: "UI/UX Design (Figma)", price: "from €400", comment: "Interactive prototypes & concepts." },
      { id: 5, service: "Landing Page (Dev)", price: "from €300", comment: "Technical implementation of your design." },
      { id: 6, service: "Landing Page (Full)", price: "from €600", comment: "Design & development from a single source." },
      { id: 7, service: "App Design", price: "from €1.500", comment: "Complete mobile user interface." }
    ],
    ctaButton: "Get a Quote",
    contactTitle: "Contact"
  }
};

export default function Home() {
  const [lang, setLang] = useState<'de' | 'en'>('de');
  const t = content[lang];
  const email = "roman-sharov@web.de";

  return (
    <div className="bg-white text-black min-h-screen font-sans selection:bg-gray-100">
      <nav className="max-w-6xl mx-auto flex justify-between items-center py-6 px-6 sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <span className="font-bold text-lg border-b-2 border-black tracking-tight uppercase">Portfolio</span>
        <button onClick={() => setLang(lang === 'de' ? 'en' : 'de')} className="px-4 py-1.5 border border-black rounded-full text-xs font-bold hover:bg-black hover:text-white transition-all uppercase tracking-widest">
          {lang === 'de' ? 'EN' : 'DE'}
        </button>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <section className="flex flex-col md:flex-row gap-12 mb-32 items-start">
          <div className="w-full md:w-1/4">
            <div className="aspect-[3/4] rounded-lg overflow-hidden bg-gray-100 shadow-sm border border-gray-100">
              <img src="/roman.jpg" alt={t.name} className="w-full h-full object-cover" />
            </div>
            <h1 className="font-bold text-2xl mt-6 tracking-tight">{t.name}</h1>
            <p className="text-gray-500 text-sm font-medium">{t.role}</p>
          </div>
          <div className="w-full md:w-3/4 pt-4">
            <h2 className="text-4xl md:text-6xl font-light leading-[1.15] mb-8 text-slate-900">{t.greeting}</h2>
            <p className="text-xl md:text-2xl text-gray-400 font-light border-l-2 border-gray-100 pl-6 italic">{t.subGreeting}</p>
          </div>
        </section>

        <section className="mb-32 grid md:grid-cols-2 gap-12 items-center border-t border-gray-100 pt-16">
          <div>
            <h2 className="text-3xl font-bold mb-8 tracking-tight uppercase text-sm">{t.aboutTitle}</h2>
            <ul className="space-y-4 text-lg text-slate-700">
              {t.aboutLines.map((line, i) => (
                <li key={i} className="flex gap-3 items-start"><span className="text-gray-300 mt-1.5">•</span> <span>{line}</span></li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm"><img src="/diplom.jpg" alt="Diploma" className="w-full h-auto" /></div>
        </section>

        <section className="mb-32">
          <h2 className="text-3xl font-bold mb-12 tracking-tight uppercase text-sm">{t.experienceTitle}</h2>
          <div className="space-y-16">
            {t.experience.map((exp, i) => (
              <div key={i} className="grid md:grid-cols-4 gap-8 border-t border-gray-100 pt-10">
                <div className="flex flex-col gap-2">
                  <span className="text-gray-400 font-medium tabular-nums">{exp.date}</span>
                  <span className="text-xs uppercase tracking-widest text-gray-500">{exp.location}</span>
                </div>
                <div className="md:col-span-3">
                  <h4 className="font-bold text-2xl mb-6">{exp.company}</h4>
                  <ul className="space-y-3">
                    {exp.tasks.map((task, index) => (
                      <li key={index} className="text-gray-600 font-light leading-relaxed flex items-start gap-3"><span className="text-blue-500 mt-1.5 text-xs">■</span>{task}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-40">
          <h2 className="text-3xl font-bold mb-10 tracking-tight uppercase text-sm">{t.projectsTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {t.projects.map((project, i) => (
              <Link href={project.title.includes('E-scooter') ? '/e-scooter' : project.title.includes('MBTsuite') ? '/mbt-suite' : project.title.includes('ChargeEasy') ? '/charge-easy' : '#'} key={i} className="block group">
                <div className="aspect-video rounded-2xl mb-6 overflow-hidden border border-gray-100 shadow-sm transition-all group-hover:shadow-xl bg-gray-50">
                  <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <h4 className="font-bold text-xl mb-1 tracking-tight group-hover:underline underline-offset-4">{project.title}</h4>
                <p className="text-gray-400 font-light italic text-sm uppercase tracking-wider">{project.cat}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-40 border-t-2 border-black pt-20">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 uppercase text-sm">{t.pricingTitle}</h2>
            <p className="text-gray-400 text-xl font-light">{t.pricingSub}</p>
          </div>
          <div className="overflow-x-auto mb-12">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="uppercase text-[10px] tracking-[0.2em] text-gray-400 border-b border-gray-100">
                  <th className="py-8 px-4 font-semibold w-12 text-black">№</th>
                  <th className="py-8 px-4 font-semibold text-black">Service</th>
                  <th className="py-8 px-4 font-semibold text-black">Price</th>
                  <th className="py-8 px-4 font-semibold hidden md:table-cell text-black">Details</th>
                </tr>
              </thead>
              <tbody>
                {t.pricingData.map((item) => (
                  <tr key={item.id} className="border-b border-gray-100 hover:bg-slate-50 transition-all">
                    <td className="py-8 px-4 text-gray-300 font-mono text-sm">{item.id}</td>
                    <td className="py-8 px-4 font-bold text-lg">{item.service}</td>
                    <td className="py-8 px-4 font-mono font-medium text-blue-600 whitespace-nowrap">{item.price}</td>
                    <td className="py-8 px-4 text-gray-500 text-sm italic font-light hidden md:table-cell">{item.comment}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex flex-col items-center justify-center p-12 bg-gray-50 rounded-[40px] border border-gray-100">
            <a href={`mailto:${email}?subject=Project Inquiry`} className="px-12 py-5 bg-black text-white rounded-full text-sm font-bold uppercase tracking-widest hover:bg-blue-600 hover:scale-105 transition-all shadow-xl">
              {t.ctaButton}
            </a>
          </div>
        </section>

        <footer className="pt-20 border-t border-gray-100 pb-10">
          <div className="grid md:grid-cols-2 gap-16 mb-20">
            <div><h2 className="text-3xl font-bold mb-6 tracking-tight uppercase text-sm">{t.contactTitle}</h2><p className="text-gray-500 font-light italic leading-relaxed">Let's build something great together.</p></div>
            <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100">
              <div className="space-y-4">
                <p className="text-gray-600">Email: <span className="text-black font-semibold ml-2">{email}</span></p>
                <p className="text-gray-600">LinkedIn: <a href="https://linkedin.com/in/roman-sharov" className="text-black font-semibold underline underline-offset-4 ml-2">roman-sharov</a></p>
              </div>
            </div>
          </div>
          <p className="text-center text-gray-300 text-[10px] uppercase tracking-[0.3em] font-medium">© 2026 Roman Sharov</p>
        </footer>
      </main>
    </div>
  );
}