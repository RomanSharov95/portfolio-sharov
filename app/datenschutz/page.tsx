import Link from 'next/link';

export default function Datenschutz() {
  return (
    <main className="min-h-screen bg-white text-black font-sans selection:bg-gray-100">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Кнопка Назад */}
        <Link href="/" className="inline-flex items-center gap-2 px-4 py-2 border border-black rounded-full text-xs font-bold hover:bg-black hover:text-white transition-all uppercase tracking-widest mb-12">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Zurück
        </Link>

        <h1 className="text-4xl font-bold mb-10 tracking-tight">Datenschutzerklärung</h1>
        
        <div className="space-y-12 text-slate-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold mb-4 text-black">1. Datenschutz auf einen Blick</h2>
            <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 text-black">2. Datenerfassung auf dieser Website</h2>
            <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.</p>
            <p className="mt-4">Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-4 text-black">3. Ihre Rechte</h2>
            <p>Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.</p>
          </section>

          <section className="pt-8 border-t border-gray-100">
            <p className="text-sm text-gray-400 italic">Stand: Januar 2026</p>
          </section>
        </div>
      </div>
    </main>
  );
}