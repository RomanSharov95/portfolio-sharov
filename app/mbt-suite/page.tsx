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
    taskText: "Im Zeitraum von Oktober 2022 bis Februar 2023 absolvierte ich ein Praktikum bei dem IT-Unternehmen sepp.med GmbH. Während dieses Praktikums wurden mir und einem anderen Praktikanten die Aufgabe übertragen, ein benutzerfreundliches und ansprechendes Design für ein Modelltestprodukt zu entwickeln. Meine Aufgabe bestand darin, ein Design in den Unternehmensfarben zu entwerfen, während mein Kollege die Aufgabe hatte, ein Design in freier Farbwahl zu erstellen. Seine Arbeit ermöglichte es mir, die praktische Umsetzung von Designaufgaben zu vertiefen und weiterzuentwickeln, basierend auf seiner Idee und dem Konzept. Meine Aufgabe besteht darin, das Design gemäß den aktuellen Anforderungen meines Teamleiters weiterzuentwickeln und anzupassen. Das bedeutet, dass die Komposition und die Farben in diesem Design unverändert bleiben, während ich als Designstudent Änderungen vornehme, um das Produkt aktuell, benutzerfreundlich und verständlich zu halten.",
    processTitle: "Entwicklungsprozess",
    processDate: "August 2022 - April 2024",
    methodTitle: "Vorgehensweise",
    methodText: "Wie bereits in der Projektbeschreibung erwähnt, wurde die Grundidee des Designs von einem anderen Praktikanten entwickelt und mir nach Abschluss seiner Praktikumszeit übergeben. Meine Aufgabe bestand darin, das Design weiterzuentwickeln. Obwohl ich keinen Anspruch auf das Urheberrecht dieser Komposition und Farbgestaltung des Projekts erheben kann, kann ich im Rahmen meiner Arbeit die folgenden entwickelten Funktionen und Features hervorheben:",
    sections: [
      { 
        title: "Kollaboration & Live-Cursor", 
        text: "Die Funktion 'Mouse cursors of collaboration' ermöglicht es den Benutzern, andere Teilnehmer mit ihren individuellen Farben, Profilefoto und Initialen zu sehen. Wenn der Name eines Benutzers zu lang ist, wird er auf drei Punkte verkürzt. Außerdem wurde eine Farbpalette mit 10 Farben für helle und dunkle Themen vorbereitet.", 
        image: "/images/mbt/collab.jpg" 
      },
      { 
        title: "Benutzereinstellungen (Settings)", 
        text: "Der spezielle Benutzerbereich 'Settings' bietet die Möglichkeit, den Namen, das Foto, das Passwort des Kontos und die Sprache des Interfaces zu ändern. Dieser Abschnitt bietet auch eine Drag-and-Drop-Funktion zum Ändern des Profilfotos, mit bestimmten Einschränkungen bezüglich Größe und Format der Bilder.", 
        image: "/images/mbt/settings.jpg" 
      },
      { 
        title: "Abonnement-Management", 
        text: "Das Abonnement-Management ermöglicht es dem Administrator, Informationen über die Benutzer und ihre Abonnements in einer anpassbaren Tabelle zu sehen. Benutzer können ein Abonnement wählen, das ihren Bedürfnissen entspricht, einschließlich kostenloser Optionen unter bestimmten Bedingungen.", 
        image: "/images/mbt/billing.jpg" 
      },
      { 
        title: "Support-Dialog", 
        text: "Das Support-Dialog steht Benutzern bei Problemen zur Verfügung. Sie können Details zu ihrem Problem, die verwendete Browserversion, den Zeitpunkt des Auftretens und die erwarteten Ergebnisse angeben. Unvollständige Felder müssen ausgefüllt werden, bevor die Nachricht gesendet werden kann.", 
        image: "/images/mbt/support.jpg" 
      },
      { 
        title: "Modellkopie & Parameter", 
        text: "Ein Dialog wurde für das Kopieren von Modellen entwickelt, das es ermöglicht, Modellelemente mit Checkboxen auszuwählen. Standardmäßig sind alle Elemente ausgewählt, aber Benutzer können bestimmte Elemente von der Kopie ausschließen, wenn sie das Modell mit spezifischen Parametern oder Anforderungen kopieren möchten.", 
        image: "/images/mbt/copy-model.jpg" 
      },
      { 
        title: "Analyse-Kalender", 
        text: "Ein spezieller Kalender wurde für eine Zwei-Monats-Übersicht erstellt, der sowohl zur Angabe und -analysen durch den Administrator verwendet werden kann. Mit dem Kalender kann ein bestimmter Zeitraum für die Ansicht der Benutzeraktivität ausgewählt werden. Zusätzliche Werkzeuge wie ein Schieberegler zur Anpassung des Zeitraums und Filter zur Auswahl der Häufigkeit der Datenanzeige bieten Flexibilität.", 
        image: "/images/mbt/calendar.jpg" 
      }
    ],
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
    taskText: "Between October 2022 and February 2023, I completed an internship at sepp.med GmbH. Another intern and I were tasked with developing an appealing design for a model testing product. My task was to use corporate colors, while my colleague chose a free color palette. My current role is to refine the design according to the team leader's requirements, keeping the product current and user-friendly while maintaining the original composition and colors.",
    processTitle: "Development Process",
    processDate: "August 2022 - April 2024",
    methodTitle: "Methodology",
    methodText: "As mentioned, the basic design idea was developed by another intern. My task was to advance it. While I don't claim copyright for the composition and color scheme, I can highlight the following features developed during my work:",
    sections: [
      { title: "Collaboration & Live Cursors", text: "The 'Mouse cursors of collaboration' feature allows users to see other participants with unique colors, photos, and initials. A 10-color palette was designed for both themes.", image: "/images/mbt/collab.jpg" },
      { title: "User Settings", text: "The 'Settings' area allows users to change their name, photo, password, and language. Includes drag-and-drop for profile photos with format constraints.", image: "/images/mbt/settings.jpg" },
      { title: "Subscription Management", text: "Allows admins to view user subscription info in a customizable table. Users can choose plans that fit their needs, including free options.", image: "/images/mbt/billing.jpg" },
      { title: "Support Dialog", text: "A tool where users report issues, including browser version and expected results. Mandatory fields ensure complete reports.", image: "/images/mbt/support.jpg" },
      { title: "Model Copying", text: "A dialog for copying models with checkbox selection. Users can exclude certain parts to meet specific parameters.", image: "/images/mbt/copy-model.jpg" },
      { title: "Analytics Calendar", text: "A special two-month overview calendar for tracking user activity. Includes time-range sliders and frequency filters for data analysis.", image: "/images/mbt/calendar.jpg" }
    ],
    contactTitle: "Want to work together?",
    contactSub: "I'd be happy to answer your questions via email or LinkedIn"
  }
};

export default function MBTSuitePage() {
  const [lang, setLang] = useState<'de' | 'en'>('de');
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const t = projectContent[lang];

  return (
    <div className="bg-white text-black min-h-screen font-sans relative">
      
      {/* Lightbox (Увеличение картинки) */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-10 cursor-zoom-out"
          onClick={() => setSelectedImg(null)}
        >
          <img src={selectedImg} className="max-w-full max-h-full rounded-lg shadow-2xl animate-in zoom-in duration-300" alt="Zoomed view" />
          <button className="absolute top-10 right-10 text-white text-4xl font-light">&times;</button>
        </div>
      )}

      {/* Навигация */}
      <nav className="max-w-6xl mx-auto flex justify-between items-center py-6 px-6 sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <Link href="/" className="font-bold text-lg border-b-2 border-black uppercase">Portfolio</Link>
        <button onClick={() => setLang(lang === 'de' ? 'en' : 'de')} className="px-4 py-1.5 border border-black rounded-full text-xs font-bold uppercase tracking-widest">
          {lang === 'de' ? 'EN' : 'DE'}
        </button>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Заголовок */}
        <header className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight leading-tight">{t.title}</h1>
          <p className="text-gray-400 text-xl italic">{t.subtitle}</p>
        </header>

        {/* Вступительная часть (Overview & Task) */}
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

        {/* Главная заглавная картинка (Hero) */}
        <section className="w-full mb-32">
          <div 
            className="rounded-[40px] overflow-hidden shadow-2xl border border-gray-100 bg-gray-50 cursor-zoom-in transform hover:scale-[1.01] transition-all duration-700"
            onClick={() => setSelectedImg("/images/mbt/hero.jpg")}
          >
             <img src="/images/mbt/hero.jpg" alt="MBTsuite Hero" className="w-full h-auto" />
          </div>
        </section>

        {/* Секция процесса */}
        <div className="grid md:grid-cols-2 gap-16 mb-32 text-gray-700 leading-relaxed border-t border-gray-100 pt-20">
          <div>
            <h3 className="font-bold text-black uppercase tracking-widest text-sm mb-6">{t.processTitle}</h3>
            <p className="text-2xl font-light text-gray-400">{t.processDate}</p>
          </div>
          <div className="space-y-6 text-lg">
            <h3 className="font-bold text-black uppercase tracking-widest text-sm mb-4">{t.methodTitle}</h3>
            <p className="text-base leading-relaxed">{t.methodText}</p>
          </div>
        </div>

        {/* Зиг-Заг галерея (6 блоков) */}
        <div className="space-y-48 mb-40 pt-10">
          {t.sections.map((section, index) => {
            const isEven = index % 2 === 0;
            return (
              <section key={index} className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
                <div className={`space-y-8 ${isEven ? 'md:order-1' : 'md:order-2'}`}>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{section.title}</h2>
                  <p className="text-xl text-gray-600 leading-relaxed font-light">{section.text}</p>
                </div>
                <div className={`w-full ${isEven ? 'md:order-2' : 'md:order-1'}`}>
                  <div 
                    className="rounded-[30px] overflow-hidden shadow-xl border border-gray-100 bg-gray-50 transform hover:-translate-y-2 transition-all duration-500 cursor-zoom-in"
                    onClick={() => setSelectedImg(section.image)}
                  >
                    <img src={section.image} alt={section.title} className="w-full h-auto object-cover" />
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
          <a href="mailto:roman.sharov@web.de" className="text-2xl md:text-4xl font-bold underline underline-offset-8 hover:text-blue-400 transition-colors">
            roman.sharov@web.de
          </a>
        </footer>
      </main>
    </div>
  );
}