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
          "Close collaboration with development teams and Product Owner",
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
        {/* HERO SECTION */}
        <section className="flex flex-col md:flex-row gap-12 mb-12 items-start">
          <div className="w-full md:w-1/4">
            <div className="aspect-[3/4] rounded-lg overflow-hidden bg-gray-100 shadow-sm border border-gray-100">
              <img src="/roman.png" alt={t.name} className="w-full h-full object-cover" />
            </div>
            <h1 className="font-bold text-2xl mt-6 tracking-tight">{t.name}</h1>
            <p className="text-gray-500 text-sm font-medium">{t.role}</p>
          </div>
          <div className="w-full md:w-3/4 pt-4">
            <h2 className="text-4xl md:text-6xl font-light leading-[1.15] mb-8 text-slate-900">{t.greeting}</h2>
            <p className="text-xl md:text-2xl text-gray-400 font-light border-l-2 border-gray-100 pl-6 italic">{t.subGreeting}</p>
          </div>
        </section>

        {/* ÜBER MICH - Отступы уменьшены здесь */}
        <section className="mb-24 grid md:grid-cols-2 gap-12 items-center border-t border-gray-100 pt-8">
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

        {/* EXPERIENCE */}
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

        {/* PROJECTS */}
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

        {/* PRICING */}
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

        {/* FOOTER */}
        <footer className="pt-20 pb-10 border-t border-gray-100 text-center">
          <h2 className="text-2xl font-bold mb-8 uppercase tracking-widest">
            {lang === 'de' ? 'Kontakt mit mir' : 'Get in touch'}
          </h2>
          
          <div className="flex justify-center gap-6 mb-16">
            {/* Телефон */}
            <a href="tel:+491786064918" className="p-4 bg-black rounded-2xl hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </a>
            {/* Email */}
            <a href={`mailto:${email}`} className="p-4 bg-black rounded-2xl hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="https://linkedin.com/in/roman-sharov" target="_blank" className="p-4 bg-black rounded-2xl hover:scale-110 transition-transform">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>

          <div className="flex justify-end gap-4 text-[10px] uppercase tracking-widest text-gray-400">
            <Link href="/impressum" className="hover:text-black transition-colors">Impressum</Link>
            <span>|</span>
            <Link href="/datenschutz" className="hover:text-black transition-colors">Datenschutz</Link>
          </div>
        </footer>
      </main>
    </div>
  );
}