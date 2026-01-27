"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const projectContent = {
  de: {
    title: "Projekt der Bachelorarbeit 'ChargeEasy'",
    subtitle: "Mobile App Case Study",
    overviewTitle: "Projektüberblick",
    overviewText1: "Entwicklung eines Konzepts und Designs für eine mobile Applikation, die das Finden und Nutzen von E-Ladestationen vereinfacht.",
    overviewText2: "'ChargeEasy' – Intuitives Laden für Elektrofahrzeuge. Die App bündelt Informationen über Verfügbarkeit, Steckertypen und Preise in einer Hand.",
    taskTitle: "Meine Aufgabe",
    taskText: "Komplette Konzeption der User Experience, Erstellung von User Flows und das finale Interface Design im Rahmen der Bachelorarbeit.",
    processTitle: "Entwicklungsprozess",
    processDate: "März 2024 - Juli 2024",
    methodTitle: "Methodik",
    methodText: "Im Fokus stand eine barrierefreie Nutzung und eine schnelle Informationsvermittlung während des Ladevorgangs.",
    methodList: [
      "Wettbewerbsanalyse & User Research",
      "Wireframing & Prototyping (Figma)",
      "Usability Testing mit Fokusgruppen",
      "Finales UI Design & Dokumentation"
    ],
    backLink: "Zurück zur Übersicht",
    contactTitle: "Wollen Sie zusammenarbeiten?",
    contactSub: "Gerne beantworte ich Ihre Fragen per E-mail oder LinkedIn"
  },
  en: {
    title: "Bachelor Thesis Project 'ChargeEasy'",
    subtitle: "Mobile App Case Study",
    overviewTitle: "Project Overview",
    overviewText1: "Development of a concept and design for a mobile application that simplifies finding and using electric vehicle charging stations.",
    overviewText2: "'ChargeEasy' – Intuitive charging for electric vehicles. The app bundles information on availability, plug types, and pricing.",
    taskTitle: "My Task",
    taskText: "Complete UX conception, creation of user flows, and final interface design as part of the bachelor thesis.",
    processTitle: "Development Process",
    processDate: "March 2024 - July 2024",
    methodTitle: "Methodology",
    methodText: "The focus was on accessible use and fast information delivery during the charging process.",
    methodList: [
      "Competitor Analysis & User Research",
      "Wireframing & Prototyping (Figma)",
      "Usability Testing with focus groups",
      "Final UI Design & Documentation"
    ],
    backLink: "Back to Overview",
    contactTitle: "Want to work together?",
    contactSub: "I'd be happy to answer your questions via email or LinkedIn"
  }
};

export default function ChargeEasyPage() {
  const [lang, setLang] = useState<'de' | 'en'>('de');
  const t = projectContent[lang];

  return (
    <div className="bg-white text-black min-h-screen font-sans selection:bg-emerald-100">
      <nav className="max-w-6xl mx-auto flex justify-between items-center py-6 px-6 sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <Link href="/" className="font-bold text-lg border-b-2 border-black uppercase tracking-tight">
          Portfolio
        </Link>
        <button 
          onClick={() => setLang(lang === 'de' ? 'en' : 'de')}
          className="px-4 py-1.5 border border-black rounded-full text-xs font-bold hover:bg-black hover:text-white transition-all uppercase tracking-widest"
        >
          {lang === 'de' ? 'EN' : 'DE'}
        </button>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <header className="mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">{t.title}</h1>
          <p className="text-gray-400 text-xl italic">{t.subtitle}</p>
        </header>

        <div className="grid md:grid-cols-2 gap-16 mb-24 text-gray-700 leading-relaxed text-lg">
          <div>
            <h3 className="font-bold text-black uppercase tracking-widest text-sm mb-6">{t.overviewTitle}</h3>
            <p className="mb-6">{t.overviewText1}</p>
            <p className="p-6 bg-emerald-50 rounded-2xl border-l-4 border-emerald-500">
               {t.overviewText2}
            </p>
          </div>
          <div>
            <h3 className="font-bold text-black uppercase tracking-widest text-sm mb-6">{t.taskTitle}</h3>
            <p>{t.taskText}</p>
          </div>
        </div>

        {/* 1. Главный баннер (Герой) */}
        <section className="w-full mb-20">
          <div className="rounded-[40px] overflow-hidden bg-[#00FFB2] aspect-video flex items-center justify-center border border-gray-100 shadow-xl">
             <span className="text-emerald-900 font-bold uppercase tracking-widest">Main Mockup Placeholder</span>
          </div>
        </section>

        {/* 2. Секция процесса */}
        <div className="grid md:grid-cols-2 gap-16 mb-32 text-gray-700 leading-relaxed">
          <div>
            <h3 className="font-bold text-black uppercase tracking-widest text-sm mb-6">{t.processTitle}</h3>
            <p className="text-2xl font-light text-gray-400">{t.processDate}</p>
          </div>
          <div className="space-y-6 text-lg">
            <h3 className="font-bold text-black uppercase tracking-widest text-sm mb-6">{t.methodTitle}</h3>
            <p>{t.methodText}</p>
            <div className="space-y-3 pl-4 border-l-2 border-gray-100">
              {t.methodList.map((item, i) => (
                <p key={i}>• {item}</p>
              ))}
            </div>
          </div>
        </div>

        {/* 3. Галерея экранов */}
        <div className="space-y-12 mb-32">
          {[1, 2, 3].map((num) => (
            <div key={num} className="w-full aspect-video bg-gray-50 rounded-[40px] border border-dashed border-gray-200 flex items-center justify-center">
               <span className="text-gray-400 uppercase text-xs font-mono">App Screen Group {num}</span>
            </div>
          ))}
        </div>

        <footer className="bg-emerald-950 rounded-[40px] p-12 md:p-20 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">{t.contactTitle}</h2>
          <p className="text-xl mb-10 italic text-emerald-300/60">{t.contactSub}</p>
          <a href="mailto:roman.sharov@web.de" className="text-2xl md:text-3xl font-bold underline underline-offset-8 hover:text-emerald-400 transition-colors">
            roman.sharov@web.de
          </a>
        </footer>
      </main>
    </div>
  );
}