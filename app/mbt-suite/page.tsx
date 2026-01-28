"use client";
import React from 'react';
import Link from 'next/link';

const projectContent = {
  title: "'MBTsuite Next' von sepp.med GmbH",
  subtitle: "Enterprise UI/UX Case Study",
  overviewTitle: "Projektüberblick",
  overviewText1: "Die MBTsuite Next ist ein spezialisiertes Werkzeug für modellbasiertes Testen. Das Ziel des Projekts war die Modernisierung der Benutzeroberfläche einer bestehenden Desktop-Anwendung.",
  overviewText2: "Im Fokus stand die Verbesserung der Benutzerfreundlichkeit komplexer technischer Workflows und die Transformation in eine moderne Web-Applikation.",
  taskTitle: "Meine Aufgabe",
  taskText: "Im Zeitraum von Oktober 2022 bis Februar 2023 absolvierte ich ein Praktikum bei dem IT-Unternehmen sepp.med GmbH. Während dieses Praktikums wurden mir und einem anderen Praktikanten die Aufgabe übertragen, ein benutzerfreundliches und ansprechendes Design für ein Modelltestprodukt zu entwickeln. Meine Aufgabe bestand darin, ein Design in den Unternehmensfarben zu entwerfen, während mein Kollege die Aufgabe hatte, ein Design in freier Farbwahl zu erstellen. Seine Arbeit ermöglichte es mir, die praktische Umsetzung von Designaufgaben zu vertiefen und weiterzuentwickeln, basierend auf seiner Idee und dem Konzept. Meine Aufgabe besteht darin, das Design gemäß den aktuellen Anforderungen meines Teamleiters weiterzuentwickeln und anzupassen. Das bedeutet, dass die Komposition und die Farben in diesem Design unverändert bleiben, während ich als Designstudent Änderungen vornehme, um das Produkt aktuell, benutzerfreundlich und verständlich zu halten.",
  
  processTitle: "Entwicklungsprozess",
  processDate: "August 2022 - April 2024",
  methodTitle: "Vorgehensweise",
  methodText: "Wie bereits in der Projektbeschreibung erwähnt, wurde die Grundidee des Designs von einem anderen Praktikanten entwickelt und mir nach Abschluss seiner Praktikumszeit übergeben. Meine Aufgabe bestand darin, das Design weiterzuentwickeln. Obwohl ich keinen Anspruch auf das Urheberrecht dieser Komposition und Farbgestaltung des Projekts erheben kann, kann ich im Rahmen meiner Arbeit die folgenden entwickelten Funktionen und Features hervorheben:",

  // Секции для зигзаг-галереи
  sections: [
    {
      title: "Herausforderung: Komplexität vereinfachen",
      text: "Wir ersetzten verschachtelte Menüs durch klare Dashboards, um Ingenieuren einen schnellen Überblick zu geben.",
      placeholder: "Hero Image / Dashboard Overview"
    },
    {
      title: "Design System & Dark Mode",
      text: "Entwicklung eines konsistenten Design-Systems mit hohen Kontrasten, das auch im Dark Mode perfekt funktioniert.",
      placeholder: "Design System / Colors"
    },
    {
      title: "Test Case Management",
      text: "Tabellen wurden durch intelligente Filter und Sortierfunktionen optimiert, um tausende Testfälle verwaltbar zu machen.",
      placeholder: "Data Tables / List View"
    },
    {
      title: "Kalender & Planung",
      text: "Ein neues Modul zur zeitlichen Planung von Testläufen mit Drag-and-Drop Funktionalität.",
      placeholder: "Calendar Interface"
    }
  ],
  backLink: "Zurück zur Übersicht",
  contactTitle: "Wollen Sie zusammenarbeiten?",
  contactSub: "Gerne beantworte ich Ihre Fragen per E-mail oder LinkedIn"
};

export default function MBTSuitePage() {
  const t = projectContent;

  return (
    <div className="bg-white text-black min-h-screen font-sans selection:bg-blue-100">
      {/* Навигация */}
      <nav className="max-w-6xl mx-auto flex justify-between items-center py-6 px-6 sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <Link href="/" className="font-bold text-lg border-b-2 border-black uppercase tracking-tight hover:text-gray-600 transition-colors">
          Portfolio
        </Link>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Заголовок */}
        <header className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight leading-tight">{t.title}</h1>
          <p className="text-gray-400 text-xl italic">{t.subtitle}</p>
        </header>

        {/* 1. Секция описания */}
        <div className="grid md:grid-cols-2 gap-16 mb-24 text-gray-700 leading-relaxed text-lg">
          <div className="space-y-6">
            <h3 className="font-bold text-black uppercase tracking-widest text-sm">{t.overviewTitle}</h3>
            <p>{t.overviewText1}</p>
            <p className="p-6 bg-blue-50 rounded-2xl border-l-4 border-blue-600 italic">
               {t.overviewText2}
            </p>
          </div>
          <div className="space-y-6">
            <h3 className="font-bold text-black uppercase tracking-widest text-sm">{t.taskTitle}</h3>
            <p className="text-base leading-relaxed">{t.taskText}</p>
          </div>
        </div>

        {/* Главный баннер-заглушка */}
        <section className="w-full mb-20">
          <div className="rounded-[20px] overflow-hidden shadow-2xl border border-gray-100 bg-gray-100 aspect-video flex items-center justify-center">
             <span className="text-gray-400 font-mono text-sm uppercase">Main Banner (Hero)</span>
          </div>
        </section>

        {/* 2. Секция процесса */}
        <div className="grid md:grid-cols-2 gap-16 mb-32 text-gray-700 leading-relaxed">
          <div>
            <h3 className="font-bold text-black uppercase tracking-widest text-sm mb-6">{t.processTitle}</h3>
            <p className="text-2xl font-light text-gray-400">{t.processDate}</p>
          </div>
          <div className="space-y-6 text-lg">
            <h3 className="font-bold text-black uppercase tracking-widest text-sm mb-4">{t.methodTitle}</h3>
            <p className="text-base">{t.methodText}</p>
          </div>
        </div>

        {/* 3. Галерея экранов (Зиг-Заг) */}
        <div className="space-y-32 mb-32 border-t border-gray-100 pt-20">
          {t.sections.map((section, index) => {
            const isEven = index % 2 === 0;
            return (
              <section key={index} className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
                <div className={`space-y-6 ${isEven ? 'md:order-1' : 'md:order-2'}`}>
                  <h2 className="text-2xl md:text-3xl font-bold">{section.title}</h2>
                  <p className="text-lg text-gray-600 leading-relaxed font-light">
                    {section.text}
                  </p>
                </div>
                <div className={`w-full ${isEven ? 'md:order-2' : 'md:order-1'}`}>
                  <div className="aspect-[16/10] bg-gray-100 rounded-[20px] border border-dashed border-gray-300 flex items-center justify-center shadow-sm">
                     <span className="text-gray-400 font-mono text-sm uppercase text-center px-4">
                       {section.placeholder}
                     </span>
                  </div>
                </div>
              </section>
            );
          })}
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