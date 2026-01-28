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
    methodBlocks: [
      {
        header: "Ideenfindung und Konzeptentwicklung",
        text: "Die Anfangsphase beinhaltet die Nutzung von KI-Tools wie ChatGPT zur Generierung und Präzisierung von Designanforderungen für die App 'ChargeEasy'. Die Verwendung von KI erleichtert die Definition klarer Ziele und Funktionen der App и поддерживает разработчиков в понимании потребностей пользователей."
      },
      {
        header: "Recherche und Analyse",
        text: "In dieser Phase wird KI genutzt, um Marktanalysen durchzuführen und Benutzerdaten zu sammeln, die Einblicke in die Präferenzen und Verhaltensweisen der Zielgruppe bieten."
      },
      {
        header: "Entwurf und Wireframing",
        text: "Mithilfe von KI-gestützten Designplattformen wie Framer und Uizard werden erste Entwürfe und Wireframes erstellt. Diese Tools nutzen KI, um visuelle Konzepte zu generieren."
      },
      {
        header: "Prototyping",
        text: "Prototyping-Tools, die KI integrieren, erlauben es, interaktive Modelle der App zu erstellen, die echte Benutzerinteraktionen simulieren."
      },
      {
        header: "Usability-Testing",
        text: "Trotz der weitreichenden Unterstützung durch KI, unterstreicht Ihre Arbeit die unersetzbare Rolle menschlicher Beteiligung im Usability-Testing."
      },
      {
        header: "UI-Design und Finalisierung",
        text: "In der finalen Phase werden spezifische UI-Elemente wie Farbschemata, Typografie und visuelle Assets entwickelt."
      }
    ],
    contactTitle: "Wollen Sie zusammenarbeiten?",
    contactSub: "Gerne beantworte ich Ihre Fragen per E-mail oder LinkedIn"
  },
  en: {
    title: "Bachelor Thesis Project 'ChargeEasy'",
    subtitle: "Mobile App Case Study",
    overviewTitle: "Project Overview",
    overviewText1: "Development of a concept and design for a mobile application that simplifies finding and using EV charging stations.",
    overviewText2: "'ChargeEasy' – Intuitive charging for electric vehicles.",
    taskTitle: "My Task",
    taskText: "Complete UX conception, creation of user flows, and final interface design.",
    processTitle: "Development Process",
    processDate: "March 2024 - July 2024",
    methodTitle: "Methodology",
    methodBlocks: [
      { header: "Ideation", text: "Using AI tools like ChatGPT to generate and refine design requirements..." },
      { header: "Research", text: "AI-driven market analysis and user data collection..." },
      { header: "Wireframing", text: "Creating visual concepts with AI-supported platforms..." },
      { header: "Prototyping", text: "Interactive models simulating real user interactions..." },
      { header: "Testing", text: "The irreplaceable role of human empathy in usability testing..." },
      { header: "Final UI", text: "Optimization of visual assets and cross-device interface design..." }
    ],
    contactTitle: "Want to work together?",
    contactSub: "I'd be happy to answer your questions via email or LinkedIn"
  }
};

export default function ChargeEasyPage() {
  const [lang, setLang] = useState<'de' | 'en'>('de');
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const t = projectContent[lang];

  // Массив путей к картинкам в галерее
  const galleryImages = [
    "/images/charge/screen1.jpg",
    "/images/charge/screen2.jpg",
    "/images/charge/screen3.jpg"
  ];

  return (
    <div className="bg-white text-black min-h-screen font-sans relative selection:bg-emerald-100">
      
      {/* Лайтбокс (Увеличение изображения) */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 cursor-zoom-out"
          onClick={() => setSelectedImg(null)}
        >
          <img 
            src={selectedImg} 
            className="max-w-full max-h-full rounded-lg shadow-2xl animate-in zoom-in duration-300" 
            alt="Enlarged"
          />
          <button className="absolute top-10 right-10 text-white text-4xl font-light">&times;</button>
        </div>
      )}

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
            <p className="p-6 bg-emerald-50 rounded-2xl border-l-4 border-emerald-500 italic text-emerald-900">
               {t.overviewText2}
            </p>
          </div>
          <div>
            <h3 className="font-bold text-black uppercase tracking-widest text-sm mb-6">{t.taskTitle}</h3>
            <p>{t.taskText}</p>
          </div>
        </div>

        {/* 1. Главный баннер (Герой) */}
        <section className="w-full mb-32">
          <div 
            className="rounded-[40px] overflow-hidden shadow-2xl border border-gray-100 bg-gray-50 cursor-zoom-in transition-transform hover:scale-[1.01] duration-700"
            onClick={() => setSelectedImg("/images/charge/hero.jpg")}
          >
             <img 
               src="/images/charge/hero.jpg" 
               alt="ChargeEasy Main Presentation" 
               className="w-full h-auto"
             />
          </div>
        </section>

        {/* 2. Секция процесса и Методика */}
        <div className="grid md:grid-cols-2 gap-16 mb-32 text-gray-700 leading-relaxed border-t border-gray-100 pt-20">
          <div>
            <h3 className="font-bold text-black uppercase tracking-widest text-sm mb-6">{t.processTitle}</h3>
            <p className="text-2xl font-light text-gray-400">{t.processDate}</p>
          </div>
          <div className="space-y-10">
            <h3 className="font-bold text-black uppercase tracking-widest text-sm">{t.methodTitle}</h3>
            {t.methodBlocks.map((block, i) => (
              <div key={i} className="space-y-2">
                <div className="flex gap-3">
                  <span className="font-light text-gray-400">-</span>
                  <h4 className="font-bold text-black text-lg leading-tight">{block.header}</h4>
                </div>
                <p className="text-lg pl-5 text-gray-600 leading-relaxed font-light">{block.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Галерея экранов */}
        <div className="space-y-20 mb-32">
          {galleryImages.map((src, index) => (
            <div 
              key={index} 
              className="w-full rounded-[40px] overflow-hidden shadow-xl border border-gray-100 bg-gray-50 cursor-zoom-in transition-all hover:-translate-y-2 duration-500"
              onClick={() => setSelectedImg(src)}
            >
               <img 
                 src={src} 
                 alt={`ChargeEasy Interface Screen ${index + 1}`} 
                 className="w-full h-auto"
               />
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