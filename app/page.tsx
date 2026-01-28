"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const content = {
  de: {
    name: "Roman Sharov",
    role: "Product Designer",
    greeting: "Ich begrüße Sie auf meinem Web-Portfolio!",
    subGreeting: "Hier finden Sie die Info über mich und meine aktuellen Projekte.",
    aboutTitle: "Über mich",
    aboutLines: [
      "30 Jahre alt",
      "Bachelor of Engineer OTH Amberg-Weiden",
      "Medientechnik und Medienproduktion mit dem Schwerpunkt UI/UX Design",
      "Seit 2022 beschäftige ich mich im Bereich UI/UX Design",
      "Enge Zusammenarbeit mit Ki-Tools im Prozess des UI/UX Desigris",
      "Ziel meiner Arbert: Intuitive und attraktive Designgestaltung"
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
    location: "Nürnberg/Amberg/Regensburg, Bayern",
    tasks: [
      "Gestaltung und Anpassung des Designs der Landingpage und Webplattform für die Anmeldung"
    ]
  },
  { 
    date: "08/2022 - 04/2024", 
    company: "sepp.med GmbH",
    location: "Röttenbach, Bayern",
    tasks: [
      "Entwicklung und Prototyping eines digitalen Produkts",
      "Kreative Recherche und Analyse von Nutzerbedürfnissen",
      "Gestaltung benutzerfreundlicher Oberflächen"
    ]
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
    pricingTitle: "Preise für die Dientsleistungen",
    contactTitle: "Kontakt mit mir"
  },
  en: {
    name: "Roman Sharov",
    role: "Product Designer",
    greeting: "Welcome to my web portfolio!",
    subGreeting: "Here you will find info about me and my current projects.",
    aboutTitle: "About me",
    aboutLines: [
      "30 years old",
      "Bachelor of Engineering OTH Amberg-Weiden",
      "Media Technology and Production (Focus on UI/UX)",
      "Working in UI/UX Design since 2022",
      "Close collaboration with AI tools in design process",
      "Goal: Intuitive and attractive design"
    ],
    experienceTitle: "Professional Experience",
experience: [
  { 
    date: "04/2024 - present", 
    company: "DEPRAG SCHULZ GMBH u. CO. KG",
    location: "Amberg, Germany",
    tasks: [
      "Conducting user research and requirement analysis from a user-centric perspective",
      "Deriving and creating User Stories, Use Cases, Customer Journeys, and wireframes for navigation logic",
      "Designing and developing UI/UX solutions based on identified user needs",
      "Designing and implementing intuitive user interfaces (e.g., for tablet applications)",
      "Developing interactive prototypes to visualize and validate design concepts",
      "Close collaboration with development teams and Product Owners to align design solutions",
      "Active participation in team meetings for planning and managing design projects",
      "Supporting the integration and testing phase in close cooperation with engineering",
      "Assisting with manual testing in the experimental department",
      "Creating user manuals and technical documentation",
      "Concept and implementation of marketing campaigns (including editorial planning, social media, and video content)"
    ]
  },
  { 
    date: "05/2024 - 07/2024", 
    company: "Start-Up 'DoTogether'",
    location: "Nuremberg/Amberg/Regensburg, Germany",
    tasks: [
      "Designing and adapting the landing page and web platform for user registration"
    ]
  },
  { 
    date: "08/2022 - 04/2024", 
    company: "sepp.med GmbH",
    location: "Roettenbach, Germany",
    tasks: [
      "Development and prototyping of a digital product",
      "Creative research and analysis of user needs",
      "Designing user-friendly interfaces"
    ]
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
    pricingTitle: "Pricing for Services",
    contactTitle: "Contact me"
  }
};

export default function Home() {
  const [lang, setLang] = useState<'de' | 'en'>('de');
  const t = content[lang];

  return (
    <div className="bg-white text-black min-h-screen font-sans selection:bg-gray-100">
      {/* Navigation */}
      <nav className="max-w-6xl mx-auto flex justify-between items-center py-6 px-6 sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <span className="font-bold text-lg border-b-2 border-black tracking-tight uppercase">Portfolio</span>
        <button 
          onClick={() => setLang(lang === 'de' ? 'en' : 'de')}
          className="px-4 py-1.5 border border-black rounded-full text-xs font-bold hover:bg-black hover:text-white transition-all uppercase tracking-widest"
        >
          {lang === 'de' ? 'EN' : 'DE'}
        </button>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row gap-12 mb-32 items-start">
          <div className="w-full md:w-1/4">
            <div className="aspect-[3/4] rounded-lg overflow-hidden bg-gray-100 shadow-sm border border-gray-100">
              <img src="/roman.jpg" alt={t.name} className="w-full h-full object-cover transition-opacity duration-500" />
            </div>
            <h1 className="font-bold text-2xl mt-6 tracking-tight">{t.name}</h1>
            <p className="text-gray-500 text-sm font-medium">{t.role}</p>
          </div>
          <div className="w-full md:w-3/4 flex flex-col justify-center pt-4">
            <h2 className="text-4xl md:text-6xl font-light leading-[1.15] mb-8 text-slate-900">
              {t.greeting}
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 font-light border-l-2 border-gray-100 pl-6 italic">
              {t.subGreeting}
            </p>
          </div>
        </section>

        {/* Über mich Section */}
        <section className="mb-32 grid md:grid-cols-2 gap-12 items-center border-t border-gray-100">
          <div className="py-8">
            <h2 className="text-3xl font-bold mb-8 tracking-tight">{t.aboutTitle}</h2>
            <ul className="space-y-4 text-lg text-slate-700">
              {t.aboutLines.map((line, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="text-gray-300 mt-1.5">•</span> <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="py-8">
            <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
              <img src="/diplom.jpg" alt="Diploma" className="w-full h-auto" />
            </div>
          </div>
        </section>

        {/* Berufserfahrung Section */}
      <section className="mb-32">
        <h2 className="text-3xl font-bold mb-12 tracking-tight">{t.experienceTitle}</h2>
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
                    <li key={index} className="text-gray-600 font-light leading-relaxed flex items-start gap-3">
                      <span className="text-blue-500 mt-1.5 text-xs">■</span>
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

        {/* Projects Grid */}
        <section className="mb-32">
          <h2 className="text-3xl font-bold mb-10 tracking-tight">{t.projectsTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {t.projects.map((project, i) => (
          <Link 
            href={
              project.title.includes('E-scooter') ? '/e-scooter' : 
              project.title.includes('MBTsuite') ? '/mbt-suite' : 
              project.title.includes('ChargeEasy') ? '/charge-easy' : '#'
            }
            key={i}
            className="block"
            >
              <div className="group cursor-pointer">
                <div className="aspect-video rounded-2xl mb-6 overflow-hidden border border-gray-100 shadow-sm transition-all group-hover:shadow-xl bg-gray-50">
                  <img 
                    src={project.img} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h4 className="font-bold text-xl mb-1 tracking-tight group-hover:underline underline-offset-4">
                  {project.title}
                </h4>
                <p className="text-gray-400 font-light italic text-sm uppercase tracking-wider">
                  {project.cat}
                </p>
              </div>
            </Link>
          ))}
          </div>
        </section>

        {/* Pricing & Contact */}
        <footer className="pt-20 border-t border-gray-100">
          <div className="grid md:grid-cols-2 gap-16 mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-6 tracking-tight">{t.pricingTitle}</h2>
              <p className="text-gray-500 font-light italic leading-relaxed">
                Preise auf Anfrage je nach Projektumfang und Anforderungen.
              </p>
            </div>
            <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100">
              <h2 className="font-bold text-2xl mb-8 tracking-tight">{t.contactTitle}</h2>
              <div className="space-y-4">
                <p className="text-gray-600">E-mail: <span className="text-black font-semibold ml-2">roman-sharov@web.de</span></p>
                <p className="text-gray-600">LinkedIn: <a href="https://linkedin.com/in/roman-sharov" className="text-black font-semibold underline underline-offset-4 ml-2">roman-sharov</a></p>
              </div>
            </div>
          </div>
          <p className="text-center text-gray-300 text-xs py-10 uppercase tracking-[0.2em]">
            © 2026 Roman Sharov • Powered by Next.js
          </p>
        </footer>
      </main>
    </div>
  );
}