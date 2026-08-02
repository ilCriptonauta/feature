'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="bg-slate-950 text-white min-h-screen flex items-center justify-center p-6 text-center">
      <div className="space-y-4 max-w-md">
        <h2 className="text-xl font-bold text-cyan-400">Errore Globale dell’Applicazione</h2>
        <p className="text-xs text-slate-400">
          Si è verificato un errore imprevisto. Fai clic sul pulsante sottostante per ripristinare la sessione.
        </p>
        <button
          onClick={() => reset()}
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-extrabold text-xs shadow-glow-cyan"
        >
          Ripristina Applicazione
        </button>
      </div>
    </div>
  );
}
