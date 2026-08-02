import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center space-y-4">
      <h2 className="text-3xl font-black text-slate-900 dark:text-white">
        404 - Pagina Non Trovata
      </h2>
      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-md">
        La feature o la pagina richiesta non esiste o è stata spostata nell’archivio OOX.
      </p>
      <Link
        href="/"
        className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-white font-extrabold text-xs shadow-glow-cyan hover:scale-105 transition-all"
      >
        Torna alla Homepage
      </Link>
    </div>
  );
}
