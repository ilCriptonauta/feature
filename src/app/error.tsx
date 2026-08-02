'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Next.js App Error:', error);
  }, [error]);

  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center p-6 text-center space-y-4">
      <div className="p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-bold">
        Qualcosa è andato storto nel caricamento
      </div>
      <button
        onClick={() => reset()}
        className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-600 text-white font-extrabold text-xs shadow-glow-cyan hover:scale-105 transition-all"
      >
        Riprova a Caricare
      </button>
    </div>
  );
}
