"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const projectContent = {
  de: {
    title: "Studienprojekt 'E-scooter'",
    subtitle: "Amberg Sharing App Case Study",
    overviewTitle: "Projektüberblick",
    overviewText1: "Entwicklung des Konzepts und des visuellen Designs für eine Verwaltungs-App eines E-Scooter-Sharingdienstes in Amberg.",
    overviewText2: "'E-scooter' – ein neues, effizientes E-Scooter-Sharing-Angebot für Amberg. Was in Großstädten bereits etabliert ist, kommt nun auch nach Amberg.",
    taskTitle: "Meine Aufgabe",
    taskText: "Entwicklung des Konzepts für eine Verwaltungs-App eines E-Scooter-Sharingdienstes in Amberg und Gestaltung des visuellen Designs dieser App.",
    processTitle: "Entwicklungsprozess",
    processDate: "Oktober 2022 - Februar 2023",
    methodTitle: "Methodik",
    methodText: "Der Beginn unseres Prototyp-Entwicklungsprozesses umfasste zunächst eine umfassende UX/UI-Forschung, um unsere Hauptzielgruppe zu identifizieren.",
    methodList: [
      "User-Research zur Risikominimierung",
      "Umfragen auf den Straßen von Amberg",
      "Erstellung von Personas und User-Stories (Miro)",
      "Wireframing und Moodboarding"
    ],
    backLink: "Zurück zur Übersicht",
    contactTitle: "Wollen Sie zusammenarbeiten?",
    contactSub: "Gerne beantworte ich Ihre Fragen per E-mail oder LinkedIn"
  },
  en: {
    title: "Study Project 'E-scooter'",
    subtitle: "Amberg Sharing App Case Study",
    overviewTitle: "Project Overview",
    overviewText1: "Development of the concept and visual design for an E-scooter sharing management app in Amberg.",
    overviewText2: "'E-scooter' – a new, efficient E-scooter sharing service for Amberg. Bringing what's established in major cities to Amberg.",
    taskTitle: "My Task",
    taskText: "Developing the concept for an E-scooter sharing management app in Amberg and creating its visual design.",
    processTitle: "Development Process",
    processDate: "October 2022 - February 2023",
    methodTitle: "Methodology",
    methodText: "The prototype development process began with comprehensive UX/UI research to identify our primary target audience.",
    methodList: [
      "User research to minimize risk",
      "Surveys conducted on the streets of Amberg",
      "Creation of personas and user stories (Miro)",
      "Wireframing and Moodboarding"
    ],
    backLink: "Back to Overview",
    contactTitle: "Want to work together?",
    contactSub: "I'd be happy to answer your questions via email or LinkedIn"
  }
};

export default function EScooterPage() {
  const [lang, setLang] = useState<'de' | 'en'>('de');
  const t = projectContent[lang];

  return (
    <div className="bg-white text-black min-h-screen font-sans selection:bg-orange-100">
      {/* Шапка с переключателем языка */}
      <nav className="max-w-6xl mx-auto flex justify-between items-center py-6 px-6 sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <Link href="/" className="font-bold text-lg border-b-2 border-black uppercase tracking-tight hover:text-gray-600 transition-colors">
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
        {/* Заголовок */}
        <header className="mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">{t.title}</h1>
          <p className="text-gray-400 text-xl italic">{t.subtitle}</p>
        </header>

        {/* Секция описания */}
        <div className="grid md:grid-cols-2 gap-16 mb-24 text-gray-700 leading-relaxed text-lg">
          <div>
            <h3 className="font-bold text-black uppercase tracking-widest text-sm mb-6">{t.overviewTitle}</h3>
            <p className="mb-6">{t.overviewText1}</p>
            <p className="p-6 bg-orange-50 rounded-2xl border-l-4 border-[#FF6B00]">
              <span className="font-bold text-[#FF6B00]">"E-scooter"</span> {t.overviewText2}
            </p>
          </div>
          <div>
            <h3 className="font-bold text-black uppercase tracking-widest text-sm mb-6">{t.taskTitle}</h3>
            <p>{t.taskText}</p>
          </div>
        </div>

        {/* 1. Первый баннер */}
        <section className="w-full mb-20">
          <div className="rounded-[40px] overflow-hidden shadow-2xl border border-gray-100">
            <img src="/e-scooter-banner.jpg" alt="Main Banner" className="w-full h-auto object-cover" />
          </div>
        </section>

        {/* 2. СЕКЦИЯ ПРОЦЕССА (ТЕПЕРЬ ТУТ) */}
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

        {/* Остальные баннеры */}
        <div className="space-y-12 mb-32">
          {["/e-scooter-banner1.jpg", "/e-scooter-banner2.jpg", "/e-scooter-banner3.jpg"].map((src, index) => (
            <section key={index} className="w-full">
              <div className="rounded-[40px] overflow-hidden shadow-2xl border border-gray-100">
                <img src={src} alt={`Banner ${index + 1}`} className="w-full h-auto object-cover" />
              </div>
            </section>
          ))}
        </div>

        {/* Футер */}
        <footer className="bg-gray-50 rounded-[40px] p-12 md:p-20 text-center border border-gray-100">
          <h2 className="text-3xl font-bold mb-4">{t.contactTitle}</h2>
          <p className="text-xl mb-10 italic text-gray-400">{t.contactSub}</p>
          <a href="mailto:roman.sharov@web.de" className="text-2xl md:text-3xl font-bold underline underline-offset-8 hover:text-[#FF6B00] transition-colors">
            roman.sharov@web.de
          </a>
        </footer>
      </main>
    </div>
  );
}