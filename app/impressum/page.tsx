import Link from 'next/link';

export default function Impressum() {
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

        <h1 className="text-4xl font-bold mb-10 tracking-tight">Impressum</h1>
        
        <div className="space-y-8 text-slate-700 leading-relaxed">
          <section>
            <h2 className="text-sm uppercase tracking-[0.2em] text-gray-400 font-semibold mb-4">Angaben gemäß § 5 TMG</h2>
            <p className="text-lg">
              Roman Sharov<br />
              Rosenplatz 1<br />
              92224 Amberg
            </p>
          </section>

          <section>
            <h2 className="text-sm uppercase tracking-[0.2em] text-gray-400 font-semibold mb-4">Kontakt</h2>
            <p className="text-lg">
              Telefon: +491786064918<br />
              E-Mail: roman-sharov@web.de
            </p>
          </section>

          <section className="pt-8 border-t border-gray-100">
            <p className="text-sm text-gray-500">
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:<br />
              Roman Sharov (Anschrift wie oben)
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}