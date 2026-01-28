"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const projectContent = {
  de: {
    title: "'MBTsuite Next' von sepp.med GmbH",
    subtitle: "Enterprise UI/UX Case Study",
    overviewTitle: "Projektüberblick",
    overviewText1: "Die MBTsuite Next ist ein spezialisiertes Werkzeug für modellbasiertes Testen. Das Ziel des Projekts war die Modernisierung der Benutzeroberfläche einer bestehenden Desktop-Anwendung.",
    overviewText2: "Im Fokus stand die Verbesserung der Benutzerfreundlichkeit komplexer technischer Workflows und die Transformation in eine moderne Web-Applikation.",
    taskTitle: "Meine Aufgabe",
    taskText: "Im Zeitraum von Oktober 2022 bis Februar 2023 absolvierte ich ein Praktikum bei dem IT-Unternehmen sepp.med GmbH. Während dieses Praktikums wurden mir und einem anderen Praktikanten die Aufgabe übertragen, ein benutzerfreundliches und ansprechendes Design für ein Modelltestprodukt zu entwickeln. Meine Aufgabe bestand darin, ein Design in den Unternehmensfarben zu entwerfen, während mein Kollege die Aufgabe hatte, ein Design in freier Farbwahl zu erstellen. Seine Arbeit ermöglichte es mir, die praktische Umsetzung von Designaufgaben zu vertiefen und weiterzuentwickeln, basierend auf seiner Idee und dem Konzept. Meine Aufgabe besteht darin, das Design gemäß den aktuellen Anforderungen meines Teamлеiters weiterzuentwickeln und anzupassen. Das bedeutet, dass die Komposition und die Farben in diesem Design unverändert bleiben, während ich als Designstudent Änderungen vornehme, um das Produkt aktuell, benutzerfreundlich und verständlich zu halten.",
    processTitle: "Entwicklungsprozess",
    processDate: "August 2022 - April 2024",
    methodTitle: "Vorgehensweise",
    methodText: "Wie bereits in der Projektbeschreibung erwähnt, wurde die Grundidee des Designs von einem anderen Praktikanten entwickelt und mir nach Abschluss seiner Praktikumszeit übergeben. Meine Aufgabe bestand darin, das Design weiterzuentwickeln. Obwohl ich keinen Anspruch auf das Urheberrecht dieser Komposition und Farbgestaltung des Projekts erheben kann, kann ich im Rahmen meiner Arbeit die folgenden entwickelten Funktionen und Features hervorheben:",
    sections: [
      { 
        title: "Herausforderung: Komplexität vereinfachen", 
        text: "Wir ersetzten verschachtelte Menüs durch klare Dashboards, um Ingenieuren einen schnellen Überblick zu geben.", 
        image: "/images/mbt/dashboard.jpg" 
      },
      { 
        title: "Design System & Dark Mode", 
        text: "Entwicklung eines konsistenten Design-Systems mit hohen Kontrasten, das auch im Dark Mode perfekt funktioniert.", 
        image: "/images/mbt/darkmode.jpg" 
      },
      { 
        title: "Test Case Management", 
        text: "Tabellen wurden durch intelligente Filter und Sortierfunktionen optimiert, um tausende Testfälle verwaltbar zu machen.", 
        image: "/images/mbt/tables.jpg" 
      },
      { 
        title: "Kalender & Planung", 
        text: "Ein neues Modul zur zeitlichen Planung von Testläufen mit Drag-and-Drop Funktionalität.", 
        image: "/images/mbt/calendar.jpg" 
      }
    ],
    backLink: "Zurück zur Übersicht",
    contactTitle: "Wollen Sie zusammenarbeiten?",
    contactSub: "Gerne beantworte ich Ihre Fragen per E-mail oder LinkedIn"
  },
  en: {
    title: "'MBTsuite Next' by sepp.med GmbH",
    subtitle: "Enterprise UI/UX Case Study",
    overviewTitle: "Project Overview",
    overviewText1: "MBTsuite Next is a specialized tool for model-based testing. The goal of the project was to modernize the user interface of an existing desktop application.",
    overviewText2: "The focus was on improving the usability of complex technical workflows and transforming them into a modern web application.",
    taskTitle: "My Task",
    taskText: "Between October 2022 and February 2023, I completed an internship at the IT company sepp.med GmbH. During this internship, another intern and I were tasked with developing a user-friendly and appealing design for a model testing product. My task was to create a design using the corporate colors, while my colleague was assigned to create a design with a free choice of colors. His work allowed me to deepen and further develop the practical implementation of design tasks based on his idea and concept. My current role is to refine and adapt the design according to the requirements of my team leader. This means that the composition and colors remain unchanged while I, as a design student, make adjustments to keep the product current, user-friendly, and understandable.",
    processTitle: "Development Process",
    processDate: "August 2022 - April 2024",
    methodTitle: "Methodology",
    methodText: "As mentioned in the project description, the basic idea of the design was developed by another intern and handed over to me after his internship. My task was to further develop the design. Although I cannot claim copyright for the composition and color scheme of this project, I can highlight the following functions and features developed during my work:",
    sections: [
      { 
        title: "Challenge: Simplifying Complexity", 
        text: "We replaced nested menus with clear dashboards to provide engineers with a quick overview.", 
        image: "/images/mbt/dashboard.jpg" 
      },
      { 
        title: "Design System & Dark Mode", 
        text: "Development of a consistent design system with high contrast that works perfectly in dark mode.", 
        image: "/images/mbt/darkmode.jpg" 
      },
      { 
        title: "Test Case Management", 
        text: "Tables were optimized with intelligent filters and sorting functions to make thousands of test cases manageable.", 
        image: "/images/mbt/tables.jpg" 
      },
      { 
        title: "Calendar & Scheduling", 
        text: "A new module for time-based scheduling of test runs with drag-and-drop functionality.", 
        image: "/images/mbt/calendar.jpg" 
      }
    ],
    backLink: "Back to Overview",
    contactTitle: "Want to work together?",
    contactSub: "I'd be happy to answer your questions via email or LinkedIn"
  }
};

export default function MBTSuitePage() {
  const [lang, setLang] = useState<'de' | 'en'>('de');
  const t = projectContent[lang];

  return (
    <div className="bg-white text-black min-h-screen font-sans selection:bg-blue-100">
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight leading-tight">{t.title}</h1>
          <p className="text-gray-400 text-xl italic">{t.subtitle}</p>
        </header>

        {/* Интро секция */}
        <div className="grid md:grid-cols-2 gap-16 mb-24 text-gray-700 leading-relaxed text-lg">
          <div className="space-y-6">
            <h3 className="font-bold text-black uppercase tracking-widest text-sm">{t.overviewTitle}</h3>
            <p>{t.overviewText1}</p>
            <p className="p-6 bg-blue-50 rounded-2xl border-l-4 border-blue-600 italic">{t.overviewText2}</p>
          </div>
          <div className="space-y-6">
            <h3 className="font-bold text-black uppercase tracking-widest text-sm">{t.taskTitle}</h3>
            <p className="text-base leading-relaxed">{t.taskText}</p>
          </div>
        </div>

        {/* Главный Hero баннер */}
        <section className="w-full mb-24">
          <div className="rounded-[30px] overflow-hidden shadow-2xl border border-gray-100 bg-gray-50">
             <img 
               src="/images/mbt/hero.jpg" 
               alt="MBTsuite Main Interface" 
               className="w-full h-auto object-cover"
               onError={(e) => { e.currentTarget.src = "https://placehold.co/1200x675?text=Main+Banner+Missing"; }}
             />
          </div>
        </section>

        {/* Секция процесса */}
        <div className="grid md:grid-cols-2 gap-16 mb-32 text-gray-700 leading-relaxed border-t border-gray-100 pt-16">
          <div>
            <h3 className="font-bold text-black uppercase tracking-widest text-sm mb-6">{t.processTitle}</h3>
            <p className="text-2xl font-light text-gray-400">{t.processDate}</p>
          </div>
          <div className="space-y-6 text-lg">
            <h3 className="font-bold text-black uppercase tracking-widest text-sm mb-4">{t.methodTitle}</h3>
            <p className="text-base">{t.methodText}</p>
          </div>
        </div>

        {/* Зиг-Заг галерея */}
        <div className="space-y-40 mb-32">
          {t.sections.map((section, index) => {
            const isEven = index % 2 === 0;
            return (
              <section key={index} className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
                <div className={`space-y-6 ${isEven ? 'md:order-1' : 'md:order-2'}`}>
                  <h2 className="text-2xl md:text-3xl font-bold">{section.title}</h2>
                  <p className="text-lg text-gray-600 leading-relaxed font-light">{section.text}</p>
                </div>
                <div className={`w-full ${isEven ? 'md:order-2' : 'md:order-1'}`}>
                  <div className="rounded-[20px] overflow-hidden shadow-lg border border-gray-100 bg-gray-50">
                    <img 
                      src={section.image} 
                      alt={section.title} 
                      className="w-full h-auto object-cover hover:scale-[1.02] transition-transform duration-700"
                      onError={(e) => { e.currentTarget.src = "https://placehold.co/800x500?text=Image+Not+Found"; }}
                    />
                  </div>
                </div>
              </section>
            );
          })}
        </div>

        {/* Навигация назад */}
        <div className="mb-20">
          <Link href="/" className="text-sm font-bold underline underline-offset-8 hover:text-blue-600 transition-colors uppercase tracking-widest">
            {t.backLink}
          </Link>
        </div>

        {/* Футер */}
        <footer className="bg-slate-900 rounded-[40px] p-12 md:p-20 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">{t.contactTitle}</h2>
          <p className="text-xl mb-10 italic text-slate-400">{t.contactSub}</p>
          <a href="mailto:roman.sharov@web.de" className="text-2xl md:text-3xl font-bold underline underline-offset-8 hover:text-blue-400 transition-colors">
            roman.sharov@web.de
          </a>
        </footer>
      </main>
    </div>
  );
}