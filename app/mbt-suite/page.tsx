"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const projectContent = {
  de: {
    // 1. Верхний блок (один в один как E-scooter)
    title: "'MBTsuite Next' von sepp.med GmbH",
    subtitle: "Enterprise UI/UX Case Study",
    overviewTitle: "Projektüberblick",
    overviewText1: "Die MBTsuite Next ist ein spezialisiertes Werkzeug für modellbasiertes Testen. Das Ziel des Projekts war die Modernisierung der Benutzeroberfläche einer bestehenden Desktop-Anwendung.",
    overviewText2: "Im Fokus stand die Verbesserung der Benutzerfreundlichkeit komplexer technischer Workflows und die Transformation in eine moderne Web-Applikation.",
    taskTitle: "Meine Aufgabe",
    taskText: "Im Zeitraum von Oktober 2022 bis Februar 2023 absolvierte ich ein Praktikum bei dem IT-Unternehmen sepp.med GmbH. Während dieses Praktikums wurden mir und einem anderen Praktikanten die Aufgabe übertragen, ein benutzerfreundliches und ansprechendes Design für ein Modelltestprodukt zu entwickeln. Meine Aufgabe bestand darin, ein Design in den Unternehmensfarben zu entwerfen, während mein Kollege die Aufgabe hatte, ein Design in freier Farbwahl zu erstellen. Seine Arbeit ermöglichte es mir, die praktische Umsetzung von Designaufgaben zu vertiefen und weiterzuentwickeln, basierend auf seiner Idee und dem Konzept. Meine Aufgabe besteht darin, das Design gemäß den aktuellen Anforderungen meines Teamleiters weiterzuentwickeln und anzupassen. Das bedeutet, dass die Komposition und die Farben in diesem Design unverändert bleiben, während ich als Designstudent Änderungen vornehme, um das Produkt aktuell, benutzerfreundlich und verständlich zu halten.",
    
    // 2. Секция процесса (как в E-scooter)
    processTitle: "Entwicklungsprozess",
    processDate: "August 2022 - April 2024",
    methodTitle: "Vorgehensweise",
    methodText: "Die Herausforderung bestand darin, komplexe Datenstrukturen übersichtlich zu gestalten.",
    methodList: [
      "Analyse bestehender Workflows",
      "Erstellung von High-Fidelity Mockups",
      "Entwicklung eines Design-Systems (Dark Mode)",
      "Enge Abstimmung mit dem Dev-Team"
    ],

    // 3. Зиг-Заг блоки (Специфика MBT макета)
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
  },
  en: {
    title: "'MBTsuite Next' by sepp.med GmbH",
    subtitle: "Enterprise UI/UX Case Study",
    overviewTitle: "Project Overview",
    overviewText1: "MBTsuite Next is a specialized tool for model-based testing. The goal was to modernize the user interface of an existing desktop application.",
    overviewText2: "The focus was on improving the usability of complex technical workflows and transforming it into a modern web application.",
    taskTitle: "My Task",
    taskText: "As Lead UI/UX Designer, I was responsible for analyzing user workflows, developing a new navigation concept, and designing all interface components.",
    
    processTitle: "Development Process",
    processDate: "August 2022 - April 2024",
    methodTitle: "Methodology",
    methodText: "The challenge was to make complex data structures clear and manageable.",
    methodList: [
      "Analysis of existing workflows",
      "Creation of high-fidelity mockups",
      "Development of a design system (Dark Mode)",
      "Close coordination with dev team"
    ],

    sections: [
      {
        title: "Challenge: Simplifying Complexity",
        text: "We replaced nested menus with clear dashboards to give engineers a quick overview.",
        placeholder: "Hero Image / Dashboard Overview"
      },
      {
        title: "Design System & Dark Mode",
        text: "Development of a consistent design system with high contrasts that works perfectly in dark mode.",
        placeholder: "Design System / Colors"
      },
      {
        title: "Test Case Management",
        text: "Tables were optimized with intelligent filters and sorting to make thousands of test cases manageable.",
        placeholder: "Data Tables / List View"
      },
      {
        title: "Calendar & Scheduling",
        text: "A new module for scheduling test runs with drag-and-drop functionality.",
        placeholder: "Calendar Interface"
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
    <div className="bg-white text-black min-h-screen font-sans selection:bg-indigo-100">
      {/* Навигация */}
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

        {/* 1. СЕКЦИЯ ОПИСАНИЯ (ТОЧНО КАК В E-SCOOTER) */}
        <div className="grid md:grid-cols-2 gap-16 mb-24 text-gray-700 leading-relaxed text-lg">
          <div>
            <h3 className="font-bold text-black uppercase tracking-widest text-sm mb-6">{t.overviewTitle}</h3>
            <p className="mb-6">{t.overviewText1}</p>
            {/* Цветной блок (Здесь синий, так как MBTsuite, но структура та же) */}
            <p className="p-6 bg-blue-50 rounded-2xl border-l-4 border-blue-600">
               {t.overviewText2}
            </p>
          </div>
          <div>
            <h3 className="font-bold text-black uppercase tracking-widest text-sm mb-6">{t.taskTitle}</h3>
            <p>{t.taskText}</p>
          </div>
        </div>

        {/* 2. ПЕРВЫЙ БОЛЬШОЙ БАННЕР (ЗАГЛУШКА) */}
        <section className="w-full mb-20">
          <div className="rounded-[20px] overflow-hidden shadow-2xl border border-gray-100 bg-gray-100 aspect-video flex items-center justify-center">
             <span className="text-gray-400 font-mono text-sm uppercase">Main Banner (Hero)</span>
          </div>
        </section>

        {/* 3. СЕКЦИЯ ПРОЦЕССА (ТОЧНО КАК В E-SCOOTER) */}
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

        {/* 4. ГАЛЕРЕЯ ЭКРАНОВ (ЗИГ-ЗАГ MBT) */}
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
                  <div className="aspect-[16/10] bg-gray-100 rounded-[20px] border border-dashed border-gray-300 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
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