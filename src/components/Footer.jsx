export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 border-t border-slate-800 bg-slate-950/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400">© {year} SPECTRA CSE Club. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs text-slate-400">
            <a href="#" className="hover:text-slate-200">Privacy Policy</a>
            <span aria-hidden>•</span>
            <a href="#" className="hover:text-slate-200">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
